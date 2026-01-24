import { useState } from "react";
import "./CyberAssistant.css";

function CyberAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I am your Cyber Security Assistant." }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:8000/assistant/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { from: "bot", text: data.reply }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Assistant is currently unavailable." }
      ]);
    }
  };

  return (
    <>
      <button className="assistant-toggle" onClick={() => setOpen(!open)}>
        🛡 Assistant
      </button>

      {open && (
        <div className="assistant-panel">
          <div className="assistant-header">
            Cyber Security Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="assistant-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="assistant-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about threats, risks, modules..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CyberAssistant;
