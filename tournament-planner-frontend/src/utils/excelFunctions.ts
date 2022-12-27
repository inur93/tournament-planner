import { read, WorkBook, WorkSheet, utils } from 'xlsx';

export const loadWorkbook = (file: File): Promise<WorkBook> => {
    return new Promise((resolve, error) => {
        // const reader = new FileReader();
        // reader.onload = function (e) {
        //     // binary data
        //     console.log(e.target?.result);
        //     const wb = read(e.target?.result, { type: 'binary' });
        //     resolve(wb);
        // };
        // reader.onerror = function (e) {
        //     // error occurred
        //     console.log('Error : ' + e.type);
        //     error(e);
        // };
        // reader.readAsBinaryString(file);

        file.arrayBuffer().then(data => {
            const wb = read(data, { type: 'buffer' })
            resolve(wb);

        })
    })
}

export const lastColumn = (ws?: WorkSheet) => {
    if (!ws) return 0;
    return getDimension(ws).c;
}

export const lastrow = (ws?: WorkSheet) => {
    if (!ws) return 0;
    return getDimension(ws).r;
}

export const getDimension = (ws: WorkSheet) => {
    const range = ws['!ref'] ?? 'A1:A1';
    return utils.decode_range(range).e;
}