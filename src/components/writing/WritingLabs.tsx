import React, { useState } from 'react';
import { Sparkles, Eye, Ear, Wind, Heart, PenTool, Lightbulb, CheckCircle2, Bot, ArrowRight, Copy, Check } from 'lucide-react';
import {
  sentenceUpgradeData,
  sensoryPaletteData,
  indirectIntroTemplates,
  SentenceUpgradeItem
} from '../../data/vietnamese';
import { soundFx } from '../../utils/audio';

export const WritingLabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upgrader' | 'palette' | 'intro'>('upgrader');

  // Upgrader state
  const [selectedUpgradeTopic, setSelectedUpgradeTopic] = useState<SentenceUpgradeItem>(sentenceUpgradeData[0]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [customResult, setCustomResult] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // Sensory Palette state
  const [selectedScene, setSelectedScene] = useState(sensoryPaletteData[0]);
  const [activeSensoryTags, setActiveSensoryTags] = useState<string[]>([]);

  // Intro Builder state
  const [selectedIntroTemplate, setSelectedIntroTemplate] = useState(indirectIntroTemplates[0]);
  const [copiedIntro, setCopiedIntro] = useState<boolean>(false);

  const handleSelectUpgrade = (item: SentenceUpgradeItem) => {
    soundFx.playClick();
    setSelectedUpgradeTopic(item);
    setCurrentLevelIndex(0);
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < selectedUpgradeTopic.levels.length - 1) {
      soundFx.playCorrect();
      setCurrentLevelIndex((prev) => prev + 1);
    }
  };

  const handleUpgradeCustom = async () => {
    if (!customInput.trim()) return;
    setIsAiLoading(true);
    soundFx.playClick();
    try {
      const res = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Hãy nâng cấp câu văn này cho học sinh lớp 5: "${customInput}". Yêu cầu: Đưa ra 3 cấp độ nâng cấp (Cấp 1: Thêm từ láy, Cấp 2: Thêm so sánh/nhân hóa, Cấp 3: Kết hợp 5 giác quan & cảm xúc đỉnh cao).`,
          context: 'Phòng Lab Nâng Cấp Câu Văn Miêu Tả Lớp 5',
          type: 'writing-upgrade',
          subject: 'vietnamese'
        })
      });
      const data = await res.json();
      setCustomResult(data.reply);
      soundFx.playWin();
    } catch (e) {
      setCustomResult(
        `Thần Bút gợi ý nâng cấp cho câu "${customInput}":\n\n⭐ Cấp 1 (+ Từ láy): Thêm từ gợi hình, màu sắc hoặc âm thanh.\n⭐⭐ Cấp 2 (+ So sánh): Dùng hình ảnh "như...", "tựa như..." để gợi cảm xúc.\n⭐⭐⭐ Cấp 3 (+ Đa giác quan): Hòa quyện ánh sáng, âm thanh và tình cảm ấm áp của bé vào câu văn!`
      );
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleCopyIntro = () => {
    navigator.clipboard.writeText(selectedIntroTemplate.templateText);
    setCopiedIntro(true);
    soundFx.playClick();
    setTimeout(() => setCopiedIntro(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-4 space-y-6 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Xưởng Thần Bút Nhí
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight">
            Phòng Thí Nghiệm Luyện Siêu Tả Văn ✍️
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            Biến những câu văn cụt lủn thành những câu văn giàu hình ảnh, cảm xúc và đánh thức trọn vẹn 5 giác quan!
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-5 relative z-10">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('upgrader');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-xs ${
              activeTab === 'upgrader'
                ? 'bg-white text-emerald-800 shadow-md scale-105'
                : 'bg-emerald-700/60 text-emerald-100 hover:bg-emerald-700'
            }`}
          >
            <PenTool className="w-4 h-4" />
            Máy Nâng Cấp Câu
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('palette');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-xs ${
              activeTab === 'palette'
                ? 'bg-white text-teal-800 shadow-md scale-105'
                : 'bg-emerald-700/60 text-emerald-100 hover:bg-emerald-700'
            }`}
          >
            <Eye className="w-4 h-4" />
            Bảng Phối 5 Giác Quan
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('intro');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-xs ${
              activeTab === 'intro'
                ? 'bg-white text-cyan-800 shadow-md scale-105'
                : 'bg-emerald-700/60 text-emerald-100 hover:bg-emerald-700'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            Xưởng Mở Bài Gián Tiếp
          </button>
        </div>
      </div>

      {/* TAB 1: MÁY NÂNG CẤP CÂU */}
      {activeTab === 'upgrader' && (
        <div className="space-y-6">
          {/* Preset Topics Selector */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Chọn câu thô để nâng cấp:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {sentenceUpgradeData.map((item) => {
                const isSelected = selectedUpgradeTopic.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectUpgrade(item)}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold truncate">{item.topic}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate italic">
                        "{item.baseSentence}"
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Upgrade Machine Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Chủ đề: {selectedUpgradeTopic.topic}
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2 mt-0.5">
                  <span>{selectedUpgradeTopic.icon}</span> Câu thô ban đầu:
                </h2>
              </div>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-bold">
                Cấp {currentLevelIndex + 1} / {selectedUpgradeTopic.levels.length}
              </span>
            </div>

            {/* Base Sentence Box */}
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium italic text-sm">
              "{selectedUpgradeTopic.baseSentence}"
            </div>

            {/* Step-by-Step Upgraded Sentence Progression */}
            <div className="space-y-3">
              {selectedUpgradeTopic.levels.slice(0, currentLevelIndex + 1).map((lvl, idx) => (
                <div
                  key={lvl.level}
                  className={`p-4 rounded-2xl border transition-all duration-300 animate-fadeIn ${
                    idx === currentLevelIndex
                      ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 opacity-85'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-md ${lvl.badgeColor}`}>
                      {lvl.badge}
                    </span>
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> +{lvl.bonusXp} XP
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                    "{lvl.sentence}"
                  </p>

                  <div className="mt-2 text-xs text-emerald-700 dark:text-emerald-300 bg-white/80 dark:bg-slate-900/80 p-2 rounded-xl border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                    <span><strong>Bí thuật:</strong> {lvl.technique}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Upgrade Button */}
            {currentLevelIndex < selectedUpgradeTopic.levels.length - 1 ? (
              <button
                onClick={handleNextLevel}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-md hover:from-emerald-700 hover:to-teal-700 transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                Nâng cấp lên {selectedUpgradeTopic.levels[currentLevelIndex + 1].badge}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 rounded-2xl text-center text-amber-800 dark:text-amber-200 text-xs font-bold flex items-center justify-center gap-2">
                <span>👑 Chúc mừng bé! Đã đạt cấp độ THẦN BÚT cao nhất cho câu văn này!</span>
              </div>
            )}
          </div>

          {/* Custom Sentence AI Upgrader */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 sm:p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-sm sm:text-base">Thử Thách: Nâng Cấp Câu Tự Nghĩ Với AI Thần Bút</h3>
            </div>
            <p className="text-xs text-slate-300">
              Bé hãy nhập bất kỳ câu văn ngắn nào vào đây, Thần Bút AI sẽ giúp bé nâng cấp lên 3 cấp độ tuyệt bút!
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ví dụ: Con mèo đang ngủ trên sân..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-teal-400 placeholder:text-slate-500"
              />
              <button
                onClick={handleUpgradeCustom}
                disabled={isAiLoading || !customInput.trim()}
                className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 disabled:opacity-50 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-md"
              >
                {isAiLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Đang nâng cấp...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Nâng Cấp Ngay
                  </>
                )}
              </button>
            </div>

            {customResult && (
              <div className="mt-4 p-4 rounded-2xl bg-slate-800/90 border border-teal-500/40 text-slate-100 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                {customResult}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: BẢNG PHỐI 5 GIÁC QUAN */}
      {activeTab === 'palette' && (
        <div className="space-y-6">
          {/* Scene Selector */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Chọn bối cảnh miêu tả:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {sensoryPaletteData.map((item) => {
                const isSelected = selectedScene.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedScene(item);
                    }}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100 ring-2 ring-teal-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-teal-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-bold">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5 Sensory Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sight (Thị giác) */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 uppercase">
                <Eye className="w-4 h-4" /> Thị giác (Mắt nhìn - Màu sắc, hình dáng)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedScene.sight.map((w, i) => (
                  <span key={i} className="bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 text-xs px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800/60 font-medium">
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Sound (Thính giác) */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase">
                <Ear className="w-4 h-4" /> Thính giác (Tai nghe - Âm thanh)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedScene.sound.map((w, i) => (
                  <span key={i} className="bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 text-xs px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800/60 font-medium">
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Smell & Taste (Khứu giác) */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 uppercase">
                <Wind className="w-4 h-4" /> Khứu giác & Vị giác (Mùi hương)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedScene.smell.map((w, i) => (
                  <span key={i} className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 text-xs px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800/60 font-medium">
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Emotion (Cảm xúc) */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 uppercase">
                <Heart className="w-4 h-4" /> Cảm xúc & Tình cảm
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedScene.emotion.map((w, i) => (
                  <span key={i} className="bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 text-xs px-2.5 py-1 rounded-lg border border-rose-200 dark:border-rose-800/60 font-medium">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Assembled Rich Paragraph Preview */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 p-5 rounded-3xl border border-teal-200 dark:border-teal-800/50 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-200">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h4 className="font-extrabold text-sm">Đoạn văn kết hợp hoàn hảo 5 giác quan:</h4>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed italic bg-white/80 dark:bg-slate-900/80 p-4 rounded-2xl border border-teal-200/60 dark:border-teal-800/40">
              "{selectedScene.sampleParagraph}"
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: XƯỞNG MỞ BÀI GIÁN TIẾP */}
      {activeTab === 'intro' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {indirectIntroTemplates.map((template) => {
              const isSelected = selectedIntroTemplate.id === template.id;
              return (
                <button
                  key={template.id}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedIntroTemplate(template);
                  }}
                  className={`p-4 rounded-2xl border text-left transition ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-100 ring-2 ring-cyan-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-cyan-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{template.formulaIcon}</span>
                    <h4 className="text-xs sm:text-sm font-extrabold">{template.formulaName}</h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {template.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Template Detail Card */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {selectedIntroTemplate.exampleTopic}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 mt-0.5">
                  Đoạn mở bài mẫu mực:
                </h3>
              </div>
              <button
                onClick={handleCopyIntro}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
              >
                {copiedIntro ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" /> Đã chép
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Sao chép
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-slate-800/80 border border-cyan-200 dark:border-cyan-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-relaxed italic">
              {selectedIntroTemplate.templateText}
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
              <span><strong>Phân tích bí quyết:</strong> {selectedIntroTemplate.explanation}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
