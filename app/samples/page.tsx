"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Menu, X } from "lucide-react"

export default function SamplesPage() {
  const [selectedSample, setSelectedSample] = useState<number | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const samples = [
    {
      id: 1,
      title: "React Hooks Fundamentals",
      description: "Learn the basics of useState and useEffect",
      category: "React",
      difficulty: "Beginner",
      duration: "15 min",
      icon: "⚛️",
      lesson: {
        content: `React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState and useEffect.

**useState** allows you to add state to functional components:
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

**useEffect** lets you perform side effects in your components:
\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

Key Points:
• Hooks must be called at the top level of your component
• Hooks can only be used in functional components
• Custom hooks can be created to reuse stateful logic`,
        codeExample: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      },
      quiz: [
        {
          question: "What does useState return?",
          options: [
            "A single value",
            "An array with state and setter function",
            "An object with state properties",
            "A function",
          ],
          correct: 1,
        },
        {
          question: "When does useEffect run by default?",
          options: ["Only on mount", "Only on unmount", "After every render", "Never automatically"],
          correct: 2,
        },
        {
          question: "Can you use hooks inside conditional statements?",
          options: ["Yes, always", "No, never", "Only in class components", "Only with useEffect"],
          correct: 1,
        },
      ],
    },
    {
      id: 2,
      title: "JavaScript Async/Await",
      description: "Master asynchronous JavaScript programming",
      category: "JavaScript",
      difficulty: "Intermediate",
      duration: "20 min",
      icon: "⚡",
      lesson: {
        content: `Async/await is a modern way to handle asynchronous operations in JavaScript, making your code cleaner and easier to read.

**async** keyword declares an asynchronous function:
\`\`\`javascript
async function fetchData() {
  // function body
}
\`\`\`

**await** pauses execution until a Promise resolves:
\`\`\`javascript
const data = await fetch('/api/data');
\`\`\`

Key Benefits:
• Cleaner syntax than Promise chains
• Better error handling with try/catch
• Makes async code look synchronous`,
        codeExample: `async function getUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Usage
getUserData(123)
  .then(user => console.log(user))
  .catch(err => console.error(err));`,
      },
      quiz: [
        {
          question: "What does an async function always return?",
          options: ["A value", "A Promise", "undefined", "An array"],
          correct: 1,
        },
        {
          question: "Can you use await outside of an async function?",
          options: ["Yes, anywhere", "No, only inside async functions", "Only in the global scope", "Only with fetch"],
          correct: 1,
        },
        {
          question: "How do you handle errors with async/await?",
          options: [".catch() only", "try/catch blocks", ".then() chains", "Error callbacks"],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: "CSS Flexbox Layout",
      description: "Build responsive layouts with Flexbox",
      category: "CSS",
      difficulty: "Beginner",
      duration: "18 min",
      icon: "🎨",
      lesson: {
        content: `Flexbox is a powerful CSS layout system that makes it easy to design flexible and responsive layouts.

**Container Properties:**
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

**Item Properties:**
\`\`\`css
.item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
}
\`\`\`

Key Concepts:
• Main axis vs Cross axis
• justify-content for main axis alignment
• align-items for cross axis alignment`,
        codeExample: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
  min-width: 200px;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
      },
      quiz: [
        {
          question: "What property makes an element a flex container?",
          options: ["flex: 1", "display: flex", "flexbox: true", "flex-container: yes"],
          correct: 1,
        },
        {
          question: "Which property aligns items along the main axis?",
          options: ["align-items", "justify-content", "flex-align", "main-align"],
          correct: 1,
        },
        {
          question: "What does flex: 1 do?",
          options: ["Sets width to 1px", "Makes item grow to fill space", "Creates 1 column", "Sets flex-direction"],
          correct: 1,
        },
      ],
    },
  ]

  const selectedSampleData = samples.find((s) => s.id === selectedSample)

  const handleQuizSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!selectedSampleData) return 0
    const correct = selectedSampleData.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
    return Math.round((correct / selectedSampleData.quiz.length) * 100)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/backgrounds/classroom-bg.png)",
        backgroundColor: "#a8d5e2",
      }}
    >
      <header className="border-b-2 backdrop-blur-sm sticky top-0 z-50 bg-card border-background">
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
            <span className="font-bold text-xl text-gray-900">Course Samples</span>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {!selectedSample ? (
          <>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Try Before You Commit</h1>
              <p className="text-lg text-gray-700 max-w-2xl">Experience our interactive lessons with sample courses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {samples.map((sample) => (
                <Card
                  key={sample.id}
                  className="p-6 bg-white rounded-3xl border-2 border-gray-300 hover:border-blue-500 cursor-pointer transition-all shadow-md hover:shadow-lg group card-hover"
                  onClick={() => setSelectedSample(sample.id)}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{sample.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">{sample.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{sample.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-lime-400 text-gray-900 border-0">{sample.category}</Badge>
                    <span className="text-xs text-gray-600">{sample.duration}</span>
                  </div>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full btn-press">
                    Try This
                  </Button>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedSample(null)}
              className="mb-6 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full px-4"
            >
              back
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Lesson Content */}
                <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Lesson Content</h2>
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedSampleData?.lesson.content}
                  </div>
                </Card>

                {/* Code Example */}
                <Card className="p-6 bg-white rounded-3xl border-2 border-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Example</h2>
                  <div className="bg-gray-900 text-white rounded-xl p-4 overflow-x-auto">
                    <pre className="text-xs font-mono">{selectedSampleData?.lesson.codeExample}</pre>
                  </div>
                </Card>

                {/* Quiz */}
                <Card className="p-6 bg-blue-100 rounded-3xl border-2 border-blue-400">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Quiz</h2>
                  <div className="space-y-6">
                    {selectedSampleData?.quiz.map((question, qIndex) => (
                      <div key={qIndex} className="bg-white rounded-2xl p-4 border-2 border-gray-300">
                        <p className="font-bold text-gray-900 mb-3">
                          {qIndex + 1}. {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => {
                            const isSelected = quizAnswers[qIndex] === oIndex
                            const isCorrect = question.correct === oIndex
                            const showFeedback = showResults

                            return (
                              <button
                                key={oIndex}
                                onClick={() => !showResults && setQuizAnswers({ ...quizAnswers, [qIndex]: oIndex })}
                                disabled={showResults}
                                className={`w-full text-left p-3 rounded-xl border-2 transition-all font-medium ${
                                  showFeedback && isCorrect
                                    ? "bg-lime-200 border-lime-400 text-gray-900"
                                    : showFeedback && isSelected && !isCorrect
                                      ? "bg-red-200 border-red-400 text-gray-900"
                                      : isSelected
                                        ? "bg-blue-200 border-blue-400 text-gray-900"
                                        : "bg-white border-gray-300 text-gray-900 hover:border-blue-400"
                                }`}
                              >
                                {option}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!showResults ? (
                    <Button
                      onClick={handleQuizSubmit}
                      className="w-full mt-6 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full btn-press"
                      disabled={Object.keys(quizAnswers).length !== selectedSampleData?.quiz.length}
                    >
                      Submit Quiz
                    </Button>
                  ) : (
                    <Card className="mt-6 p-4 bg-white border-2 border-lime-400 rounded-2xl">
                      <div className="text-center mb-3">
                        <div className="text-4xl font-bold text-lime-600 mb-1">{calculateScore()}%</div>
                        <p className="text-sm text-gray-700">Quiz Complete!</p>
                      </div>
                      <Progress value={calculateScore()} className="mb-3" />
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-full"
                          onClick={() => {
                            setQuizAnswers({})
                            setShowResults(false)
                          }}
                        >
                          Retry
                        </Button>
                        <Button
                          className="flex-1 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-full btn-press"
                          asChild
                        >
                          <Link href="/roadmap">Continue</Link>
                        </Button>
                      </div>
                    </Card>
                  )}
                </Card>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
