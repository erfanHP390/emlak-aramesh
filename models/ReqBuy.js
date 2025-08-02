const mongoose = require("mongoose");
require("./House");
require("./Consultant");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    consultant: {
      type: mongoose.Types.ObjectId,
      ref: "Consultant",
      required: true,
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

const model = mongoose.models.ReqBuy || mongoose.model("ReqBuy", schema);
export default model;
