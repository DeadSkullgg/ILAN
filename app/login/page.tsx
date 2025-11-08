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
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/"
    }, 1000)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: "url(/backgrounds/landing-page-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      {/* Top Left Character */}
      <div className="absolute top-12 left-12 animate-bounce opacity-90">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image src="/characters/n1.png" alt="Character 1" fill className="object-contain" quality={85} />
        </div>
      </div>

      {/* Top Right Character */}
      <div className="absolute top-20 right-16 animate-pulse opacity-90">
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <Image src="/characters/n2.png" alt="Character 2" fill className="object-contain" quality={85} />
        </div>
      </div>

      {/* Bottom Left Character */}
      <div className="absolute bottom-16 left-20 animate-bounce opacity-80" style={{ animationDelay: "0.5s" }}>
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image src="/characters/n3.png" alt="Character 3" fill className="object-contain" quality={85} />
        </div>
      </div>

      {/* Bottom Right Character */}
      <div className="absolute bottom-20 right-12 animate-pulse opacity-80" style={{ animationDelay: "0.3s" }}>
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <Image src="/characters/n4.png" alt="Character 4" fill className="object-contain" quality={85} />
        </div>
      </div>

      <Card className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 border-4 border-cyan-400">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl mb-4">
            <span className="text-3xl font-bold text-white">L</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600 text-sm">Continue your learning journey with us</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Username</label>
            <Input
              type="text"
              placeholder="Sara"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-gray-50 border-2 border-cyan-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-gray-50 border-2 border-cyan-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div className="text-right">
            <button type="button" className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-lg transition-all transform hover:scale-105 active:scale-95 mt-6 shadow-lg"
          >
            {isLoading ? "Signing in..." : "Sign In"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center">Demo: Use any credentials to login</p>
        </div>
      </Card>
    </div>
  )
}
