import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { ThemeProvider } from "@/package/ui/providers/theme-provider"
import ModeToggle from './package/ui/components/functionnal/mode-toggle'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './package/ui/components/ui/select'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <main>
        <header className='container mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-4xl font-bold'>Décode Design System</h1>
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
          <Input type="text" placeholder="Recherche" />
          <Input type="search" placeholder="Recherche" icon="search" />
          <hr />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez une année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023/2024</SelectItem>
              <SelectItem value="2024">2024/2025</SelectItem>
              <SelectItem value="2025">2025/2026</SelectItem>
              <SelectItem value="2026">2026/2027</SelectItem>
            </SelectContent>
          </Select>
          <hr />
        </div>
      </main>
    </ThemeProvider>
  </StrictMode>,
)
