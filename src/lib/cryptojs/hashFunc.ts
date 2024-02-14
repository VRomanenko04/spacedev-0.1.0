import CryptoJS from 'crypto-js';

// Функция для хеширования данных
export const hashData = (data: any): string => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.SHA256(jsonString).toString();
}

// Функция для разхеширования данных
export const unhashData = (hash: string): any => {
    const bytes = CryptoJS.SHA256(hash);
    const jsonString = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
}

// Функция для сохранения данных с хешированием в SessionStorage
export const saveDataWithHash = (data: any, key: string): void => {
    const hashedData = hashData(data);
    sessionStorage.setItem(key, hashedData);
}

// Функция для получения данных с разхешированием с SessionStorage
export const getDataWithUnhash = (key: string): any => {
    const hashedData = sessionStorage.getItem(key);
    if (hashedData) {
        return unhashData(hashedData);
    }
    return null;
}