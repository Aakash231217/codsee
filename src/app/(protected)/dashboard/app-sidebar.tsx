'use client'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader,SidebarGroupContent, SidebarMenuItem,SidebarMenuButton } from "~/components/ui/sidebar"
import { LayoutDashboard,Bot, Presentation, CreditCard } from "lucide-react"
import { url } from "inspector"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items=[
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title:"Q/A",
        url:"/qa",
        icon:Bot,

    },
    {
        title:"Meetings",
        url:"/meetings",
        icon:Presentation,
    },
    {
        title:"Billing",
        url:"/billing",
        icon:CreditCard
    }
]


export function AppSidebar(){
    const pathname = usePathname()
    return(
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                Logo->
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <SidebarGroupContent>
                            </SidebarGroupContent>
                            {items.map(item=>{
                                return(
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                      <Link href={item.url} className={cn((
                                        '!bg-primary !text-white':pathname===item.url
                                      ))}>
                                      </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                                )
})}
                    </SidebarGroupLabel>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar> )
}