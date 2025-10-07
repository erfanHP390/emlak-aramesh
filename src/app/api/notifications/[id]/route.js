import connectToDB from "@/configs/db";
import Notification from "@/models/Notification";

export async function PATCH(req, { params }) {
  await connectToDB();
  const { id } = params;
  const body = await req.json();

  const notification = await Notification.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(notification);
}

export async function DELETE() {
  await connectToDB();
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  await Notification.deleteMany({ isRead: true, createdAt: { $lt: sevenDaysAgo } });
  return NextResponse.json({ message: "Old notifications cleaned up" });
}