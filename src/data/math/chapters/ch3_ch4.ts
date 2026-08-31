import { Chapter, Question } from '../../../types/curriculum';
import { makeBossQuestions, makeLesson, buildQuestionSet } from '../../questionFactory';

type MathChapterDraft = Omit<Chapter, 'subjectId'>;

function lessonQuestions(prefix:string, topic:string, bank:Array<{q:string;options:string[];a:string;e:string}>):Question[]{
  return buildQuestionSet(prefix,topic,bank,10);
}

const banks:{[k:string]:Array<{q:string;options:string[];a:string;e:string}>}={
flat:[
{q:'Hình tam giác có diện tích 24 cm², đáy 8 cm. Chiều cao là?',options:['3 cm','8 cm','4 cm','6 cm'],a:'6 cm',e:'h = S×2 ÷ đáy = 24×2 ÷ 8 = 6 cm.'},
{q:'Hình tam giác có đáy 10 cm và chiều cao 7 cm. Diện tích là?',options:['70 cm²','17 cm²','140 cm²','35 cm²'],a:'35 cm²',e:'S = đáy × chiều cao ÷ 2 = 10×7 ÷ 2 = 35 cm².'},
{q:'Hình thang có hai đáy 8 cm và 12 cm, chiều cao 5 cm. Diện tích?',options:['40 cm²','100 cm²','20 cm²','50 cm²'],a:'50 cm²',e:'S = (đáy lớn + đáy bé) × chiều cao ÷ 2 = (8+12)×5 ÷ 2 = 50 cm².'},
{q:'Chu vi hình tròn bán kính 5 cm (lấy π ≈ 3,14) gần bằng:',options:['78,5 cm','10 cm','15,7 cm','31,4 cm'],a:'31,4 cm',e:'C = 2 × π × r = 2 × 3,14 × 5 = 31,4 cm.'},
{q:'Diện tích hình tròn bán kính 4 cm gần bằng:',options:['25,12 cm²','12,56 cm²','100,48 cm²','50,24 cm²'],a:'50,24 cm²',e:'S = π × r² = 3,14 × 4 × 4 = 50,24 cm².'},
{q:'Đường kính hình tròn có bán kính 7 cm là:',options:['7 cm','49 cm','3,5 cm','14 cm'],a:'14 cm',e:'Đường kính = 2 × bán kính = 2 × 7 = 14 cm.'},
{q:'Hình thang có diện tích 72 cm², tổng hai đáy 24 cm. Chiều cao?',options:['48 cm','12 cm','3 cm','6 cm'],a:'6 cm',e:'Chiều cao = S×2 ÷ (tổng hai đáy) = 72×2 ÷ 24 = 6 cm.'},
{q:'Nếu đáy tam giác tăng gấp đôi, chiều cao giữ nguyên thì diện tích:',options:['Giữ nguyên','Giảm một nửa','Tăng gấp bốn','Tăng gấp đôi'],a:'Tăng gấp đôi',e:'S = đáy × chiều cao ÷ 2; khi đáy tăng gấp đôi, S tăng gấp đôi.'},
{q:'Nửa chu vi đường tròn bán kính 3 cm gần bằng:',options:['18,84 cm','28,26 cm','6,28 cm','9,42 cm'],a:'9,42 cm',e:'Nửa chu vi = π × r = 3,14 × 3 = 9,42 cm.'},
{q:'Muốn tính diện tích hình thang cần biết:',options:['Chỉ hai đáy','Chỉ chiều cao','Chỉ cạnh bên','Hai đáy và chiều cao'],a:'Hai đáy và chiều cao',e:'Công thức: S = (đáy lớn + đáy bé) × chiều cao ÷ 2.'},
],
ratio:[
{q:'35% viết dưới dạng phân số tối giản là:',options:['35/100','3,5/10','35/10','7/20'],a:'7/20',e:'35/100 ÷ 5 (cả tử và mẫu) = 7/20.'},
{q:'20% của 250 là:',options:['25','80','40','50'],a:'50',e:'250 × 20% = 250 × 0,2 = 50.'},
{q:'Một lớp có 12 học sinh nữ trong 30 học sinh. Tỉ số nữ so với cả lớp là:',options:['18/30','30/12','12/18','12/30'],a:'12/30',e:'Tỉ số nữ/tổng = 12/30 (= 2/5).'},
{q:'Trên bản đồ tỉ lệ 1:100 000, đoạn 3 cm ứng với thực tế:',options:['300 m','300 km','30 km','3 km'],a:'3 km',e:'3 cm × 100 000 = 300 000 cm = 3 000 m = 3 km.'},
{q:'Tổng hai số bằng 84, tỉ số là 3:4. Số bé là:',options:['42','48','21','36'],a:'36',e:'Tổng số phần = 7; mỗi phần = 84÷7 = 12; số bé = 3×12 = 36.'},
{q:'Hiệu hai số bằng 24, tỉ số số bé so với số lớn là 2:5. Số bé là:',options:['20','12','8','16'],a:'16',e:'Hiệu tương ứng 3 phần = 24 → 1 phần = 8; số bé = 2×8 = 16.'},
{q:'Một món hàng 400 000 đồng giảm 15%. Số tiền giảm là:',options:['40 000','80 000','50 000','60 000'],a:'60 000',e:'400 000 × 15% = 400 000 × 0,15 = 60 000 đồng.'},
{q:'Một số bằng 72, tăng thêm 25% được:',options:['80','108','96','90'],a:'90',e:'72 × 1,25 = 90.'},
{q:'Tỉ số 4:7 có tổng số phần bằng:',options:['3','28','7','11'],a:'11',e:'4 + 7 = 11 phần.'},
{q:'Nếu 3/5 số học sinh thích bóng đá thì tỉ số phần trăm là:',options:['30%','40%','75%','60%'],a:'60%',e:'3/5 = 0,6 = 60%.'},
],
review:[
{q:'Một số có 2,5 phần trăm được viết là:',options:['0,25','2,5','25','0,025'],a:'0,025',e:'2,5% = 2,5 ÷ 100 = 0,025.'},
{q:'1,5 m³ bằng:',options:['15 dm³','150 dm³','15 000 dm³','1 500 dm³'],a:'1 500 dm³',e:'1 m³ = 1 000 dm³, nên 1,5 m³ = 1 500 dm³.'},
{q:'Diện tích hình chữ nhật dài 12 cm, rộng 5 cm là:',options:['17 cm²','34 cm²','120 cm²','60 cm²'],a:'60 cm²',e:'S = 12 × 5 = 60 cm².'},
{q:'3,6 ÷ 0,6 =',options:['60','0,6','5,4','6'],a:'6',e:'3,6 ÷ 0,6 = 36 ÷ 6 = 6.'},
{q:'2 giờ 35 phút bằng bao nhiêu phút?',options:['125','165','145','155'],a:'155',e:'2 × 60 + 35 = 155 phút.'},
{q:'Vận tốc được tính bằng:',options:['quãng đường × thời gian','thời gian ÷ quãng đường','quãng đường + thời gian','quãng đường ÷ thời gian'],a:'quãng đường ÷ thời gian',e:'Công thức: v = s ÷ t.'},
{q:'Biểu đồ hình quạt tròn dùng để thể hiện tốt nhất:',options:['Sự thay đổi theo thời gian','Thứ tự số tự nhiên','Độ dài đoạn thẳng','Tỉ lệ các phần trong một tổng thể'],a:'Tỉ lệ các phần trong một tổng thể',e:'Hình quạt tròn biểu diễn cơ cấu, tỉ lệ phần trăm.'},
{q:'Một hộp có 4 viên bi đỏ và 6 viên bi xanh. Xác suất lấy được bi đỏ là:',options:['3/5','1/4','4/6','2/5'],a:'2/5',e:'P = 4 ÷ (4+6) = 4/10 = 2/5.'},
{q:'0,75 bằng bao nhiêu phần trăm?',options:['7,5%','0,75%','750%','75%'],a:'75%',e:'0,75 × 100% = 75%.'},
{q:'Một bể dài 2 m, rộng 1,5 m, cao 1 m. Thể tích là:',options:['2 m³','4,5 m³','1,5 m³','3 m³'],a:'3 m³',e:'V = 2 × 1,5 × 1 = 3 m³.'},
]
};

