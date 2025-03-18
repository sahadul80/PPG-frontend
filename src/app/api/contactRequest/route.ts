import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Allowed origins (include null for same-origin requests)
const allowedOrigins = [
    'http://localhost:8000',
    'https://www.peoplepulseglobal.com',
    null, // Allow null origins for server-side requests
];

const SPREADSHEET_ID = '1_Bj6b81BO0U5Vy7sZ8KfGm3jh58GUa458hNaEg03las';
const SHEET_NAME = 'contact_form';

// Load Google credentials
const credentials = process.env.CREDIT;
if (!credentials) {
    console.error('❌ Missing Google Service Account credentials');
    throw new Error('Missing Google credentials');
}

let parsedCredentials;
try {
    parsedCredentials = JSON.parse(credentials);
    console.log('✅ Parsed Google credentials successfully.');
} catch (error) {
    console.error('❌ Error parsing credentials:', error);
    throw new Error('Invalid Google credentials format');
}

// Initialize Google Sheets API authentication
const auth = new google.auth.GoogleAuth({
    credentials: parsedCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function GET(req: NextRequest) {
    try {
        // Validate origin
        const origin = req.headers.get('origin');
        console.log('🌍 Request Origin:', origin);

        if (!allowedOrigins.includes(origin)) {
            console.error('🚫 CORS violation from:', origin);
            return NextResponse.json(
                { error: 'CORS policy violation' },
                { status: 403, headers: getCorsHeaders(origin) }
            );
        }

        // Fetch data from Google Sheets
        console.log('📡 Fetching data from Google Sheets...');
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:H`,
            valueRenderOption: 'FORMATTED_VALUE',
        });

        const sheetData = response.data.values || [];
        console.log('📊 Retrieved', sheetData.length, 'rows of data');

        // ✅ Return data inside NextResponse.json()
        return NextResponse.json(sheetData, {
            status: 200,
            headers: getCorsHeaders(origin),
        });

    } catch (error: any) {
        console.error('❌ Error fetching data:', error.message);
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500, headers: getCorsHeaders('*') }
        );
    }
}

// OPTIONS handler for CORS
export async function OPTIONS(req: NextRequest) {
    const origin = req.headers.get('origin');
    console.log('🔍 OPTIONS request from:', origin);

    if (!allowedOrigins.includes(origin)) {
        console.warn('🚫 CORS violation in OPTIONS:', origin);
        return new NextResponse(null, { status: 403 });
    }

    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(origin),
    });
}

// CORS headers helper function
function getCorsHeaders(origin: string | null) {
    return {
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };
}
