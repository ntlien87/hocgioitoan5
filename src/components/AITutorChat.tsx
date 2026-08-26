import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, User, RefreshCw, MessageSquare, Lightbulb, HeartHandshake, PenTool } from 'lucide-react';
import { SubjectId } from '../types/curriculum';
import { soundFx } from '../utils/audio';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AITutorChatProps {
  currentSubject?: SubjectId;
}

export const AITutorChat: React.FC<AITutorChatProps> = ({ currentSubject = 'vietnamese' }) => {
  const getSubjectConfig = () => {
    if (currentSubject === 'vietnamese') {
      return {
        avatar: '✍️',
        name: 'Thần Bút Thông Thái',
        tag: 'Gia Sư Luyện Siêu Tả Văn 5',
        gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
        welcomeMsg:
          'Chào con! Thần Bút Thông Thái ✍️ đây! Con đang muốn viết đoạn văn tả cảnh, tả người nào, hay cần Thần Bút giúp nâng cấp một câu văn thô, gợi ý mở bài gián tiếp, thêm từ láy và hình ảnh so sánh? Hãy gõ câu văn của con hoặc hỏi Thần Bút nhé!',
        quickPrompts: [
          '✨ Nâng cấp câu này giúp con: "Trời mưa to."',
          '📜 Gợi ý 3 cách mở bài gián tiếp cho đề: "Tả người mẹ thân yêu"',
          '🌅 Cho con dàn ý chi tiết bài văn: "Tả cảnh hoàng hôn trên biển"',
          '🌿 Tìm 5 từ láy và so sánh hay để tả cánh đồng lúa chín',
          '💖 Sửa đoạn văn tả nụ cười của mẹ cho thật xúc động',
        ],
      };
    }

    if (currentSubject === 'english') {
      return {
        avatar: '🦁',
        name: 'Captain Leo',
        tag: 'AI English Buddy Grade 5',
        gradient: 'from-blue-600 via-indigo-600 to-sky-600',
        welcomeMsg:
          'Hello there! I am Captain Leo 🦁, your English AI buddy. How can I help you today? Ask me about vocabulary, grammar rules, or let\'s practice simple conversations!',
        quickPrompts: [
          '💬 Practice a short conversation about daily routines',
          '📚 Explain how to use "How often" and adverbs of frequency',
          '✨ Give me 5 useful words to describe my hometown',
          '🎯 Quiz me with a fun Grade 5 English riddle',
        ],
      };
    }

    return {
      avatar: '🦉',
      name: 'Thầy Cú Thông Thái',
      tag: 'Gia Sư Toán AI Thông Thái',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      welcomeMsg:
        'Chào con! Thầy Cú Thông Thái 🦉 đây. Con đang gặp khó khăn ở bài toán lớp 5 nào, hay cần thầy giảng lại công thức hình học, phân số, số thập phân hoặc chuyển động đều? Hãy hỏi thầy bất cứ câu nào nhé!',
      quickPrompts: [
        '📐 Giải thích công thức tính diện tích hình thang dễ hiểu',
        '⚡ Mẹo nhân chia số thập phân với 10, 100, 0.1, 0.01',
        '🍰 Cho con 1 bài toán đố vui về phân số',
        '🏎️ Hướng dẫn cách giải bài toán 2 xe ngược chiều',
        '📊 Cách tính tỉ số phần trăm học sinh nam nữ trong lớp',
      ],
    };
  };

  const config = getSubjectConfig();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg_welcome_' + currentSubject,
      role: 'assistant',
      text: config.welcomeMsg,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollEndRef = useRef<HTMLDivElement | null>(null);

  // Reset initial welcome when subject changes
  useEffect(() => {
    setMessages([
      {
        id: 'msg_welcome_' + currentSubject + '_' + Date.now(),
        role: 'assistant',
        text: config.welcomeMsg,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [currentSubject]);

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
          context: `Học sinh lớp 5 đang học ${currentSubject === 'vietnamese' ? 'Tiếng Việt và Tập Làm Văn Miêu Tả' : currentSubject === 'english' ? 'Tiếng Anh Tiểu Học' : 'Toán Lớp 5'}`,
          type: 'general',
          subject: currentSubject,
        }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: 'ast_' + Date.now(),
        role: 'assistant',
        text: data.reply || 'Thầy đang suy nghĩ, con chờ một chút nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      soundFx.playCorrect();
    } catch (e) {
      const errorMsg: Message = {
        id: 'err_' + Date.now(),
        role: 'assistant',
        text: 'Gia sư AI đang kết nối thư viện học liệu. Con kiểm tra kết nối mạng và hỏi lại nhé!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-3 pb-28 space-y-4 select-none">
      {/* Header Banner */}
      <div className={`bg-gradient-to-r ${config.gradient} rounded-3xl p-4 sm:p-6 text-white shadow-xl flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl sm:text-4xl shadow-inner ring-2 ring-white/30 shrink-0 animate-float">
            {config.avatar}
          </div>
          <div>
            <div className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase mb-1 text-white">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{config.tag}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-black">{config.name}</h1>
            <p className="text-white/90 text-xs font-bold">Luôn đồng hành, khen ngợi và giải đáp mọi câu hỏi 24/7</p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[540px]">
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
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 text-base shadow-xs ${
                    isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : config.avatar}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[84%] rounded-3xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-blue-600 text-white rounded-tr-none font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200 dark:border-slate-700 font-bold whitespace-pre-line shadow-xs'
                  }`}
                >
                  {msg.text}
                  <span
                    className={`block text-[10px] mt-1.5 opacity-75 font-semibold ${
                      isUser ? 'text-blue-100 text-right' : 'text-slate-500 text-left'
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
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{config.name} đang suy nghĩ và gọt giũa câu trả lời...</span>
            </div>
          )}

          <div ref={scrollEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {config.quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap text-[11px] font-black bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 px-3.5 py-1.5 rounded-xl transition btn-3d active:scale-95 shadow-xs"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder={`Hỏi ${config.name} bất cứ câu hỏi nào...`}
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold focus:outline-hidden focus:border-emerald-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isLoading}
            className="p-3 rounded-2xl btn-3d btn-3d-emerald text-white disabled:opacity-40 shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
