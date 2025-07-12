const mongoose = require("mongoose");

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
    img: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "USER",
    },

    refreshToken: String,
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model("User", schema);
export default model;
