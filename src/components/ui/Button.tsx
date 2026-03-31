import Image from "next/image";
import { cn } from "@/lib/cn";

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
        "inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.02em] transition-all duration-300 cursor-pointer active:scale-[0.98]",
        variant === "primary" && "bg-white text-black hover:bg-white/90",
        variant === "outline" &&
          "border border-white/20 bg-transparent text-white hover:bg-white/10",
        className,
      )}
    >
      {showIcon && (
        <Image
          src="/images/icons/cta-plus.svg"
          alt=""
          width={14}
          height={14}
          className="size-3.5 shrink-0"
        />
      )}
      {children}
    </button>
  );
}
