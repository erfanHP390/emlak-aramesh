import PanelLayout from "@/components/layouts/PanelLayout";
import styles from "@/styles/allConsultants.module.css";
import connectToDB from "@/configs/db";
import ConsultantModel from "@/models/Consultant";
import CardConsultant from "@/components/modules/cardConsultant/CardConsultant";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

async function Page() {
  await connectToDB();
  const user = await authUser();
  const consultants = await ConsultantModel.find({}).lean();

  if (!user) {
    redirect("/login");
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "لیست مشاورین املاک آرامش",
    description: "لیست کامل مشاورین املاک در سیستم مدیریت املاک آرامش",
    url: "https://yourdomain.com/consultants",
    numberOfItems: consultants.length,
    itemListElement: consultants.map((consultant, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RealEstateAgent",
        name: consultant.fullName || "مشاور املاک",
        description: consultant.bio || "مشاور املاک متخصص",
        url: `https://yourdomain.com/consultant/${consultant._id}`,
        telephone: consultant.phone || "",
        email: consultant.email || "",
      },
    })),
  };

  return (
    <>
      <head>
        <title>لیست مشاورین املاک | مدیریت مشاورین املاک آرامش</title>
        <meta name="description" content="مشاهده و مدیریت کامل لیست مشاورین املاک در سیستم مدیریت املاک آرامش با اطلاعات تماس و عملکرد" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <PanelLayout>
        <div className={styles.contentWrapper}>
          <div className={styles.containerFull}>
            <section className={styles.contentSection}>
              <div className={styles.consultantsRow}>
                {consultants.length > 0 ? (
                  consultants.map((consultant) => (
                    <CardConsultant
                      key={consultant._id.toString()}
                      {...consultant}
                      image={consultant.img}
                    />
                  ))
                ) : (
                  <div className={styles.noConsultants}>
                    <p>هیچ مشاوری یافت نشد</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </PanelLayout>
    </>
  );
}

export default Page;