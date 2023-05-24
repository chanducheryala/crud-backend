const express = require("express")

const router = express.Router();

const Users = require('../controllers/index.js');

router.get('/:id', Users.getUserById);
router.get('/', Users.getAllUsers);
router.post('/', Users.createUser);
router.put('/', Users.editUser);
router.delete('/:id', Users.deleteUser)
router.delete('/', Users.deleteAllUsers)



module.exports = router;
 
