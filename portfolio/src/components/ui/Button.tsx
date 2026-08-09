import React from "react";
import { cn } from "../../lib/utils";
import { soundFx } from "../../lib/sound";
import { Magnetic } from "./Magnetic";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      magnetic = true,
      href,
      target,
      rel,
      download,
      icon,
      onClick,
      onMouseEnter,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer select-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "px-4 py-2 text-xs gap-2",
      md: "px-6 py-3 text-sm gap-2.5",
      lg: "px-8 py-4 text-base gap-3",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:brightness-110 border border-violet-500/30",
      secondary:
        "bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 backdrop-blur-md hover:border-white/20",
      outline:
        "bg-transparent text-slate-200 border border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10 hover:text-white",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.06]",
      cyan:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 border border-cyan-400/30",
    };

    const handleMouseEnter = (e: React.MouseEvent<any>) => {
      soundFx.playHover();
      if (onMouseEnter) onMouseEnter(e);
    };

    const handleClick = (e: React.MouseEvent<any>) => {
      soundFx.playClick();
      if (onClick) onClick(e);
    };

    const combinedClassName = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

    const buttonContent = (
      <>
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </>
    );

    let element;
    if (href) {
      element = (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={combinedClassName}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          {...(props as any)}
        >
          {buttonContent}
        </a>
      );
    } else {
      element = (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={combinedClassName}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          {...props}
        >
          {buttonContent}
        </button>
      );
    }

    if (magnetic) {
      return <Magnetic>{element}</Magnetic>;
    }

    return element;
  }
);

Button.displayName = "Button";
