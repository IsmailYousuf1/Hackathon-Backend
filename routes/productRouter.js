const express = require('express');
const ProdcutController = require('../controllers/productController.js');
const Route = express.Router();

Route.get('/' ,ProdcutController.get);

Route.get('/:id' , ProdcutController.getById);

Route.post('/' , ProdcutController.post);

Route.put('/:id' , ProdcutController.put);  

Route.delete('/:id' , ProdcutController.delete);

module.exports = Route;
