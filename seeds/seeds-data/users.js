const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(2);

module.exports = [
  {
    "email": "simba@lionking.com",
    "password": bcrypt.hashSync("mufasa", salt)
  },
  {
    "email": "hello@goodbye.com",
    "password": bcrypt.hashSync("lateralligator", salt)
  }
];
