import { NextResponse } from 'next/server';
import { Blockchain } from '../../lib/blockChain';

// Initialize the blockchain instance
const blockchain = new Blockchain();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { sender, receiver, amount } = body;

        // Validate request data
        if (!sender || !receiver || typeof amount !== 'number' || amount <= 0) {
            return NextResponse.json(
                { error: 'Invalid transaction data' },
                { status: 400 }
            );
        }

        const transaction = { sender, receiver, amount };
        blockchain.addTransaction(transaction);

        return NextResponse.json({
            message: 'Transaction added successfully!',
            blockchain,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'An error occurred' },
            { status: 400 }
        );
    }
}

export async function GET() {
    try {
        return NextResponse.json({ blockchain });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'An error occurred' },
            { status: 500 }
        );
    }
}
