import axios from 'axios';

const instance = (username, password) => {
    return (axios.create({baseURL: `https://dashserver.herokuapp.com/login?user=${username}&pass=${password}`}));
};

export default instance;