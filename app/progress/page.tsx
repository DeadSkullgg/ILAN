"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Award, Menu, X } from "lucide-react"
import { useState } from "react"

export default function ProgressPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const weeklyStats = [
    { day: "Mon", hours: 2.5, color: "bg-blue-400" },
    { day: "Tue", hours: 3, color: "bg-cyan-400" },
    { day: "Wed", hours: 1.5, color: "bg-lime-400" },
    { day: "Thu", hours: 2.8, color: "bg-yellow-400" },
    { day: "Fri", hours: 3.5, color: "bg-orange-400" },
    { day: "Sat", hours: 2, color: "bg-pink-400" },
    { day: "Sun", hours: 4, color: "bg-green-400" },
  ]

  const milestones = [
    { id: 1, title: "First 10 Hours", achieved: true, date: "Aug 5" },
    { id: 2, title: "5 Modules Completed", achieved: true, date: "Aug 15" },
    { id: 3, title: "First Project", achieved: true, date: "Aug 28" },
    { id: 4, title: "50 Hours Learning", achieved: false, date: "In Progress" },
    { id: 5, title: "10 Skills Mastered", achieved: false, date: "Soon" },
  ]

  const totalHours = 42.5
  const weeklyTarget = 15
  const weeklyAverage = 21.3

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
              <TrendingUp className="w-6 h-6 text-gray-900" />
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">Your Progress</span>
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-md">Your Progress</h1>
          <p className="text-lg text-gray-700">Track your learning journey and celebrate your achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-white rounded-3xl border-2 border-blue-400 shadow-md card-hover">
            <p className="text-sm text-gray-600 font-semibold mb-2">Total Learning Hours</p>
            <p className="text-4xl font-bold text-blue-600 mb-2">{totalHours}h</p>
            <p className="text-xs text-gray-600">Keep the momentum going!</p>
          </Card>

          <Card className="p-6 bg-white rounded-3xl border-2 border-cyan-400 shadow-md card-hover">
            <p className="text-sm text-gray-600 font-semibold mb-2">Weekly Target</p>
            <Progress value={142} className="mb-2 h-2" />
            <p className="text-xs text-gray-600">
              {weeklyAverage.toFixed(1)}h / {weeklyTarget}h
            </p>
          </Card>

          <Card className="p-6 bg-white rounded-3xl border-2 border-lime-400 shadow-md card-hover">
            <p className="text-sm text-gray-600 font-semibold mb-2">Current Streak</p>
            <p className="text-4xl font-bold text-lime-600 mb-2">12 Days</p>
            <p className="text-xs text-gray-600">You're unstoppable! 🔥</p>
          </Card>
        </div>

        {/* Weekly Activity Chart */}
        <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md card-hover mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">This Week's Learning</h2>
          <div className="flex items-end justify-around h-32 gap-2 px-2">
            {weeklyStats.map((stat) => (
              <div key={stat.day} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full ${stat.color} rounded-t-lg transition-all hover:shadow-lg`}
                  style={{ height: `${(stat.hours / 4) * 100}px` }}
                ></div>
                <p className="text-xs font-bold text-gray-900 mt-2">{stat.day}</p>
                <p className="text-xs text-gray-600">{stat.hours}h</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Milestones */}
        <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md card-hover">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-orange-500" />
            Milestones
          </h2>
          <div className="space-y-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                  milestone.achieved ? "bg-lime-100 border-lime-400" : "bg-gray-50 border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      milestone.achieved ? "bg-lime-500" : "bg-gray-400"
                    }`}
                  >
                    {milestone.achieved ? "✓" : "○"}
                  </div>
                  <h3 className={`font-bold ${milestone.achieved ? "text-gray-900" : "text-gray-600"}`}>
                    {milestone.title}
                  </h3>
                </div>
                <Badge
                  className={`${
                    milestone.achieved ? "bg-lime-500 text-white" : "bg-gray-300 text-gray-700"
                  } font-semibold border-0`}
                >
                  {milestone.date}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
