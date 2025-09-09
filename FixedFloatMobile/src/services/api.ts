import * as Crypto from 'crypto-js';
import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_FF_API_KEY || '';
const API_SECRET = process.env.EXPO_PUBLIC_FF_API_SECRET || '';
const BASE_URL = 'https://ff.io/api/v2/';

/**
 * Generate HMAC-SHA256 signature of the request body
 */
function sign(data: string): string {
  return Crypto.HmacSHA256(data, API_SECRET).toString(Crypto.enc.Hex);
}

/**
 * Generic request function for FixedFloat API
 * @param method API method (e.g. "getCurrencies")
 * @param params Object with parameters for that method
 */
export async function apiRequest(method: string, params: Record<string, any> = {}) {
  const url = BASE_URL + method;
  const data = JSON.stringify(params);

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'X-API-KEY': API_KEY,
    'X-API-SIGN': sign(data),
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error: any) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
}
