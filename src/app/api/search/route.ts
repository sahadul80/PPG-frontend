import { NextResponse } from 'next/server';
import { searchCsv } from '@/app/lib/csvSearchUtils';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const query = url.searchParams.get('query') || '';

    if (!query) {
        return NextResponse.json({ message: 'Query parameter is required' }, { status: 400 });
    }

    try {
        const results = await searchCsv(query);

        if (results.length === 0) {
            return NextResponse.json({ message: 'No results found' }, { status: 404 });
        }

        return NextResponse.json({ results });
    } catch (error) {
        console.error('Error fetching search results:', error);
        return NextResponse.json({ message: 'Error fetching search results' }, { status: 500 });
    }
}