const specs=[
{id:'ch5',title:'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích',vn:'Vương quốc hình tam giác, hình thang và hình tròn',sem:1 as const,icon:'📐',color:'from-rose-500 to-pink-600',desc:'Bài 25–29: hình tam giác, hình thang, đường tròn và thực hành.',bank:'flat',lessons:[['Hình tam giác','Diện tích và chiều cao tương ứng'],['Hình thang','Hai đáy, chiều cao và diện tích'],['Đường tròn','Chu vi, diện tích và vận dụng']]},
{id:'ch6',title:'Chủ đề 6: Ôn tập học kì 1',vn:'Đại sảnh tổng kết học kì I',sem:1 as const,icon:'🏰',color:'from-orange-500 to-red-600',desc:'Bài 30–35: hệ thống hóa số, đo lường, hình học và giải toán học kì I.',bank:'review',lessons:[['Ôn số và phép tính','Tổng hợp số tự nhiên, phân số và số thập phân'],['Ôn đo lường và hình học','Đơn vị đo, diện tích và chu vi'],['Luyện tập tổng hợp học kì I','Phối hợp nhiều mạch kiến thức trong một bài toán']]},
{id:'ch7',title:'Chủ đề 7: Tỉ số và các bài toán liên quan',vn:'Thành phố Tỉ số và bản đồ',sem:2 as const,icon:'📊',color:'from-emerald-500 to-teal-600',desc:'Bài 36–44: tỉ số, tỉ số phần trăm, tỉ lệ bản đồ và các bài toán tổng–tỉ, hiệu–tỉ.',bank:'ratio',lessons:[['Tỉ số và tỉ số phần trăm','Biểu diễn, tìm tỉ số và phần trăm'],['Tỉ lệ bản đồ và hai số','Đọc tỉ lệ, tìm hai số khi biết tổng và tỉ số'],['Hiệu – tỉ và toán phần trăm','Tìm hai số, giá trị phần trăm và vận dụng']]},
{id:'ch8',title:'Chủ đề 8: Thể tích. Đơn vị đo thể tích',vn:'Vương quốc mét khối và đề-xi-mét khối',sem:2 as const,icon:'🧊',color:'from-cyan-500 to-sky-600',desc:'Bài 45–48: m³, dm³, cm³ và quan hệ giữa các đơn vị thể tích.',bank:'review',lessons:[['Đơn vị đo thể tích','Hiểu m³, dm³, cm³ và quan hệ quy đổi'],['Đổi đơn vị thể tích','Chuyển đổi linh hoạt giữa các đơn vị'],['Vận dụng thể tích','Áp dụng thể tích vào bể, hộp và vật chứa']]},
];

