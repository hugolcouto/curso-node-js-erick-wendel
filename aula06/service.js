const { get } = require('axios');
const API_URL='https://swapi.co/api/people'
async function obterPessoa(nome) {
    const url = `${API_URL}/?search=${nome}&format=json`
    const res = await get(url);
    return res.data;
}

module.exports = {obterPessoa}