import connectToDB from "@/configs/db";
import { authAdmin, authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import styles from "@/styles/dashboard.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";
import Status from "@/components/templates/index/status/Status";
import ChartContact from "@/components/templates/index/chartContact/ChartContact";
import Reservation from "@/components/templates/index/reservation/Reservation";
import UserInfo from "@/components/templates/index/userInfo/UserInfo";
import VisitTable from "@/components/templates/index/visitTable/VisitTable";
import ClientModel from "@/models/Client";
import ConsultantModel from "@/models/Consultant";
import ReqBuyModel from "@/models/ReqBuy";
import Head from "next/head";

async function Page() {
  await connectToDB();

  const user = await authUser();
  if (!user) {
    redirect("/login");
  }

  const [consultantLoggedIn, admin] = await Promise.all([
    authConsultant(),
    authAdmin(),
  ]);

  if (!consultantLoggedIn && !admin) {
    redirect("/houseList");
  }

  const [clients, consultant] = await Promise.all([
    ClientModel.find({}).populate("houses").lean(),
    ConsultantModel.findOne({ user: user._id })
      .populate("clients")
      .populate("houses")
      .lean(),
  ]);

  let reqBuys = [];
  if (consultant) {
    reqBuys = await ReqBuyModel.find({ consultant: consultant._id })
      .populate("consultant")
      .lean();
  }

  const consultantData = consultant
    ? JSON.parse(JSON.stringify(consultant))
    : null;
  const reqBuysData = JSON.parse(JSON.stringify(reqBuys));
  const clientsData = JSON.parse(JSON.stringify(clients));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dashboard",
    name: "داشبورد مدیریت املاک آرامش",
    description: "پنل مدیریت و کنترل سیستم املاک آرامش",
    url: "https://yourdomain.com/dashboard",
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
          name: "داشبورد مدیریت",
          item: "https://yourdomain.com/dashboard",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <title>داشبورد مدیریت | پنل کنترل املاک آرامش</title>
        <meta name="description" content="داشبورد مدیریت سیستم املاک آرامش شامل آمار، نمودارها، وضعیت املاک و مدیریت مشتریان" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.containerFull}>
              <section className={styles.content}>
                <div className={styles.row}>
                  <Status />
                </div>
                <div className={styles.row_secondary}>
                  <ChartContact />
                  <Reservation />
                </div>
                <div className={styles.row_third}>
                  {consultantData && (
                    <div className={styles.userInfo_wrapper}>
                      <UserInfo
                        consultant={consultantData}
                        reqBuys={reqBuysData}
                        clients={consultantData.clients || []}
                        houses={consultantData.houses || []}
                      />
                    </div>
                  )}
                  <div className={styles.visitTable_wrapper}>
                    <VisitTable clients={clientsData} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </PanelLayout>
    </>
  );
}

export default Page;