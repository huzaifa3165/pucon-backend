const User = require("../models/User");
const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

// controller actions

module.exports.signup_post = async (req, res) => {
  console.log("signup_post");
  const { email, password, first_name, last_name, phone_number } = req.body;

  try {
    const user = await User.create({
      email,
      password,
      first_name,
      last_name,
      phone_number,
    });
    const token = createToken(user._id);
    res.status(201).json({ user: user._id, cookie: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  console.log("login_post");
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user: user._id, cookie: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  console.log("logout_get");
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

module.exports.join_event_post = async (req, res) => {
  const { event_id } = req.body;
  const user_id = req.user._id;
  const event = await Event.findByIdAndUpdate(event_id, {
    $push: { users: user_id },
  });
  console.log(event);
  res.status(201).json({ user_id, event_id });
};
module.exports.create_event_post = async (req, res) => {
  const { title, description, date, duration, status, location } = req.body;
  const admin_id = req.user._id;
  const event = await Event.create({
    title,
    description,
    date,
    duration,
    status,
    location,
    admin_id,
  });
  res.status(201).json({ event: event._id });
};
module.exports.events_get = async (req, res) => {
  console.log("join_event_post");
};

module.exports.change_event_post = async (req, res) => {
  const { event_id, title, descritption, date, duration, limit, status } =
    req.body;
  const event = await Event.findByIdAndUpdate(event_id, {
    title,
    descritption,
    date,
    duration,
    limit,
    status,
  });
  res.status(201).json({ event: event._id });
};

module.exports.joined_events_get = async (req, res) => {
  const user_id = req.user._id;
  console.log(user_id);
  const events = await Event.joinedEvents(user_id);
  res.status(201).json({ events });
};

module.exports.my_events_get = async (req, res) => {
  const admin_id = req.user._id;
  console.log(admin_id);
  const events = await Event.myEvents(admin_id);
  res.status(201).json({ events });
};

module.exports.event_except_joined_and_my_get = async (req, res) => {
  const user_id = req.user._id;
  const admin_id = req.user._id;
  console.log(user_id);
  const events = await Event.eventExceptJoinedAndMy(user_id, admin_id);
  res.status(201).json({ events });
};

// can only be deleted if user is the admin of the event
module.exports.delete_event_post = async (req, res) => {
  const { event_id } = req.body;
  const event = await Event.deleteEvent(event_id);
  res.status(201).json({ event });
};
