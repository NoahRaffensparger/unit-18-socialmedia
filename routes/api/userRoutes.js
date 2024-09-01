const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriendToUser,
  deleteFriendFromUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriendToUser).delete(deleteFriendFromUser);

module.exports = router;
