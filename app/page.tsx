"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { ArrowRight, Menu, X, LogOut, User, Settings } from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [profileDropdown, setProfileDropdown] = useState(false)

  return (
    <div
      className="sticky top-0 z-50 backdrop-blur-md border-b-4 shadow-lgp-blur-md border-b-4 shadow-lgp-blur-md border-b-4 shadow-lg bg-card border-card"
      style={{
        backgroundImage: "url(/backgrounds/dashboard-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="sticky top-0 z-50 backdrop-blur-md border-b-4 shadow-lg bg-background border-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            {/* Left: Logo + Back Button */}
            <Link
              href="/"
              onClick={() => setActiveTab("dashboard")}
              className="flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              
              
            </Link>

            {/* Center: Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1 bg-white/20 rounded-full p-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "dashboard" ? "bg-lime-400 text-gray-900 shadow-md" : "text-gray-900 hover:bg-white/30"
                }`}
              >
                Dashboard
              </button>
              <Link
                href="/samples"
                onClick={() => setActiveTab("samples")}
                className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "samples" ? "bg-lime-400 text-gray-900 shadow-md" : "text-gray-900 hover:bg-white/30"
                }`}
              >
                Course Samples
              </Link>
              <Link
                href="/roadmap"
                onClick={() => setActiveTab("roadmap")}
                className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "roadmap" ? "bg-lime-400 text-gray-900 shadow-md" : "text-gray-900 hover:bg-white/30"
                }`}
              >
                My roadmap
              </Link>
              <Link
                href="/community"
                onClick={() => setActiveTab("community")}
                className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "community" ? "bg-lime-400 text-gray-900 shadow-md" : "text-gray-900 hover:bg-white/30"
                }`}
              >
                Community
              </Link>
            </nav>

            {/* Right: User Avatar with Dropdown */}
            <div className="flex items-center gap-3 relative">
              <div
                className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer border-2 border-white"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <Image
                  src="/characters/sara1.png"
                  alt="User Sara"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dropdown Menu */}
              {profileDropdown && (
                <div className="absolute right-0 top-16 bg-white rounded-2xl shadow-2xl border-2 border-cyan-300 overflow-hidden z-50 min-w-48">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-bold text-gray-900">Sara</p>
                    <p className="text-xs text-gray-600">Learning Enthusiast</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-cyan-100 rounded-lg transition-colors text-sm font-semibold">
                      <User size={16} /> Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-cyan-100 rounded-lg transition-colors text-sm font-semibold">
                      <Settings size={16} /> Settings
                    </button>
                    <Link href="/login" className="block">
                      <button
                        onClick={() => setProfileDropdown(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-100 rounded-lg transition-colors text-sm font-semibold"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-gray-900" />
                ) : (
                  <Menu size={24} className="text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cyan-400 border-t-4 border-cyan-300 p-4 space-y-2">
            <button
              onClick={() => {
                setActiveTab("dashboard")
                setMobileMenuOpen(false)
              }}
              className="w-full text-sm font-bold text-gray-900 bg-lime-400 px-4 py-3 rounded-full hover:bg-lime-500 transition-colors text-left"
            >
              dashboard
            </button>
            <Link
              href="/samples"
              onClick={() => {
                setActiveTab("samples")
                setMobileMenuOpen(false)
              }}
              className="block text-sm font-bold text-gray-900 px-4 py-3 hover:bg-white/20 rounded-full transition-colors"
            >
              course samples
            </Link>
            <Link
              href="/roadmap"
              onClick={() => {
                setActiveTab("roadmap")
                setMobileMenuOpen(false)
              }}
              className="block text-sm font-bold text-gray-900 px-4 py-3 hover:bg-white/20 rounded-full transition-colors"
            >
              my roadmap
            </Link>
            <Link
              href="/community"
              onClick={() => {
                setActiveTab("community")
                setMobileMenuOpen(false)
              }}
              className="block text-sm font-bold text-gray-900 px-4 py-3 hover:bg-white/20 rounded-full transition-colors"
            >
              community
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 drop-shadow-md">Welcome back Sara!</h1>
          <p className="text-lg text-gray-800 font-semibold mb-2">Your consistency is your superpower. Keep going!</p>
          <p className="text-gray-700">Let's continue building your future, one skill at a time.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Built */}
          <Link href="/portfolio" onClick={() => setActiveTab("portfolio")}>
            <Card className="bg-white rounded-3xl border-0 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer card-hover h-full">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src="/characters/sara1.png"
                    alt="Projects"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-gray-900">3</div>
                    <span className="text-sm font-semibold text-lime-600 bg-lime-100 px-3 py-1 rounded-full">NEW</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mt-1">Projects built</p>
                  <p className="text-xs text-gray-600">1,592 total views</p>
                  <div className="mt-3 pt-3 border-t-2 border-lime-300 flex items-center text-xs font-semibold text-lime-600">
                    View Portfolio <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Skills Mastered */}
          <Link href="/achievements" onClick={() => setActiveTab("achievements")}>
            <Card className="bg-white rounded-3xl border-0 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer card-hover h-full">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src="/characters/alan1.png"
                    alt="Skills"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-gray-900">12</div>
                    <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                      +3
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mt-1">Skills mastered</p>
                  <p className="text-xs text-gray-600">+3 this month</p>
                  <div className="mt-3 pt-3 border-t-2 border-yellow-300 flex items-center text-xs font-semibold text-yellow-600">
                    View Achievements <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Community Likes */}
          <Link href="/community" onClick={() => setActiveTab("community")}>
            <Card className="bg-white rounded-3xl border-0 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer card-hover h-full">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src="/characters/sara2.png"
                    alt="Community"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-gray-900">271</div>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      +39
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mt-1">Community likes</p>
                  <p className="text-xs text-gray-600">+39 this week</p>
                  <div className="mt-3 pt-3 border-t-2 border-orange-300 flex items-center text-xs font-semibold text-orange-600">
                    Join Community <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Current Module Card */}
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl border-0 p-8 shadow-lg card-hover">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-lg">
              <Image
                src="/characters/sara2.png"
                alt="Progress"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-2xl font-bold mb-4">React state management</h2>
              <p className="text-sm text-white/90 mb-3">You're 43% through this module</p>
              <div className="bg-white/30 rounded-full h-3 overflow-hidden mb-3">
                <div className="bg-lime-400 h-full rounded-full progress-animate" style={{ width: "43%" }} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/80">Module 3 out of 8</span>
                <Link href="/roadmap" onClick={() => setActiveTab("roadmap")}>
                  <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-6 transition-all btn-press shadow-md">
                    Continue learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Current Module Info */}
            <Card className="bg-white rounded-3xl border-0 p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Current Module</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 mb-4 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">⚛️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">React State Management</h4>
                    <p className="text-sm text-gray-600">Module 3 of 8</p>
                  </div>
                </div>
                <Progress value={43} className="h-2 mb-3" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-semibold">23 min remaining</span>
                  <Link href="/roadmap" onClick={() => setActiveTab("roadmap")}>
                    <Button
                      size="sm"
                      className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full transition-all btn-press"
                    >
                      Continue
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              <Link href="/archive" onClick={() => setActiveTab("archive")}>
                <Card className="bg-lime-400 rounded-2xl border-0 p-4 text-center cursor-pointer hover:bg-lime-500 transition-all card-hover shadow-md h-full">
                  <div className="text-3xl mb-2">📁</div>
                  <p className="font-bold text-gray-900 text-sm">Archive</p>
                </Card>
              </Link>
              <Link href="/progress" onClick={() => setActiveTab("progress")}>
                <Card className="bg-blue-400 rounded-2xl border-0 p-4 text-center cursor-pointer hover:bg-blue-500 transition-all card-hover shadow-md h-full">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-bold text-gray-900 text-sm">Progress</p>
                </Card>
              </Link>
              <Link href="/reminders" onClick={() => setActiveTab("reminders")}>
                <Card className="bg-yellow-400 rounded-2xl border-0 p-4 text-center cursor-pointer hover:bg-yellow-500 transition-all card-hover shadow-md h-full">
                  <div className="text-3xl mb-2">🔔</div>
                  <p className="font-bold text-gray-900 text-sm">Reminders</p>
                </Card>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {/* AI Mentor Card */}
            <Link href="/mentor" onClick={() => setActiveTab("mentor")}>
              <Card className="bg-white rounded-3xl border-2 border-blue-300 p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all card-hover h-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-blue-500 shadow-md">
                    <Image
                      src="/characters/alan1.png"
                      alt="Mentor"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Chat with Alan</h3>
                    <p className="text-xs text-gray-600">AI Mentor</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Ask any questions about your learning path</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-lime-600">
                  <div className="w-2 h-2 bg-lime-600 rounded-full animate-pulse" />
                  <span>Online now</span>
                </div>
              </Card>
            </Link>

            {/* Community Card */}
            <Link href="/community" onClick={() => setActiveTab("community")}>
              <Card className="bg-white rounded-3xl border-2 border-orange-300 p-6 shadow-md hover:shadow-lg hover:border-orange-500 transition-all card-hover h-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">👥</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Community</h3>
                    <p className="text-xs text-gray-600">Join others</p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Portfolio Card */}
            <Link href="/portfolio" onClick={() => setActiveTab("portfolio")}>
              <Card className="bg-white rounded-3xl border-2 border-pink-300 p-6 shadow-md hover:shadow-lg hover:border-pink-500 transition-all card-hover w-auto h-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">🎨</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Portfolio</h3>
                    <p className="text-xs text-gray-600">Your work</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
