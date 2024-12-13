import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import nodemailer from 'nodemailer';

const folderPath = path.join(process.cwd(), 'src', 'app', 'user-data');
const csvFilePath = path.join(folderPath, 'subscriber.csv');

export type Subscriber = { email: string };

// Ensure the folder and CSV file exist
function ensureCsvFileExists() {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true }); // Create folder
    }
    if (!fs.existsSync(csvFilePath)) {
        fs.writeFileSync(csvFilePath, 'email\n', 'utf8'); // Create file with header
    }
}

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider's service
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Send verification email
async function sendVerificationEmail(email: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Subscription Verification',
        text: `Thank you for subscribing to People Pulse Global ltd.! Please verify your email to complete the subscription.`,
        html: `
            <p>Thank you for subscribing!</p>
            <p>Please verify your email to complete the subscription.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
}

// Read all subscribers
export async function getAllSubscribers(): Promise<Subscriber[]> {
    ensureCsvFileExists();
    const subscribers: Subscriber[] = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on('data', (data) => subscribers.push(data as Subscriber))
            .on('end', () => resolve(subscribers))
            .on('error', (error) => reject(error));
    });
}

// Add a subscriber
export async function addSubscriber(email: string): Promise<Subscriber> {
    ensureCsvFileExists();
    const subscribers = await getAllSubscribers();

    if (subscribers.some((sub) => sub.email === email)) {
        throw new Error('Email is already registered');
    }

    // Add email to the CSV file
    fs.appendFileSync(csvFilePath, `${email}\n`, 'utf8');

    // Send verification email
    try {
        await sendVerificationEmail(email);
    } catch (error) {
        console.error('Failed to send verification email:', error);
        throw new Error('Subscriber added, but verification email failed to send');
    }

    return { email };
}
