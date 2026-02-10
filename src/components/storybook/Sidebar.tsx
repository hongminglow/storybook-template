import { cn } from "@/lib/utils";
import { type ComponentConfig } from "@/types";
import { NavLink } from "react-router-dom";
import { Folder } from "lucide-react";

interface SidebarProps {
  configs: ComponentConfig[];
  className?: string;
}

export function Sidebar({ configs, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-72 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen font-sans shrink-0",
        className,
      )}
    >
      <div className="p-5 flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 h-16">
        <div className="w-6 h-6 bg-pink-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
          S
        </div>
        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
          Storybook
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">
            Components
          </h3>
          <ul className="space-y-1">
            {configs.map((config) => {
              const Icon = config.icon || Folder;
              return (
                <li key={config.id}>
                  <NavLink
                    to={`/${config.id}`}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      )
                    }
                  >
                    <Icon
                      className={cn("w-4 h-4", { "text-pink-500": true })}
                    />
                    {config.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
