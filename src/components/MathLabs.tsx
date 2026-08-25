import React, { useState, useEffect, useRef } from 'react';
import { FlaskConical, Play, RotateCcw, Sparkles, Box, PieChart, Percent, Car, ChevronRight, Target, Dices } from 'lucide-react';
import { soundFx } from '../utils/audio';

type LabType = 'motion' | 'fraction' | 'percentage' | 'geometry' | 'piechart';

export const MathLabs: React.FC = () => {
  const [activeLab, setActiveLab] = useState<LabType>('motion');

  // Fraction Lab State
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);

  // Percentage Lab State
  const [originalPrice, setOriginalPrice] = useState(250000);
  const [discountPercent, setDiscountPercent] = useState(20);

  // Geometry Lab State
  const [geomShape, setGeomShape] = useState<'triangle' | 'trapezoid' | 'circle' | 'box'>('triangle');
  const [triBase, setTriBase] = useState(8);
  const [triHeight, setTriHeight] = useState(6);
  const [trapA, setTrapA] = useState(8);
  const [trapB, setTrapB] = useState(5);
  const [trapH, setTrapH] = useState(4);
  const [circleRadius, setCircleRadius] = useState(5);
  const [boxL, setBoxL] = useState(6);
  const [boxW, setBoxW] = useState(4);
  const [boxH, setBoxH] = useState(5);

  // Motion Physics Simulator State
  const [motionType, setMotionType] = useState<'opposite' | 'same'>('opposite');
  const [v1, setV1] = useState(50); // km/h
  const [v2, setV2] = useState(30); // km/h
  const [distance, setDistance] = useState(160); // km
  const [simProgress, setSimProgress] = useState(0); // 0 to 1
  const [isSimRunning, setIsSimRunning] = useState(false);
  const animRef = useRef<number | null>(null);

  // Pie Chart & Probability Lab State
  const [totalStudents, setTotalStudents] = useState(200);
  const [sportSoccer, setSportSoccer] = useState(50); // %
  const [sportSwim, setSportSwim] = useState(30); // %
  const sportRead = Math.max(0, 100 - sportSoccer - sportSwim); // % remaining

  // Probability coin / dice toss simulator
  const [tossHistory, setTossHistory] = useState<('Sấp' | 'Ngửa')[]>([]);

  // Motion Math calculations
  const relativeSpeed = motionType === 'opposite' ? v1 + v2 : Math.abs(v1 - v2);
  const timeHours = relativeSpeed === 0 ? null : Math.round((distance / relativeSpeed) * 100) / 100;
  const timeMinutes = timeHours === null ? null : Math.round(timeHours * 60);

  const startMotionSimulation = () => {
    soundFx.playLevelUp();
    setIsSimRunning(true);
    setSimProgress(0);
    const startTime = Date.now();
    const duration = 4000; // 4 seconds animation

    const loop = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      setSimProgress(progress);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(loop);
      } else {
        setIsSimRunning(false);
      }
    };
    animRef.current = requestAnimationFrame(loop);
  };

  const resetSimulation = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsSimRunning(false);
    setSimProgress(0);
  };

  const handleTossCoin = () => {
    soundFx.playClick();
    const res: 'Sấp' | 'Ngửa' = Math.random() < 0.5 ? 'Ngửa' : 'Sấp';
    setTossHistory((prev) => [res, ...prev.slice(0, 29)]);
  };

  const handleToss10Coins = () => {
    soundFx.playLevelUp();
    const batch: ('Sấp' | 'Ngửa')[] = [];
    for (let i = 0; i < 10; i++) {
      batch.push(Math.random() < 0.5 ? 'Ngửa' : 'Sấp');
    }
    setTossHistory((prev) => [...batch, ...prev.slice(0, 20)]);
  };

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 rounded-3xl p-5 sm:p-7 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <FlaskConical className="w-4 h-4" />
            <span>Phòng Thí Nghiệm Trực Quan 5 Vùng</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black">
            Mô Phỏng Trực Quan Toán Lớp 5
          </h1>
          <p className="text-white/90 text-xs sm:text-sm mt-1 max-w-xl font-medium leading-relaxed">
            Kéo thanh trượt, quan sát hình ảnh phản hồi trực tiếp giúp nắm trọn bản chất toán học từ Chuyển Động, Hình Học, Phần Trăm đến Biểu Đồ Quạt Tròn!
          </p>
        </div>
      </div>

      {/* Lab Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          id="lab-tab-motion"
          onClick={() => {
            soundFx.playClick();
            setActiveLab('motion');
          }}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition ${
            activeLab === 'motion'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300 shadow-md scale-102'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Car className="w-4 h-4 text-teal-600" />
          <span>1. Đường Đua 2 Xe</span>
        </button>

        <button
          id="lab-tab-fraction"
          onClick={() => {
            soundFx.playClick();
            setActiveLab('fraction');
          }}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition ${
            activeLab === 'fraction'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300 shadow-md scale-102'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          <PieChart className="w-4 h-4 text-blue-600" />
          <span>2. Bánh Phân Số</span>
        </button>

        <button
          id="lab-tab-percentage"
          onClick={() => {
            soundFx.playClick();
            setActiveLab('percentage');
          }}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition ${
            activeLab === 'percentage'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300 shadow-md scale-102'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Percent className="w-4 h-4 text-amber-600" />
          <span>3. Tỉ Số % & Giảm Giá</span>
        </button>

        <button
          id="lab-tab-geometry"
          onClick={() => {
            soundFx.playClick();
            setActiveLab('geometry');
          }}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition ${
            activeLab === 'geometry'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300 shadow-md scale-102'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Box className="w-4 h-4 text-purple-600" />
          <span>4. Hình 2D & Khối 3D</span>
        </button>

        <button
          id="lab-tab-piechart"
          onClick={() => {
            soundFx.playClick();
            setActiveLab('piechart');
          }}
          className={`flex items-center justify-center gap-1.5 p-3 rounded-2xl border-2 text-xs sm:text-sm font-black transition ${
            activeLab === 'piechart'
              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-700 dark:text-teal-300 shadow-md scale-102'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Target className="w-4 h-4 text-rose-600" />
          <span>5. Biểu Đồ Quạt & Xác Suất</span>
        </button>
      </div>

      {/* LAB 1: Motion Physics Simulator */}
      {activeLab === 'motion' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>🏎️ Mô Phỏng Chuyển Động Hai Xe</span>
              </h2>
              <p className="text-xs text-slate-500">
                Thử nghiệm các đại lượng Vận tốc, Quãng đường, Thời gian gặp nhau trực tiếp trên đường đua!
              </p>
            </div>

            {/* Mode selector */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button
                id="motion-mode-opposite"
                onClick={() => {
                  setMotionType('opposite');
                  resetSimulation();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  motionType === 'opposite' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Ngược Chiều Gặp Nhau
              </button>
              <button
                id="motion-mode-same"
                onClick={() => {
                  setMotionType('same');
                  resetSimulation();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  motionType === 'same' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Cùng Chiều Đuổi Nhau
              </button>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-blue-600 dark:text-blue-400">🚗 Xe A (Vận tốc v₁)</span>
                <span>{v1} km/h</span>
              </div>
              <input
                id="slider-v1"
                type="range"
                min={20}
                max={90}
                step={5}
                value={v1}
                onChange={(e) => {
                  setV1(Number(e.target.value));
                  resetSimulation();
                }}
                className="w-full accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-rose-600 dark:text-rose-400">🏍️ Xe B (Vận tốc v₂)</span>
                <span>{v2} km/h</span>
              </div>
              <input
                id="slider-v2"
                type="range"
                min={15}
                max={80}
                step={5}
                value={v2}
                onChange={(e) => {
                  setV2(Number(e.target.value));
                  resetSimulation();
                }}
                className="w-full accent-rose-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700 dark:text-slate-300">📏 Quãng Đường s</span>
                <span>{distance} km</span>
              </div>
              <input
                id="slider-distance"
                type="range"
                min={50}
                max={300}
                step={10}
                value={distance}
                onChange={(e) => {
                  setDistance(Number(e.target.value));
                  resetSimulation();
                }}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Road Visualizer Canvas */}
          <div className="relative bg-slate-900 rounded-3xl p-6 overflow-hidden border border-slate-800 shadow-inner">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Điểm A (0 km)</span>
              <span>Điểm B ({distance} km)</span>
            </div>

            {/* Road Track */}
            <div className="relative h-20 bg-slate-800 rounded-2xl border-y-2 border-dashed border-slate-600 flex items-center px-4">
              {/* Lane Markings */}
              <div className="absolute inset-x-0 h-0.5 border-b border-dashed border-amber-400/60" />

              {/* Car 1 */}
              <div
                className="absolute top-2 transition-all"
                style={{
                  left: motionType === 'opposite'
                    ? `${simProgress * ((v1 / (v1 + v2)) * 80 + 5)}%`
                    : `${simProgress * 75 + 5}%`,
                }}
              >
                <div className="bg-blue-600 text-white px-2 py-1 rounded-xl text-xs font-black shadow-lg flex items-center gap-1">
                  <span>🚗</span>
                  <span>{v1} km/h</span>
                </div>
              </div>

              {/* Car 2 */}
              <div
                className="absolute bottom-2 transition-all"
                style={{
                  left: motionType === 'opposite'
                    ? `${100 - (simProgress * ((v2 / (v1 + v2)) * 80 + 5)) - 15}%`
                    : `${simProgress * (v2 / Math.max(1, v1)) * 60 + 25}%`,
                }}
              >
                <div className="bg-rose-600 text-white px-2 py-1 rounded-xl text-xs font-black shadow-lg flex items-center gap-1">
                  <span>🏍️</span>
                  <span>{v2} km/h</span>
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between mt-4">
              <button
                id="start-motion-sim-btn"
                disabled={isSimRunning}
                onClick={startMotionSimulation}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black px-4 py-2 rounded-xl text-xs shadow-md transition active:scale-95"
              >
                <Play className="w-4 h-4" />
                <span>{isSimRunning ? 'Đang chạy...' : 'Chạy Thử Nghiệm'}</span>
              </button>

              <button
                id="reset-motion-sim-btn"
                onClick={resetSimulation}
                className="flex items-center gap-1.5 bg-slate-800 text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt Lại</span>
              </button>
            </div>
          </div>

          {/* Math Result Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 p-4 rounded-2xl text-center">
              <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 block">
                {motionType === 'opposite' ? 'Tổng Vận Tốc (v₁ + v₂)' : 'Hiệu Vận Tốc (v₁ - v₂)'}
              </span>
              <span className="text-xl font-black text-teal-900 dark:text-teal-100 font-mono">
                {relativeSpeed} km/h
              </span>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4 rounded-2xl text-center">
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 block">
                Thời Gian {motionType === 'opposite' ? 'Gặp Nhau' : 'Đuổi Kịp'} (t = s : v)
              </span>
              <span className="text-xl font-black text-blue-900 dark:text-blue-100 font-mono">
                {timeHours === null ? 'Không đuổi kịp' : `${timeHours} giờ (${timeMinutes} phút)`}
              </span>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 rounded-2xl text-center">
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 block">
                Điểm Gặp Cách A (s₁ = v₁ × t)
              </span>
              <span className="text-xl font-black text-amber-900 dark:text-amber-100 font-mono">
                {timeHours === null ? 'Không có điểm gặp' : `${Math.round(v1 * timeHours * 10) / 10} km`}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* LAB 2: Fraction & Pizza Slices */}
      {activeLab === 'fraction' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>🍕 Phòng Thí Nghiệm Phân Số & Pizza</span>
            </h2>
            <p className="text-xs text-slate-500">
              Cắt bánh pizza thành nhiều phần bằng nhau và quan sát phân số, số thập phân tương ứng!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Visual Pizza Slices */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="relative w-48 h-48 rounded-full border-4 border-amber-500 bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center overflow-hidden shadow-lg">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="80"
                    strokeDasharray={`${(numerator / denominator) * 251.2} 251.2`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-slate-900 dark:text-white font-black drop-shadow-md">
                  <span className="text-2xl">{numerator}</span>
                  <div className="w-8 h-0.5 bg-slate-900 dark:bg-white my-0.5" />
                  <span className="text-2xl">{denominator}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 mt-3">
                Đã lấy {numerator} trong tổng số {denominator} miếng bánh
              </span>
            </div>

            {/* Sliders & Math Calculations */}
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Tử Số (Số phần lấy)</span>
                  <span className="text-blue-600 font-black">{numerator}</span>
                </div>
                <input
                  id="slider-num"
                  type="range"
                  min={1}
                  max={denominator}
                  value={numerator}
                  onChange={(e) => setNumerator(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Mẫu Số (Tổng số phần chia đều)</span>
                  <span className="text-emerald-600 font-black">{denominator}</span>
                </div>
                <input
                  id="slider-den"
                  type="range"
                  min={2}
                  max={12}
                  value={denominator}
                  onChange={(e) => {
                    const newDen = Number(e.target.value);
                    setDenominator(newDen);
                    if (numerator > newDen) setNumerator(newDen);
                  }}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 dark:bg-blue-950/40 p-3 rounded-2xl text-center border border-blue-200 dark:border-blue-800">
                  <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 block">Số Thập Phân</span>
                  <span className="text-lg font-black text-blue-900 dark:text-blue-100 font-mono">
                    {Math.round((numerator / denominator) * 1000) / 1000}
                  </span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/40 p-3 rounded-2xl text-center border border-amber-200 dark:border-amber-800">
                  <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 block">Tỉ Số Phần Trăm</span>
                  <span className="text-lg font-black text-amber-900 dark:text-amber-100 font-mono">
                    {Math.round((numerator / denominator) * 1000) / 10}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAB 3: Percentage & Discount Lab */}
      {activeLab === 'percentage' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>🏷️ Phòng Thí Nghiệm Tỉ Số % & Mua Sắm Siêu Thị</span>
            </h2>
            <p className="text-xs text-slate-500">
              Trải nghiệm thực tế cách tính tiền giảm giá và số tiền phải trả khi đi siêu thị!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Giá Gốc Món Đồ:</span>
                <span className="text-blue-600 font-black">{originalPrice.toLocaleString('vi-VN')} đ</span>
              </div>
              <input
                id="slider-orig-price"
                type="range"
                min={50000}
                max={1000000}
                step={50000}
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Mức Giảm Giá (%):</span>
                <span className="text-rose-600 font-black">{discountPercent}%</span>
              </div>
              <input
                id="slider-discount"
                type="range"
                min={5}
                max={70}
                step={5}
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                className="w-full accent-rose-600"
              />
            </div>
          </div>

          {/* Results Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 p-5 rounded-3xl text-center">
              <span className="text-xs font-bold text-rose-700 dark:text-rose-300 block mb-1">
                Số Tiền Được Giảm (Giá Gốc × {discountPercent} : 100)
              </span>
              <span className="text-2xl font-black text-rose-600 font-mono">
                - {((originalPrice * discountPercent) / 100).toLocaleString('vi-VN')} đ
              </span>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-800 p-5 rounded-3xl text-center">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                Số Tiền Thực Tế Cần Trả (Giá Gốc - Tiền Giảm)
              </span>
              <span className="text-2xl font-black text-emerald-600 font-mono">
                {(originalPrice - (originalPrice * discountPercent) / 100).toLocaleString('vi-VN')} đ
              </span>
            </div>
          </div>
        </div>
      )}

      {/* LAB 4: 2D Geometry & 3D Box Lab */}
      {activeLab === 'geometry' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>📐 Phòng Khám Phá Hình Học 2D & Khối 3D</span>
              </h2>
              <p className="text-xs text-slate-500">
                Thao tác với Hình Tam Giác, Hình Thang, Hình Tròn và Khối Hộp Chữ Nhật 3D!
              </p>
            </div>

            {/* Shape Select */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1">
              <button
                onClick={() => setGeomShape('triangle')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  geomShape === 'triangle' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Tam Giác
              </button>
              <button
                onClick={() => setGeomShape('trapezoid')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  geomShape === 'trapezoid' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Hình Thang
              </button>
              <button
                onClick={() => setGeomShape('circle')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  geomShape === 'circle' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Hình Tròn
              </button>
              <button
                onClick={() => setGeomShape('box')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  geomShape === 'box' ? 'bg-purple-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Hộp 3D
              </button>
            </div>
          </div>

          {geomShape === 'triangle' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs font-bold block mb-1">Đáy a: {triBase} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={20}
                    value={triBase}
                    onChange={(e) => setTriBase(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold block mb-1">Chiều cao h: {triHeight} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={15}
                    value={triHeight}
                    onChange={(e) => setTriHeight(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-5 text-center">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block mb-1">
                  Công Thức Diện Tích Tam Giác: S = (a × h) : 2
                </span>
                <div className="text-2xl font-black text-purple-900 dark:text-purple-200 font-mono my-2">
                  S = ({triBase} × {triHeight}) : 2 = {(triBase * triHeight) / 2} cm²
                </div>
              </div>
            </div>
          )}

          {geomShape === 'trapezoid' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs font-bold block mb-1">Đáy lớn a: {trapA} cm</span>
                  <input
                    type="range"
                    min={4}
                    max={20}
                    value={trapA}
                    onChange={(e) => setTrapA(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold block mb-1">Đáy bé b: {trapB} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={trapA}
                    value={trapB}
                    onChange={(e) => setTrapB(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold block mb-1">Chiều cao h: {trapH} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={12}
                    value={trapH}
                    onChange={(e) => setTrapH(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-5 text-center">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block mb-1">
                  Công Thức Diện Tích Hình Thang: S = (a + b) × h : 2
                </span>
                <div className="text-2xl font-black text-purple-900 dark:text-purple-200 font-mono my-2">
                  S = ({trapA} + {trapB}) × {trapH} : 2 = {((trapA + trapB) * trapH) / 2} cm²
                </div>
              </div>
            </div>
          )}

          {geomShape === 'circle' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Bán kính r</span>
                  <span>{circleRadius} cm (Đường kính d = {circleRadius * 2} cm)</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={12}
                  value={circleRadius}
                  onChange={(e) => setCircleRadius(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 block mb-1">
                    Chu Vi: C = r × 2 × 3.14
                  </span>
                  <span className="text-xl font-black text-blue-900 dark:text-blue-200 font-mono">
                    {Math.round(circleRadius * 2 * 3.14 * 100) / 100} cm
                  </span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block mb-1">
                    Diện Tích: S = r × r × 3.14
                  </span>
                  <span className="text-xl font-black text-purple-900 dark:text-purple-200 font-mono">
                    {Math.round(circleRadius * circleRadius * 3.14 * 100) / 100} cm²
                  </span>
                </div>
              </div>
            </div>
          )}

          {geomShape === 'box' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs font-bold block mb-1">Dài a: {boxL} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={boxL}
                    onChange={(e) => setBoxL(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold block mb-1">Rộng b: {boxW} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={boxW}
                    onChange={(e) => setBoxW(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold block mb-1">Cao c: {boxH} cm</span>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={boxH}
                    onChange={(e) => setBoxH(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl">
                  <span className="text-[10px] text-slate-500 font-bold block">Diện tích xung quanh</span>
                  <span className="text-base font-black text-slate-800 dark:text-slate-100 font-mono">
                    {(boxL + boxW) * 2 * boxH} cm²
                  </span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl">
                  <span className="text-[10px] text-slate-500 font-bold block">Diện tích toàn phần</span>
                  <span className="text-base font-black text-slate-800 dark:text-slate-100 font-mono">
                    {(boxL + boxW) * 2 * boxH + 2 * (boxL * boxW)} cm²
                  </span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 p-3 rounded-2xl">
                  <span className="text-[10px] text-purple-600 font-bold block">Thể tích V (a × b × c)</span>
                  <span className="text-lg font-black text-purple-700 dark:text-purple-300 font-mono">
                    {boxL * boxW * boxH} cm³
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* LAB 5: Pie Chart & Probability Lab */}
      {activeLab === 'piechart' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>🎯 Phòng Thí Nghiệm Biểu Đồ Quạt Tròn & Xác Suất</span>
            </h2>
            <p className="text-xs text-slate-500">
              Quan sát trực quan biểu đồ quạt tròn và thực hành gieo đồng xu để tính xác suất thực nghiệm!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Pie Chart */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-slate-200 dark:border-slate-700">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Soccer slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="50"
                    strokeDasharray={`${(sportSoccer / 100) * 157.08} 157.08`}
                    strokeDashoffset="0"
                  />
                  {/* Swim slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="50"
                    strokeDasharray={`${(sportSwim / 100) * 157.08} 157.08`}
                    strokeDashoffset={`-${(sportSoccer / 100) * 157.08}`}
                  />
                  {/* Read slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="50"
                    strokeDasharray={`${(sportRead / 100) * 157.08} 157.08`}
                    strokeDashoffset={`-${((sportSoccer + sportSwim) / 100) * 157.08}`}
                  />
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-black">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>⚽ Đá bóng ({sportSoccer}%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>🏊 Bơi lội ({sportSwim}%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span>📚 Đọc sách ({sportRead}%)</span>
                </div>
              </div>
            </div>

            {/* Calculations & Adjustments */}
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Tổng Số Học Sinh Điều Tra:</span>
                  <span className="text-purple-600 font-black">{totalStudents} học sinh</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={500}
                  step={50}
                  value={totalStudents}
                  onChange={(e) => setTotalStudents(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Tỉ Lệ Thích Đá Bóng (%):</span>
                  <span className="text-blue-600 font-black">{sportSoccer}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={sportSoccer}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSportSoccer(val);
                    if (val + sportSwim > 100) setSportSwim(100 - val);
                  }}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Calculated Counts */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-blue-50 dark:bg-blue-950/40 p-2.5 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <span className="text-[10px] text-blue-700 font-bold block">⚽ Đá bóng</span>
                  <span className="text-base font-black text-blue-900 dark:text-blue-100 font-mono">
                    {Math.round((totalStudents * sportSoccer) / 100)} bạn
                  </span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                  <span className="text-[10px] text-emerald-700 font-bold block">🏊 Bơi lội</span>
                  <span className="text-base font-black text-emerald-900 dark:text-emerald-100 font-mono">
                    {Math.round((totalStudents * sportSwim) / 100)} bạn
                  </span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-2xl border border-amber-200 dark:border-amber-800">
                  <span className="text-[10px] text-amber-700 font-bold block">📚 Đọc sách</span>
                  <span className="text-base font-black text-amber-900 dark:text-amber-100 font-mono">
                    {Math.round((totalStudents * sportRead) / 100)} bạn
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section: Probability Coin Toss Simulator */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Dices className="w-4 h-4 text-rose-500" />
                  <span>Mô Phỏng Xác Suất Thực Nghiệm (Tung Đồng Xu)</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Tung đồng xu nhiều lần và quan sát tỉ số số lần xuất hiện mặt Ngửa so với tổng số lần!
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTossCoin}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition active:scale-95"
                >
                  🪙 Tung 1 Lần
                </button>
                <button
                  onClick={handleToss10Coins}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition active:scale-95"
                >
                  🎲 Tung 10 Lần
                </button>
              </div>
            </div>

            {/* Toss history results */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2 min-h-[48px]">
              {tossHistory.length === 0 ? (
                <span className="text-xs text-slate-400 italic">Bấm "Tung Đồng Xu" để bắt đầu thử nghiệm xác suất!</span>
              ) : (
                tossHistory.map((res, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg text-xs font-black animate-in zoom-in-75 ${
                      res === 'Ngửa'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {res === 'Ngửa' ? '👑 Ngửa' : '🪙 Sấp'}
                  </span>
                ))
              )}
            </div>

            {tossHistory.length > 0 && (
              <div className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center justify-between">
                <span>
                  Tổng lần tung: <strong>{tossHistory.length}</strong> | Ngửa:{' '}
                  <strong className="text-amber-600">
                    {tossHistory.filter((r) => r === 'Ngửa').length}
                  </strong>{' '}
                  | Sấp:{' '}
                  <strong className="text-slate-600">
                    {tossHistory.filter((r) => r === 'Sấp').length}
                  </strong>
                </span>
                <span className="text-rose-600 dark:text-rose-400 font-mono font-black">
                  Xác suất mặt Ngửa ={' '}
                  {Math.round(
                    (tossHistory.filter((r) => r === 'Ngửa').length / tossHistory.length) * 100
                  )}
                  %
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
