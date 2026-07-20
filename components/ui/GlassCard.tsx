import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
