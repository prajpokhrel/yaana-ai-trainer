import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Send, PlusCircle, Bot, User } from 'lucide-react'
import { getBotReply } from '../services/bot'

export const Chat = () => {
  const { user } = useAuth()
  const { contextId } = useParams()  // <-- get contextId from URL
  const navigate = useNavigate()      // <-- for context switching
  const scrollRef = useRef(null)

  // Store all chats by contextId
  const [chats, setChats] = useState({
    general: [
      {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: `Hi${user?.name ? ` ${user.name}` : ''}! I’m YAANA’s assistant (General). Ask me anything.`,
        ts: Date.now(),
      },
    ],
    'product-support': [
      {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: `Welcome to Product Support! How can I help you today?`,
        ts: Date.now(),
      },
    ],
    sales: [],  // Empty initially
  })

  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Fallback if contextId doesn't exist yet
  const currentMessages = chats[contextId] || []

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [currentMessages, isTyping])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || isTyping) return

    const userMsg = {
      id: crypto.randomUUID(),
      sender: 'user',
      text,
      ts: Date.now(),
    }

    setChats((prev) => ({
      ...prev,
      [contextId]: [...(prev[contextId] || []), userMsg],
    }))

    setInput('')
    setIsTyping(true)

    const reply = await getBotReply(text)
    const botMsg = {
      id: crypto.randomUUID(),
      sender: 'bot',
      text: reply,
      ts: Date.now(),
    }

    setChats((prev) => ({
      ...prev,
      [contextId]: [...(prev[contextId] || []), botMsg],
    }))
    setIsTyping(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const startNewChat = () => {
    setChats((prev) => ({
      ...prev,
      [contextId]: [
        {
          id: crypto.randomUUID(),
          sender: 'bot',
          text: 'New chat started. How can I help you today?',
          ts: Date.now(),
        },
      ],
    }))
    setInput('')
    setIsTyping(false)
  }

  return (
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Context Navigation */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => navigate('/chat/general')}
            className={`px-3 py-1 rounded ${
              contextId === 'general' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            General
          </button>

          <button
            onClick={() => navigate('/chat/product-support')}
            className={`px-3 py-1 rounded ${
              contextId === 'product-support' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Product Support
          </button>

          <button
            onClick={() => navigate('/chat/sales')}
            className={`px-3 py-1 rounded ${
              contextId === 'sales' ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}
          >
            Sales
          </button>
        </div>

        {/* Header */}
        <div className="card mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">YAANA Chat</h1>
            <p className="text-sm text-gray-600">
              Context: <span className="font-semibold">{contextId}</span>
            </p>
          </div>
          <button onClick={startNewChat} className="btn btn-outline flex items-center">
            <PlusCircle size={18} className="mr-2" />
            Start New Chat
          </button>
        </div>

        {/* Chat Window */}
        <div className="card h-[65vh] flex flex-col">
          {/* History */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto pr-1 space-y-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {currentMessages.map((m) => (
              <MessageBubble key={m.id} sender={m.sender} text={m.text} />
            ))}
            {isTyping && <TypingBubble />}
          </div>

          {/* Composer */}
          <div className="border-t mt-4 pt-4 flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Type your message…"
              className="flex-1 resize-none input"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              className="btn btn-primary flex items-center"
            >
              <Send size={18} className="mr-2" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const MessageBubble = ({ sender, text }) => {
  const isUser = sender === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm
        ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}
      >
        <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
          {isUser ? (
            <>
              <span className="uppercase tracking-wide">You</span>
              <User size={14} />
            </>
          ) : (
            <>
              <Bot size={14} />
              <span className="uppercase tracking-wide">YAANA</span>
            </>
          )}
        </div>
        <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

const TypingBubble = () => (
  <div className="flex justify-start">
    <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
        <Bot size={14} />
        <span className="uppercase tracking-wide">YAANA</span>
      </div>
      <div className="flex items-center gap-1 py-1">
        <Dot />
        <Dot delay="150ms" />
        <Dot delay="300ms" />
      </div>
    </div>
  </div>
)

const Dot = ({ delay = '0ms' }) => (
  <span
    className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce"
    style={{ animationDelay: delay }}
  />
)
