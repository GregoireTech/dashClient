
export const getDataUrl = (token) => {
    return `https://dashserver.herokuapp.com/data?token=${token}`;
};

export const getLoginUrl = (username, password) => {
    return `https://dashserver.herokuapp.com/login?user=${username}&pass=${password}`;
};

