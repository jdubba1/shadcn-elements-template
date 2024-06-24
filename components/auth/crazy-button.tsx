import React from "react";
import { Button } from "@/components/ui/button"; // Adjust import according to your setup
import { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--accent"?: string;
  "--accentHover"?: string;
  "--border"?: string;
  "--accentContrast"?: string;
  "--alpha"?: string;
}

export default function CustomButton({ children, ...props }) {
  const customStyles: CustomCSSProperties = {
    "--accent": "#2F3037",
    "--accentHover": "#3B3C45",
    "--border": "#2F3037",
    "--accentContrast": "white",
    "--alpha": "hsla(0, 0%, 0%, 0.03)",
    backgroundColor: "var(--accent)",
    color: "var(--accentContrast)",
    borderColor: "var(--accent)",
    boxShadow:
      "rgba(255, 255, 255, 0.07) 0px 1px 1px 0px inset, rgba(34, 42, 53, 0.2) 0px 2px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 1px 0px",
  };

  return (
    <Button
      className="text-accentContrast isolation font-inherit relative m-0 inline-flex h-8 w-full cursor-pointer select-none items-center justify-center rounded-lg border border-solid bg-accent p-[0.375rem_0.75rem] text-[0.8125rem] font-medium leading-[1.38462] tracking-normal outline-0 transition-[background-color,background,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-100"
      style={customStyles}
      {...props}
    >
      {children}
    </Button>
  );
}
