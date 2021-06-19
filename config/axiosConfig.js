const axios = require('axios');

const instance = axios.create(
    {
        baseURL: "https://swapi.dev/api/"
    }
);

module.exports = instance
