import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

// Path to the search.csv file
const csvFilePath = path.join(process.cwd(), 'src', 'app', 'app-data', 'search.csv');

// Helper function to read data from the CSV file
export const readCsvFile = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const data: any[] = [];
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data))
            .on('error', (err) => reject(err));
    });
};

// Function to search data in the CSV file
export const searchCsv = async (query: string): Promise<any[]> => {
    const data = await readCsvFile();
    return data.filter((item) =>
        Object.values(item)
            .join(' ')
            .toLowerCase()
            .includes(query.toLowerCase())
    );
};
