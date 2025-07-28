import LockScreen from '@/components/templates/auth/lockScreen/lockScreen'
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/authUser'
import React from 'react'

async function page() {

  connectToDB()
  const user = await authUser()

  return (
    <>
      <LockScreen user={user} />
    </>
  )
}

export default page
