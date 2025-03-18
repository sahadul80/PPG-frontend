import { authenticateUser, createSession } from "../../lib/session";

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    try {
        // Authenticate user (checks hashed password from JSON file)
        const user = await authenticateUser(username, password);

        if (!user) {
            return new Response(
                JSON.stringify({ message: "Invalid username or password" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }

        // Create session upon successful authentication
        await createSession(user.username);

        return new Response(JSON.stringify({ message: "Login successful" }), {
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