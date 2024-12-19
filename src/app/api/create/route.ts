import { createUser } from "../../lib/session";

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    try {
        // Authenticate user (checks hashed password from JSON file)
        await createUser(username, password);

        return new Response(JSON.stringify({ message: "Creation successful" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new Response(
            JSON.stringify({ message: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}