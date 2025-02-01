
import ModeToggle from './package/ui/components/functionnal/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './package/ui/components/ui/avatar'
import { Badge } from './package/ui/components/ui/badge'

import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { WeekCalendar } from './package/ui/components/ui/week-calendar'
import { useState } from 'react'
import { Calendar } from './package/ui/components/ui/calendar'



function Header() {
    return (
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
    )
}


export default function App() {
    const [selectedWeekDate, setSelectedWeekDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    return (
        <main>
            <Header />
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
                <Badge variant="default">Badge</Badge>
                <hr />
                <WeekCalendar selected={selectedWeekDate} onSelect={setSelectedWeekDate} />
                <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
            </div>
        </main>
    )
}