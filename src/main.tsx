import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { ThemeProvider } from "@/package/ui/providers/theme-provider"
import ModeToggle from './package/ui/components/functionnal/mode-toggle'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './package/ui/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './package/ui/components/ui/accordion'



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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </ThemeProvider>
  </StrictMode>,
)
