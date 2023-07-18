const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/singup', UserController.Singup);
router.post('/login', UserController.Login);

module.exports = router;