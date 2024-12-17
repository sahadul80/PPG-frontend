import { NextResponse } from 'next/server';
import { readCsvFile } from '@/app/lib/csvReadUtils';
import path from 'path';

export async function GET() {
    const csvFilePath = path.join(process.cwd(), 'src', 'app', 'app-data', 'offices.csv');
    try {
        const offices = await readCsvFile(csvFilePath);
        console.log(offices);
        return NextResponse.json({ offices });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: 'Error retrieving subscribers', error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
