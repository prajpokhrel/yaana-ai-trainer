// src/services/bot.js

export const getBotReply = (userText) => {
  // Simulate latency
  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  const canned = [
    "Got it. I’m processing your request.",
    "Here’s a quick insight based on your prompt.",
    "I can help you refine that further—ask me for examples.",
    "Acknowledged. Would you like me to summarize or expand?",
    "Understood. I’ll outline steps you can take next.",
  ]

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

  return delay(700 + Math.random() * 600).then(() => {
    // Very light echo + guidance to feel helpful
    if (userText.length < 12) {
      return `${pick(canned)}`
    }
    return `You said: “${userText}”. ${pick(canned)}`
  })
}
