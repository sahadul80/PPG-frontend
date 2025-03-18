import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});

export async function getChatResponse(message: string): Promise<string> {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        });

        return response.choices[0]?.message?.content || 'No response received.';
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to get response from OpenAI: ${error.message}`);
        } else {
            throw new Error('Failed to get response from OpenAI');
        }
    }
}
