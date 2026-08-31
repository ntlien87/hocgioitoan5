import { Chapter, Question } from '../../../types/curriculum';
import { makeBossQuestions, makeLesson, buildQuestionSet } from '../../questionFactory';

type MathChapterDraft = Omit<Chapter, 'subjectId'>;

const bank = (id: string, topic: string): Question[] => {
  const itemsByTopic: Record<string, Array<{ q: string; options: string[]; a: string; e: string; h?: string }>> = {
    fractions: [
      { q: 'Số 4 582 017 có chữ số 5 ở hàng nào?', options: ['Hàng chục nghìn','Hàng trăm nghìn','Hàng nghìn','Hàng trăm'], a:'Hàng trăm nghìn', e:'Trong 4 582 017: triệu=4, trăm nghìn=5, chục nghìn=8, nghìn=2, trăm=0, chục=1, đơn vị=7.' },
      { q: 'Phân số 18/24 rút gọn bằng phân số nào?', options: ['2/3','3/4','4/5','5/6'], a:'3/4', e:'18 và 24 cùng chia cho ƯCLN=6, được 3/4.' },
      { q: 'Hai phân số bằng nhau là cặp nào?', options: ['3/5 và 9/20','2/3 và 8/12','4/7 và 8/21','5/8 và 10/12'], a:'2/3 và 8/12', e:'2/3 nhân cả tử và mẫu với 4 được 8/12.' },
      { q: 'Phân số nào lớn hơn 1?', options: ['3/5','4/9','7/6','5/8'], a:'7/6', e:'Tử số lớn hơn mẫu số nên 7/6 > 1.' },
      { q: 'Kết quả 2/5 + 1/5 bằng:', options: ['3/10','2/10','1/5','3/5'], a:'3/5', e:'Hai phân số cùng mẫu, cộng tử: 2+1=3, được 3/5.' },
      { q: 'Kết quả 7/8 - 3/8 bằng:', options: ['4/16','3/8','5/8','1/2'], a:'1/2', e:'7/8 - 3/8 = 4/8 = 1/2.' },
      { q: 'Kết quả 3/4 × 2/3 bằng:', options: ['2/7','3/8','5/6','1/2'], a:'1/2', e:'3/4 × 2/3 = 6/12 = 1/2.' },
      { q: 'Kết quả 5/6 ÷ 10/9 bằng:', options: ['1/3','2/5','5/9','3/4'], a:'3/4', e:'5/6 × 9/10 = 45/60 = 3/4.' },
      { q: 'Hỗn số 2 và 1/3 viết thành phân số là:', options: ['5/3','6/3','8/3','7/3'], a:'7/3', e:'2 1/3 = (2×3+1)/3 = 7/3.' },
      { q: 'Phân số 11/4 viết thành hỗn số là:', options: ['3 1/4','2 1/4','3 3/4','2 3/4'], a:'2 3/4', e:'11 ÷ 4 = 2 dư 3, vậy 11/4 = 2 3/4.' },
      { q: 'Dãy số 125 000; 126 000; 127 000; ... Số tiếp theo là:', options: ['126 500','127 100','129 000','128 000'], a:'128 000', e:'Mỗi số tăng thêm 1 000.' },
    ],
    decimals: [
      { q: 'Trong số 12,345, chữ số 4 ở hàng nào?', options: ['Phần mười','Phần nghìn','Hàng đơn vị','Phần trăm'], a:'Phần trăm', e:'12,345: 3 là phần mười, 4 là phần trăm, 5 là phần nghìn.' },
      { q: 'Số nào lớn nhất trong các số sau?', options: ['4,9','4,09','4,19','4,099'], a:'4,9', e:'4,9 = 4,900 lớn hơn 4,190; 4,099 và 4,090.' },
      { q: '0,7 viết thành phân số thập phân là:', options: ['7/100','70/1000','1/7','7/10'], a:'7/10', e:'0,7 có một chữ số sau dấu phẩy nên là 7/10.' },
      { q: '4,50 có bằng 4,5 không?', options: ['Không','Chỉ khi làm tròn','Chỉ khi nhân 10','Có'], a:'Có', e:'Các chữ số 0 ở cuối phần thập phân không làm thay đổi giá trị.' },
      { q: 'Làm tròn 6,274 đến hàng phần mười được:', options: ['6,28','6,27','6,2','6,3'], a:'6,3', e:'Chữ số hàng phần trăm là 7 ≥ 5, nên tăng phần mười: 6,2 → 6,3.' },
      { q: 'Số 3,005 đọc là:', options: ['Ba phẩy năm','Ba phẩy không không năm','Ba phẩy không trăm không năm','Ba phẩy không trăm linh năm'], a:'Ba phẩy không trăm linh năm', e:'3,005 có 3 đơn vị và 5 phần nghìn, không có phần mười và phần trăm.' },
      { q: 'Số thập phân nào biểu diễn 8/100?', options: ['0,8','8,00','0,008','0,08'], a:'0,08', e:'8/100 = 0,08, có 2 chữ số sau dấu phẩy.' },
      { q: '2,35 và 2,350 có quan hệ gì?', options: ['2,35 lớn hơn','2,350 lớn hơn','Không so sánh được','Bằng nhau'], a:'Bằng nhau', e:'Thêm số 0 vào cuối phần thập phân không đổi giá trị.' },
      { q: 'Số nào nằm giữa 5,2 và 5,3?', options: ['5,02','5,35','5,03','5,25'], a:'5,25', e:'5,25 > 5,2 và 5,25 < 5,3.' },
      { q: '4 đơn vị 7 phần trăm viết là:', options: ['4,7','4,70','4,007','4,07'], a:'4,07', e:'7 phần trăm = 0,07, vậy 4 đơn vị 7 phần trăm = 4,07.' },
    ],
    areaUnits: [
      { q: '1 m² bằng bao nhiêu dm²?', options: ['10','1 000','0,1','100'], a:'100', e:'1 m = 10 dm, nên 1 m² = 10×10 = 100 dm².' },
      { q: '1 ha bằng bao nhiêu m²?', options: ['1 000','100 000','1 000 000','10 000'], a:'10 000', e:'1 ha = 10 000 m².' },
      { q: '2 km² bằng bao nhiêu ha?', options: ['20','2 000','2 000 000','200'], a:'200', e:'1 km² = 100 ha, nên 2 km² = 200 ha.' },
      { q: '3,5 ha bằng bao nhiêu m²?', options: ['350','3 500','350 000','35 000'], a:'35 000', e:'3,5 × 10 000 = 35 000 m².' },
      { q: '8 000 cm² bằng bao nhiêu m²?', options: ['8','80','800','0,8'], a:'0,8', e:'1 m² = 10 000 cm², nên 8 000 cm² ÷ 10 000 = 0,8 m².' },
      { q: '0,24 km² bằng bao nhiêu ha?', options: ['2,4','240','2 400','24'], a:'24', e:'0,24 × 100 = 24 ha.' },
      { q: 'Đơn vị nào lớn nhất trong các đơn vị đo diện tích?', options: ['cm²','m²','ha','km²'], a:'km²', e:'km² > ha > m² > dm² > cm².' },
      { q: '5 m² 16 dm² bằng bao nhiêu dm²?', options: ['5 016','501,6','56','516'], a:'516', e:'5 m² = 500 dm²; cộng 16 dm² = 516 dm².' },
      { q: '1 km² bằng bao nhiêu m²?', options: ['10 000','100 000','1000','1 000 000'], a:'1 000 000', e:'1 km = 1 000 m, nên 1 km² = 1 000 × 1 000 = 1 000 000 m².' },
      { q: 'Để đo diện tích một tỉnh, đơn vị phù hợp nhất là:', options: ['cm²','dm²','m²','km²'], a:'km²', e:'Diện tích tỉnh rất lớn (hàng trăm đến hàng nghìn km²) nên dùng km².' },
    ],
    operations: [
      { q: '2,5 + 1,35 = ?', options: ['3,75','2,85','4,15','3,85'], a:'3,85', e:'2,50 + 1,35 = 3,85.' },
      { q: '6,4 - 2,75 = ?', options: ['3,55','4,35','3,75','3,65'], a:'3,65', e:'6,40 - 2,75 = 3,65.' },
      { q: '1,2 × 3 = ?', options: ['3,2','4,2','0,36','3,6'], a:'3,6', e:'1,2 × 3 = 3,6.' },
      { q: '4,8 ÷ 6 = ?', options: ['0,08','8','1,25','0,8'], a:'0,8', e:'4,8 ÷ 6 = 0,8.' },
      { q: '3,25 × 10 = ?', options: ['3,250','0,325','325','32,5'], a:'32,5', e:'Nhân với 10: chuyển dấu phẩy sang phải 1 chữ số.' },
      { q: '7,42 ÷ 100 = ?', options: ['0,742','74,2','0,00742','0,0742'], a:'0,0742', e:'Chia 100: chuyển dấu phẩy sang trái 2 chữ số.' },
      { q: '0,6 × 0,5 = ?', options: ['0,03','3','0,11','0,3'], a:'0,3', e:'6×5=30, có 2 chữ số thập phân → 0,30 = 0,3.' },
      { q: '5,04 ÷ 0,6 = ?', options: ['0,84','84','7,4','8,4'], a:'8,4', e:'5,04 ÷ 0,6 = 50,4 ÷ 6 = 8,4.' },
      { q: '2,4 + 0,36 - 0,5 = ?', options: ['2,36','2,86','3,26','2,26'], a:'2,26', e:'2,4 + 0,36 = 2,76; 2,76 - 0,5 = 2,26.' },
      { q: 'Chai 1,5 lít rót đều vào 3 cốc. Mỗi cốc được:', options: ['0,3 l','0,75 l','1 l','0,5 l'], a:'0,5 l', e:'1,5 ÷ 3 = 0,5 l.' },
    ],
  };
  const items = itemsByTopic[topic] ?? itemsByTopic.fractions;
  return buildQuestionSet(id, topic, items, 10);
};

