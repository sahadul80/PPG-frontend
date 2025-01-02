import 'reflect-metadata';
import { DataSource } from "typeorm";
import { ContactFormEntity } from "@entities/ContactForm";

// Ensure environment variables are properly set
if (!process.env.DB_HOST || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    throw new Error("Database environment variables are missing");
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "ppg",
    entities: [ContactFormEntity],
    synchronize: true,  // Set to false in production, use migrations instead
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });
