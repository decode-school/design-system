import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

type DatePickerProps = {
    value: Date | undefined
    onChange: (date: Date) => void
    placeholder?: string
    className?: string
}

export function DatePicker({ value, onChange, placeholder, className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"secondary"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
          {value ? format(value, "PPP", { locale: fr }) : <span className="font-bold">{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(v) => v && onChange(v)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
