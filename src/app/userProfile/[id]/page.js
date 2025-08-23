import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import UserModel from "@/models/User";
import styles from "@/styles/consultantDetails.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import UserInfo from "@/components/templates/userProfile/userInfo/UserInfo";
import UserCallInfo from "@/components/templates/userProfile/userCallInfo/UserCallInfo";
import UserTabs from "@/components/templates/userProfile/userTabs/UserTabs";
import ClientModel from "@/models/Client";
import ReqBuysModel from "@/models/ReqBuy";
import ConsultantModel from "@/models/Consultant";
import { Metadata } from "next";

export async function generateMetadata({ params })  {
  const user = await UserModel.findOne({ _id: params.id }).lean();
  
  return {
    title: `${user?.name || "کاربر"} | پروفایل کاربری سیستم املاک آرامش`,
    description: `پروفایل کاربر ${user?.name || ""} در سیستم مدیریت املاک آرامش. مدیریت اطلاعات شخصی، املاک خریداری شده و درخواست‌های خرید.`,
    keywords: "پروفایل کاربر, مدیریت حساب کاربری, سیستم املاک آرامش, املاک خریداری شده, درخواست خرید ملک",
    openGraph: {
      title: `${user?.name || "کاربر"} | پروفایل کاربری`,
      description: `پروفایل کاربر ${user?.name || ""} در سیستم مدیریت املاک آرامش`,
    },
  };
}

// ساختار داده‌های سازمان‌یافته برای سئو
const generateJsonLd = (user) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: `پروفایل کاربر ${user?.name || ''}`,
  description: `صفحه پروفایل کاربر ${user?.name || ''} در سیستم مدیریت املاک آرامش`,
  subjectOf: {
    '@type': 'Person',
    name: user?.name,
    email: user?.email
  }
});

async function page({ params }) {
  await connectToDB();

  const userLoggedIn = await authUser();
  const consultant = await authConsultant();
  const admin = await authAdmin();

  if (!userLoggedIn) {
    redirect("/login");
  }

  if (userLoggedIn.role === "CONSULTANT") {
    const consultantInfos = await ConsultantModel.findOne({
      user: consultant._id,
    });
    redirect(`/consultantDetails/${consultantInfos._id}`);
  }

  if (userLoggedIn.role === "ADMIN") {
    redirect(`/adminProfile/${admin._id}`);
  }

  const user = await UserModel.findOne({ _id: params.id }).lean();
  const clients = await ClientModel.find({ _id: user?.client })
    .populate("houses")
    .lean();
  const reqBuys = await ReqBuysModel.find({ email: user?.email })
    .populate("houses")
    .lean();

  const userProfile = await UserModel.findOne({_id: userLoggedIn._id})

  if (userProfile._id.toString() !== user?._id.toString()) {
    redirect(`/userProfile/${userProfile._id}`);
  }

  if (!user) {
    redirect("/houseList");
  }

  const clientHouses = clients.flatMap((client) => client.houses || []);

  const jsonLdData = generateJsonLd(user);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.content}>
              <div className={styles.row}>
                <div className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}>
                  <UserInfo user={JSON.parse(JSON.stringify(user))} />
                  <UserCallInfo user={JSON.parse(JSON.stringify(user))} />
                </div>
                <div className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}>
                  <UserTabs
                    user={JSON.parse(JSON.stringify(user))}
                    clients={JSON.parse(JSON.stringify(clients))}
                    reqBuys={JSON.parse(JSON.stringify(reqBuys))}
                    clientHouses={JSON.parse(JSON.stringify(clientHouses))}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </PanelLayout>
    </>
  );
}

export default page;