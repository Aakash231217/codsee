import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { SidebarProvider } from '~/components/ui/sidebar'


type Props = {
    children: React.ReactNode
}
const Sidebarlayout = ({children}:Props) => {
  return (
    <SidebarProvider>
      {/*App Sidebar*/}
      <main className='w-full m-2'>
        <div className='flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4'>
            {/*SearchBAr*/}

            <div className='ml-auto'>

            </div>
            <UserButton
        </div>
      </main>
    </SidebarProvider>
  )
}

export default Sidebarlayout;