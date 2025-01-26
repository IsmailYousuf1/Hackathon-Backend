const express = require('express');
const AuthController = require("../controllers/authController")
const Route = express.Router();

Route.post('/login', AuthController.login);

Route.post('/signup', AuthController.signup);

module.exports = Route;