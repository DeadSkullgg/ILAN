"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Lock, Menu, X } from "lucide-react"

export default function RoadmapPage() {
  const [_selectedPath, _setSelectedPath] = useState("developer")
  const [_selectedModule, _setSelectedModule] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const modules = [
    {
      id: 1,
      title: "Foundations",
      description: "HTML, CSS, JavaScript basics",
      icon: "🎯",
      status: "completed",
      progress: 100,
      lessons: 12,
      completedLessons: 12,
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 2,
      title: "Modern JavaScript",
      description: "ES6+, Async/Await, Promises",
      icon: "⚡",
      status: "completed",
      progress: 100,
      lessons: 10,
      completedLessons: 10,
      skills: ["ES6+", "Async", "APIs"],
    },
    {
      id: 3,
      title: "React Fundamentals",
      description: "Components, Props, State",
      icon: "⚛️",
      status: "in-progress",
      progress: 32,
      lessons: 15,
      completedLessons: 5,
      skills: ["React", "JSX", "Hooks"],
    },
    {
      id: 4,
      title: "Advanced React",
      description: "Context, Custom Hooks",
      icon: "🚀",
      status: "locked",
      progress: 0,
      lessons: 12,
      completedLessons: 0,
      skills: ["Context API", "Optimization"],
    },
  ]

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0)
  const completedLessons = modules.reduce((acc, m) => acc + m.completedLessons, 0)
  const overallProgress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: "url(/backgrounds/classroom-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="border-b-4 backdrop-blur-md sticky top-0 z-50 shadow-lg border-background bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4 transition-all">
                Back
              </Button>
            </Link>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">Learning Roadmap</span>
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Your Learning Roadmap</h1>
          <p className="text-lg text-gray-700">Choose your path and follow your personalized learning journey.</p>
        </div>

        <Card className="p-6 mb-8 bg-blue-600 text-white rounded-3xl border-0 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Overall Progress</h2>
            <div className="text-4xl font-bold">{overallProgress}%</div>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </Card>

        <div className="space-y-4">
          {modules.map((module) => {
            const isCompleted = module.status === "completed"
            const isInProgress = module.status === "in-progress"
            const isLocked = module.status === "locked"

            return (
              <Card
                key={module.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  isCompleted
                    ? "bg-lime-100 border-lime-400 shadow-md"
                    : isInProgress
                      ? "bg-blue-100 border-blue-400 shadow-lg"
                      : "bg-gray-100 border-gray-300 opacity-60"
                }`}
                onClick={() => !isLocked && _setSelectedModule(isLocked ? null : module.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{module.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                      {isCompleted && <CheckCircle2 className="w-5 h-5 text-lime-600" />}
                      {isInProgress && <Circle className="w-5 h-5 text-blue-600" />}
                      {isLocked && <Lock className="w-5 h-5 text-gray-400" />}
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{module.description}</p>
                    {!isLocked && (
                      <>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {module.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-white text-gray-900 border border-gray-300 font-semibold text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Progress value={module.progress} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">{module.progress}% complete</p>
                      </>
                    )}
                  </div>
                  {!isLocked && (
                    <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4">
                      {isCompleted ? "Review" : isInProgress ? "Continue" : "Start"}
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
