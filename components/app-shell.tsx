"use client"

import * as React from "react"

import AppSidebar from "@/components/app-sidebar"
import SiteHeader from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delay={150}>
      <SidebarProvider className="min-h-svh bg-background">
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
