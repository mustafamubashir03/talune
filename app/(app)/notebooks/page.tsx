import { HugeiconsIcon } from "@hugeicons/react"
import { Notebook01Icon } from "@hugeicons/core-free-icons"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NotebooksPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6 lg:p-8">
      <div className="space-y-1.5">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Notebooks
        </h1>
        <p className="text-sm text-muted-foreground">
          All of your research, gathered in one place.
        </p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader className="items-center text-center">
          <span className="mb-1 flex size-10 items-center justify-center rounded-2xl bg-chart-2/15 text-chart-4 dark:text-chart-2">
            <HugeiconsIcon icon={Notebook01Icon} strokeWidth={1.6} className="size-5" />
          </span>
          <CardTitle>No notebooks yet</CardTitle>
          <CardDescription>Notebooks you create will appear here.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
