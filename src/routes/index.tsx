import { createFileRoute } from '@tanstack/react-router'
import logoImage from '../assets/logo.png'
import { LinkButton } from '../components/LinkButton'
import { Star, BookOpenText, PhoneCallIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1b5ee1] p-4">
      <div className="flex flex-col items-center h-full w-full max-w-lg bg-[#f3f3f3] rounded-md p-4 overflow-y-auto gap-4">
        <img src={logoImage} alt="logo.png" className="size-32 mb-4" />
        <h1 className="mb-6 text-4xl font-bold">T8CHNOFEST</h1>

        <div className="flex flex-col gap-4 size-full">
          <LinkButton icon={BookOpenText} label="Juklak T8" to="" />
          <LinkButton icon={BookOpenText} label="Juknis T8" to="" />
          <LinkButton icon={Star} label="Test" to="" />
          <LinkButton icon={PhoneCallIcon} label="Contact Person" to="" />
        </div>
      </div>
    </div>
  )
}
