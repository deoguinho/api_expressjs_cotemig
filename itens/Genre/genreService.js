const genre = require('./genre');

//Create REST API, adds CRUD to Mongog's schema

genre.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated

genre.updateOptions({new: true, runValidators: true});

module.exports = genre