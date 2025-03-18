import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    const jsonFilePath = path.join(process.cwd(), 'public', 'testimonials', 'testimonials.json');
    try {
        const data = await fs.readFile(jsonFilePath, 'utf-8');
        const testimonials = JSON.parse(data);
        console.log(testimonials);
        return NextResponse.json({ testimonials });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: 'Error retrieving testimonials', error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
