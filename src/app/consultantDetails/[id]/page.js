import PanelLayout from "@/components/layouts/PanelLayout";
import ConsultantCallInfo from "@/components/templates/consultantDetails/consultantCallInfo/ConsultantCallInfo";
import ConsultantInfo from "@/components/templates/consultantDetails/consultantInfo/ConsultantInfo";
import ConsultantTabs from "@/components/templates/consultantDetails/ConsultantTabs/ConsultantTabs";
import styles from "@/styles/consultantDetails.module.css";
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant";
import { authConsultant, authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import ReqBuyModel from "@/models/ReqBuy";
import ClientModel from "@/models/Client";

function generateJsonLd(consultant) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": consultant.fullName || "مشاور املاک",
    "description": consultant.bio || "مشاور املاک متخصص",
    "url": `https://yourdomain.com/consultantDetails/${consultant._id}`,
    "telephone": consultant.phone || "",
    "email": consultant.email || "",
    "image": consultant.img || "/default-consultant.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": consultant.city || "تهران",
      "addressCountry": "IR"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.6892,
        "longitude": 51.3890
      },
      "geoRadius": "50000"
    }
  };
}

async function Page({ params }) {
  await connectToDB();

  const consultant = await ConsultantModel.findOne({ _id: params.id })
    .populate("clients")
    .populate("houses")
    .lean();

  if (!consultant) {
    redirect("/dashboard");
  }

  const [reqBuys, clients, user, consultantLoggedIn] = await Promise.all([
    ReqBuyModel.find({ consultant: params.id }).populate("houses").lean(),
    ClientModel.find({ consultant: params.id }).populate("houses").lean(),
    authUser(),
    authConsultant(),
  ]);

  if (!user) {
    redirect("/login");
    return null;
  }

  if (user.role === "USER") {
    redirect(`/userProfile/${user._id}`);
  }

  if (user.role === "ADMIN") {
    redirect(`/adminProfile/${user._id}`);
  }

  const consultantProfile = await ConsultantModel.findOne({
    user: user._id,
  });

  if (consultant._id.toString() !== consultantProfile._id.toString()) {
    redirect(`/consultantDetails/${consultantProfile._id}`);
  }

  if (!consultantLoggedIn) {
    redirect("/allConsultants");
    return null;
  }

  const consultantData = JSON.parse(JSON.stringify(consultant));
  const clientsData = JSON.parse(JSON.stringify(clients || []));
  const housesData = JSON.parse(JSON.stringify(consultant.houses || []));
  const reqBuysData = JSON.parse(JSON.stringify(reqBuys || []));

  const jsonLdData = generateJsonLd(consultant);

  return (
    <>
      <head>
        <title>پروفایل مشاور املاک | جزئیات مشاور املاک آرامش</title>
        <meta name="description" content="مشاهده پروفایل کامل مشاور املاک، اطلاعات تماس، املاک منتشر شده و عملکرد مشاور در سیستم املاک آرامش" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
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
                  <ConsultantInfo
                    consultant={consultantData}
                    clients={consultantData.clients || []}
                    houses={housesData}
                  />
                  <ConsultantCallInfo consultant={consultantData} />
                </div>
                <div
                  className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
                >
                  <ConsultantTabs
                    houses={housesData}
                    consultant={consultantData}
                    clients={clientsData}
                    reqBuys={reqBuysData}
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