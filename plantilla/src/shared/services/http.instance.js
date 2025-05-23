import axios from 'axios'

/**
 * @summary Axios instance configured with base URL from .env file
 */

const httpInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

export default httpInstance
