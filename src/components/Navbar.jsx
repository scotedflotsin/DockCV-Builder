import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Info, Mail, HelpCircle, Menu, X, Shield, FileCheck, UserCog } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const Navbar = () => {
  const { toast } = useToast()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home', icon: <FileText className="w-4 h-4" /> },
    { to: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
  ]

  const supportLinks = [
    { to: '/contact', label: 'Contact Us', icon: <Mail className="w-4 h-4" /> },
    { to: '/faq', label: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
  ]

  const legalLinks = [
    { to: '/privacy-policy', label: 'Privacy Policy', icon: <Shield className="w-4 h-4" /> },
    { to: '/terms-of-service', label: 'Terms of Service', icon: <FileCheck className="w-4 h-4" /> },
  ]

  const adminLink = { to: '/admin-login', label: 'Admin Login', icon: <UserCog className="w-4 h-4" /> }

  const allLinks = [...navLinks, ...supportLinks, ...legalLinks, adminLink]

  const showToast = () => {
    toast({
      title: 'Prohibited',
      description: 'Permission not granted',
      variant: 'destructive',
    })
  }

  const NavLinkItem = ({ to, label, children }) => (
    <Link to={to} onClick={() => setMobileMenuOpen(false)}>
      <NavigationMenuLink
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
          location.pathname === to
            ? 'text-purple-600 bg-purple-50'
            : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
        }`}
      >
        {children}
        {label}
      </NavigationMenuLink>
    </Link>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <FileText className="w-7 h-7 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">DockCV Builder</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.to}>
                  <NavLinkItem to={link.to} label={link.label}>{link.icon}</NavLinkItem>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium flex items-center gap-2 ${
                    supportLinks.some(link => location.pathname === link.to)
                      ? 'text-purple-600'
                      : 'text-gray-700'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" /> Support
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {supportLinks.map(link => (
                      <li key={link.to}>
                        <NavLinkItem to={link.to} label={link.label}>{link.icon}</NavLinkItem>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`text-sm font-medium flex items-center gap-2 ${
                    legalLinks.some(link => location.pathname === link.to)
                      ? 'text-purple-600'
                      : 'text-gray-700'
                  }`}
                >
                  <Shield className="w-4 h-4" /> Legal
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-1 p-2">
                    {legalLinks.map(link => (
                      <li key={link.to}>
                        <NavLinkItem to={link.to} label={link.label}>{link.icon}</NavLinkItem>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem onClick={showToast}>
                <NavLinkItem label={adminLink.label}>{adminLink.icon}</NavLinkItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {allLinks.map(link => {
                const isAdmin = link.label === 'Admin Login'
                return isAdmin ? (
                  <button
                    key={link.label}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      showToast()
                    }}
                    className="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  >
                    {link.icon}
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
                      location.pathname === link.to
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
