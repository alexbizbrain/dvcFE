"use client"

import { TextField, type TextFieldProps } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    fontSize: "16px",
    "& fieldset": {
      borderColor: "#e5e7eb",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#d1d5db",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f59e0b",
      borderWidth: "2px",
    },
    "& input": {
      padding: "14px 16px",
    },
    "& textarea": {
      padding: "14px 16px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: 500,
    "&.Mui-focused": {
      color: "#f59e0b",
    },
    "& input": {
      padding: "14px 16px",
      "&::placeholder": {
        color: "#9ca3af",
        opacity: 1, 
      },
    },

  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginTop: "6px",
    fontSize: "12px",
  },
}))

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  label: string
  error?: boolean
  helperText?: string
}

export default function CustomTextField({ label, error, helperText, ...props }: CustomTextFieldProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <StyledTextField
        variant="outlined"
        fullWidth
        error={error}
        helperText={helperText}
        InputLabelProps={{
          shrink: false,
          style: { display: "none" },
        }}
        {...props}
      />
    </div>
  )
}
