/**
 * Manipulando listas com For/ForIn/ForOf
 */

const service = require('./service');

async function main() {
    try {
        const res = await service.getPeople('skywalker');
        // For
        // for(let i = 0; i < res.results.length; i++) {
        //     console.log("Nome:", res.results[i].name)
        // }

        // For In
        // for(i in res.results) {
        //     console.log("Nome:", res.results[i].name);
        // }

        // For Of
        for(people of res.results) {
            console.log("Nome:", people.name)
        }
    } catch(err) {
        console.error('ERRO INTERNO', err);
    }
}

main();