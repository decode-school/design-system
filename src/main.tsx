import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './package/ui/components/ui/button'
import { Input } from './package/ui/components/ui/input'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='bg-secondary'>
      <div className='container mx-auto p-4 space-y-4'>
        <h1 className='text-4xl mb-16'>Décode Design System</h1>
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
      </div>
    </main>
  </StrictMode>,
)
