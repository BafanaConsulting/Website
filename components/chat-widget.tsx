"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  text: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const sendMessage = useCallback(async (text: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    }

    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    try {
      const allMessages = [...messages, userMsg].map((m) => ({
        role: m.role,
        parts: [{ type: "text", text: m.text }],
      }))

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      })

      if (!res.ok || !res.body) {
        throw new Error("Failed to get response")
      }

      const assistantId = crypto.randomUUID()
      let assistantText = ""

      setMessages((prev) => [...prev, { id: assistantId, role: "assistant", text: "" }])

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() || ""

        for (const line of lines) {
          const trimmed = line.trim()
          if (trimmed.startsWith("data:")) {
            const data = trimmed.slice(5).trim()
            if (data === "[DONE]") break
            try {
              const parsed = JSON.parse(data)
              if (parsed.type === "text-delta" && parsed.textDelta) {
                assistantText += parsed.textDelta
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId ? { ...m, text: assistantText } : m
                  )
                )
              }
            } catch {
              // skip invalid JSON
            }
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Sorry, something went wrong. Please try again or email us at bheki.malinga@bafanaconsulting.co.za.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    const text = input
    setInput("")
    sendMessage(text)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex h-[500px] w-[380px] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:w-[420px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Bafana AI</p>
                <p className="text-xs text-primary-foreground/70">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Welcome to Bafana AI</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Ask me anything about our consulting services, approach, or how we can help your business.
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {[
                    "What services do you offer?",
                    "How can I schedule a consultation?",
                    "Tell me about your company",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => sendMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {message.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line.replace(/\*\*(.*?)\*\*/g, "")}
                      {i < message.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
                {message.role === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/40">
                    <User className="h-4 w-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl bg-muted px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-card px-4 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="h-8 w-8 shrink-0"
              disabled={!input.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105",
          isOpen && "rotate-0"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
      </Button>
    </div>
  )
}
