const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const auth = require("../../middleware/auth")

// TODO: RESTRICT THE FOLLOWING (AFTER DOING CLIENT-SIDE)
// 1) users post 2) put users route and 3) Delete user route

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.createUser)
//   .post(booksController.create);

// Matches with "/api/users/dms"
router.route("/dms")
  .get(usersController.findAllDms)


// Matches with "/api/users/:id"
router.route("/:id")
.get(usersController.findById)
.put(auth, usersController.updateField)
.delete(auth, usersController.remove)

module.exports = router;
