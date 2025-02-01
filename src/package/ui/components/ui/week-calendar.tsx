import { useEffect, useState } from 'react'
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";
import { fr } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/package/ui/components/ui/button"


function WeekCalendar({ selected, onSelect }: { selected: Date, onSelect: (date: Date) => void }) {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [currentWeek, setCurrentWeek] = useState<Array<Date>>([]);

    const getCurrentWeek = () => {
        const today = new Date();
        const start = startOfWeek(today, { weekStartsOn: 1 });
        const end = endOfWeek(today, { weekStartsOn: 1 });
        setCurrentWeek(eachDayOfInterval({ start: start, end: end }))
    };

    const getNextWeek = () => {
        const end = endOfWeek(currentDate, { weekStartsOn: 1 });
        const nextWeekStart = startOfWeek(new Date(end.getTime() + 1), { weekStartsOn: 1 });
        const nextWeekEnd = endOfWeek(new Date(end.getTime() + 7), { weekStartsOn: 1 });
        setCurrentWeek(eachDayOfInterval({ start: nextWeekStart, end: nextWeekEnd }))
        setCurrentDate(new Date(end.getTime() + 1));
    };

    const getPreviousWeek = () => {
        const start = startOfWeek(currentDate, { weekStartsOn: 1 });
        const previousWeekStart = startOfWeek(new Date(start.getTime() - 1), { weekStartsOn: 1 });
        const previousWeekEnd = endOfWeek(new Date(start.getTime() - 7), { weekStartsOn: 1 });
        setCurrentWeek(eachDayOfInterval({ start: previousWeekStart, end: previousWeekEnd }))
        setCurrentDate(new Date(start.getTime() - 1));
    };

    useEffect(() => {
        getCurrentWeek()
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 grid-rows-2">
                <div className='flex items-center justify-between gap-2'>
                    <span className='font-semibold'>{format(currentDate, "MMMM yyy", { locale: fr })}</span>
                    <div className='flex items-center gap-2'>
                        <Button
                            size="icon"
                            variant="secondary"
                            className='radius-full'
                            onClick={() => getPreviousWeek()}
                        >
                            <ChevronLeft />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            onClick={() => getNextWeek()}
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center">
                    {currentWeek.map((date) => (
                        <div className='flex flex-col items-center gap-1' key={date.toString()}>
                            <span className='font-medium text-muted-foreground text-sm'>{format(date, "eee", { locale: fr })}</span>
                            <Button
                                variant={selected.getDate() === date.getDate() ? "primary" : "ghost"}
                                size="icon"
                                onClick={() => onSelect(date)}
                            >{format(date, "dd")}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

WeekCalendar.displayName = "WeekCalendar"

export { WeekCalendar };