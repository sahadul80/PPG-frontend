import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session"; // Adjust the import according to your project structure

const protectedRoutes = ["/pages/dashboard"];
const publicRoutes = ["/pages/login"];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // Check if the session cookie exists and is valid
    const session = await getSession();

    if (isProtectedRoute && !session?.userId) {
        // If it's a protected route and the user is not authenticated, redirect to login
        return NextResponse.redirect(new URL("/pages/login", req.nextUrl));
    }

    if (isPublicRoute && session?.userId) {
        // If it's a public route and the user is authenticated, redirect to dashboard
        return NextResponse.redirect(new URL("/pages/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}
