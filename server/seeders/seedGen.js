const { faker } = require("@faker-js/faker");

const userGen = async() => {
  
  let userArr = [];
  for (let i = 0; i < 50; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(`${username}`);
    const password = faker.internet.password(12);
    const phone = faker.phone.number("###-###-####");    

    userArr.push({
      username: username,
      email: email,
      password: password,
      phone: phone,
    });
  }

  return userArr;
};

const reviewGen = (users) => {
  let reviewArr = [];
  for (let i = 0; i < 20; i++) {
    const reviewBody = faker.lorem.sentences(2);
    const username = users[Math.floor(Math.random() * users.length)].username;
    const createdAt = faker.date.recent();
    const rating = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    reviewArr.push({
      reviewBody: reviewBody,
      username: username,
      createdAt: createdAt,
      rating: rating,
    });
  }

  return reviewArr;
};

const serviceGen = async (users) => {

  let serviceArr = [];

  for (let i = 0; i < 20; i++) {
    let title = faker.company.name();
    let description = faker.lorem.paragraph();
    let username = users[Math.floor(Math.random() * users.length)].username;

    serviceArr.push({
      title: title,
      description: description,
      username: username
    });
  }

  return serviceArr;
};
module.exports = {userGen, reviewGen, serviceGen};