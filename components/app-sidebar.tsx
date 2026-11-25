"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"

import { workspaceNav } from "@/lib/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
  SidebarRail,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="gap-2 px-3 py-4 group-data-[collapsible=icon]:px-2">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-4" />
          </div>
          <div className="grid min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <span className="font-heading text-sm font-semibold tracking-tight">
              Talune
            </span>
            <span className="truncate text-[11px] text-muted-foreground">
              Notebook workspace
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70 group-data-[collapsible=icon]:hidden">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaceNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={item.title}
                    render={<Link href={item.href} />}
                    className="data-active:bg-sidebar-foreground/75! data-active:text-sidebar! dark:data-active:bg-sidebar-accent! dark:data-active:text-sidebar-accent-foreground!"
                  >
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/70 px-3 py-3 group-data-[collapsible=icon]:px-2">
        <div className="flex items-center gap-2.5 px-1 py-1 group-data-[collapsible=icon]:justify-center">
          <Avatar size="sm">
            <AvatarFallback className="bg-primary/10 text-[10px] font-semibold text-primary">
              TW
            </AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <span className="truncate text-xs font-medium">Talune workspace</span>
            <span className="truncate text-[11px] text-muted-foreground">
              Personal plan
            </span>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
