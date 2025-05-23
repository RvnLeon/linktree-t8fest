import { createFileRoute } from '@tanstack/react-router'
import logoImage from '../assets/photos/logo.png'
import { LinkButton } from '../components/LinkButton'
import { BookOpenText, Contact } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center p-4 overflow-hidden flex-col">
      <div className="absolute inset-0 bg-[url(/assets/photos/bg.jpeg)] bg-cover filter blur-[2px] z-0"></div>
      <div className="h-full w-full max-w-lg bg-gradient-to-b from-white to-zinc-100 shadow-xl rounded-md overflow-hidden z-10">
        <div className="flex flex-col items-center gap-4 overflow-y-auto size-full px-4 py-8">
          <div className="size-48 p-3 bg-zinc-200/50 rounded-full">
            <img src={logoImage} alt="logo.png" className="size-full" />
          </div>
          <h1 className="text-6xl font-light ">T8CHNOFEST</h1>
          <p className="-mt-4 text-sm font-medium">
            Teknologi dan Soundsystems
          </p>
          <div className="flex flex-col gap-4 size-full">
            <LinkButton
              icon={BookOpenText}
              label="Juklak Juknis T8"
              to="/juknis"
            />
            <LinkButton
              icon={BookOpenText}
              label="CP Umum"
              to="https://wa.me/6287882829131"
            />
            <LinkButton
              icon={Contact}
              label="CP Turnamen"
              to="https://wa.me/6287764825736"
            />
            <LinkButton
              icon={Contact}
              label="CP Mobile Legend"
              to="https://wa.me/6289531671507"
            />
            <LinkButton
              icon={Contact}
              label="CP Cerdas Cermat Informatika"
              to="https://wa.me/6285215319829"
            />
            <LinkButton
              icon={Contact}
              label="CP Web Design"
              to="https://wa.me/6281905318471"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <p className="text-white font-thin">Created by Malik and Revan</p>
      </div>
    </div>
  )
}
