"use client"

import { useState } from "react"
import { TextField, Select, MenuItem, FormControl, InputAdornment } from "@mui/material"
import { styled } from "@mui/material/styles"
import { KeyboardArrowDown } from "@mui/icons-material"

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "14px 8px 14px 12px",
    display: "flex",
    alignItems: "center",
    minWidth: "60px",
    fontSize: "16px",
    fontWeight: 500,
  },
}))

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
  },
}))

interface Country {
  code: string
  name: string
  dialCode: string
  flag: string
}

const countries: Country[] = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
]

interface PhoneInputProps {
  label: string
  value?: string
  onChange?: (value: string) => void
  error?: boolean
  helperText?: string
  placeholder?: string
  required?: boolean
}

export default function PhoneInput({
  label,
  value = "",
  onChange,
  error,
  helperText,
  placeholder = "",
  required = false,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [phoneNumber, setPhoneNumber] = useState(value)

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find((c) => c.code === countryCode) || countries[0]
    setSelectedCountry(country)
    const fullNumber = `${country.dialCode} ${phoneNumber.replace(/^\+\d+\s/, "")}`
    onChange?.(fullNumber)
  }

  const handlePhoneChange = (phone: string) => {
    setPhoneNumber(phone)
    const fullNumber = `${selectedCountry.dialCode} ${phone}`
    onChange?.(fullNumber)
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {!required && <span className="text-gray-500">(optional)</span>}
      </label>
      <div className="flex">
        <FormControl>
          <StyledSelect
            value={selectedCountry.code}
            onChange={(e) => handleCountryChange(e.target.value)}
            IconComponent={KeyboardArrowDown}
            sx={{
              backgroundColor: "#f8f9fa",
              borderRadius: "12px 0 0 12px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e5e7eb",
                borderRight: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#d1d5db",
                borderRight: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f59e0b",
                borderWidth: "2px",
                borderRight: "none",
              },
            }}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                <span className="mr-2">{country.flag}</span>
                {country.code}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <StyledTextField
          fullWidth
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          InputProps={{
            startAdornment: <InputAdornment position="start">{selectedCountry.dialCode}</InputAdornment>,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0 12px 12px 0",
              "& fieldset": {
                borderLeft: "none",
              },
              "&:hover fieldset": {
                borderLeft: "none",
              },
              "&.Mui-focused fieldset": {
                borderLeft: "none",
              },
            },
          }}
        />
      </div>
    </div>
  )
}
