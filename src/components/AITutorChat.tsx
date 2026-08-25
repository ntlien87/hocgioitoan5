import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, RefreshCw, MessageSquare, Lightbulb, HeartHandshake } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AITutorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg_welcome',
      role: 'assistant',
      text: 'Chào con! Thầy Cú Thông Thái 🦉 đây. Con đang gặp khó khăn ở bài toán lớp 5 nào, hay cần thầy giảng lại công thức hình học, phân số, số thập phân hoặc chuyển động đều? Hãy hỏi thầy bất cứ câu nào nhé!',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    '📐 Giải thích công thức tính diện tích hình thang dễ hiểu',
    '⚡ Mẹo nhân chia số thập phân với 10, 100, 0.1, 0.01',
    '🍰 Cho con 1 bài toán đố vui về phân số',
    '🏎️ Hướng dẫn cách giải bài toán 2 xe ngược chiều',
    '📊 Cách tính tỉ số phần trăm học sinh nam nữ trong lớp',
  ];

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    soundFx.playClick();
    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          context: 'Học sinh lớp 5 đang học Toán Tiểu học',
          type: 'general',
        }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: 'ast_' + Date.now(),
        role: 'assistant',
        text: data.reply || 'Thầy Cú đang bận tính toán một chút, con hãy thử hỏi lại nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      soundFx.playCorrect();
    } catch (e) {
      const errorMsg: Message = {
        id: 'err_' + Date.now(),
        role: 'assistant',
        text: 'Thầy Cú đang kết nối thư viện toán học. Con kiểm tra kết nối mạng và hỏi lại nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-4 sm:p-6 text-white shadow-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner">
            🦉
          </div>
          <div>
            <div className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-black uppercase mb-1 text-purple-200">
              <Sparkles className="w-3 h-3" />
              <span>Gia Sư Toán AI Thông Thái</span>
            </div>
            <h1 className="text-lg sm:text-xl font-black">Thầy Cú Thông Thái</h1>
            <p className="text-purple-100 text-xs">Giải đáp mọi thắc mắc toán học lớp 5 24/7</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[520px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm shadow-xs ${
                    isUser
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-gradient-to-tr from-purple-500 to-indigo-500 text-white'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : '🦉'}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                    isUser
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {msg.text}
                  <span
                    className={`block text-[9px] mt-1.5 opacity-70 ${
                      isUser ? 'text-right text-blue-100' : 'text-left text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-10">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.4s]" />
              <span>Thầy Cú đang viết lời giải...</span>
            </div>
          )}

          <div ref={scrollEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700/60 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="shrink-0 text-[11px] font-medium bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-purple-400 hover:text-purple-600 px-3 py-1.5 rounded-full transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <input
            id="ai-tutor-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Hỏi Thầy Cú về bài toán con chưa hiểu..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            id="send-ai-message-btn"
            disabled={!input.trim() || isLoading}
            onClick={() => handleSendMessage()}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-40 text-white p-2.5 rounded-2xl shadow-md transition active:scale-95 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