export const ch3_ch4_chapters: MathChapterDraft[] = specs.map((s)=>{
 const lessons=s.lessons.map((l,i)=>makeLesson(`${s.id}_l${i+1}`,s.id,l[0],l[1],i+1,['🔎','⚔️','💠'][i],l[0],[`Nắm kiến thức cốt lõi của ${s.title.toLowerCase()}.`,`Biết chọn công thức hoặc quy tắc phù hợp.`,`Biết kiểm tra đơn vị và tính hợp lí của kết quả.`],lessonQuestions(`${s.id}_l${i+1}`,s.title,banks[s.bank]),'Nhớ công thức – thay số – tính – kiểm tra đơn vị.'));
 return {id:s.id,title:s.title,vietnameseTitle:s.vn,description:s.desc,semester:s.sem,color:s.color,bgGradient:`bg-gradient-to-r ${s.color}`,icon:s.icon,boss:{id:`boss_${s.id}`,name:`Boss ${s.vn.split(' ').slice(0,3).join(' ')}`,avatar:['🐲','🏆','🗺️','🧊'][Number(s.id.slice(2))-5]||'👑',title:`Thủ lĩnh ${s.title}`,maxHp:380,story:`Boss chỉ chịu khuất phục khi em vận dụng được toàn bộ kiến thức của ${s.title.toLowerCase()}.`,questions:makeBossQuestions(`boss_${s.id}`,s.title,lessons.flatMap(l=>l.questions),10),rewardBadgeId:`badge_boss_${s.id}`},lessons};
});
