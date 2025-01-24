import { BookHeart, Calendar, ChevronUp, Home, Inbox, LogOutIcon, Route, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"
import { Link, usePage } from "@inertiajs/react"
import { User } from "@/types"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Dropdown from "../Dropdown"

// Menu items.
const items = [
  {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
  {
    id: 2,
    title: "Rekomendasikan",
    url: "/books",
    icon: BookHeart,
  },
  {
    id: 3,
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

// accout menu items
const accountItems = [
  {
    id: 1,
    title: "Account",
    url: "profile.edit",
    icon: User2,
    method: "get",
  },
  {
    id: 2,
    title: "Sign out",
    url: "logout",
    icon: LogOutIcon,
    method: "post",
  },
]

export function AppSidebar() {
  const pathName = window.location.pathname
  const user = usePage().props.auth.user;
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link href="/" className="flex items-center space-x-2 w-full">
                  <span className="font-bold text-zinc-900 dark:text-zinc-200 text-xl">me.</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  {/* jika url == dengan url /url/.. */}
                  {pathName.startsWith(item.url) ?
                    <SidebarMenuButton asChild isActive>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                    :
                    <SidebarMenuButton key={index} asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  }

                  {/* <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user.name.length > 0 ? user.name.split(' ')[1] : user.name}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {accountItems.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href={route(`${item.url}`)} method={item.method as 'get' | 'post'}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
