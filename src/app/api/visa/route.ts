import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
    try {
        // Define the path to the JSON file.
        const filePath = path.join(process.cwd(), "public", "app-data", "country-visa.json");
        
        // Read the content of the JSON file asynchronously.
        const jsonData = await fs.readFile(filePath, "utf-8");
        
        // Parse the JSON data to access visa categories.
        const ukVisas = JSON.parse(jsonData);

        // Retrieve search parameters from the request URL.
        const { searchParams } = new URL(request.url);
        const visaType = searchParams.get("type");

        // Log the received visa type for debugging.
        console.log("Received visa type:", visaType);

        // If a visa type is provided in the query parameter, filter the relevant visa category.
        if (visaType) {
            // Find the visa category that matches the provided type.
            const category = ukVisas.visa_categories.find(
                (vc: any) => vc.type.toLowerCase().replace(/\s+/g, "-") === visaType.toLowerCase().replace(/\s+/g, "-")
            );

            if (category) {
                // Return the found category.
                return NextResponse.json(category);
            } else {
                // Return a 404 error if the visa category is not found.
                return NextResponse.json(
                    { error: `Visa type '${visaType}' not found. Please check the type and try again.` },
                    { status: 404 }
                );
            }
        }

        // If no type is provided, return all visa categories.
        return NextResponse.json(ukVisas);
    } catch (err) {
        // Handle any errors that occur during the process.
        console.error("Error fetching visa data:", err);
        return NextResponse.json(
            { error: "An error occurred while fetching visa data. Please try again later." },
            { status: 500 }
        );
    }
}
