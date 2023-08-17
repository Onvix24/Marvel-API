import { useState, useCallback } from "react";

export const useHttp = () => {
    const [procces, setProcces] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setProcces('loading')

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            setProcces('error');
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setProcces('loading');
    }, []);

    return {request, clearError, procces, setProcces}
}