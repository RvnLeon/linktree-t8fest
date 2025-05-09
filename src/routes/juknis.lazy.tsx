import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/juknis')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url(/assets/photos/bg.jpeg)] bg-cover filter blur-[2px] z-0"></div>
      <div className="h-full w-full max-w-lg bg-gradient-to-b from-white to-zinc-100 shadow-xl rounded-md overflow-hidden z-10 p-4"></div>
    </div>
  )
}
