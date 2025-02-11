"use client"

import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"

type DateRangePickerProps = {
    value: DateRange | undefined
    onChange: (dateRange: DateRange | undefined) => void
    placeholder?: string
    className?: string
}

function DateRangePicker({
    value,
    onChange,
    placeholder,
    className,
}: DateRangePickerProps) {
    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"secondary"}
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !value && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                        {value?.from ? (
                            value.to ? (
                                <>
                                    {format(value.from, "LLL dd, y", { locale: fr })} -{" "}
                                    {format(value.to, "LLL dd, y", { locale: fr })}
                                </>
                            ) : (
                                format(value.from, "LLL dd, y", { locale: fr })
                            )
                        ) : (
                            <span className="font-bold">{placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={value?.from}
                        selected={value}
                        onSelect={(v) => onChange(v)}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export { DateRangePicker }