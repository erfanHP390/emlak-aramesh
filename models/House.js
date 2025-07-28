const mongoose = require("mongoose");
require("./Client");
require("./Consultant");

const houseSchema = mongoose.Schema(
  {
    codeHouse: {
      type: String,
      required: true,
      unique: true, 
    },
    agencyID: {
      type: String,
      required: true, 
    },
    name: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: false, 
    },
    location: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: String,
      required: true, 
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true, 
    },
    bedrooms: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    parking: {
      type: String,
      default: false,
    },
    storage: {
      type: String,
      default: false, 
    },
    elevator: {
      type: String,
      default: false,
    },
    masterRoom: {
      type: String,
      default: false,
    },
    yearBuilt: {
      type: String,
      required: true,
    },
    features: {
      type: [String], 
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client", 
      default: null,
    },
    consultant: {
      type: mongoose.Types.ObjectId,
      ref: "Consultant",
    },
  },
  { timestamps: true }
);

const House = mongoose.models.House || mongoose.model("House", houseSchema);

module.exports = House;
