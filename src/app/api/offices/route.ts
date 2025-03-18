import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    const jsonFilePath = path.join(process.cwd(), 'public', 'offices', 'offices.json');
    try {
        const data = await fs.readFile(jsonFilePath, 'utf-8');
        const offices = JSON.parse(data);
        console.log(offices);
        return NextResponse.json({ offices });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: 'Error retrieving offices', error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
