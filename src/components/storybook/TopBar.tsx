import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GlobalSearch } from "./GlobalSearch";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 flex items-center px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 w-full font-sans gap-8">
      {/* Global Search - centered and filling space */}
      <GlobalSearch />

      <div className="flex items-center gap-2 shrink-0">
        {/* Language Switcher with Flags */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 h-9 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">English</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-44 p-1 shadow-lg border-gray-200 dark:border-gray-800"
          >
            <DropdownMenuItem className="cursor-pointer gap-3 py-2 px-3 focus:bg-gray-100 dark:focus:bg-gray-800">
              <span
                className="text-lg leading-none"
                role="img"
                aria-label="USA flag"
              >
                🇺🇸
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">English</span>
                <span className="text-[10px] text-gray-500 underline-offset-2">
                  United States
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-3 py-2 px-3 focus:bg-gray-100 dark:focus:bg-gray-800">
              <span
                className="text-lg leading-none"
                role="img"
                aria-label="China flag"
              >
                🇨🇳
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Chinese</span>
                <span className="text-[10px] text-gray-500">中国 (简体)</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

        {/* Theme Toggler */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full text-amber-500 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 h-9 w-9 transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
