import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showName?: boolean
}

export function Logo({ className, size = "md", showName = true }: LogoProps) {
  // Map sizes to responsive text sizing rules
  const sizeClasses = {
    sm: "text-lg tracking-tight",
    md: "text-xl tracking-tighter font-extrabold",
    lg: "text-2xl tracking-widest font-black",
  }

  if (!showName) return null

  return (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      <span className={cn("font-sans uppercase text-foreground", sizeClasses[size])}>
        NCRMAPS
      </span>
    </div>
  )
}
