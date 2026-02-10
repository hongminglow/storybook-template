import { cn } from "@/lib/utils";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function Preview({ children, className }: PreviewProps) {
  return (
    <div
      className={cn(
        "border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-8",
        className,
      )}
    >
      <div className="bg-white dark:bg-gray-950 p-12 flex items-center justify-center min-h-[300px]">
        {children}
      </div>
    </div>
  );
}
