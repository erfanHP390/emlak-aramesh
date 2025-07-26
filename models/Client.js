const mongoose = require("mongoose");
require("./User");
require("./House");
require("./Consultant");

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
    consultantCode : {
      type: String,
      required: true
    },
    consultant: {
      type: mongoose.Types.ObjectId,
      ref: "Consultant",
      required: true
    },
    houses: [
      {
        type: mongoose.Types.ObjectId,
        ref: "House",
      },
    ],
  },
  { timestamps: true }
);

const model = mongoose.models.Client || mongoose.model("Client", schema);
export default model;
