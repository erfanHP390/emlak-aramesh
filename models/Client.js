const mongoose = require("mongoose");
require("./User");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "کاربر",
    },
    codeHouse: {
      type: String,
      required: true,
    },
    home: {
      type: mongoose.Types.ObjectId,
      ref: "Home",
    },
    kindBuy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    //  consultant: {
    //         type:  mongoose.Types.ObjectId,
    //         ref: "Consultant"
    //  },
    // house: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "House",
    // }
  },
  { timestamps: true }
);

const model = mongoose.models.Client || mongoose.model("Client", schema);
export default model;
