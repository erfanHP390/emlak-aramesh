import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    type: {
      type: String,
      enum: ["info", "success", "warning", "danger"],
      default: "info",
    },
    link: { type: String, default: "#" },
    icon: {
      type: String,
      enum: ["users", "shopping", "warning", "task"],
      default: "info",
    },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);
