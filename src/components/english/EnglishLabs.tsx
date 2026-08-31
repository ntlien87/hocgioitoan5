import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, RotateCcw, ArrowRight, MessageSquare, Compass, Layers, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';
import { SENTENCE_TASKS, IRREGULAR_VERBS, VerbItem } from '../../data/english';

type LabTab = 'sentence-builder' | 'irregular-verbs' | 'phonics' | 'dialogue';

export const EnglishLabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('sentence-builder');

  // Sentence Builder State
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(() => [...SENTENCE_TASKS[0].words].sort(() => Math.random() - 0.5));
  const [sentenceSuccess, setSentenceSuccess] = useState<boolean | null>(null);

  // Irregular Verbs State
  const [selectedVerb, setSelectedVerb] = useState<VerbItem>(IRREGULAR_VERBS[0]);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [verbQuizResult, setVerbQuizResult] = useState<boolean | null>(null);

  // Phonics State
  const [phonicsWord, setPhonicsWord] = useState('architect');

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle word selection in sentence builder
  const handleSelectWord = (word: string, index: number) => {
    soundFx.playClick();
    setSelectedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, i) => i !== index));
    setSentenceSuccess(null);
  };

  const handleRemoveWord = (word: string, index: number) => {
    soundFx.playClick();
    setSelectedWords((prev) => prev.filter((_, i) => i !== index));
    setAvailableWords((prev) => [...prev, word]);
    setSentenceSuccess(null);
  };

  const handleCheckSentence = () => {
    const curTask = SENTENCE_TASKS[sentenceIndex];
    const userBuilt = selectedWords.join(' ').trim();
    const isCorrect = userBuilt === curTask.correctOrder;

    if (isCorrect) {
      soundFx.playCorrect();
      setSentenceSuccess(true);
      speakText(curTask.correctOrder);
      try {
        confetti({ particleCount: 70, spread: 60 });
      } catch (e) {}
    } else {
      soundFx.playWrong();
      setSentenceSuccess(false);
    }
  };

  const handleNextSentence = () => {
    const nextIdx = (sentenceIndex + 1) % SENTENCE_TASKS.length;
    setSentenceIndex(nextIdx);
    setSelectedWords([]);
    setAvailableWords([...SENTENCE_TASKS[nextIdx].words].sort(() => Math.random() - 0.5));
    setSentenceSuccess(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Interactive English Discovery Lab</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">Xưởng Thực Hành Tiếng Anh 5 🇬🇧</h1>
          <p className="text-white/90 text-xs sm:text-sm mt-1">
            Ghép câu chuẩn ngữ pháp, luyện phát âm chuẩn người bản xứ và làm chủ động từ bất quy tắc!
          </p>
        </div>
      </div>

      {/* Lab Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-200/80 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-700">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('sentence-builder');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'sentence-builder'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Ghép Câu Thần Tốc</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('irregular-verbs');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'irregular-verbs'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Shuffle className="w-4 h-4" />
          <span>Vòng Xoay Động Từ Quá Khứ</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('phonics');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'phonics'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Phát Âm & Trọng Âm</span>
        </button>
      </div>

      {/* Tab 1: Sentence Builder */}
      {activeTab === 'sentence-builder' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-5">
          <div>
            <span className="text-[11px] font-black uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
              Thử thách #{sentenceIndex + 1}/{SENTENCE_TASKS.length}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 mt-2">
              Dịch câu sau sang Tiếng Anh hoàn chỉnh:
            </h3>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 mt-2">
              "{SENTENCE_TASKS[sentenceIndex].vietnamese}"
            </p>
          </div>

          {/* User Constructed Sentence Area */}
          <div className="min-h-16 p-4 rounded-2xl bg-blue-50/40 dark:bg-slate-800/80 border-2 border-dashed border-blue-300 dark:border-blue-700 flex flex-wrap items-center gap-2">
            {selectedWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">Nhấn vào các từ bên dưới theo đúng thứ tự để tạo câu...</span>
            ) : (
              selectedWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(word, idx)}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:bg-rose-500 transition animate-in zoom-in-95 duration-150"
                  title="Nhấn để gỡ từ này"
                >
                  {word} ✕
                </button>
              ))
            )}
          </div>

          {/* Available Words Pool */}
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-2">Kho từ vựng có sẵn:</span>
            <div className="flex flex-wrap gap-2">
              {availableWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectWord(word, idx)}
                  className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 rounded-xl text-xs sm:text-sm font-bold transition active:scale-95 shadow-xs"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback & Actions */}
          {sentenceSuccess !== null && (
            <div className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 ${
              sentenceSuccess ? 'bg-emerald-50 border-emerald-400 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200' : 'bg-rose-50 border-rose-400 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
            }`}>
              <div className="flex items-center gap-2">
                {sentenceSuccess ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <RotateCcw className="w-5 h-5 text-rose-600" />}
                <span className="text-xs sm:text-sm font-black">
                  {sentenceSuccess ? 'Chính xác 100%! Câu văn hoàn hảo!' : 'Chưa đúng thứ tự rồi, hãy thử sắp xếp lại nhé!'}
                </span>
              </div>

              {sentenceSuccess && (
                <button
                  onClick={() => speakText(SENTENCE_TASKS[sentenceIndex].correctOrder)}
                  className="flex items-center gap-1 text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-xl shadow-xs"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe</span>
                </button>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setSelectedWords([]);
                setAvailableWords([...SENTENCE_TASKS[sentenceIndex].words].sort(() => Math.random() - 0.5));
                setSentenceSuccess(null);
              }}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl"
            >
              Làm lại
            </button>

            {sentenceSuccess ? (
              <button
                onClick={handleNextSentence}
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-black rounded-xl shadow-md flex items-center gap-1.5"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled={selectedWords.length === 0}
                onClick={handleCheckSentence}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs sm:text-sm font-black rounded-xl shadow-md transition"
              >
                Kiểm tra câu
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Irregular Verbs Wheel */}
      {activeTab === 'irregular-verbs' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
              Tra Cứu & Luyện Trí Nhớ Động Từ Bất Quy Tắc
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Nhấn vào bất kỳ động từ nguyên thể nào để xem dạng quá khứ, ví dụ và nghe phát âm!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {IRREGULAR_VERBS.map((verb) => (
              <button
                key={verb.base}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedVerb(verb);
                  setVerbQuizResult(null);
                }}
                className={`p-3 rounded-2xl border-2 text-center transition ${
                  selectedVerb.base === verb.base
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 font-black text-blue-700 dark:text-blue-300 ring-2 ring-blue-400'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="block text-sm sm:text-base font-black">{verb.base}</span>
                <span className="text-[11px] opacity-70">({verb.meaning})</span>
              </button>
            ))}
          </div>

          {/* Verb Detail Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/60 p-5 rounded-3xl border-2 border-blue-200 dark:border-blue-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-blue-600 text-white font-black text-base rounded-2xl shadow-xs">
                  {selectedVerb.base} ➡️ {selectedVerb.past}
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Nghĩa: <strong>{selectedVerb.meaning}</strong>
                </span>
              </div>

              <button
                onClick={() => speakText(`${selectedVerb.base}... past tense... ${selectedVerb.past}. ${selectedVerb.example}`)}
                className="p-2.5 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 rounded-xl shadow-xs hover:bg-blue-100 transition"
                title="Nghe phát âm"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 p-3 rounded-2xl border border-blue-100 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <strong className="text-blue-600 block mb-1">Ví dụ thực tế:</strong>
              <p className="italic">{selectedVerb.example}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Phonics & Word Stress */}
      {activeTab === 'phonics' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
              Phòng Luyện Phát Âm & Trọng Âm (Phonics Lab)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Quy tắc trọng âm từ 2 và 3 âm tiết thông dụng trong đề thi Lớp 5 & Chuyển cấp Lớp 6.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="text-xs font-black uppercase text-blue-600 dark:text-blue-400">
                1. Trọng âm rơi vào âm tiết THỨ NHẤT (1st Syllable):
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {['ARCH-i-tect', 'DOC-tor', 'CIN-e-ma', 'HOS-pi-tal', 'COUN-try'].map((w) => (
                  <button
                    key={w}
                    onClick={() => speakText(w.replace(/-/g, ''))}
                    className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-blue-400 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>{w}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400">
                2. Trọng âm đuôi "-eer", "-ee", "-ese" (3rd Syllable):
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {['en-gi-NEER', 'Viet-na-MESE', 'Chi-NESE', 'pi-o-NEER'].map((w) => (
                  <button
                    key={w}
                    onClick={() => speakText(w.replace(/-/g, ''))}
                    className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-indigo-400 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{w}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
