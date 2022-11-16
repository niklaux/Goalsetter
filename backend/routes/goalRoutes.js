const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getGoals);
router.post("/", protect, setGoal);
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

// Other way of writing routes
// router.route("/").get(getGoals).post(setGoal);
// router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
