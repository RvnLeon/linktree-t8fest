import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Tabs } from 'radix-ui'

export const Route = createLazyFileRoute('/juknis')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url(/assets/photos/bg.jpeg)] bg-cover filter blur-[2px] z-0"></div>
      <div className="h-full w-full max-w-2xl bg-gradient-to-b from-white to-zinc-100 shadow-xl rounded-md overflow-hidden z-10 p-4">
        <div className="border-b border-zinc-300/50 pb-4 mb-4">
          <Tabs.List className="max-w-full bg-blue-500 p-4 rounded-md flex flex-row items-center">
            <Tabs.Trigger
              className="bg-zinc-400 rounded-xl p-2 flex justify-center items-center"
              value="tab1"
            >
              Ketentuan Umum
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-zinc-400 rounded-xl p-2 flex justify-center items-center"
              value="tab1"
            >
              Ketentuan Khusus
            </Tabs.Trigger>
          </Tabs.List>
        </div>
      </div>
    </div>
  )
}
