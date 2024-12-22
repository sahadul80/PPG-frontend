import { promises as fs } from 'fs';
import path from 'path';

interface ContactFormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPolicies: boolean;
    timestamp?: string;
}

export async function POST(req: Request) {
    try {
        const body: ContactFormData = await req.json();

        const {
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            message,
            agreeToPolicies,
        } = body;

        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'public', 'contactForm', 'contactForm.json');

        // Read the existing data from the JSON file
        const fileData = await fs.readFile(filePath, 'utf-8').catch(() => '[]');
        const contactData: ContactFormData[] = JSON.parse(fileData);

        // Append the new data
        contactData.push({
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            message,
            agreeToPolicies,
            timestamp: new Date().toISOString(),
        });

        // Write the updated data back to the JSON file
        await fs.writeFile(filePath, JSON.stringify(contactData, null, 2));

        return new Response(JSON.stringify({ message: 'Data saved successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error writing to file:', error);
        return new Response(JSON.stringify({ error: 'Error writing to file' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
