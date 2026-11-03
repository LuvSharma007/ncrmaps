import { cn } from "@/lib/utils"
import { Compass } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showName?: boolean
}

export function Logo({ className, size = "md", showName = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight font-bold",
    lg: "text-xl tracking-tight font-extrabold",
  }

  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  }

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      <div className="flex items-center justify-center p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-colors">
        <Compass className={cn(iconSizes[size], "transition-transform group-hover:rotate-45 duration-300")} />
      </div>
      {showName && (
        <span className={cn("font-sans tracking-tight text-white flex items-center gap-1", sizeClasses[size])}>
          <span>NCR</span>
          <span className="text-amber-400">MAPS</span>
        </span>
      )}
    </div>
  )
}

