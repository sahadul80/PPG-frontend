import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    const jsonFilePath = path.join(process.cwd(), 'public', 'countries', 'countries.json');
    try {
        const data = await fs.readFile(jsonFilePath, 'utf-8');
        const countries = JSON.parse(data);
        console.log(countries);
        return NextResponse.json({ countries });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: 'Error retrieving countries', error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
