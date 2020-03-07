const axios = require('axios')
const URL = "https://swapi.co/api/people"

async function getPeople(name) {
    const url = `${URL}?search=${name}&format=json`;
    const res = await axios.get(url);
    return res.data;
}

module.exports = {getPeople};