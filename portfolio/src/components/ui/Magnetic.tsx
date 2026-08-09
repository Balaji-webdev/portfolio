import React from "react";
import { useMagnetic } from "../../hooks/useMagnetic";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.35, className = "" }) => {
  const ref = useMagnetic(strength);

  return React.cloneElement(children, {
    ref,
    className: `${children.props.className || ""} ${className}`.trim(),
  });
};
