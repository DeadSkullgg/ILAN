"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // demo delay
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/"
    }, 1000)
  }

  return (
    <div
      className="min-h-screen bg-fixed bg-center flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/landing-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
  {/* Capa de superposición para mejorar el contraste */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Izquierda: Hero / información de la landing */}
          <div className="px-6 py-12 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Welcome to ILAN</h2>
            <p className="text-lg mb-6 max-w-xl opacity-90">Learn, build and grow. Sign in to continue to your dashboard where your progress, projects and mentorship await.</p>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Track your progress</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Access curated learning paths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Get mentorship and feedback</span>
              </li>
            </ul>
          </div>

          {/* Derecha: Tarjeta de inicio de sesión */}
          <div className="flex items-center justify-center px-6 py-12">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 border border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl mb-3">
                  <span className="text-2xl font-bold text-white">IL</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Sign in to your account</h3>
                <p className="text-sm text-gray-600">Enter your username and password to continue</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-800 mb-2">Username</label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium">Forgot password?</button>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg transition transform hover:scale-[1.02] active:scale-95 mt-2 shadow-md flex items-center justify-center gap-2"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-600">Demo: Use any credentials to login</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
