const express = require("express")
const router = express.Router()
const {
  getFrameworks,
  setFramework,
  updateFramework,
  deleteFramework,
} = require("../controllers/frameworkController")

router.route('/').get(getFrameworks).post(setFramework)
router.route('/:id').put(updateFramework).delete(deleteFramework)

module.exports = router
