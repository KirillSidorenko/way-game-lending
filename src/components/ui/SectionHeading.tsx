import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {tag && (
        <span className="mb-4 inline-block rounded-full border border-accent/50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold md:text-4xl lg:text-[44px] lg:leading-[1.15]",
          light ? "text-black" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-3xl text-sm leading-relaxed md:text-base",
            light ? "text-black/60" : "text-text-secondary",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
