const { Router } = require("express");
const authController = require("../controllers/authController");
const router = Router();

router.post("/signup", authController.signup_post);
router.post("/login", authController.login_post);
router.post("/join-event", authController.join_event_post);
router.post("/create-event", authController.create_event_post);
router.get("/events", authController.events_get);
router.get("/logout", authController.logout_get);
router.post("/change-event", authController.change_event_post);
router.get("/joined-events", authController.joined_events_get);
router.get("/my-events", authController.my_events_get);
router.get(
  "/event-except-joined-and-my",
  authController.event_except_joined_and_my_get
);
router.post("/delete-event", authController.delete_event_post);
module.exports = router;
