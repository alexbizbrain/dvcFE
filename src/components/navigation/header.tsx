"use client"

import { AppBar, Toolbar, Box, Container, Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]

const  Header =() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#151515",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/">
                <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center cursor-pointer">
                  <Image
                    width={65}
                    height={65}
                    alt="new-logo"
                    src="/assets/dvcc/logo.svg"
                />
                </div>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {navigationItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link key={item.href} href={item.href} className="relative">
                    <span
                      className={`text-white hover:text-golden-400 transition-colors ${active ? "text-white" : ""}`}
                    >
                      {item.label}
                    </span>
                    {active && <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"></div>}
                  </Link>
                )
              })}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                variant="text"
                sx={{ color: "#C19A6B", "&:hover": { backgroundColor: "rgba(193, 154, 107, 0.1)" } }}
              >
                Sign In
              </Button>
              <Button variant="golden">Sign Up</Button>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }} aria-label="Open navigation menu">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#2d2d2d",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" onClick={toggleMobileMenu}>
            <div className="w-8 h-8 bg-golden-500 rounded-full flex items-center justify-center cursor-pointer">
              <div className="w-6 h-6 bg-golden-600 rounded-full"></div>
            </div>
          </Link>
          <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2 }}>
          {navigationItems.map((item) => {
            const active = isActive(item.href)
            return (
              <ListItem key={item.href} sx={{ px: 0, py: 1 }}>
                <Link href={item.href} className="w-full" onClick={toggleMobileMenu}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: active ? "#C19A6B" : "white",
                        fontWeight: active ? 600 : 400,
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                </Link>
              </ListItem>
            )
          })}
        </List>

        <Box sx={{ p: 2, mt: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="text"
            fullWidth
            sx={{
              color: "#C19A6B",
              "&:hover": { backgroundColor: "rgba(193, 154, 107, 0.1)" },
              justifyContent: "flex-start",
            }}
          >
            Sign In
          </Button>
          <Button variant="golden" fullWidth>
            Sign Up
          </Button>
        </Box>
      </Drawer>
    </>
  )
}

export default Header;
