"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, CheckCircle2, Menu, X } from "lucide-react"
import { useState } from "react"

export default function RemindersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const reminders = [
    {
      id: 1,
      title: "Complete React Module 3",
      description: "Finish the useState and useEffect lessons",
      dueDate: "Today",
      priority: "high",
      status: "pending",
      icon: "⚛️",
    },
    {
      id: 2,
      title: "Review CSS Flexbox",
      description: "Go back and review flexbox properties",
      dueDate: "Tomorrow",
      priority: "medium",
      status: "pending",
      icon: "📐",
    },
    {
      id: 3,
      title: "Submit Portfolio Project",
      description: "Submit your first portfolio project for review",
      dueDate: "In 3 days",
      priority: "high",
      status: "pending",
      icon: "🎨",
    },
    {
      id: 4,
      title: "JavaScript Quiz",
      description: "Complete the weekly JavaScript quiz",
      dueDate: "In 5 days",
      priority: "low",
      status: "pending",
      icon: "📝",
    },
    {
      id: 5,
      title: "Daily Stand-up Reflection",
      description: "Write today's learning reflection",
      dueDate: "Today",
      priority: "medium",
      status: "completed",
      icon: "✍️",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-orange-100 border-orange-400 text-orange-700"
      case "medium":
        return "bg-yellow-100 border-yellow-400 text-yellow-700"
      case "low":
        return "bg-blue-100 border-blue-400 text-blue-700"
      default:
        return "bg-gray-100 border-gray-400 text-gray-700"
    }
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
              <Bell className="w-6 h-6 text-gray-900" />
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">Reminders</span>
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-md">Your Reminders</h1>
          <p className="text-lg text-gray-700">Stay on track with your learning goals</p>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          <Button className="bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-md">
            All Reminders
          </Button>
          <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full transition-all shadow-md">
            Pending
          </Button>
          <Button className="bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-md">
            Completed
          </Button>
        </div>

        <div className="space-y-4">
          {reminders.map((reminder) => (
            <Card
              key={reminder.id}
              className={`p-6 rounded-3xl border-2 transition-all shadow-md card-hover ${
                reminder.status === "completed"
                  ? "bg-lime-100 border-lime-400 opacity-75"
                  : "bg-white border-gray-300 hover:border-blue-400"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{reminder.icon}</div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className={`text-xl font-bold ${reminder.status === "completed" ? "text-gray-700 line-through" : "text-gray-900"}`}
                    >
                      {reminder.title}
                    </h3>
                    {reminder.status === "completed" && <CheckCircle2 className="w-5 h-5 text-lime-600" />}
                  </div>

                  <p className="text-gray-600 mb-3">{reminder.description}</p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className={`border-2 font-bold px-3 py-1 ${getPriorityColor(reminder.priority)}`}>
                      {reminder.priority.charAt(0).toUpperCase() + reminder.priority.slice(1)} Priority
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                      <Clock className="w-4 h-4" />
                      {reminder.dueDate}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {reminder.status === "pending" ? (
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-4 transition-all btn-press shadow-md">
                      Mark Done
                    </Button>
                  ) : (
                    <div className="text-lime-600 font-bold">✓ Done</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
