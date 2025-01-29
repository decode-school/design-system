import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../providers/theme-provider";
import { Button } from "../ui/button";

export default function ModeToggle({ lightText, darkText }: { lightText?: string, darkText?: string }) {
    const { setTheme, theme } = useTheme()
    return (
        <div className="inline-flex p-2 gap-2 bg-background rounded-xl">
            <Button
                size="sm"
                variant={theme === "light" ? "default" : "ghost"}
                onClick={() => setTheme("light")}
            >
                <Sun />{lightText}
            </Button>
            <Button
                size="sm"
                variant={theme === "dark" ? "default" : "ghost"}
                onClick={() => setTheme("dark")}
            >
                <Moon />{darkText}
            </Button>
        </div>
    )
}