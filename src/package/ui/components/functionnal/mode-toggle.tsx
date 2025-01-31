import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../providers/theme-provider";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export default function ModeToggle({ lightText, darkText, className }: { lightText?: string, darkText?: string, className?: string }) {
    const { setTheme, theme } = useTheme()
    return (
        <div className={cn("inline-flex p-1 gap-2 bg-background rounded-xl", className)}>
            <Button
                size="sm"
                variant={theme === "light" ? "primary" : "ghost"}
                onClick={() => setTheme("light")}
            >
                <Sun />{lightText}
            </Button>
            <Button
                size="sm"
                variant={theme === "dark" ? "primary" : "ghost"}
                onClick={() => setTheme("dark")}
            >
                <Moon />{darkText}
            </Button>
        </div>
    )
}