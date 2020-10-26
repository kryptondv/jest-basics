const axios = require('axios');

const functions = {
  add: (x, y) => x + y,
  returnNull: () => null,
  checkValue: x => x,
  createUser: (firstName, lastName) => {
    const user = { firstName, lastName };
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => err)
};

module.exports = functions;
