import { Chapter, Question } from '../../../types/curriculum';
import { buildQuestionSet, makeBossQuestions, makeLesson } from '../../questionFactory';

type MathChapterDraft = Omit<Chapter, 'subjectId'>;

const banks: Record<string, Array<{q:string;options:string[];a:string;e:string}>> = {
solids:[
{q:'Hình hộp chữ nhật có dài 4 cm, rộng 3 cm, cao 2 cm. Thể tích là?',options:['9 cm³','18 cm³','12 cm³','24 cm³'],a:'24 cm³',e:'V = dài × rộng × cao = 4 × 3 × 2 = 24 cm³.'},
{q:'Hình lập phương cạnh 5 cm có thể tích:',options:['25 cm³','125 cm³','50 cm³','100 cm³'],a:'125 cm³',e:'V = cạnh × cạnh × cạnh = 5 × 5 × 5 = 125 cm³.'},
{q:'1 dm³ bằng:',options:['10 cm³','100 cm³','10 000 cm³','1 000 cm³'],a:'1 000 cm³',e:'1 dm = 10 cm nên 1 dm³ = 10 × 10 × 10 = 1 000 cm³.'},
{q:'Diện tích xung quanh hình hộp chữ nhật gồm:',options:['Tổng diện tích hai đáy','Diện tích bốn mặt bên','Diện tích toàn phần','Thể tích khối hộp'],a:'Diện tích bốn mặt bên',e:'Diện tích xung quanh là tổng diện tích của 4 mặt bên bao quanh hình hộp.'},
{q:'Hình lập phương cạnh 4 cm có diện tích toàn phần:',options:['64 cm²','16 cm²','96 cm²','48 cm²'],a:'96 cm²',e:'S_toàn_phần = 6 × cạnh × cạnh = 6 × 4 × 4 = 96 cm².'},
{q:'Một bể có thể tích 2 m³ chứa được bao nhiêu lít nước?',options:['200 l','20 000 l','200 000 l','2 000 l'],a:'2 000 l',e:'1 m³ = 1 000 dm³ = 1 000 l nên 2 m³ = 2 000 l.'},
{q:'Nếu cả ba kích thước của hình hộp chữ nhật cùng tăng gấp đôi thì thể tích:',options:['Tăng 2 lần','Tăng 4 lần','Tăng 6 lần','Tăng 8 lần'],a:'Tăng 8 lần',e:'V_mới = (2a) × (2b) × (2c) = 8 × (a × b × c) = tăng 8 lần.'},
{q:'4 500 cm³ bằng bao nhiêu dm³?',options:['0,45 dm³','4,5 dm³','45 dm³','450 dm³'],a:'4,5 dm³',e:'1 dm³ = 1 000 cm³ nên 4 500 cm³ = 4 500 ÷ 1 000 = 4,5 dm³.'},
{q:'Muốn tìm chiều cao của hình hộp chữ nhật khi biết thể tích V, chiều dài d và chiều rộng r:',options:['V × d × r','V + d + r','(d + r) ÷ V','V ÷ d ÷ r'],a:'V ÷ d ÷ r',e:'h = V ÷ (d × r) = V ÷ d ÷ r.'},
{q:'Khi đổ đầy một hộp hình lập phương cạnh 2 dm thì thể tích là:',options:['4 dm³','8 dm³','6 dm³','12 dm³'],a:'8 dm³',e:'V = 2 × 2 × 2 = 8 dm³.'},
],
time:[
{q:'1 giờ 25 phút bằng bao nhiêu phút?',options:['75 phút','95 phút','85 phút','105 phút'],a:'85 phút',e:'1 giờ = 60 phút; 60 + 25 = 85 phút.'},
{q:'2,5 giờ bằng bao nhiêu giờ và phút?',options:['2 giờ 5 phút','2 giờ 50 phút','3 giờ','2 giờ 30 phút'],a:'2 giờ 30 phút',e:'0,5 giờ = 0,5 × 60 phút = 30 phút, vậy 2,5 giờ = 2 giờ 30 phút.'},
{q:'Một bộ phim bắt đầu lúc 19:15 và kết thúc lúc 20:40. Thời lượng bộ phim là:',options:['1 giờ 15 phút','1 giờ 35 phút','1 giờ 25 phút','2 giờ 25 phút'],a:'1 giờ 25 phút',e:'20 giờ 40 phút - 19 giờ 15 phút = 1 giờ 25 phút.'},
{q:'3 phút 20 giây bằng bao nhiêu giây?',options:['180 giây','190 giây','220 giây','200 giây'],a:'200 giây',e:'3 × 60 + 20 = 180 + 20 = 200 giây.'},
{q:'Vận tốc 60 km/h có nghĩa là:',options:['Đi 60 km trong 1 phút','Đi 1 km trong 60 giờ','Đi 60 m trong 1 giờ','Đi 60 km trong 1 giờ'],a:'Đi 60 km trong 1 giờ',e:'Đơn vị km/h (kilômét trên giờ) biểu thị quãng đường đi được trong 1 giờ.'},
{q:'Quãng đường 120 km đi ô tô mất 3 giờ, vận tốc ô tô là:',options:['30 km/h','60 km/h','40 km/h','360 km/h'],a:'40 km/h',e:'v = s ÷ t = 120 ÷ 3 = 40 km/h.'},
{q:'Đi xe máy với vận tốc 45 km/h trong 2 giờ thì đi được quãng đường:',options:['22,5 km','90 km','47 km','135 km'],a:'90 km',e:'s = v × t = 45 × 2 = 90 km.'},
{q:'Quãng đường 150 km đi với vận tốc 50 km/h sẽ mất bao lâu?',options:['2 giờ','4 giờ','3 giờ','5 giờ'],a:'3 giờ',e:'t = s ÷ v = 150 ÷ 50 = 3 giờ.'},
{q:'Trên cùng một quãng đường, nếu vận tốc tăng lên thì thời gian đi:',options:['Tăng lên','Không đổi','Bằng 0','Giảm đi'],a:'Giảm đi',e:'Quãng đường không đổi thì vận tốc và thời gian là hai đại lượng tỉ lệ nghịch.'},
{q:'Một người đi xe đạp 30 km hết 40 phút. Vận tốc theo km/h là:',options:['30 km/h','40 km/h','60 km/h','45 km/h'],a:'45 km/h',e:'40 phút = 2/3 giờ; v = 30 ÷ (2/3) = 30 × 3/2 = 45 km/h.'},
],
review:[
{q:'2,75 + 1,6 =',options:['4,25','4,35','3,35','5,35'],a:'4,35',e:'2,75 + 1,60 = 4,35.'},
{q:'3/4 của 20 là:',options:['12','16','15','18'],a:'15',e:'20 × 3/4 = 60/4 = 15.'},
{q:'25% của 240 là:',options:['40','50','80','60'],a:'60',e:'240 × 25% = 240 × 1/4 = 60.'},
{q:'1,5 m³ bằng bao nhiêu dm³?',options:['15 dm³','150 dm³','15 000 dm³','1 500 dm³'],a:'1 500 dm³',e:'1 m³ = 1 000 dm³ nên 1,5 m³ = 1 500 dm³.'},
{q:'Hình tam giác có đáy 12 cm, chiều cao 5 cm có diện tích là:',options:['60 cm²','30 cm²','17 cm²','120 cm²'],a:'30 cm²',e:'S = 12 × 5 ÷ 2 = 30 cm².'},
{q:'Một người đi 90 km trong 2 giờ. Vận tốc là:',options:['35 km/h','60 km/h','45 km/h','180 km/h'],a:'45 km/h',e:'v = 90 ÷ 2 = 45 km/h.'},
{q:'2 giờ 15 phút bằng bao nhiêu phút?',options:['125 phút','145 phút','215 phút','135 phút'],a:'135 phút',e:'2 × 60 + 15 = 120 + 15 = 135 phút.'},
{q:'Toàn bộ hình quạt tròn trong biểu đồ quạt biểu diễn:',options:['25%','50%','75%','100%'],a:'100%',e:'Toàn bộ hình tròn biểu diễn tổng thể 100%.'},
{q:'Xác suất của một sự kiện không thể xảy ra bằng:',options:['1/2','1','2','0'],a:'0',e:'Sự kiện không thể xảy ra có xác suất bằng 0.'},
{q:'4 500 cm³ bằng bao nhiêu dm³?',options:['0,45 dm³','45 dm³','450 dm³','4,5 dm³'],a:'4,5 dm³',e:'4 500 ÷ 1 000 = 4,5 dm³.'},
],
stats:[
{q:'Dãy số: 4, 5, 5, 7, 9. Số xuất hiện nhiều lần nhất là:',options:['4','7','9','5'],a:'5',e:'Số 5 xuất hiện 2 lần, nhiều nhất trong dãy.'},
{q:'Biểu đồ cột phù hợp nhất để làm gì?',options:['Chỉ biểu diễn thời gian','Chỉ biểu diễn xác suất','So sánh số lượng giữa các đối tượng/nhóm','Không dùng số liệu'],a:'So sánh số lượng giữa các đối tượng/nhóm',e:'Biểu đồ cột trực quan hóa để so sánh độ lớn giữa các đối tượng/nhóm.'},
{q:'Trong một hộp có 8 thẻ gồm 2 thẻ đỏ và 6 thẻ xanh. Khả năng rút được thẻ đỏ là:',options:['1/8','1/3','1/2','1/4'],a:'1/4',e:'Xác suất = 2 ÷ 8 = 1/4.'},
{q:'Tung đồng xu cân đối một lần, số khả năng xuất hiện mặt ngửa là:',options:['0','2','3','1'],a:'1',e:'Đồng xu có 2 mặt (sấp và ngửa), mặt ngửa là 1 trong 2 khả năng.'},
{q:'Một lớp có 12 bạn thích bóng đá và 8 bạn thích cầu lông. Tổng số bạn là:',options:['4','96','18','20'],a:'20',e:'12 + 8 = 20 bạn.'},
{q:'Nếu 15 trong số 30 học sinh đi học bằng xe đạp thì tỉ lệ là:',options:['25%','40%','60%','50%'],a:'50%',e:'15 ÷ 30 = 1/2 = 50%.'},
{q:'Góc ở tâm của toàn bộ hình tròn biểu diễn 100% là:',options:['90°','180°','270°','360°'],a:'360°',e:'Một hình tròn trọn vẹn tương ứng góc 360°.'},
{q:'Một sự kiện chắc chắn xảy ra có xác suất bằng:',options:['0','0,5','2','1'],a:'1',e:'Sự kiện chắc chắn xảy ra luôn có xác suất = 1 (tức 100%).'},
{q:'Một sự kiện không thể xảy ra có xác suất bằng:',options:['1/2','1','2','0'],a:'0',e:'Sự kiện không thể xảy ra có xác suất = 0.'},
{q:'Khi thu thập dữ liệu thống kê, bước đầu tiên cần làm là:',options:['Kết luận ngay','Vẽ biểu đồ trước','Xóa dữ liệu','Xác định rõ câu hỏi/mục tiêu tìm hiểu'],a:'Xác định rõ câu hỏi/mục tiêu tìm hiểu',e:'Phải xác định rõ mục đích nghiên cứu trước khi bắt đầu thu thập số liệu.'},
]
};

