import { createFileRoute } from '@tanstack/react-router'
import logoImage from '../assets/photos/logo.png'
import { LinkButton } from '../components/LinkButton'
import { BookOpenText, Contact } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[url(/assets/photos/bg.jpeg)] p-4">
      <div className="flex flex-col items-center h-full w-full max-w-lg bg-[#f3f3f3] shadow-xl rounded-md px-4 py-8 overflow-y-auto gap-4">
        <div className="size-32 p-4 bg-zinc-200 rounded-full">
          <img src={logoImage} alt="logo.png" className="size-full" />
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tx-400 to-tx-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
          T8CHNOFEST
        </h1>
        <p className="-mt-4 text-sm">Cerdas, Tangguh, Peduli</p>

        <div className="flex flex-col gap-4 size-full">
          <LinkButton icon={BookOpenText} label="Juklak Juknis T8" to="" />
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
  )
}
