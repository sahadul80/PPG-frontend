import { NextRequest } from 'next/server';  // Correct import for Next.js
import { AppDataSource } from '../../lib/data-source';
import { ContactFormEntity } from '../../lib/entities/ContactForm';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();  // Parsing JSON body

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

        return new Response(
            JSON.stringify({ message: 'Data saved successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error saving data:', error);
        return new Response(
            JSON.stringify({ error: 'Error saving data' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
