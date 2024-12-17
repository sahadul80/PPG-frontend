import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers, addSubscriber } from '@/app/lib/csvUtils';

export async function GET() {
    try {
        const subscribers = await getAllSubscribers();
        return NextResponse.json({ message: 'Subscribers retrieved successfully', subscribers });
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

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const newSubscriber = await addSubscriber(email);
        return NextResponse.json({ message: 'Subscriber added successfully', newSubscriber });
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === 'Email is already registered') {
                return NextResponse.json({ message: error.message }, { status: 409 });
            }
            return NextResponse.json(
                { message: 'Error adding subscriber', error: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
