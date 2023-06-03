const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title of the event"],
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "Please enter the date of the event"],
  },
  duration: {
    type: Number,
    required: [true, "Please enter the duration of the event"],
  },
  // STATUS CONFIRM OR PENDING
  status: {
    type: String,
    required: [true, "Please enter the status of the event"],
  },
  users: {
    type: Array,
    default: [],
  },
  location: {
    type: String,
    required: [true, "Please enter the location of the event"],
  },
  admin_id: {
    type: String,
    required: [true, "Please enter the admin id of the event"],
  },
});

// // fire a function before doc saved to db

eventSchema.statics.joinedEvents = async function (user_id) {
  const events = await this.find({ users: { $in: [user_id] } });
  return events;
};

eventSchema.statics.myEvents = async function (admin_id) {
  const events = await this.find({ admin_id: admin_id });
  return events;
};

eventSchema.statics.eventExceptJoinedAndMy = async function (
  user_id,
  admin_id
) {
  const events = await this.find({
    $and: [{ users: { $nin: [user_id] } }, { admin_id: { $ne: admin_id } }],
  });
  return events;
};

eventSchema.statics.deleteEvent = async function (event_id) {
  const event = await this.findByIdAndDelete(event_id);
  return event;
};
// // static method to login user
// userSchema.statics.createEvent = async function () {
//   // const user = await this.findOne({ email });
//   // if (user) {
//   //   const auth = await bcrypt.compare(password, user.password);
//   //   if (auth) {
//   //     return user;
//   //   }
//   //   throw Error("incorrect password");
//   // }
//   // throw Error("incorrect email");
// };

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
