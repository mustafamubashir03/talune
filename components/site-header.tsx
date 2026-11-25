"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { HugeiconsIcon } from "@hugeicons/react"
import { MoonIcon, Sun01Icon } from "@hugeicons/core-free-icons"

import { getRouteLabel } from "@/lib/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Crumb = { label: string; href: string }

function AppBreadcrumb() {
  const pathname = usePathname() || "/"

  const crumbs = React.useMemo<Crumb[]>(() => {
    const trail: Crumb[] = [{ label: "Workspace", href: "/" }]
    let href = ""

    for (const segment of pathname.split("/").filter(Boolean)) {
      href += `/${segment}`
      trail.push({ label: getRouteLabel(segment), href })
    }

    return trail
  }, [pathname])

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList className="gap-2 text-[13px]">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <React.Fragment key={crumb.href}>
              {index > 0 && (
                <BreadcrumbSeparator className="text-muted-foreground/50 [&>svg]:size-3" />
              )}
              <BreadcrumbItem className="min-w-0">
                {isLast ? (
                  <BreadcrumbPage className="truncate">{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<Link href={crumb.href} />}
                    className="truncate"
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <HugeiconsIcon
              icon={Sun01Icon}
              strokeWidth={1.8}
              className="hidden dark:block"
            />
            <HugeiconsIcon
              icon={MoonIcon}
              strokeWidth={1.8}
              className="block dark:hidden"
            />
          </Button>
        }
      />
      <TooltipContent>Toggle theme</TooltipContent>
    </Tooltip>
  )
}

export default function SiteHeader() {
  return (
    // avoid-ai-design-ignore: K3 — translucent header is intentional (preset menuColor=default-translucent).
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border/70 bg-background/85 px-4 backdrop-blur-md lg:px-6">
      <Tooltip>
        <TooltipTrigger render={<SidebarTrigger />} />
        <TooltipContent>Toggle sidebar (⌘B)</TooltipContent>
      </Tooltip>

      <Separator orientation="vertical" className="mx-1 h-4" />

      <AppBreadcrumb />

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <ThemeToggle />
        <Separator orientation="vertical" className="mx-0.5 h-4" />
        <Avatar size="sm">
          <AvatarFallback className="bg-chart-2/15 text-[10px] font-semibold text-chart-4 dark:text-chart-2">
            TW
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
