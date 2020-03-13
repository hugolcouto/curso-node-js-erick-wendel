const assert = require('assert');
const { obterPessoa } = require('./service');

describe('Teste Star Wars', () => {
    it('Deve retornar o R2D2 com o formato correto', async () => {
        const expected = [{nome: 'R2-D2', peso: '96',}];
        const nomeBase = 'r2-d2'
        const res = await obterPessoa(nomeBase);
        assert.deepEqual(resultado, expected)
    });
});
