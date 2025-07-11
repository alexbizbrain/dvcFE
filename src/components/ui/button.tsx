"use client"

import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: "contained" | "outlined" | "text" | "golden"
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "contained", children, ...props }, ref) => {
    const isGolden = variant === "golden"

    return (
      <MuiButton
        ref={ref}
        variant={isGolden ? "contained" : variant}
        className={cn(isGolden && "bg-golden text-white", className)}
        sx={{
          ...(isGolden && {
            backgroundColor: 'var(--bg-golden)',
            color: "white",
          }),
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </MuiButton>
    )
  },
)

Button.displayName = "Button"
