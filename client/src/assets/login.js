import axios from 'axios';

const instance = (username, password) => {
    return (axios.create({baseURL: `http://localhost:8888/login?user=${username}&pass=${password}`}));
};

export default instance;