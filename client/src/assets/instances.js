import axios from 'axios';

const instance = (user) => {
    return (axios.create({baseURL: `https://script.google.com/macros/s/AKfycbxeNMvqCvJxtUUWd2Om9h0_65gy8GJalsjLOBn-MsZ9yHjy6VY/exec?${user}`}));
};

export default instance;