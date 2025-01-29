import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { ThemeProvider } from "@/package/ui/providers/theme-provider"
import ModeToggle from './package/ui/components/functionnal/mode-toggle'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <main>
        <header className='container mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-4xl'>Décode Design System</h1>
          <ModeToggle lightText='light' darkText='dark' />
        </header>
        <div className='container mx-auto p-4 space-y-4'>
          <section className='flex gap-4 flex-wrap'>
            <Button>Click me</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline">Outline</Button>
          </section>
          <hr />
          <section className='flex flex-col gap-2 bg-secondary p-8'>
            <Input type="text" placeholder="Recherche" />
            <Input type="search" placeholder="Recherche" icon="search" />
          </section>
          <hr />
        </div>
      </main>
    </ThemeProvider>
  </StrictMode>,
)
