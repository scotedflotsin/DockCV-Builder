import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogIn, FileLock as UserLock } from 'lucide-react'
import Footer from '@/components/Footer'
import { useToast } from '@/components/ui/use-toast'

const AdminLogin = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'password') {
        toast({
          title: "Login Successful!",
          description: "Welcome, Admin!",
        })
        // Redirect to admin dashboard (not implemented in this scope)
        console.log("Admin logged in");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password.",
          variant: "destructive",
        })
      }
      setIsSubmitting(false)
      setFormData({ username: '', password: ''})
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black pt-16 text-white">
      <section className="py-20 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <Card className="bg-white/10 backdrop-blur-lg border-gray-700 text-white">
              <CardHeader className="text-center">
                <UserLock className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold">Admin Login</CardTitle>
                <CardDescription className="text-gray-400">
                  Access the ResumeBuilder Pro admin panel.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      required
                      className="mt-1 bg-white/5 border-gray-600 focus:ring-purple-500 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                      className="mt-1 bg-white/5 border-gray-600 focus:ring-purple-500 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Logging In...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AdminLogin