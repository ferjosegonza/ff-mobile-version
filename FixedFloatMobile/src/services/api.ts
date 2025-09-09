import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ff.io', // Cambiar según la documentación
});

export const fetchRates = async () => {
  try {
    const response = await api.get('/rates');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
