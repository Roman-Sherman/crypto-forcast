import api from './axios';

// store our JWT in LS and set axios headers if we do have a token

const setAuthToken = (token: string) => {
    if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        delete api.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};

export default setAuthToken;