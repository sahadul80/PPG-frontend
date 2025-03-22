import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Google Sheets API setup
const SPREADSHEET_ID = '1Dsdltd0YswaVD-OVppdQsZTiVThE_uBm0BET-XdDCsg'; // Replace with your sheet ID
const SHEET_NAME = 'subscribers'; // Update with your sheet name

// Load Service Account credentials from environment variables
const credentials = process.env.CREDIT; // Ensure this contains your JSON as a string

if (!credentials) {
    console.error('Service account credentials are missing');
    process.exit(1); // Stop execution if no credentials found
}

// Parse the credentials string into a JSON object
let parsedCredentials;
try {
    parsedCredentials = JSON.parse(credentials);
    console.log('Credentials:', parsedCredentials);
} catch (error) {
    console.error('Error parsing credentials:', error);
    process.exit(1); // Stop execution if parsing fails
}

const auth = new google.auth.GoogleAuth({
    credentials: parsedCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Ensure the Google Sheets API and sheet exist (no need to create folders or CSV files)
async function appendToGoogleSheet(email: string) {
    const values = [[email]];
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`, // Assuming data starts at A1
        valueInputOption: 'RAW',
        requestBody: { values },
    });
}

// Send verification email
async function sendVerificationEmail(email: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Subscription Verification',
        text: `Thank you for subscribing to People Pulse Global ltd.! Please verify your email to complete the subscription.`,
        html: `
            <p>Thank you for subscribing!</p>
            <p>You will be notified with our Services time to time.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
}

// Add subscriber
export async function addSubscriber(email: string) {
    // Check if the email is already added (you can implement this using Google Sheets API, too, if necessary)
    const existingSubscribers = await getAllSubscribers();
    if (existingSubscribers.some((sub) => sub.email === email)) {
        throw new Error('Email is already registered');
    }

    // Append to Google Sheets
    await appendToGoogleSheet(email);

    // Send verification email
    try {
        await sendVerificationEmail(email);
    } catch (error) {
        console.error('Failed to send verification email:', error);
        throw new Error('Subscriber added, but verification email failed to send');
    }

    return { email };
}

// Read all subscribers
export async function getAllSubscribers() {
    const subscribers: { email: string }[] = [];
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A2:A`, // Assuming emails are in column A starting from A2
        });
        if (response.data.values) {
            response.data.values.forEach((row) => {
                subscribers.push({ email: row[0] });
            });
        }
    } catch (error) {
        console.error('Failed to retrieve subscribers:', error);
        throw new Error('Error retrieving subscribers');
    }
    return subscribers;
}
