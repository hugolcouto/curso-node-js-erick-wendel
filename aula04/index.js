/**
 * 1 Recuperar ID do usuário
 * 2 Recuperar número de telefone do usuário através de seu ID
 * 3 Recuperar endereço do usuário através de seu ID
 */

const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {        
        setTimeout(() => {
            return resolve({
                id: 1,
                name: 'Hugo',
                birthDate: new Date()
            });
        }, 1000);
    })
}

function getPhoneNumber(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: 123456,
                ddd: 11
            });
        }, 2000);
    })
}

function getAddress(userId, callback) {
    setTimeout(() => {
       return callback(null, {
            num: 100,
            street: 'Centro'
       });
    }, 2000);
}

main()
async function main () {
    try {
        console.time('Tempo gasto')
        const user = await getUser()

        const result = await Promise.all([
            getPhoneNumber(user.id),
            getAddressAsync(user.id)
        ])
        const phone = result[0];
        const address = result[1];

        console.log('success', `
            Nome: ${user.name}
            phone: ${phone.number}
            address: ${address.street}
        `)
        console.timeEnd('Tempo gasto')
    }
    catch(err) {
        console.error("Erro", err);
    }
}



// const userPromise = getUser();
// userPromise
// .then((user) => {
//     return getPhoneNumber(user.id)
//     .then(function resolvePhone(result) {
//         return {
//             user: {
//                 name: user.name,
//                 id: user.id
//             },
//             phone: result
//         }
//     })
// })
// .then(resultado => {
//     const address = getAddressAsync(resultado.user.id);
//     return address;
// })
// .then((resultado) => {
//     console.log('User', resultado);
// }).catch((error) => {
//     console.log('Erro', error)
// })

// getUser(function resolveUser(error, user) {
//     if (error) console.error('Something went wrong', error);
//     getPhoneNumber(user.id, function resolvePhone(error, phone) {
//         if (error) console.error('Something went wrong', error);
//         getAddress(user.id, function resolveAddress(error, address) {
//             if (error) console.error('Something went wrong', error);
//             console.log(`
//                 name: ${user.name},
//                 address: ${address.street},
//                 phone number: ${phone.number}
//             `)
//         })
//     })
// });
// const number = getPhoneNumber(user.id);

// console.log(number);

