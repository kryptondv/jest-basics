const functions = {
  add: (x, y) => x + y,
  returnNull: () => null,
  checkValue: x => x,
  createUser: (firstName, lastName) => {
    const user = { firstName, lastName}
    return user;
  }
};

module.exports = functions;
