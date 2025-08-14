import connectToDB from '@/configs/db'
import { authUser } from '@/utils/authUser'
import { redirect } from 'next/navigation'
import React from 'react'
import UserModel from "@/models/User"
import styles from "@/styles/consultantDetails.module.css"
import PanelLayout from '@/components/layouts/PanelLayout'
import ConsultantInfo from '@/components/templates/consultantDetails/consultantInfo/ConsultantInfo'
import ConsultantCallInfo from '@/components/templates/consultantDetails/consultantCallInfo/ConsultantCallInfo'
import ConsultantTabs from '@/components/templates/consultantDetails/ConsultantTabs/ConsultantTabs'

async function page({ params }) {

    connectToDB()

    const userLoggedIn = await authUser()

    if(!userLoggedIn) {
        redirect("/login")
    }

    const user = await UserModel.findOne({_id: params.id}).lean()

  return (
    <PanelLayout>
            <div className={styles.contentWrapper}>
        <div className={styles.containerFull}>
          {/* Main content */}
          <section className={styles.content}>
            <div className={styles.row}>
              <div
                className={`${styles.col12} ${styles.colLg5} ${styles.colXl4}`}
              >
                <ConsultantInfo  user={JSON.parse(JSON.stringify(user))}
                />
                <ConsultantCallInfo user={JSON.parse(JSON.stringify(user))}
                />
              </div>
              <div
                className={`${styles.col12} ${styles.colLg7} ${styles.colXl8}`}
              >
                <ConsultantTabs  user={JSON.parse(JSON.stringify(user))}
                />
                {/* /.nav-tabs-custom */}
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    </PanelLayout>
  )
}

export default page
