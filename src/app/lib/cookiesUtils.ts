import Cookies from 'js-cookie';

/**
 * Sets a cookie with a specified key, value, and options.
 * @param key - The name of the cookie.
 * @param value - The value to store in the cookie.
 * @param days - (Optional) Number of days before the cookie expires. Default is 7 days.
 */
export const setCookie = (key: string, value: string, days: number = 7): void => {
    Cookies.set(key, value, { expires: days, path: '/', secure: true });
};

/**
 * Retrieves the value of a specified cookie.
 * @param key - The name of the cookie to retrieve.
 * @returns The value of the cookie, or null if it doesn't exist.
 */
export const getCookie = (key: string): string | null => {
    return Cookies.get(key) || null;
};

/**
 * Deletes a cookie by its key.
 * @param key - The name of the cookie to delete.
 */
export const deleteCookie = (key: string): void => {
    Cookies.remove(key, { path: '/' });
};

/**
 * Checks if a specific cookie exists.
 * @param key - The name of the cookie to check.
 * @returns A boolean indicating whether the cookie exists.
 */
export const hasCookie = (key: string): boolean => {
    return !!Cookies.get(key);
};

/**
 * Lists all cookies as an object.
 * @returns An object containing all cookies as key-value pairs.
 */
export const listCookies = (): Record<string, string> => {
    return Cookies.get();
};

export const setAnalyticsCookie = (key: string, value: string, days: number = 365) => {
    Cookies.set(key, value, { expires: days });
};

export const getAnalyticsCookie = (key: string) => {
    return Cookies.get(key);
};

export const removeAnalyticsCookie = (key: string) => {
    Cookies.remove(key);
};
