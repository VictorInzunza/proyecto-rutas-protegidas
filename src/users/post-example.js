const { createNewUser } = require('./users.controllers')

createNewUser(


    {
        id: '280ca98b-3c7e-4a3c-9a5a-0089aca1972f',
        firstName: 'Marcos',
        lastName: 'Gonzalez',
        email: 'marquitos@gmail.com',
        password: 'root123'
    })
    .then(data => console.log({ password: data.password }))
    .catch(err => console.log({ error: err.message }))