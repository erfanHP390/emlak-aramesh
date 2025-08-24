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

function generateJsonLd(user) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `پروفایل کاربری ${user.fullname || user.email}`,
    description: `صفحه پروفایل شخصی کاربر در سیستم مدیریت املاک آرامش`,
    url: `https://yourdomain.com/userProfile/${user._id}`,
    mainEntity: {
      "@type": "Person",
      name: user.fullname || "کاربر",
      email: user.email,
      telephone: user.phoneNumber || undefined,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: "https://yourdomain.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "پنل کاربری",
          item: "https://yourdomain.com/dashboard",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "پروفایل کاربری",
          item: `https://yourdomain.com/userProfile/${user._id}`,
        },
      ],
    },
  };
}

async function Page({ params }) {
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

  if (!user) {
    redirect("/houseList");
  }

  const userProfile = await UserModel.findOne({ _id: userLoggedIn._id });

  if (userProfile._id.toString() !== user._id.toString()) {
    redirect(`/userProfile/${userProfile._id}`);
  }

  const clients = await ClientModel.find({ _id: user?.client })
    .populate("houses")
    .lean();

  const reqBuys = await ReqBuysModel.find({ email: user?.email })
    .populate("houses")
    .lean();

  const clientHouses = clients.flatMap((client) => client.houses || []);
  const jsonLdData = generateJsonLd(user);

  return (
    <>
      <head>
        <title>{`${user.fullname || "پروفایل کاربری"} | سیستم مدیریت املاک آرامش`}</title>
        <meta name="description" content={`پروفایل کاربری ${user.fullname || user.email} در سیستم مدیریت املاک آرامش`} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <meta property="og:title" content={`${user.fullname || "پروفایل کاربری"} | املاک آرامش`} />
        <meta property="og:description" content="پروفایل کاربری در سیستم مدیریت املاک آرامش" />
        <meta property="og:url" content={`https://yourdomain.com/userProfile/${user._id}`} />
        <meta property="og:site_name" content="املاک آرامش" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="profile" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.content}>
              <div className={styles.row}>
                <div
                  className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}
                >
                  <UserInfo user={JSON.parse(JSON.stringify(user))} />
                  <UserCallInfo user={JSON.parse(JSON.stringify(user))} />
                </div>
                <div
                  className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
                >
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

export default Page;