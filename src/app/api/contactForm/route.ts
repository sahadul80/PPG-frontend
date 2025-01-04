import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import { readFileSync } from 'fs';

const allowedOrigins = [
    'http://localhost:8000', // Local development
    'https://www.peoplepulseglobal.com', // Production domain
];

// Replace with your actual spreadsheet details
const SPREADSHEET_ID = '1_Bj6b81BO0U5Vy7sZ8KfGm3jh58GUa458hNaEg03las';
const SHEET_NAME = 'contact_form';

// Load Service Account credentials
const serviceAccountKeyPath = path.resolve(process.cwd(), 'src/app/lib/service_acc.json');
const credentials = JSON.parse(readFileSync(serviceAccountKeyPath, 'utf8'));

// Initialize Google Sheets API client
const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

export async function POST(req: NextRequest) {
    try {
        // Validate the origin
        const origin = req.headers.get('origin');
        if (!origin || !allowedOrigins.includes(origin)) {
            return new NextResponse(
                JSON.stringify({ error: 'CORS policy does not allow this origin.' }),
                {
                    status: 403,
                    headers: {
                        'Access-Control-Allow-Origin': origin || '',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    },
                }
            );
        }

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

        // Prepare data for Google Sheets
        const values = [
            [
                firstName,
                lastName,
                company,
                email,
                `${countryCode} ${phoneNumber}`,
                communicationMedium,
                reason,
                agreeToPolicies,
            ],
        ];

        // Append data to Google Sheets
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A1`,
            valueInputOption: 'RAW',
            requestBody: { values },
        });

        // Return a success response with CORS headers
        const successResponse = new NextResponse(
            JSON.stringify({ message: 'Data saved successfully to Google Sheets' }),
            { status: 200 }
        );
        successResponse.headers.set('Access-Control-Allow-Origin', origin);
        successResponse.headers.set(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
        successResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return successResponse;
    } catch (error) {
        console.error('Error saving data:', error);

        const errorResponse = new NextResponse(
            JSON.stringify({ error: 'Error saving data' }),
            { status: 500 }
        );
        errorResponse.headers.set('Access-Control-Allow-Origin', '*');
        errorResponse.headers.set(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
        errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return errorResponse;
    }
}

export async function OPTIONS(req: NextRequest) {
    const origin = req.headers.get('origin');
    if (!origin || !allowedOrigins.includes(origin)) {
        return new NextResponse(
            JSON.stringify({ error: 'CORS policy does not allow this origin.' }),
            {
                status: 403,
                headers: {
                    'Access-Control-Allow-Origin': origin || '',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            }
        );
    }

    const response = new NextResponse(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
}
