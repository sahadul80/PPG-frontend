"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import fs from "fs/promises";
import path from "path";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
const sessionCookieName = "session";

// Path to users.json file
const usersFilePath = path.resolve("public/users/users.json");

// Create a new session for the authenticated user
export async function createSession(username: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = await new SignJWT({ username })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("7d")
        .sign(encodedKey);

    const cookieStore = await cookies();
    cookieStore.set(sessionCookieName, session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        sameSite: "strict",
    });
}

// Delete the current session
export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(sessionCookieName);
}

// Retrieve the current session
export async function getSession() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(sessionCookieName)?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const { payload } = await jwtVerify(sessionCookie, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.error("Session verification failed:", error);
        return null;
    }
}

// Create a new user
export async function createUser(username: string, password: string) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        let users = [];
        try {
            const data = await fs.readFile(usersFilePath, "utf8");
            users = JSON.parse(data);
        } catch (err: any) {
            if (err.code !== "ENOENT") {
                throw err;
            }
        }

        // Check if the user already exists
        const existingUser = users.find((user: any) => user.username === username);
        if (existingUser) {
            throw new Error("Username already exists");
        }

        // Add new user
        users.push({ username, password: hashedPassword });
        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf8");

        console.log("User created successfully");
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

// Authenticate a user
export async function authenticateUser(username: string, password: string) {
    try {
        const data = await fs.readFile(usersFilePath, "utf8");
        const users = JSON.parse(data);

        // Find the user by username
        const user = users.find((user: any) => user.username === username);
        if (!user) {
            throw new Error("User not found");
        }

        // Hash the provided password and compare it to the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid password");
        }

        // Return the user object if authentication is successful
        return user;
    } catch (error) {
        console.error("Authentication failed:", error);
        throw error;
    }
}