const chapterSpecs = [
  { id:'ch1', title:'Chủ đề 1: Ôn tập và bổ sung', vn:'Vương quốc số tự nhiên, phân số và hỗn số', semester:1 as const, icon:'🍰', color:'from-amber-500 to-orange-600', desc:'Bài 1–9: ôn số tự nhiên, phân số, bốn phép tính với phân số và hỗn số.', domain:'fractions', lessons:[['Ôn tập số tự nhiên','Hệ thống số và phép tính đã học'],['Phân số và các phép tính','Rút gọn, quy đồng, cộng trừ nhân chia phân số'],['Hỗn số và bài toán tổng hợp','Đổi hỗn số và vận dụng giải toán'] as [string,string]],},
  { id:'ch2', title:'Chủ đề 2: Số thập phân', vn:'Vương quốc dấu phẩy', semester:1 as const, icon:'🔢', color:'from-sky-500 to-blue-600', desc:'Bài 10–14: khái niệm, so sánh, số đo dưới dạng số thập phân và làm tròn.', domain:'decimals', lessons:[['Khái niệm số thập phân','Đọc, viết và nhận biết hàng của số thập phân'],['So sánh và số đo thập phân','So sánh, chuyển đổi số đo thành số thập phân'],['Làm tròn số thập phân','Quy tắc làm tròn và vận dụng thực tế']]},
  { id:'ch3', title:'Chủ đề 3: Một số đơn vị đo diện tích', vn:'Vùng đất Mét vuông – Héc-ta – Ki-lô-mét vuông', semester:1 as const, icon:'📏', color:'from-lime-500 to-green-600', desc:'Bài 15–18: km², ha, quan hệ giữa các đơn vị đo diện tích và thực hành.', domain:'areaUnits', lessons:[['Ki-lô-mét vuông và héc-ta','Hiểu, đọc và đổi đơn vị diện tích lớn'],['Đổi đơn vị diện tích','Quan hệ giữa km², ha, m², dm², cm²'],['Thực hành đo diện tích','Ứng dụng đơn vị diện tích vào tình huống thực tế']]},
  { id:'ch4', title:'Chủ đề 4: Các phép tính với số thập phân', vn:'Xưởng máy tính thập phân', semester:1 as const, icon:'⚙️', color:'from-violet-500 to-indigo-600', desc:'Bài 19–24: cộng, trừ, nhân, chia số thập phân và vận dụng.', domain:'operations', lessons:[['Cộng và trừ số thập phân','Đặt tính, tính nhẩm và ước lượng'],['Nhân số thập phân','Nhân với số tự nhiên và số thập phân'],['Chia số thập phân','Chia cho số tự nhiên và số thập phân']]},
];

