import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { componentConfigs } from "@/data/components";

export function Layout() {
  return (
    <div className="flex bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans w-full">
      <Sidebar configs={componentConfigs} />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-950 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
