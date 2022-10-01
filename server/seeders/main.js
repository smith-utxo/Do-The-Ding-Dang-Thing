const { faker } = require('@faker-js/faker');
const fs = require('fs');
const { User, Review } = require('../models');

function generateUsers() {
    let users = [];
    const serviceArray = ['Cleaning', 'Electrical', 'Lawn & Garden', 'Plumbing', 'Web Development'];
    for (let i = 0; i < 50; i++) {
        let username = faker.internet.userName();
        let email = faker.internet.email();
        let password = faker.internet.password(12);
        let phone = faker.phone.number('###-###-####');
        let services = serviceArray[Math.floor(Math.random() * (serviceArray.length - 0 + 1) + 1)];

        users.push({
            "username": username,
            "email": email,
            "password": password,
            "phone": phone,
            "services": [services]
        });
    }

    console.log(users);
    return { "data": users };
}

let dataObj = generateUsers();
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));