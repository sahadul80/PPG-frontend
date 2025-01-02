import 'reflect-metadata';
import { DataSource } from "typeorm";
import { ContactFormEntity } from './entities/ContactForm';  // Use relative import path

// Ensure environment variables are properly set
if (!process.env.DB_HOST || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    throw new Error("Database environment variables are missing");
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",  // Default to localhost for local environment
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "ppg",
    entities: [ContactFormEntity],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,  // Disable synchronize in production
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });
