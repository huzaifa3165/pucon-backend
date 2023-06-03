const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const wishListSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Your wish list has no id"],
  },
});

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  phone_number: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  wishList: {
    type: Array,
    default: [],
  },
  favourite: {
    type: Array,
    default: [],
  },
  saved: {
    type: Array,
    default: [],
  },
});

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
