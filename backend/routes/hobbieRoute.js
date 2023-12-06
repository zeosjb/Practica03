const express = require("express")
const router = express.Router()
const {
  getHobies,
  setHobbie,
  updateHobbie,
  deleteHobbie,
} = require("../controllers/hobbieController")

router.route('/').get(getHobies).post(setHobbie)
router.route('/:id').put(updateHobbie).delete(deleteHobbie)

module.exports = router
