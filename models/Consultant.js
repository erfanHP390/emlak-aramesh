const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: { 
      type: String, 
      default: "" 
    },
    hisCode: { 
      type: String, 
      required: true 
    },
    phone: { 
      type: String, 
      required: true 
    },
    birthDay: { 
      type: String, 
      required: true 
    },
    age: { 
      type: Number, 
      required: true 
    },
    sex: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    user: { 
      type: mongoose.Types.ObjectId, 
      ref: "User" 
    },
    img: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    socials: { 
      type: [String], 
      default: [] 
    },
  },
  { timestamps: true, 
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true } 
  }
);

schema.virtual("clients", {
  ref: "Client",
  localField: "_id",
  foreignField: "consultant",
});

schema.virtual("houses", {
  ref: "House",
  localField: "_id",
  foreignField: "consultant",
  justOne: false,
});

const model =
  mongoose.models.Consultant || mongoose.model("Consultant", schema);
export default model;
