import { useState, useEffect, useRef } from "react";
import { askAI } from "./services/gemini.js";
import "./AIChatBot.css";

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("nexlio_messages");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        sender: "bot",
        text: `👋 Hello! I'm Nexlio AI.

I'm here to help you with:

• Web Development
• Branding
• Digital Marketing
• Content Creation
• Video Editing
• Vector Art

How can I help you today?`,
      },
    ];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("nexlio_history");
    return saved ? JSON.parse(saved) : [];
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "nexlio_messages",
      JSON.stringify(messages)
    );

    localStorage.setItem(
      "nexlio_history",
      JSON.stringify(history)
    );

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, history, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(userMessage, history);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);

      setHistory((prev) => [
        ...prev,
        {
          user: userMessage,
          assistant: reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "❌ Sorry, I'm temporarily unavailable. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("nexlio_messages");
    localStorage.removeItem("nexlio_history");

    setHistory([]);

    setMessages([
      {
        sender: "bot",
        text: `👋 Hello! I'm Nexlio AI.

How can I help you today?`,
      },
    ]);
  };

  return (
    <>
      <div
        className="chat-bubble"
        onClick={() => setOpen(!open)}
      >
        🤖
      </div>

      {open && (
        <div className="chat-window">

          <div className="chat-header">

            <div>
              <h3>🤖 Nexlio AI</h3>
              <span>🟢 Online</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <button
                title="New Chat"
                onClick={clearChat}
              >
                ↺
              </button>

              <button
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bot-message">
                🤖 Nexlio AI is typing...
              </div>
            )}

            <div ref={messagesEndRef}></div>

          </div>

          <div className="chat-footer">

            <input
              type="text"
              value={input}
              placeholder="Ask Nexlio AI..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              onClick={handleSend}
              disabled={loading}
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}