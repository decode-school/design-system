
import ModeToggle from './package/ui/components/functionnal/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './package/ui/components/ui/avatar'

import { Button } from '@/package/ui/components/ui/button'
import { Input } from '@/package/ui/components/ui/input'
import { WeekCalendar } from './package/ui/components/ui/week-calendar'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselIndicators, CarouselItem } from './package/ui/components/ui/carousel'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './package/ui/components/ui/card'
import { Bell, ChevronRight, ZoomIn } from 'lucide-react'



function Header() {
    return (
        <header className='container mx-auto p-4 flex justify-between items-center'>
            <Input type="search" placeholder="Recherche" icon="search" className='bg-background max-w-[350px]' />
            <div className='flex items-center gap-4'>
                <ModeToggle lightText='light' darkText='dark' />
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
    return (
        <div className='grid grid-cols-[250px,1fr] h-screen'>
            <aside>
                <h1>Decode</h1>
                <nav className='p-4'>
                    <ul className='space-y-4'>
                        <li>
                            <a href='#' className=''>Home</a>
                        </li>
                        <li>
                            <a href='#' className=''>About</a>
                        </li>
                        <li>
                            <a href='#' className=''>Contact</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className='bg-secondary'>
                <Header />
                <section className='container mx-auto p-4 space-y-4'>
                    <h2 className='text-xl font-bold'>Dashboard</h2>
                    <div className='grid grid-cols-[1fr,350px] gap-4'>
                        <section>
                            <div className='bg-background p-4 rounded-xl mb-8'>
                                <div className='flex justify-between items-center mb-4'>
                                    <h3 className='font-bold'>Prochains rendus</h3>
                                    <Button variant="primary" size="xs">
                                        <ZoomIn />Voir tout
                                    </Button>
                                </div>
                                <div className='flex gap-4'>
                                    <Card className="w-1/2" variant="dark">
                                        <CardHeader>
                                            <CardTitle className='flex justify-between items-center'>
                                                <span>Devoir à rendre</span>
                                                <Bell />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-sm'>Symfony - Best cours ever</p>
                                            <p className='text-sm'>Le 12/05/2025 à 23h59</p>
                                        </CardContent>
                                        <CardFooter className='justify-between gap-4'>
                                            <Button variant="primary" size="xs">Rendre <ChevronRight /></Button>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xs'>B. Vasseur</span>
                                                <Avatar className='size-8'>
                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
                                                    <AvatarFallback>AM</AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                    <Card className="w-1/2" variant="dark" decoration="tr">
                                        <CardHeader>
                                            <CardTitle>Devoir à rendre</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-sm'>Symfony - Best cours ever</p>
                                            <p className='text-sm'>Le 12/05/2025 à 23h59</p>
                                        </CardContent>
                                        <CardFooter className='justify-between gap-4'>
                                            <Button variant="primary" size="xs">Rendre <ChevronRight /></Button>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xs'>B. Vasseur</span>
                                                <Avatar className='size-8'>
                                                    <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
                                                    <AvatarFallback>AM</AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                            <div className='bg-background p-4 rounded-xl'>
                                <div className='flex justify-between items-center mb-4'>
                                    <h3 className='font-bold'>Dernières notes</h3>
                                    <Button variant="primary" size="xs">
                                        <ZoomIn />Voir tout
                                    </Button>
                                </div>
                                <div className='flex items-center p-4 gap-4 bg-secondary rounded-lg mb-2'>
                                    <div className='font-semibold flex-grow'>
                                        <p>QCM - Symfony - Best cours ever</p>
                                        <p>Publié le 12/05/2025 à 23h59</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-sm'>B. Vasseur</span>
                                        <Avatar className='size-8'>
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
                                            <AvatarFallback>AM</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <span className='text-2xl font-bold'>12,5/20</span>
                                </div>
                                <div className='flex items-center p-4 gap-4 bg-secondary rounded-lg'>
                                    <div className='font-semibold flex-grow'>
                                        <p>QCM - Symfony - Best cours ever</p>
                                        <p>Publié le 12/05/2025 à 23h59</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-sm'>B. Vasseur</span>
                                        <Avatar className='size-8'>
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
                                            <AvatarFallback>AM</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <span className='text-2xl font-bold'>12,5/20</span>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='rounded-xl bg-background p-4 mb-8'>
                                <WeekCalendar selected={selectedWeekDate} onSelect={setSelectedWeekDate} />
                            </div>
                            <div className='rounded-xl bg-background p-4 mb-8'>
                                <div className='flex justify-between items-center mb-4'>
                                    <h3 className='font-bold'>Mes derniers badges</h3>
                                    <Button variant="primary" size="xs">
                                        <ZoomIn />Voir tout
                                    </Button>
                                </div>
                                <Carousel>
                                    <CarouselContent>
                                        <CarouselItem className='basis-[140px]'>
                                            <div className='flex flex-col items-center justify-center p-2 rounded-2xl bg-purple-200'>
                                                <span className='h-32'>IMAGE</span>
                                                <p className='text-center font-semibold text-sm'>Super dev du semestre</p>
                                                <p className='text-center text-purple-400'>4A DW</p>
                                                <p className='text-center text-purple-400'>S1 - 25-26</p>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem className='basis-[140px]'>
                                            <div className='flex flex-col items-center justify-center p-2 rounded-2xl bg-indigo-300'>
                                                <span className='h-32'>IMAGE</span>
                                                <p className='text-center font-semibold text-sm'>Super dev du semestre</p>
                                                <p className='text-center text-indigo-500'>4A DW</p>
                                                <p className='text-center text-indigo-500'>S1 - 25-26</p>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem className='basis-[140px]'>
                                            <div className='flex flex-col items-center justify-center p-2 rounded-2xl bg-purple-200'>
                                                <span className='h-32'>IMAGE</span>
                                                <p className='text-center font-semibold text-sm'>Super dev du semestre</p>
                                                <p className='text-center text-purple-400'>4A DW</p>
                                                <p className='text-center text-purple-400'>S1 - 25-26</p>
                                            </div>
                                        </CarouselItem>
                                    </CarouselContent>
                                    <CarouselIndicators />
                                </Carousel>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}