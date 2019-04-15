import axios from 'axios';

const instance = (token) => {
    return (axios.create({baseURL: `http://localhost:8888/data?token=${token}`}));
};

export default instance;