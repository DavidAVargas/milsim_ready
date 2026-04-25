import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl flex-1 px-4 pt-16 pb-32 sm:px-6 min-h-[80vh]", className)}>
      {children}
    </div>
  );
}
