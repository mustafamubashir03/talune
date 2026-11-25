import { HugeiconsIcon } from "@hugeicons/react"
import { BookOpen01Icon } from "@hugeicons/core-free-icons"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SourcesPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6 lg:p-8">
      <div className="space-y-1.5">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Sources
        </h1>
        <p className="text-sm text-muted-foreground">
          The documents and links behind your work.
        </p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader className="items-center text-center">
          <span className="mb-1 flex size-10 items-center justify-center rounded-2xl bg-chart-2/15 text-chart-4 dark:text-chart-2">
            <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={1.6} className="size-5" />
          </span>
          <CardTitle>No sources yet</CardTitle>
          <CardDescription>Sources you add to a notebook will appear here.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
