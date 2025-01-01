import { promises as fs } from 'fs';
import path from 'path';

interface ContactFormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    countryCode: string;
    communicationMedium: string;
    reason: string;
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
            countryCode,
            communicationMedium,
            reason,
            agreeToPolicies,
        } = body;

        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'public', 'contactForm', 'contactForm.json');

        // Check if the file exists
        let contactData: ContactFormData[] = [];
        try {
            const fileData = await fs.readFile(filePath, 'utf-8');
            contactData = JSON.parse(fileData);
        } catch (err) {
            // File does not exist; create a new one
            console.log('File does not exist, creating a new file.');
            await fs.mkdir(path.dirname(filePath), { recursive: true });
            contactData = [];
        }

        // Append the new data
        contactData.push({
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            countryCode,
            communicationMedium,
            reason,
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
