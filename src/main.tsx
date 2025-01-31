import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { ThemeProvider } from "@/package/ui/providers/theme-provider"
import ModeToggle from './package/ui/components/functionnal/mode-toggle'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './package/ui/components/ui/alert-dialog'
import { Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './package/ui/components/ui/avatar'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <main>
        <header className='container mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-4xl font-bold'>Décode Design System</h1>
          <div className='flex items-center gap-4'>
            <ModeToggle lightText='light' darkText='dark' className='bg-secondary' />
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
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
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive"><Trash /> Delete account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button variant="destructive" asChild>
                  <AlertDialogAction>
                    Delete
                  </AlertDialogAction>
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>


        </div>
      </main>
    </ThemeProvider>
  </StrictMode>,
)
