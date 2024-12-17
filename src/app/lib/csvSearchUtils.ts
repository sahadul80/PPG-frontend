import path from 'path';
import { readCsvFile } from '@/app/lib/csvReadUtils';
// Path to the search.csv file
const csvFilePath = path.join(process.cwd(), 'src', 'app', 'app-data', 'search.csv');
// Function to search data in the CSV file
export const searchCsv = async (query: string): Promise<any[]> => {
    const data = await readCsvFile(csvFilePath);
    return data.filter((item: any) =>
        Object.values(item)
            .join(' ')
            .toLowerCase()
            .includes(query.toLowerCase())
    );
};