import { NextRequest, NextResponse } from 'next/server';
import { getChatResponse } from '@/app/lib/chatUtils';

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();
        if (!message) {
            return NextResponse.json({ message: 'Message is required' }, { status: 400 });
        }

        const reply = await getChatResponse(message);
        return NextResponse.json({ reply });

    } catch (error: unknown) {
        console.error('Error in API:', error);

        // Type guard to check if 'error' is an instance of Error
        if (error instanceof Error) {
            // Handle specific error cases
            if (error.message.includes('quota exceeded')) {
                return NextResponse.json(
                    { message: 'API quota exceeded. Please try again later.' },
                    { status: 429 }
                );
            }

            // Handle general errors
            return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
        }

        // Fallback if error is not an instance of Error (e.g., network error)
        return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
    }
}
