import Link from "next/link"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  BookOpen01Icon,
  Notebook01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const destinations = [
  {
    title: "Notebooks",
    description: "Organize your research into focused notebooks.",
    href: "/notebooks",
    icon: Notebook01Icon,
  },
  {
    title: "Sources",
    description: "Bring together the files and links you rely on.",
    href: "/sources",
    icon: BookOpen01Icon,
  },
]

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6 lg:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Your workspace
          </h1>
          <p className="text-sm text-muted-foreground">
            A quiet place to collect sources and build on your ideas.
          </p>
        </div>
        <Button nativeButton={false} render={<Link href="/notebooks" />}>
          Open notebooks
        </Button>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Get started</CardTitle>
          <CardDescription>Pick a place to begin.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-1">
          {destinations.map((destination) => (
            <Link
              key={destination.href}
              href={destination.href}
              className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-chart-2/15 text-chart-4 dark:text-chart-2">
                <HugeiconsIcon icon={destination.icon} strokeWidth={1.8} className="size-4" />
              </span>
              <span className="grid min-w-0 flex-1 gap-0.5">
                <span className="text-sm font-medium">{destination.title}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {destination.description}
                </span>
              </span>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                strokeWidth={1.8}
                className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
