const { Router } = require('express');
const { getUsers, updateUser, addUser, deleteUser, patchUser } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);
router.put('/:id', updateUser);
router.post('/', addUser);
router.delete('/', deleteUser);
router.patch('/', patchUser);

module.exports = router;