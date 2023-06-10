const express = require('express');

module.exports = function (server) {

  //API Routes

  const router = express.Router();

  server.use('/', router);

  //Registering API methods in router

  const itemService = require('../itens/pessoaService');

  itemService.register(router, '/pessoa');

  const bookitemService = require('../itens/book/bookService');
  bookitemService.register(router, '/book');

  const authoritemService = require('../itens/author/authorService');
  authoritemService.register(router, '/author');

  const bookInstanceitemService = require('../itens/BookInstance/BookInstanceService');
  bookInstanceitemService.register(router, '/bookInstance');

  const genreitemService = require('../itens/Genre/genreService');
  genreitemService.register(router, '/genre');
}