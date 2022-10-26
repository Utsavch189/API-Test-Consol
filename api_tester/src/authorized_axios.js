import axios from 'axios';

export const myaxios = (token) => axios.create({
    headers: {
        Authorization: `Bearer ${token}`
    }

})