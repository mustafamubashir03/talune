import {
  BookOpen01Icon,
  Home01Icon,
  Notebook01Icon,
} from "@hugeicons/core-free-icons"

export const workspaceNav = [
  { title: "Home", href: "/", icon: Home01Icon },
  { title: "Notebooks", href: "/notebooks", icon: Notebook01Icon },
  { title: "Sources", href: "/sources", icon: BookOpen01Icon },
] as const

export function getRouteLabel(segment: string) {
  const route = workspaceNav.find((item) => item.href === `/${segment}`)

  if (route) return route.title

  let label = segment
  try {
    label = decodeURIComponent(segment)
  } catch {
    // Keep the raw segment when it is not valid percent-encoding.
  }

  return label
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
}
