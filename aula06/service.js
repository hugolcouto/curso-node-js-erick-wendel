<<<<<<< HEAD
const { get } = require('axios');
const API_URL='https://swapi.co/api/people'
async function obterPessoa(nome) {
    const url = `${API_URL}/?search=${nome}&format=json`
    const res = await get(url);
    return res.data;
}

module.exports = {obterPessoa}
=======
const axios = require('axios')
const URL = "https://swapi.co/api/people"

async function getPeople(name) {
    const url = `${URL}?search=${name}&format=json`;
    const res = await axios.get(url);
    return res.data;
}

module.exports = {getPeople};
>>>>>>> ba3b7c029357079521ae68659dd4ef607b533a4a
