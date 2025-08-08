import PanelLayout from '@/components/layouts/PanelLayout'
import ContactForm from '@/components/templates/contactForm/ContactForm'
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/authUser'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {

  connectToDB()
  const user = await authUser()

  if(!user) {
    redirect("/login")
  }

  return (
    <PanelLayout>
      <ContactForm user={user} />
    </PanelLayout>
  )
}

export default page
