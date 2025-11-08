"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Send, Lightbulb, Code, BookOpen, Zap, Menu, X } from "lucide-react"

export default function MentorPage() {
  const [message, setMessage] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "user",
      character: "sara1",
      content: "You: Alan, what exactly is an API? I've heard about it, but I don't really understand what it's for.",
    },
    {
      id: 2,
      type: "mentor",
      character: "alan1",
      content:
        "Alan: Great question, Sara! Imagine your app is a restaurant and the data is the food in the kitchen. An API is like a waiter who takes your order from the table to the kitchen and brings the food back to you ready to eat. That way, you don't need to go into the kitchen or know how to cook—you just ask for what you want, and the API takes care of it.",
    },
    {
      id: 3,
      type: "user",
      character: "sara2",
      content: "Oh... so it's like a messenger that goes and brings things, but can I ask for anything I want?",
    },
  ])

  const suggestions = [
    { icon: Lightbulb, text: "Explain React hooks with examples" },
    { icon: Code, text: "Help me debug my code" },
    { icon: BookOpen, text: "Suggest learning resources" },
    { icon: Zap, text: "Quick practice challenge" },
  ]

  const handleSend = () => {
    if (!message.trim()) return

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        type: "user",
        character: "sara1",
        content: message,
      },
    ])
    setMessage("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          type: "mentor",
          character: "alan1",
          content:
            "Exactly! You can ask for anything the API offers. Some APIs are open to everyone, while others require special permission. Think of it like different restaurants - some have all their menu items available, while others only serve certain dishes. The API documentation tells you exactly what you can ask for.",
        },
      ])
    }, 1000)
  }

  const getCharacterImage = (character: string) => {
    return `/characters/${character}.png`
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url(/backgrounds/classroom-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="backdrop-blur-sm border-b-2 bg-background border-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Button
                variant="ghost"
                size="sm"
                className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4 transition-all"
              >
                back
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
              <Image
                src="/characters/alan1.png"
                alt="Mentor"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Alan - AI Mentor</h1>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-700">Online</span>
              </div>
            </div>
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

      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl flex flex-col overflow-hidden">
        {/* Chat Messages */}
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto pr-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className="w-12 h-12 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
                  <Image
                    src={getCharacterImage(msg.character) || "/placeholder.svg"}
                    alt="Character"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`max-w-md ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`rounded-2xl px-5 py-3 shadow-md bubble-in ${
                    msg.type === "user"
                      ? "bg-lime-400 text-gray-900"
                      : "bg-white text-gray-900 border-2 border-blue-500"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-100 text-xs border-2 border-gray-300 transition-all"
                onClick={() => setMessage(suggestion.text)}
              >
                <suggestion.icon className="w-3 h-3 mr-1.5 text-blue-600" />
                {suggestion.text}
              </Button>
            ))}
          </div>

          <div className="flex gap-3">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-white border-2 border-blue-500 rounded-full px-5 py-3 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              onClick={handleSend}
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-6 transition-all btn-press"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-xs text-gray-700 text-center">Alan is here to help you learn</p>
        </div>
      </main>
    </div>
  )
}
