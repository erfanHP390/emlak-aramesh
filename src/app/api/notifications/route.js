import connectToDB from "@/configs/db";
import Notification from "@/models/Notification";

export async function GET() {
  await connectToDB();
  try {
    const notifications = await Notification.find({ isRead: false }).sort({
      createdAt: -1,
    });
    return NextResponse.json(notifications);
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: `interval error server ${err}` },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectToDB();

  try {
    const body = await req.json();
    const { text, type, link, icon } = body;

    const newNotification = await Notification.create({
      text,
      type,
      link,
      icon,
    });

    return Response.json(newNotification, { status: 201 });
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: `interval error server ${err}` },
      { status: 500 }
    );
  }
}
