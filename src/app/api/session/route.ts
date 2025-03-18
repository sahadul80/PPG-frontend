import { getSession } from "../../lib/session";

export async function POST(req: Request) {
    const session = await getSession();

    if (!session) {
        return new Response(
            JSON.stringify({ message: "Not authenticated" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(JSON.stringify(session), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
