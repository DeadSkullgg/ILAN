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
  const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string }>({})

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // reset errors
    setErrors({})

    // simple client-side validation
    const newErrors: { username?: string; password?: string } = {}
    if (!username.trim()) newErrors.username = "El usuario es obligatorio."
    if (!password) newErrors.password = "La contraseña es obligatoria."
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      // focus first invalid field
      const el = document.getElementById(newErrors.username ? "username" : "password")
      if (el) (el as HTMLElement).focus()
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()
      if (!res.ok) {
        setErrors({ general: data?.message || "Error al iniciar sesión" })
        setIsLoading(false)
        return
      }

      // login OK -> redirect al dashboard
      window.location.href = "/dashboard"
    } catch (err) {
      setErrors({ general: "Error de red. Intenta nuevamente." })
      setIsLoading(false)
    }
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
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Bienvenido a ILAN</h2>
            <p className="text-lg mb-6 max-w-xl opacity-90">Aprende, crea y crece. Inicia sesión para acceder a tu panel con tu progreso, proyectos y mentoría.</p>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Haz seguimiento de tu progreso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Accede a rutas de aprendizaje</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1 w-3 h-3 bg-emerald-400 rounded-full" />
                <span>Recibe mentoría y feedback</span>
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
                  <label htmlFor="username" className="block text-sm font-medium text-gray-800 mb-2">Usuario</label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="tu_usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-invalid={!!errors.username}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  />
                  {errors.username && (
                    <p role="alert" className="mt-2 text-sm text-red-600">{errors.username}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">Contraseña</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  />
                  {errors.password && (
                    <p role="alert" className="mt-2 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium">¿Olvidaste tu contraseña?</button>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg transition transform hover:scale-[1.02] active:scale-95 mt-2 shadow-md flex items-center justify-center gap-2"
                >
                  {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              {errors.general && (
                <div className="mt-4" aria-live="assertive">
                  <p role="alert" className="text-sm text-red-600 text-center">{errors.general}</p>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-600">Demo: Puedes usar cualquier credencial para entrar</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
