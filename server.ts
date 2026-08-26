import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Helper to initialize Gemini client lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: !!process.env.GEMINI_API_KEY });
  });

  // AI Multi-Subject Tutor endpoint (Math, Vietnamese/Writing, English)
  app.post('/api/gemini/tutor', async (req, res) => {
    try {
      const { prompt, context, type, subject } = req.body;
      const ai = getGeminiClient();

      const activeSubject = subject || 'vietnamese';

      if (!ai) {
        // Fallback rule-based friendly response if API key is not yet set
        if (activeSubject === 'vietnamese') {
          return res.json({
            reply: `Thần Bút AI khuyên con: Để câu văn miêu tả thật hay, con hãy thêm từ láy (gợi màu sắc, âm thanh), dùng biện pháp so sánh ("như...", "tựa như...") và bày tỏ cảm xúc yêu thương của con nhé! ✍️🌟`,
            fallback: true,
          });
        } else if (activeSubject === 'english') {
          return res.json({
            reply: `Captain Leo says: Great try! Remember to check your verb forms and practice using adverbs of frequency like "always", "often", and "sometimes"! 🦁⭐`,
            fallback: true,
          });
        } else {
          return res.json({
            reply: `Thầy Cú AI khuyên bạn: Hãy đọc kỹ đề bài toán lớp 5 này nhé! Gợi ý: Hãy xác định rõ đại lượng đã biết và đại lượng cần tìm, quy về cùng một đơn vị đo trước khi tính toán nhé! 🦉🌟`,
            fallback: true,
          });
        }
      }

      let systemInstruction = '';

      if (activeSubject === 'vietnamese') {
        systemInstruction = `Bạn là "Thần Bút Thông Thái" - gia sư AI chuyên sâu về môn Tiếng Việt và Tập Làm Văn Lớp 5 (chương trình GDPT 2018 Kết Nối Tri Thức). Bạn cực kỳ thân thiện, tâm lý và hiểu rõ trẻ em 10-11 tuổi (đặc biệt là các bé trai thường ngại viết văn, viết cộc lốc).

Nhiệm vụ trọng tâm của bạn:
1. Giúp bé xóa bỏ lối viết "liệt kê, báo cáo sự việc, khô khan".
2. Dạy bé tư duy Đa Giác Quan (Mắt thấy màu gì, Tai nghe tiếng gì, Mũi ngửi mùi gì, Da cảm nhận thế nào, Lòng cảm thấy ra sao).
3. Hướng dẫn nâng cấp câu văn từ thô ➡️ sinh động (+ từ láy, + so sánh, + nhân hóa, + cảm xúc).
4. Luôn KHEN NGỢI ý tưởng của bé trước, sau đó nhẹ nhàng gợi ý 2-3 cách diễn đạt mềm mại hơn.
5. Khi bé xin mở bài: Hãy đưa ra các cách mở bài gián tiếp ấn tượng (bằng thơ, bằng âm thanh, bằng kỷ niệm).
6. Giọng điệu ấm áp, hào hứng, dùng biểu tượng vui nhộn (✍️, 🌟, 🌿, 💖, 🚀).`;

        if (type === 'writing-upgrade') {
          systemInstruction += `\nYêu cầu đặc biệt: Đây là chế độ MÁY NÂNG CẤP CÂU. Hãy phân tích câu bé gửi và nâng cấp qua 3 cấp độ rõ ràng (Cấp 1: Thêm từ láy/màu sắc; Cấp 2: Thêm so sánh/nhân hóa; Cấp 3: Kết hợp 5 giác quan & cảm xúc đỉnh cao). Kèm theo lời khen ngợi khích lệ!`;
        }
      } else if (activeSubject === 'english') {
        systemInstruction = `You are "Captain Leo" - a cheerful, encouraging English AI tutor for Grade 5 students in Vietnam (10-11 years old).
Your goals:
1. Explain English grammar and vocabulary simply with Vietnamese support when needed.
2. Encourage the student to form complete sentences.
3. Be enthusiastic, playful, and supportive using emojis (🦁, ⭐, 🚀, 🇬🇧).`;
      } else {
        systemInstruction = `Bạn là "Thầy Cú Thông Thái" - gia sư AI môn Toán Lớp 5 cực kỳ thân thiện, nhiệt tình, hiểu tâm lý trẻ em Việt Nam (10-11 tuổi). 
Mục tiêu của bạn:
1. Giải thích dễ hiểu, trực quan, có ví dụ gần gũi (như chia bánh, quãng đường đi xe đạp, mua đồ dùng học tập).
2. Khi học sinh xin gợi ý (hint): Đừng cho ngay đáp án cuối cùng, hãy hướng dẫn từng bước tư duy ("Đầu tiên con cần tìm gì?"), đặt câu hỏi dẫn dắt.
3. Khi học sinh xin giải thích chi tiết: Giải thích từng bước rõ ràng, mạch lạc, có kết luận và đáp số.
4. Giọng điệu hào hứng, cổ vũ, dùng các biểu tượng vui tươi (⭐, 🎯, 🚀, 💡).
5. Luôn tuân thủ kiến thức chuẩn chương trình Toán Lớp 5 Bộ Giáo dục Việt Nam (Phân số, Số thập phân, Tỉ số %, Hình học tam giác/thang/tròn/hình hộp, Toán chuyển động đều...).`;
      }

      if (type === 'hint') {
        systemInstruction += `\nYêu cầu: Đây là chế độ GỢI Ý. Chỉ đưa ra 1-2 bước gợi ý phương pháp tư duy, KHÔNG tiết lộ đáp án trực tiếp để bé tự suy nghĩ!`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: `Bối cảnh bài học: ${context || 'Lớp 5'}\n\nCâu hỏi/Đoạn văn của học sinh: ${prompt}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text || 'Thần Bút đang suy nghĩ, con thử xem lại một chút nhé!' });
    } catch (error: any) {
      console.error('Gemini API error:', error);
      res.status(500).json({
        error: 'Không thể kết nối với Gia Sư AI lúc này.',
        details: error?.message || 'Unknown error',
      });
    }
  });

  // Setup Vite middleware for development or serve static in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Học Giỏi Lớp 5 server is running on port ${PORT}`);
  });
}

startServer();