const specs=[
{id:'ch9',title:'Chủ đề 9: Diện tích và thể tích của một số hình khối',vn:'Thành phố Hình hộp và Hình lập phương',sem:2 as const,icon:'🧱',color:'from-purple-500 to-fuchsia-600',desc:'Bài 49–55: hình khai triển, diện tích xung quanh/toàn phần và thể tích hình hộp chữ nhật, hình lập phương.',bank:'solids',lessons:[['Hình khai triển và diện tích','Nhận biết mặt, cạnh và diện tích các phần của hình khối'],['Diện tích xung quanh và toàn phần','Tính diện tích các mặt của hình hộp và hình lập phương'],['Thể tích hình khối','Tính, đổi đơn vị và giải bài toán thực tế']]},
{id:'ch10',title:'Chủ đề 10: Số đo thời gian, vận tốc và chuyển động đều',vn:'Đường đua thời gian và vận tốc',sem:2 as const,icon:'🏎️',color:'from-yellow-500 to-orange-600',desc:'Bài 56–62: số đo thời gian, vận tốc và các bài toán về chuyển động đều.',bank:'time',lessons:[['Đổi và tính số đo thời gian','Đổi giờ, phút, giây và tính khoảng thời gian'],['Vận tốc – quãng đường – thời gian','Ba đại lượng và công thức liên quan'],['Bài toán chuyển động đều','Phân tích dữ kiện và giải tình huống thực tế']]},
{id:'ch11',title:'Chủ đề 11: Một số yếu tố thống kê và xác suất',vn:'Đài quan sát dữ liệu và xác suất',sem:2 as const,icon:'📈',color:'from-blue-500 to-indigo-600',desc:'Bài 63–67: thu thập dữ liệu, biểu đồ, tỉ số số lần lặp và xác suất.',bank:'stats',lessons:[['Thu thập và phân loại số liệu','Đặt câu hỏi, thu thập và sắp xếp dữ liệu'],['Biểu đồ và tỉ lệ','Đọc biểu đồ và rút ra kết luận từ dữ liệu'],['Xác suất trực quan','Sự kiện có thể, chắc chắn, không thể và tỉ số số lần lặp']]},
{id:'ch12',title:'Chủ đề 12: Ôn tập cuối năm',vn:'Tháp chung kết Toán 5',sem:2 as const,icon:'🏆',color:'from-amber-500 to-yellow-600',desc:'Bài 68–75: ôn tập các mạch số, đo lường, hình học, chuyển động, thống kê và xác suất.',bank:'review',lessons:[['Ôn số và phép tính','Củng cố số tự nhiên, phân số, số thập phân và phần trăm'],['Ôn đo lường – hình học','Diện tích, thể tích, thời gian và vận tốc'],['Ôn thống kê – xác suất – vận dụng','Đọc dữ liệu và giải bài toán tổng hợp cuối năm']]},
];

