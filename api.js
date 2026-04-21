import { API_KEY } from "./env.js";

// Coletar dados da API da NASA
export async function getSpacePhoto(date, retries = 3) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    
    try {
        const response = await fetch(url);
        
        if (response.status === 503 && retries > 0) {
            console.warn("NASA instável, tentando novamente...");
            await new Promise(res => setTimeout(res, 1500)); // Espera 1.5s
            return getSpacePhoto(date, retries - 1);
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.msg || "NASA is on vacation, try another date.");
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}