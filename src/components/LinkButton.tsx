import { Link } from '@tanstack/react-router'
import { type LucideIcon } from 'lucide-react'

export type LinkButtonProps = {
  icon: LucideIcon
  label: string
  to: string
}

export function LinkButton({ label, to, ...props }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className="text-lg font-medium flex items-center gap-4 p-2 rounded-md bg-gradient-to-r from-tx-400 to-amber-400 h-14 shadow-md transition-all hover:shadow-lg w-full border border-tx-400"
    >
      <div className="flex items-center justify-center bg-tx-300 p-2 h-full aspect-square rounded-full drop-shadow-sm">
        <props.icon className="h-full" />
      </div>
      <span>{label}</span>
    </Link>
  )
}
