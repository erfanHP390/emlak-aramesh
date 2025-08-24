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

// تابع برای تولید متادیتا
export async function generateMetadata({ params }) {
  await connectToDB();
  const consultant = await ConsultantModel.findOne({ _id: params.id }).lean();
  
  return {
    title: `${consultant?.firstName || ''} ${consultant?.lastName || ''} | پروفایل مشاور سیستم املاک آرامش`,
    description: `پروفایل مشاور املاک ${consultant?.firstName || ''} ${consultant?.lastName || ''} - مشاهده اطلاعات تماس، املاک ثبت شده و فعالیت‌های مشاور در سیستم مدیریت املاک آرامش.`,
    keywords: `مشاور املاک ${consultant?.firstName || ''} ${consultant?.lastName || ''}, پروفایل مشاور, اطلاعات تماس مشاور, املاک ثبت شده, سیستم املاک آرامش, مشاورین املاک`,
    authors: [{ name: "املاک آرامش" }],
    robots: "noindex, nofollow",
    openGraph: {
      title: `${consultant?.firstName || ''} ${consultant?.lastName || ''} | مشاور املاک`,
      description: `پروفایل مشاور املاک ${consultant?.firstName || ''} ${consultant?.lastName || ''} در سیستم مدیریت املاک آرامش`,
    },
  };
}

// ساختار داده‌های سازمان‌یافته برای سئو
const generateJsonLd = (consultant) => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: `${consultant?.firstName || ''} ${consultant?.lastName || ''}`,
  description: `مشاور املاک در سیستم مدیریت املاک آرامش`,
  email: consultant?.email,
  telephone: consultant?.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: consultant?.location || 'نامشخص'
  }
});


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