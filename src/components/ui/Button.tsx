import { cn } from "@/lib/cn";
import { Plus } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  showIcon?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  variant = "primary",
  showIcon = true,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-4 rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 cursor-pointer",
        variant === "primary" &&
          "bg-white text-black hover:bg-white/90",
        variant === "outline" &&
          "border border-white/20 bg-transparent text-white hover:bg-white/10",
        className,
      )}
    >
      {showIcon && <Plus className="size-4" />}
      {children}
    </button>
  );
}
