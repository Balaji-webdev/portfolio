import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "pulse" | "solid" | "outline" | "violet" | "cyan";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  className,
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200";

  const variantStyles = {
    pulse:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/20",
    solid:
      "bg-white/10 text-white border-white/20",
    outline:
      "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:border-white/20 hover:text-white",
    violet:
      "bg-violet-500/10 text-violet-300 border-violet-500/30 hover:bg-violet-500/20",
    cyan:
      "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {variant === "pulse" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};
