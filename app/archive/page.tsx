"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Archive, Search, Filter, Menu, X } from "lucide-react"
import { useState } from "react"

export default function ArchivePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const archivedItems = [
    {
      id: 1,
      title: "HTML Basics Course",
      status: "completed",
      completedDate: "2024-09-15",
      modules: 8,
      lessons: 24,
      timeSpent: "12h 30m",
      color: "lime",
    },
    {
      id: 2,
      title: "CSS Advanced Layouts",
      status: "completed",
      completedDate: "2024-08-20",
      modules: 6,
      lessons: 18,
      timeSpent: "10h 15m",
      color: "blue",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      status: "completed",
      completedDate: "2024-07-10",
      modules: 10,
      lessons: 32,
      timeSpent: "18h 45m",
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      lime: "bg-lime-400",
      blue: "bg-blue-400",
      yellow: "bg-yellow-400",
    }
    return colorMap[color] || "bg-gray-400"
  }

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: "url(/backgrounds/classroom-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="border-b-4 backdrop-blur-md sticky top-0 z-50 shadow-lg bg-background border-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4 transition-all btn-press">
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Archive className="w-6 h-6 text-gray-900" />
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">Archive</span>
            </div>
          </div>
          <button
            className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-cyan-400 border-t-4 border-cyan-300 p-4">
            <Link href="/" className="block text-sm text-gray-900 px-4 py-2 hover:bg-white/20 rounded-full font-bold">
              Back to Dashboard
            </Link>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-md">Your Archive</h1>
          <p className="text-lg text-gray-700">Review your completed courses and achievements</p>
        </div>

        <div className="mb-6 flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search archived courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-600 focus:outline-none focus:border-blue-600 transition-all shadow-md"
            />
          </div>
          <Button className="bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-md flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>

        <div className="space-y-4">
          {archivedItems.map((item) => (
            <Card
              key={item.id}
              className="p-6 bg-white rounded-3xl border-2 border-gray-300 hover:border-blue-400 transition-all shadow-md card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-4 h-4 rounded-full ${getColorClasses(item.color)}`}></div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Completed on {new Date(item.completedDate).toLocaleDateString()}
                  </p>
                </div>
                <Badge className="bg-lime-400 text-gray-900 font-bold text-sm px-4 py-2 border-0">✓ Completed</Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl border-2 border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{item.modules}</p>
                  <p className="text-xs text-gray-600 font-semibold">Modules</p>
                </div>
                <div className="text-center border-l-2 border-r-2 border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">{item.lessons}</p>
                  <p className="text-xs text-gray-600 font-semibold">Lessons</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{item.timeSpent}</p>
                  <p className="text-xs text-gray-600 font-semibold">Time Spent</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 transition-all btn-press shadow-md">
                  Review Course
                </Button>
                <Button className="bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-md">
                  Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-gradient-to-r from-lime-100 to-blue-100 rounded-3xl border-2 border-lime-400 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Achievement Unlocked!</h3>
          <p className="text-gray-700 font-semibold">You've completed 3 courses. You're on a roll! 🎉</p>
        </Card>
      </main>
    </div>
  )
}
