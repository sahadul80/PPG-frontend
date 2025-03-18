import { deleteSession } from "../../lib/session";

export async function POST() {
    await deleteSession();
    return new Response(JSON.stringify({ message: "Logout successful" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
