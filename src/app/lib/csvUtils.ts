import { google } from 'googleapis';
import path from 'path';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';

// Google Sheets API setup
const SPREADSHEET_ID = '1Dsdltd0YswaVD-OVppdQsZTiVThE_uBm0BET-XdDCsg'; // Replace with your sheet ID
const SHEET_NAME = 'subscribers'; // Update with your sheet name

const serviceAccountKeyPath = path.resolve(process.cwd(), 'src', 'app', 'lib', 'service_acc.json');
const credentials = JSON.parse(readFileSync(serviceAccountKeyPath, 'utf8'));

const auth = new google.auth.GoogleAuth({
    credentials,
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
        text: `Thank you for subscribing to People Pulse Global ltd.! You will be updated with our latest services.`,
        html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
            text-align: left;
            color: #333333;
        }
        .content p {
            line-height: 1.6;
        }
        .cta {
            text-align: center;
            margin: 20px 0;
        }
        .cta a {
            display: inline-block;
            padding: 12px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
        }
        .cta a:hover {
            background-color: #0056b3;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to People Pulse Global Ltd.!</h1>
        </div>
        <div class="content">
            <p>Hi,</p>
            <p>Thank you for subscribing to <strong>People Pulse Global Ltd.</strong>! We’re thrilled to have you on board.</p>
            <p>Please verify your email address by clicking the button below to complete your subscription:</p>
            <div class="cta">
                <a href="{{verification_link}}" target="_blank">Verify Email</a>
            </div>
            <p>If you didn’t sign up for this, please ignore this email.</p>
            <p>Thanks,</p>
            <p>The People Pulse Global Ltd. Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 People Pulse Global Ltd. All rights reserved.</p>
        </div>
    </div>
</body>
</html> `,
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
            response.data.values.forEach((row: any) => {
                subscribers.push({ email: row[0] });
            });
        }
    } catch (error) {
        console.error('Failed to retrieve subscribers:', error);
        throw new Error('Error retrieving subscribers');
    }
    return subscribers;
}