export const ch5_ch6_ch7_chapters: MathChapterDraft[] = specs.map(s=>{
 const lessons=s.lessons.map((l,i)=>makeLesson(`${s.id}_l${i+1}`,s.id,l[0],l[1],i+1,['📘','⚔️','🏆'][i],l[0],[`Hệ thống đúng định nghĩa và công thức của ${s.title.toLowerCase()}.`,`Biết chọn phép tính theo dữ kiện và đơn vị.`,`Biết giải bài toán thực tế từng bước.`],buildQuestionSet(`${s.id}_l${i+1}`,s.title,banks[s.bank],10),'Đặt đơn vị ngay từ đầu, sau đó kiểm tra lại kết quả có hợp lí hay không.'));
 return {id:s.id,title:s.title,vietnameseTitle:s.vn,description:s.desc,semester:s.sem,color:s.color,bgGradient:`bg-gradient-to-r ${s.color}`,icon:s.icon,boss:{id:`boss_${s.id}`,name:`Boss ${s.vn.split(' ').slice(0,4).join(' ')}`,avatar:['🧱','🏎️','📈','🏆'][Number(s.id.slice(2))-9]||'👑',title:`Thủ lĩnh ${s.title}`,maxHp:420,story:`Đây là trận chiến tổng hợp của ${s.title.toLowerCase()}.`,questions:makeBossQuestions(`boss_${s.id}`,s.title,lessons.flatMap(l=>l.questions),10),rewardBadgeId:`badge_boss_${s.id}`},lessons};
});
