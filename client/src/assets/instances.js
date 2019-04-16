import axios from 'axios';

const instance = (token) => {
    return (axios.create({baseURL: `https://dashserver.herokuapp.com/data?token=${token}`}));
};

export default instance;