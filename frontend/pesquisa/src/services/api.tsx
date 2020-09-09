import axios from 'axios';

const api = axios.create ({
    baseURL: 'http://localhost:5000',
    headers: 
    { 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "HEAD, GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Expose-Headers": "Content-Length, X-JSON",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, client-security-token, x-requested-with",
        "Access-Control-Max-Age": 86400,
        "preflightContinue": false,
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json"
    }
})

export default api;