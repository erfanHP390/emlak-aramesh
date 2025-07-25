const mongoose = require("mongoose");
require("./Client"); // برای ارتباط با مدل Client

const houseSchema = mongoose.Schema(
  {
    codeHouse: {
      type: String,
      required: true,
      unique: true, // کد شش‌رقمی یکتا
    },
    agencyID: {
      type: String,
      required: true, // شناسه صنفی املاک
    },
    name: {
      type: String,
      required: true, // نام ملک
    },
    location: {
      type: String,
      required: true, // مختصر: مثلا محدوده یا لوکیشن جی‌پی‌اس
    },
    fullAddress: {
      type: String,
      required: true, // آدرس کامل
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true, // فروش یا اجاره
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    floor: {
      type: Number,
      required: true,
    },
    parking: {
      type: Boolean,
      default: false,
    },
    storage: {
      type: Boolean,
      default: false, // انباری
    },
    elevator: {
      type: Boolean,
      default: false,
    },
    masterRoom: {
      type: Boolean,
      default: false,
    },
    yearBuilt: {
      type: Number,
      required: true,
    },
    features: {
      type: [String], // آرایه‌ای از امکانات، مثلا: ["کابینت MDF", "کولر گازی"]
      default: [],
    },
    images: {
      type: [String], // آرایه URL عکس‌ها
      default: [],
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client", // ارتباط با مالک (مشتری)
      required: false,
    },
  },
  { timestamps: true }
);

const House =
  mongoose.models.House || mongoose.model("House", houseSchema);

module.exports = House;
