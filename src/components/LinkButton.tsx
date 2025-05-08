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
      className="flex items-center gap-4 py-2 px-4 rounded-md bg-gradient-to-r from-tx-400 to-tx-500 h-14 shadow-md transition-all hover:shadow-lg w-full border border-tx-400"
    >
      <props.icon className="h-full" />
      <span>{label}</span>
    </Link>
  )
}
