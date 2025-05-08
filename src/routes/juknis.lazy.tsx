import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/juknis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/juknis"!</div>
}
