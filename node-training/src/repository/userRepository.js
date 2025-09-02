const shortid = require('shortid');

const users = [
    { id: shortid.generate(), role : "admin", username: "adam_g",  password: "123" },
    { id: shortid.generate(), role : "user", username: "eve_g",  password: "321" },
];


module.exports = {
    users,
};