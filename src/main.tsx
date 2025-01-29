import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './package/ui/components/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <h1>Décode Design System</h1>
      <Button>Click me</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
    </main>
  </StrictMode>,
)
