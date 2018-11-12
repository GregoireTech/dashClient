import axios from 'axios';

const instance = (username, password) => {
    return (axios.create({baseURL: `https://script.google.com/macros/s/AKfycbxeNMvqCvJxtUUWd2Om9h0_65gy8GJalsjLOBn-MsZ9yHjy6VY/exec?user=${username}&pass=${password}`}));
};

export default instance;