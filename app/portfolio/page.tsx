"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sparkles,
  Github,
  Download,
  Share2,
  Award,
  Code,
  Palette,
  Database,
  Globe,
  CheckCircle2,
  Clock,
  Eye,
  ThumbsUp,
  MessageSquare,
  Play,
  X,
  TrendingUp,
  Menu,
} from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showCodeViewer, setShowCodeViewer] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description: "A full-stack productivity tool with real-time updates and team collaboration features",
      status: "in-progress",
      progress: 45,
      image: "/modern-task-management-app-dashboard.jpg",
      skills: ["React", "Node.js", "MongoDB", "WebSockets"],
      tools: ["Next.js", "Express", "Socket.io", "Tailwind CSS"],
      completedFeatures: ["User Authentication", "Task CRUD", "Real-time Updates"],
      upcomingFeatures: ["Team Collaboration", "File Attachments"],
      github: "#",
      demo: "#",
      views: 234,
      likes: 45,
      comments: 12,
      aiComment:
        "This project shows excellent data handling and real-time architecture. Consider adding error boundaries for better user experience.",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts and beautiful visualizations",
      status: "completed",
      progress: 100,
      image: "/preview/project4.png",
      skills: ["React", "API Integration", "Charts", "Geolocation"],
      tools: ["React", "Recharts", "OpenWeather API", "CSS Modules"],
      completedFeatures: ["Location Search", "5-Day Forecast", "Weather Maps", "Responsive Design"],
      upcomingFeatures: [],
      github: "#",
      demo: "#",
      views: 567,
      likes: 89,
      comments: 23,
      aiComment:
        "Great use of data visualization! The API integration is clean and efficient. This demonstrates strong frontend skills.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern animations",
      status: "completed",
      progress: 100,
      image: "/modern-developer-portfolio-website.jpg",
      skills: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      tools: ["Next.js 14", "Framer Motion", "Tailwind CSS", "Vercel"],
      completedFeatures: ["Responsive Design", "Dark Mode", "Contact Form", "Blog Section"],
      upcomingFeatures: [],
      github: "#",
      demo: "#",
      views: 892,
      likes: 134,
      comments: 45,
      aiComment:
        "Excellent attention to detail and smooth animations. Your design sense is improving rapidly. Consider adding case studies for each project.",
    },
  ]

  const skills = [
    { name: "React", level: 75, category: "Frontend", icon: Code, recentPractice: "2 days ago" },
    { name: "JavaScript", level: 85, category: "Frontend", icon: Code, recentPractice: "1 day ago" },
    { name: "Node.js", level: 60, category: "Backend", icon: Database, recentPractice: "3 days ago" },
    { name: "CSS/Tailwind", level: 80, category: "Design", icon: Palette, recentPractice: "1 day ago" },
    { name: "MongoDB", level: 55, category: "Backend", icon: Database, recentPractice: "5 days ago" },
    { name: "Git", level: 70, category: "Tools", icon: Github, recentPractice: "Today" },
  ]

  const achievements = [
    { title: "First Project Completed", date: "2 weeks ago", icon: Award, xp: 100 },
    { title: "10 Lessons Mastered", date: "1 week ago", icon: CheckCircle2, xp: 150 },
    { title: "7 Day Streak", date: "Today", icon: Clock, xp: 50 },
  ]

  const _selectedProjectData = projects.find((p) => p.id === selectedProject)

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
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">Portfolio</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-lime-400 rounded-full overflow-hidden border-3 border-white shadow-lg">
              <Image
                src="/characters/sara1.png"
                alt="Portfolio"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
              <p className="text-lg text-gray-700">Aspiring Full-Stack Developer</p>
            </div>
          </div>
          <p className="text-base text-gray-700 max-w-2xl">
            Building practical projects while learning modern web development. Passionate about creating user-friendly
            applications that solve real problems.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="text-3xl font-bold text-primary mb-1">3</div>
            <p className="text-sm text-muted-foreground mb-2">Projects Built</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Eye className="w-3 h-3" />
              <span>1,693 total views</span>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors cursor-pointer">
            <div className="text-3xl font-bold mb-1 text-primary">12</div>
            <p className="text-sm text-muted-foreground mb-2">Skills Mastered</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3" />
              <span>+3 this month</span>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="text-3xl font-bold text-primary mb-1">68%</div>
            <p className="text-sm text-muted-foreground mb-2">Path Progress</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>6 weeks remaining</span>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors cursor-pointer">
            <div className="text-3xl font-bold mb-1 text-primary">268</div>
            <p className="text-sm text-muted-foreground mb-2">Community Likes</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ThumbsUp className="w-3 h-3" />
              <span>+45 this week</span>
            </div>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">My Projects</h2>
              <p className="text-sm text-muted-foreground">Real-world applications built during my learning journey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className={
                        project.status === "completed"
                          ? "bg-accent/90 text-white border-accent"
                          : "bg-primary/90 text-white border-primary"
                      }
                    >
                      {project.status === "completed" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          In Progress
                        </>
                      )}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-xs">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>{project.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Progress */}
                  {project.status === "in-progress" && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Project Progress</span>
                        <span className="text-xs font-medium text-foreground">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  )}

                  {/* AI Comment Preview */}
                  <div className="bg-primary/5 rounded-lg p-3 mb-4 border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-foreground mb-1">AI Mentor Feedback</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{project.aiComment}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowCodeViewer(true)
                      }}
                    >
                      <Code className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Skills */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Skills & Proficiency</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {skill.category}
                        </Badge>
                        <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 mb-2" />
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs text-muted-foreground">Last practiced: {skill.recentPractice}</p>
                      <Button variant="ghost" size="sm" className="h-6 text-xs">
                        Practice Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <Card className="p-6 bg-card border-border mb-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground mb-1">{achievement.date}</p>
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        +{achievement.xp} XP
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Share Your Portfolio</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your portfolio is automatically updated as you complete projects. Share it with potential employers!
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 mb-2">
                <Share2 className="w-4 h-4 mr-2" />
                Get Shareable Link
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </main>

      {/* Code Viewer Modal */}
      {showCodeViewer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden bg-card border-border">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Code Viewer</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowCodeViewer(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="bg-muted/50 rounded-lg p-4 border border-border mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    src/components/TaskList.tsx
                  </Badge>
                </div>
                <pre className="text-xs text-foreground font-mono overflow-x-auto">
                  {`import { useState } from 'react';
import { Task } from '@/types';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (id: string) => void;
}

export function TaskList({ tasks, onTaskComplete }: TaskListProps) {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div key={task.id} className="p-4 border rounded-lg">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onTaskComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`}
                </pre>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download File
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
