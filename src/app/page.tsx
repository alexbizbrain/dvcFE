import { Container, Box, Typography, Grid } from "@mui/material"
import Header from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import { Lan } from "@mui/icons-material"
import LandingPage from "@/components/ui/LandingPage"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LandingPage />
    </div>
  )
}
