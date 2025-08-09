import React from 'react'
import UserList from '../../components/templates/userList/UserList'
import PanelLayout from '@/components/layouts/PanelLayout'
import connectToDB from '@/configs/db'
import { authUser } from '@/utils/authUser'
import UserModel from "@/models/User"

async function page() {

  connectToDB()
  const user = await authUser()

  const users = await UserModel.find({})

  return (
    <PanelLayout>
      <UserList  users={users} />
    </PanelLayout>
  )
}

export default page
