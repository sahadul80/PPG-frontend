import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const allowedOrigins = [
    'http://localhost:8000',
    'https://www.peoplepulseglobal.com',
    null,
];

const SPREADSHEET_ID = '1Dsdltd0YswaVD-OVppdQsZTiVThE_uBm0BET-XdDCsg';
const SHEET_NAME = 'Subscribers';

// Load credentials
const credentials = process.env.CREDIT;
if (!credentials) {
    console.error('? Missing Google Service Account credentials');
    throw new Error('Missing Google credentials');
}

let parsedCredentials;
try {
    parsedCredentials = JSON.parse(credentials);
} catch (error) {
    console.error('? Error parsing credentials:', error);
    throw new Error('Invalid Google credentials format');
}

// Authenticate Google Sheets API
const auth = new google.auth.GoogleAuth({
    credentials: parsedCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function GET(req: NextRequest) {
    try {
        // Validate origin
        const origin = req.headers.get('origin');
        if (!allowedOrigins.includes(origin)) {
            return NextResponse.json(
                { error: 'CORS policy violation' },
                { status: 403, headers: getCorsHeaders(origin) }
            );
        }

        // Fetch data from column A
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:A`,
            valueRenderOption: 'FORMATTED_VALUE',
        });

        const sheetData = response.data.values || [];

        if (sheetData.length === 0) {
            console.warn('?? No data found in the sheet');
            return NextResponse.json(
                { message: 'No data available' },
                { status: 404, headers: getCorsHeaders(origin) }
            );
        }

        return NextResponse.json(sheetData, {
            status: 200,
            headers: getCorsHeaders(origin),
        });

    } catch (error: any) {
        console.error('? Error fetching data:', error.message);
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500, headers: getCorsHeaders('*') }
        );
    }
}

export async function OPTIONS(req: NextRequest) {
    const origin = req.headers.get('origin');
    if (!allowedOrigins.includes(origin)) {
        return new NextResponse(null, { status: 403 });
    }

    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(origin),
    });
}

function getCorsHeaders(origin: string | null) {
    return {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };
}