function chapter(spec: (typeof chapterSpecs)[number]): MathChapterDraft {
  const lessons = spec.lessons.map((l, i) => makeLesson(
    `${spec.id}_l${i+1}`,
    spec.id,
    l[0], l[1], i+1, ['🗺️','⚔️','💎'][i],
    l[0],
    [`Nắm khái niệm trọng tâm của ${spec.title.toLowerCase()}.`,`Biết thực hiện thao tác theo đúng thứ tự và đơn vị.`,`Biết kiểm tra kết quả bằng ước lượng hoặc phép tính ngược.`],
    bank(`${spec.id}_l${i+1}`, spec.domain),
    'Đọc kĩ dữ kiện, làm từng bước và kiểm tra lại kết quả trước khi chốt đáp án.'
  ));
  return {
    id: spec.id, title: spec.title, vietnameseTitle: spec.vn, description: spec.desc, semester: spec.semester,
    color: spec.color, bgGradient:`bg-gradient-to-r ${spec.color}`, icon:spec.icon,
    boss:{id:`boss_${spec.id}`,name:`${spec.vn.split(' ')[0]} Boss`,avatar:['🐉','👾','🌳','⚡'][Number(spec.id.slice(2))-1] ?? '👑',title:`Thủ lĩnh ${spec.title}`,maxHp:360,story:`Đánh bại Boss bằng cách vận dụng toàn bộ kiến thức của ${spec.title.toLowerCase()}.`,questions:makeBossQuestions(`boss_${spec.id}`,spec.title,lessons.flatMap(l=>l.questions),10),rewardBadgeId:`badge_boss_${spec.id}`},
    lessons,
  };
}

export const ch1_ch2_chapters: MathChapterDraft[] = chapterSpecs.map(chapter);
