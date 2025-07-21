const mongoose = require("mongoose");
require("./Client");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "کاربر",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    guildID: {
      type: String,
    },
    isAccept: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "USER",
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client", 
    },
    refreshToken: String,
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model("User", schema);
export default model;
