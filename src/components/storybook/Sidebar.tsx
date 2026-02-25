import { cn } from "@/lib/utils";
import { type ComponentConfig } from "@/types";
import { NavLink } from "react-router-dom";
import { Folder, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarProps {
  configs: ComponentConfig[];
  className?: string;
}

export function Sidebar({ configs, className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  type Block =
    | { type: "ungrouped"; items: ComponentConfig[] }
    | { type: "group"; name: string; items: ComponentConfig[] };

  const blocks: Block[] = [];
  const groupMap = new Map<string, Extract<Block, { type: "group" }>>();

  configs.forEach((config) => {
    if (config.group) {
      if (!groupMap.has(config.group)) {
        const newGroup: Extract<Block, { type: "group" }> = {
          type: "group",
          name: config.group,
          items: [],
        };
        groupMap.set(config.group, newGroup);
        blocks.push(newGroup);
      }
      groupMap.get(config.group)!.items.push(config);
    } else {
      const lastBlock = blocks[blocks.length - 1];
      if (lastBlock && lastBlock.type === "ungrouped") {
        lastBlock.items.push(config);
      } else {
        blocks.push({ type: "ungrouped", items: [config] });
      }
    }
  });

  const renderConfigItem = (config: ComponentConfig) => {
    const Icon = config.icon || Folder;
    const linkContent = (isActive: boolean) => (
      <div
        className={cn(
          "flex items-center h-10 rounded-lg text-sm font-medium transition-all group w-full",
          isCollapsed ? "justify-center px-0" : "gap-3 px-3",
          isActive
            ? "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50",
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5 transition-transform group-hover:scale-110 shrink-0",
            isActive ? "text-pink-500" : "text-gray-500 dark:text-gray-400",
          )}
        />
        {!isCollapsed && (
          <span className="whitespace-nowrap animate-in fade-in slide-in-from-left-1 duration-300">
            {config.name}
          </span>
        )}
      </div>
    );

    if (isCollapsed) {
      return (
        <li key={config.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to={`/${config.id}`}>{({ isActive }) => linkContent(isActive)}</NavLink>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-gray-900 text-white font-medium border-none px-3 py-1.5 text-xs"
            >
              {config.name}
            </TooltipContent>
          </Tooltip>
        </li>
      );
    }

    return (
      <li key={config.id}>
        <NavLink to={`/${config.id}`}>{({ isActive }) => linkContent(isActive)}</NavLink>
      </li>
    );
  };

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen font-sans shrink-0 transition-all duration-300 ease-in-out relative",
          isCollapsed ? "w-20" : "w-72",
          className,
        )}
      >
        <div
          className={cn(
            "p-4 flex items-center border-b border-gray-200 dark:border-gray-800 h-16 transition-all duration-300",
            isCollapsed ? "justify-center" : "justify-between gap-3 px-5",
          )}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <img src="/logo.svg" className="size-8 shrink-0 shadow-sm" alt="Logo" />
            {!isCollapsed && (
              <span className="font-bold text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
                Storybook
              </span>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "h-8 w-8 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all focus-visible:ring-0",
              isCollapsed &&
                "absolute -right-4 top-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full shadow-md z-50 hover:scale-110",
            )}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-none">
          {isCollapsed ? (
            <div className="mt-4">
              <ul className="space-y-1.5 list-none m-0 p-0">{configs.map(renderConfigItem)}</ul>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4">
              {blocks.map((block, index) => {
                if (block.type === "ungrouped") {
                  return (
                    <ul key={`ungrouped-${index}`} className="space-y-1.5 list-none m-0 p-0">
                      {block.items.map(renderConfigItem)}
                    </ul>
                  );
                }

                return (
                  <Accordion
                    key={`group-${block.name}`}
                    type="multiple"
                    defaultValue={[block.name]}
                    className="w-full space-y-4"
                  >
                    <AccordionItem value={block.name} className="border-none">
                      <AccordionTrigger className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[2px] mb-1 px-3 py-2 hover:no-underline rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50">
                        {block.name}
                      </AccordionTrigger>
                      <AccordionContent className="pb-0 pt-1">
                        <ul className="space-y-1.5 list-none m-0 p-0">
                          {block.items.map(renderConfigItem)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          )}
        </div>
      </aside>
    </TooltipProvider>
  );
}
