"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sparkles,
  Trophy,
  Star,
  Flame,
  Zap,
  Award,
  Target,
  TrendingUp,
  Users,
  Code,
  BookOpen,
  CheckCircle2,
  Crown,
  Medal,
  Menu,
  X,
} from "lucide-react"

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "learning" | "social" | "milestones">("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const userStats = {
    level: 12,
    xp: 1250,
    xpToNextLevel: 1500,
    totalAchievements: 24,
    unlockedAchievements: 18,
    streak: 7,
    rank: "Gold",
    weeklyRank: 3,
  }

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: Target,
      category: "learning",
      xp: 50,
      unlocked: true,
      unlockedDate: "2 weeks ago",
      rarity: "common",
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintain a 7-day learning streak",
      icon: Flame,
      category: "milestones",
      xp: 100,
      unlocked: true,
      unlockedDate: "Today",
      rarity: "rare",
    },
    {
      id: 3,
      title: "Fast Learner",
      description: "Complete 5 lessons in one day",
      icon: Zap,
      category: "learning",
      xp: 75,
      unlocked: true,
      unlockedDate: "3 days ago",
      rarity: "uncommon",
    },
    {
      id: 4,
      title: "Code Master",
      description: "Master 10 programming skills",
      icon: Code,
      category: "learning",
      xp: 200,
      unlocked: true,
      unlockedDate: "1 week ago",
      rarity: "epic",
    },
    {
      id: 5,
      title: "Community Helper",
      description: "Help 5 other learners in the community",
      icon: Users,
      category: "social",
      xp: 150,
      unlocked: true,
      unlockedDate: "4 days ago",
      rarity: "rare",
    },
    {
      id: 6,
      title: "Project Pioneer",
      description: "Complete your first project",
      icon: Award,
      category: "milestones",
      xp: 250,
      unlocked: true,
      unlockedDate: "2 weeks ago",
      rarity: "epic",
    },
    {
      id: 7,
      title: "Consistency King",
      description: "Maintain a 30-day learning streak",
      icon: Crown,
      category: "milestones",
      xp: 500,
      unlocked: false,
      progress: 23,
      total: 30,
      rarity: "legendary",
    },
    {
      id: 8,
      title: "Knowledge Seeker",
      description: "Complete 50 lessons",
      icon: BookOpen,
      category: "learning",
      xp: 300,
      unlocked: false,
      progress: 27,
      total: 50,
      rarity: "epic",
    },
    {
      id: 9,
      title: "Rising Star",
      description: "Reach the top 10 on the weekly leaderboard",
      icon: Star,
      category: "social",
      xp: 400,
      unlocked: false,
      progress: 3,
      total: 10,
      rarity: "legendary",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", xp: 2450, level: 15, avatar: "👩" },
    { rank: 2, name: "Marcus Johnson", xp: 2180, level: 14, avatar: "👨" },
    { rank: 3, name: "Alex Johnson", xp: 1250, level: 12, avatar: "🧑", isCurrentUser: true },
    { rank: 4, name: "Emma Davis", xp: 1120, level: 11, avatar: "👩" },
    { rank: 5, name: "James Wilson", xp: 980, level: 10, avatar: "👨" },
  ]

  const filteredAchievements =
    selectedCategory === "all" ? achievements : achievements.filter((a) => a.category === selectedCategory)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-200 text-gray-900"
      case "uncommon":
        return "bg-lime-200 text-gray-900 border-lime-400"
      case "rare":
        return "bg-blue-200 text-gray-900 border-blue-400"
      case "epic":
        return "bg-purple-200 text-purple-900 border-purple-400"
      case "legendary":
        return "bg-amber-200 text-amber-900 border-amber-400"
      default:
        return "bg-gray-200 text-gray-900"
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/backgrounds/classroom-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="border-b-2 backdrop-blur-sm sticky top-0 z-50 bg-background border-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4 transition-all"
              >
                Back              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">Achievements</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge className="hidden md:flex bg-lime-400 text-gray-900 border-0 font-bold">
              <Trophy className="w-3 h-3 mr-1" />
              Level {userStats.level}
            </Badge>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-cyan-300 border-t-2 border-cyan-400 p-4">
            <Link href="/" className="block text-sm text-gray-900 px-4 py-2 hover:bg-white/20 rounded-full">
              Back to Dashboard
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Progress</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Track your learning journey, unlock achievements, and compete with other learners on the leaderboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Level Progress */}
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl border-0 lg:col-span-2 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">Level {userStats.level}</h2>
                <p className="text-sm text-white/80">
                  {userStats.xp} / {userStats.xpToNextLevel} XP to next level
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-lime-400 text-gray-900 border-0 font-bold">
                  <Medal className="w-3 h-3 mr-1" />
                  {userStats.rank}
                </Badge>
              </div>
            </div>
            <Progress value={(userStats.xp / userStats.xpToNextLevel) * 100} className="h-3 mb-4" />
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">{userStats.streak}</div>
                <p className="text-xs text-white/80">Day Streak</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">{userStats.unlockedAchievements}</div>
                <p className="text-xs text-white/80">Achievements</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">#{userStats.weeklyRank}</div>
                <p className="text-xs text-white/80">Weekly Rank</p>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md">
            <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Total XP</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{userStats.xp}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-lime-600" />
                  <span className="text-sm text-gray-700">Achievements</span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {userStats.unlockedAchievements}/{userStats.totalAchievements}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">Current Streak</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{userStats.streak} days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Rank</span>
                </div>
                <Badge className="bg-lime-400 text-gray-900 border-0 text-xs font-bold">{userStats.rank}</Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full font-bold transition-all ${
                  selectedCategory === "all"
                    ? "bg-lime-400 hover:bg-lime-500 text-gray-900"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-lime-400"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setSelectedCategory("learning")}
                className={`rounded-full font-bold transition-all ${
                  selectedCategory === "learning"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-400"
                }`}
              >
                Learning
              </Button>
              <Button
                onClick={() => setSelectedCategory("social")}
                className={`rounded-full font-bold transition-all ${
                  selectedCategory === "social"
                    ? "bg-lime-400 hover:bg-lime-500 text-gray-900"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-lime-400"
                }`}
              >
                Social
              </Button>
              <Button
                onClick={() => setSelectedCategory("milestones")}
                className={`rounded-full font-bold transition-all ${
                  selectedCategory === "milestones"
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-400"
                }`}
              >
                Milestones
              </Button>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`p-6 transition-all rounded-3xl border-2 card-hover ${
                    achievement.unlocked
                      ? "bg-white border-gray-300 text-gray-900"
                      : "bg-gray-100 border-gray-300 text-gray-600 opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${
                        achievement.unlocked ? "bg-blue-500/20 text-2xl" : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {achievement.unlocked
                        ? achievement.id === 1
                          ? "🎯"
                          : achievement.id === 2
                            ? "🔥"
                            : achievement.id === 3
                              ? "⚡"
                              : achievement.id === 4
                                ? "💻"
                                : achievement.id === 5
                                  ? "👥"
                                  : achievement.id === 6
                                    ? "🏆"
                                    : achievement.id === 7
                                      ? "👑"
                                      : achievement.id === 8
                                        ? "📚"
                                        : "⭐"
                        : "🔒"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                        {achievement.unlocked && <CheckCircle2 className="w-5 h-5 text-lime-600 flex-shrink-0" />}
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs border-2 ${getRarityColor(achievement.rarity)}`}>
                          {achievement.rarity}
                        </Badge>
                        <Badge className="text-xs bg-lime-200 text-gray-900 border-lime-400 border-2">
                          +{achievement.xp} XP
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {achievement.unlocked ? (
                    <p className="text-xs text-gray-600">Unlocked {achievement.unlockedDate}</p>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">Progress</span>
                        <span className="text-xs font-bold text-gray-900">
                          {achievement.progress} / {achievement.total}
                        </span>
                      </div>
                      <Progress
                        value={((achievement.progress || 0) / (achievement.total || 1)) * 100}
                        className="h-2"
                      />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md mb-6">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-lime-600" />
                <h2 className="text-xl font-bold text-gray-900">Weekly Leaderboard</h2>
              </div>

              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all border-2 ${
                      user.isCurrentUser
                        ? "bg-blue-100 border-blue-400"
                        : "bg-white border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        user.rank === 1
                          ? "bg-amber-300 text-amber-900"
                          : user.rank === 2
                            ? "bg-gray-300 text-gray-700"
                            : user.rank === 3
                              ? "bg-orange-300 text-orange-900"
                              : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {user.rank}
                    </div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-gray-900 truncate">{user.name}</h3>
                      <p className="text-xs text-gray-600">Level {user.level}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-600">{user.xp}</div>
                      <p className="text-xs text-gray-600">XP</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full btn-press">
                View Full Leaderboard
              </Button>
            </Card>

            {/* Streak Card */}
            <Card className="p-6 bg-gradient-to-br from-orange-200 to-lime-100 rounded-3xl border-2 border-orange-400 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                <h3 className="font-bold text-gray-900">Keep Your Streak!</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                You're on a {userStats.streak}-day streak! Complete today's challenge to keep it going.
              </p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full btn-press">
                Complete Daily Challenge
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
