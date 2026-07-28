import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, PlayCircle, Paperclip, Mic, SendHorizonal } from 'lucide-react'

// A short looping conversation. Each pair cycles: user message appears,
// a typing indicator shows briefly, then the AI reply types itself out.
// After a pause, it moves to the next pair and loops back to the start.
const CONVERSATION = [
  {
    user: 'Write a professional email.',
    ai: "Sure! Here's a polished email:\n\nSubject: Following Up on Our Discussion\n\nHi Alex, thank you for your time today...",
  },
  {
    user: 'Can you simplify this paragraph?',
    ai: "Absolutely — here's a clearer, more concise version that keeps your original meaning intact.",
  },
  {
    user: 'Give me 3 startup name ideas.',
    ai: 'Here are three options: Nimbus Labs, Clearline, and Voxel Studio — each conveys clarity and momentum.',
  },
]

const TYPE_SPEED_MS = 20
const TYPING_INDICATOR_MS = 1000
const HOLD_AFTER_REPLY_MS = 2200

const Hero = () => {
  const [pairIndex, setPairIndex] = useState(0)
  const [phase, setPhase] = useState('user') // 'user' -> 'typing' -> 'ai' -> 'hold'
  const [displayedReply, setDisplayedReply] = useState('')

  const current = CONVERSATION[pairIndex]

  // Drive the phase machine: user bubble -> typing dots -> AI reply -> hold -> next pair
  useEffect(() => {
    let timer

    if (phase === 'user') {
      timer = setTimeout(() => setPhase('typing'), 700)
    } else if (phase === 'typing') {
      timer = setTimeout(() => setPhase('ai'), TYPING_INDICATOR_MS)
    } else if (phase === 'hold') {
      timer = setTimeout(() => {
        setDisplayedReply('')
        setPairIndex((prev) => (prev + 1) % CONVERSATION.length)
        setPhase('user')
      }, HOLD_AFTER_REPLY_MS)
    }

    return () => clearTimeout(timer)
  }, [phase])

  // Type out the AI reply character by character once we enter the 'ai' phase.
  useEffect(() => {
    if (phase !== 'ai') return

    const text = current.ai
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setDisplayedReply(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setPhase('hold')
      }
    }, TYPE_SPEED_MS)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, pairIndex])

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle floating blurred background elements — purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-16 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-button/10 blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container-section grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="badge mb-6">
            <Sparkles size={16} className="text-button" aria-hidden="true" />
            AI Powered Assistant
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Smarter Conversations.
            <br />
            <span className="text-button">Powered by AI.</span>
          </h1>

          <p className="text-secondary text-lg leading-relaxed max-w-xl mb-10">
            Velora AI helps individuals and businesses generate content, solve problems, write
            code, and boost productivity with intelligent AI assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="btn-primary">
              Start Free
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#chat-demo" className="btn-secondary">
              <PlayCircle size={18} aria-hidden="true" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Right column - Chat UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="relative bg-white rounded-xl2 shadow-lift border border-borderc p-6 md:p-8 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-borderc">
              <div className="w-9 h-9 rounded-full bg-button flex items-center justify-center text-white font-heading font-bold text-sm">
                V
              </div>
              <div>
                <p className="font-semibold text-sm">Velora AI</p>
                <p className="text-xs text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Online
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 min-h-[220px]">
              <motion.div
                key={`user-${pairIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="self-end bg-button text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm"
              >
                {current.user}
              </motion.div>

              {phase === 'typing' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="self-start bg-section rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5"
                  aria-label="Velora AI is typing"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" />
                </motion.div>
              )}

              {(phase === 'ai' || phase === 'hold') && (
                <div className="self-start bg-section text-primary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] text-sm leading-relaxed">
                  <span className="whitespace-pre-line">{displayedReply}</span>
                  {phase === 'ai' && (
                    <span className="inline-block w-1 h-4 bg-primary/70 ml-0.5 animate-blink align-middle" />
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-borderc">
              <Paperclip size={18} className="text-secondary" aria-hidden="true" />
              <div className="flex-1 bg-section rounded-full px-4 py-2 text-sm text-secondary">
                Ask Velora anything...
              </div>
              <Mic size={18} className="text-secondary" aria-hidden="true" />
              <button
                className="w-9 h-9 rounded-full bg-button flex items-center justify-center text-white flex-shrink-0"
                aria-label="Send message"
              >
                <SendHorizonal size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            className="hidden md:block absolute -top-6 -left-10 bg-white rounded-2xl shadow-card border border-borderc px-4 py-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs text-secondary">Accuracy</p>
            <p className="font-heading font-bold text-primary">99.9%</p>
          </motion.div>

          <motion.div
            className="hidden md:block absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-card border border-borderc px-4 py-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <p className="text-xs text-secondary">Active Users</p>
            <p className="font-heading font-bold text-primary">50K+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
