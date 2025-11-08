"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, MessageSquare, Send, Menu, X } from "lucide-react"

export default function CommunityPage() {
  const [_selectedMood, _setSelectedMood] = useState(null)
  const [newPost, setNewPost] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [posts] = useState([
    {
      id: 1,
      author: { name: "Sarah Chen", avatar: "👩", level: 15, badge: "Mentor" },
      content: "Just finished building my first full-stack app! Excited to share my journey.",
      mood: "happy",
      likes: 45,
      comments: 12,
      tags: ["Full-Stack", "Motivation"],
    },
    {
      id: 2,
      author: { name: "Marcus Johnson", avatar: "👨", level: 14, badge: "Helper" },
      content: "Can someone explain useEffect vs useLayoutEffect? Struggling with when to use each.",
      mood: "stuck",
      likes: 23,
      comments: 18,
      tags: ["React", "Hooks"],
    },
    {
      id: 3,
      author: { name: "Emma Davis", avatar: "👩", level: 11, badge: "Learner" },
      content: "Taking breaks really helps solve bugs! Remember to step away when stuck.",
      mood: "neutral",
      likes: 67,
      comments: 8,
      tags: ["Tips", "Productivity"],
    },
  ])

  const trendingTopics = [
    { name: "React Hooks", posts: 234 },
    { name: "Portfolio Tips", posts: 189 },
    { name: "Job Search", posts: 156 },
  ]

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
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4 transition-all">
                Back
              </Button>
            </Link>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">Community Hub</span>
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

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Community Hub</h1>
          <p className="text-lg text-gray-700">Connect with fellow learners and celebrate wins.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-2 border-blue-400 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Share Your Journey</h2>

              <div className="flex gap-2 mb-4">
                <Input
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What did you learn today?"
                  className="flex-1 bg-gray-100 border-2 border-gray-300 rounded-full px-4 py-2 text-gray-900"
                />
                <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-6">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {post.author.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                      <Badge className="bg-lime-400 text-gray-900 text-xs font-bold">{post.author.badge}</Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-900 leading-relaxed mb-3">{post.content}</p>

                  <div className="flex gap-4 pt-3 border-t-2 border-gray-200">
                    <Button variant="ghost" size="sm" className="text-gray-900 font-bold">
                      <Heart className="w-4 h-4 mr-1" /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-900 font-bold">
                      <MessageSquare className="w-4 h-4 mr-1" /> {post.comments}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300 shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h2>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <button
                    key={i}
                    className="w-full text-left p-3 rounded-xl bg-gray-100 hover:bg-blue-100 border-2 border-gray-300"
                  >
                    <p className="font-bold text-gray-900">#{topic.name}</p>
                    <p className="text-xs text-gray-600">{topic.posts} posts</p>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-lime-100 rounded-3xl border-2 border-lime-400">
              <h3 className="font-bold text-gray-900 mb-3">Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-900 font-semibold">
                <li>✓ Be supportive</li>
                <li>✓ Share reflections</li>
                <li>✓ Celebrate wins</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
