import Cors from 'cors';
import { NextRequest, NextResponse } from 'next/server';
import { AppDataSource } from '../../lib/data-source';
import { ContactFormEntity } from '../../lib/entities/ContactForm';

// Initialize CORS
const cors = Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        const allowedOrigins = [
            'http://localhost:3000', // Local development
            'https://www.peoplepulseglobal.com', // Production domain
        ];

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
});

// Helper function to run middleware
function runMiddleware(
    req: NextRequest,
    middleware: (req: any, res: any, next: (err?: any) => void) => void
): Promise<void> {
    return new Promise((resolve, reject) => {
        middleware(req, { end: resolve, status: () => reject }, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve();
        });
    });
}

export async function POST(req: NextRequest) {
    try {
        // Run CORS middleware
        await runMiddleware(req, cors);

        // Parse the JSON body
        const body = await req.json();

        const {
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            countryCode,
            communicationMedium,
            reason,
            agreeToPolicies,
        } = body;

        // Ensure the database connection is established before performing any database actions
        if (!AppDataSource.isInitialized) {
            console.log('Initializing database connection');
            await AppDataSource.initialize();
        }
        const contactFormRepository = AppDataSource.getRepository(ContactFormEntity);

        // Create a new instance of the ContactForm entity
        const contactForm = new ContactFormEntity();

        contactForm.firstName = firstName;
        contactForm.lastName = lastName;
        contactForm.company = company;
        contactForm.email = email;
        contactForm.phoneNumber = phoneNumber;
        contactForm.countryCode = countryCode;
        contactForm.communicationMedium = communicationMedium;
        contactForm.reason = reason;
        contactForm.agreeToPolicies = agreeToPolicies;

        // Save the contact form data to the database
        await contactFormRepository.save(contactForm);

        // Return a success response
        return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ error: 'Error saving data' }, { status: 500 });
    }
}
