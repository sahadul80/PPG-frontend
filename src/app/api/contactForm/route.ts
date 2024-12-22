import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPolicies: boolean;
    timestamp?: string; // Add the timestamp property as optional
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            firstName,
            lastName,
            company,
            email,
            phoneNumber,
            message,
            agreeToPolicies,
        }: ContactFormData = req.body;

        // Define the path to the JSON file where the data will be saved
        const filePath = path.join(process.cwd(), 'public','contactForm', 'contactForm.json');

        try {
            // Read the existing data from the JSON file
            const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '[]';
            const contactData: ContactFormData[] = JSON.parse(fileData);

            // Append the new form data to the existing data
            contactData.push({
                firstName,
                lastName,
                company,
                email,
                phoneNumber,
                message,
                agreeToPolicies,
                timestamp: new Date().toISOString(), // Add timestamp here
            });

            // Write the updated data back to the JSON file
            fs.writeFileSync(filePath, JSON.stringify(contactData, null, 2));

            res.status(200).json({ message: 'Data submitted successfully!' });
        } catch (error) {
            console.error('Error writing to file:', error);
            res.status(500).json({ message: 'Failed to save data.' });
        }
    } else {
        // Handle any other HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
