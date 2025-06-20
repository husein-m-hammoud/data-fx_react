// src/api/apiClient.js

const API_BASE_URL = 'http://localhost:8000/api';

export async function post(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add more headers here if needed (e.g., Authorization)
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'API Error');
        }

        return result;
    } catch (error) {
        console.error('API POST Error:', error);
        throw error;
    }
}