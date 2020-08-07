import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
});
const app_id = '72425fcc0db44f0eaeacb881e0bc0546';

export default instance;
