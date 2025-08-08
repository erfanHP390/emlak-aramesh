const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    img: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, }
);



const model =
  mongoose.models.Contact || mongoose.model("Contact", schema);
export default model;
