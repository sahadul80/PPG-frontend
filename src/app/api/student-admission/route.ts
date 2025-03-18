// api/student-admission/route.ts

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'app-data', 'student-admission.json');

    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to read the data from the file." }, { status: 500 });
    }
}
