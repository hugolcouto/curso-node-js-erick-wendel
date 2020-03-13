/**
 * Tema: callback
 * 
 * 1 Recuperar ID do usuário
 * 2 Recuperar número de telefone do usuário através de seu ID
 * 3 Recuperar endereço do usuário através de seu ID
 */

function getUser(callback) {
    setTimeout(() => {
        return callback(null,{
            id: 1,
            name: 'Hugo',
            birthDate: new Date()
        });
    }, 1000);
}

function getPhoneNumber(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            number: 123456,
            ddd: 11
        });
    }, 2000);
}

function getAddress(userId, callback) {
    setTimeout(() => {
       return callback(null, {
            num: 100,
            street: 'Centro'
       });
    }, 2000);
}

getUser(function resolveUser(error, user) {
    if (error) console.error('Something went wrong', error);
    getPhoneNumber(user.id, function resolvePhone(error, phone) {
        if (error) console.error('Something went wrong', error);
        getAddress(user.id, function resolveAddress(error, address) {
            if (error) console.error('Something went wrong', error);
            console.log(`
                name: ${user.name},
                address: ${address.street},
                phone number: ${phone.number}
            `)
        })
    })
});
// const number = getPhoneNumber(user.id);

// console.log(number);

