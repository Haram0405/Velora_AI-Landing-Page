import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Paperclip, Mic, SendHorizonal, ArrowRight } from 'lucide-react'

const conversation = [
  { from: 'user', text: 'Can you help me summarize this report?' },
  { from: 'ai', text: "Of course! Send it over and I'll break it down into key takeaways and action items." },
  { from: 'user', text: 'What about translating it to Spanish too?' },
]

const ChatPreview = () => {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    if (visibleCount >= conversation.length) return

    if (conversation[visibleCount]?.from === 'ai') {
      setShowTyping(true)
      const typingTimer = setTimeout(() => {
        setShowTyping(false)
        setVisibleCount((c) => c + 1)
      }, 1200)
      return () => clearTimeout(typingTimer)
    }

    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 1000)
    return () => clearTimeout(timer)
  }, [visibleCount])

  return (
    <section id="chat-demo" className="section-padding bg-section">
      <div className="container-section grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Live Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">See Velora AI in Action</h2>
          <p className="text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            Watch how naturally Velora AI responds — understanding context, follow-up questions,
            and everyday requests, all in one continuous conversation.
          </p>
          <a href="#pricing" className="btn-primary">
            Try It Yourself
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl2 shadow-lift border border-borderc p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-borderc">
            <div className="w-9 h-9 rounded-full bg-button flex items-center justify-center text-white font-heading font-bold text-sm">
              V
            </div>
            <div>
              <p className="font-semibold text-sm">Velora AI Assistant</p>
              <p className="text-xs text-secondary">Responding in real time</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-h-[240px]">
            {conversation.slice(0, visibleCount).map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={
                  msg.from === 'user'
                    ? 'self-end bg-button text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm'
                    : 'self-start bg-section text-primary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] text-sm leading-relaxed'
                }
              >
                {msg.text}
              </motion.div>
            ))}

            {showTyping && (
              <div className="self-start bg-section rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-borderc">
            <Paperclip size={18} className="text-secondary" aria-hidden="true" />
            <div className="flex-1 bg-section rounded-full px-4 py-2 text-sm text-secondary">
              Type your message...
            </div>
            <Mic size={18} className="text-secondary" aria-hidden="true" />
            <button
              className="w-9 h-9 rounded-full bg-button flex items-center justify-center text-white flex-shrink-0"
              aria-label="Send message"
            >
              <SendHorizonal size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChatPreview
