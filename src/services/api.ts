import { axios } from '@modules';

const api = axios.create({
    baseURL: 'https://api.github.com',
});

export { api };