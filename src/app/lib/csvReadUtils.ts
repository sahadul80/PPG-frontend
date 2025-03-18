import fs from 'fs';
import csvParser from 'csv-parser';

// Function to read CSV and return JSON data
export const readCsvFile = (filePath: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const data: any[] = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data))
            .on('error', (error) => reject(error));
    });
};
