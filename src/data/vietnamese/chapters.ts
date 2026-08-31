import { Chapter, Question } from '../../types/curriculum';
import { buildQuestionSet, makeBossQuestions, makeLesson } from '../questionFactory';

type Draft = Omit<Chapter, 'subjectId'>;

type Item = { q:string; options:string[]; a:string; e:string };

const banks: Record<string, Item[]> = {
reading:[
{q:'Khi đọc một văn bản, ý chính là gì?',options:['Chi tiết nhỏ nhất','Nội dung trung tâm tác giả muốn truyền đạt','Tên tác giả','Số đoạn văn'],a:'Nội dung trung tâm tác giả muốn truyền đạt',e:'Ý chính khái quát nội dung trung tâm của văn bản.'},
{q:'Chi tiết nào thường giúp người đọc hình dung nhân vật rõ hơn?',options:['Đặc điểm ngoại hình và hành động','Số trang sách','Tên nhà xuất bản','Màu bìa'],a:'Đặc điểm ngoại hình và hành động',e:'Ngoại hình, hành động, lời nói và suy nghĩ đều giúp khắc họa nhân vật.'},
{q:'Khi tìm thông tin trong văn bản, cách làm hiệu quả là:',options:['Đọc ngẫu nhiên một câu','Xác định từ khóa và câu chứa thông tin','Chỉ đọc nhan đề','Bỏ qua câu hỏi'],a:'Xác định từ khóa và câu chứa thông tin',e:'Từ khóa giúp định vị đoạn chứa thông tin cần tìm.'},
{q:'Một nhan đề hay thường có tác dụng:',options:['Kéo dài văn bản','Gợi nội dung hoặc cảm xúc chính','Thay thế toàn bộ nội dung','Chỉ trang trí'],a:'Gợi nội dung hoặc cảm xúc chính',e:'Nhan đề giúp định hướng người đọc về nội dung hoặc cảm xúc.'},
{q:'Khi nêu nhận xét về nhân vật, câu trả lời tốt nhất nên dựa vào:',options:['Cảm tính hoàn toàn','Chi tiết trong văn bản','Tên nhân vật','Số câu trong bài'],a:'Chi tiết trong văn bản',e:'Nhận xét cần có bằng chứng từ văn bản.'},
{q:'Đọc mở rộng giúp học sinh:',options:['Chỉ học thuộc lòng','Mở rộng vốn đọc và hiểu biết','Không cần viết','Không cần trao đổi'],a:'Mở rộng vốn đọc và hiểu biết',e:'Đọc nhiều giúp tăng vốn từ, kiến thức và khả năng cảm thụ.'},
{q:'Nếu một đoạn văn có nhiều chi tiết về âm thanh, đó là dấu hiệu tác giả chú ý đến:',options:['Thính giác','Thị giác','Khứu giác','Vị giác'],a:'Thính giác',e:'Âm thanh là thông tin cảm nhận bằng thính giác.'},
{q:'Muốn tóm tắt một đoạn văn, trước hết cần:',options:['Chép lại toàn bộ','Xác định ý chính','Đổi tên nhân vật','Đếm số chữ'],a:'Xác định ý chính',e:'Ý chính là nền tảng để tóm tắt ngắn gọn.'},
{q:'Câu trả lời đọc hiểu tốt nên:',options:['Rất dài dù không đúng','Đúng câu hỏi và có căn cứ','Chỉ ghi một từ','Dùng thông tin ngoài văn bản thay cho bằng chứng'],a:'Đúng câu hỏi và có căn cứ',e:'Cần trả lời đúng trọng tâm và dựa vào văn bản.'},
{q:'Khi gặp từ chưa hiểu trong văn bản, em nên:',options:['Bỏ luôn văn bản','Đoán nghĩa dựa vào ngữ cảnh rồi kiểm tra lại','Viết nghĩa bất kỳ','Chỉ nhìn hình'],a:'Đoán nghĩa dựa vào ngữ cảnh rồi kiểm tra lại',e:'Ngữ cảnh là manh mối quan trọng để hiểu từ mới.'},
],
language:[
{q:'Từ đồng nghĩa là những từ:',options:['Có nghĩa giống hoặc gần giống nhau','Trái nghĩa nhau','Chỉ có một âm tiết','Luôn viết giống nhau'],a:'Có nghĩa giống hoặc gần giống nhau',e:'Từ đồng nghĩa có nghĩa giống hoặc gần giống.'},
{q:'Từ trái nghĩa là những từ:',options:['Có nghĩa đối lập nhau','Có cách viết giống nhau','Luôn là danh từ','Cùng vần'],a:'Có nghĩa đối lập nhau',e:'Ví dụ: cao – thấp, vui – buồn.'},
{q:'Trong câu “Mặt hồ phẳng lặng như tấm gương”, biện pháp nổi bật là:',options:['So sánh','Điệp ngữ','Liệt kê','Câu hỏi'],a:'So sánh',e:'Từ “như” nối sự vật được so sánh với hình ảnh tấm gương.'},
{q:'“Cây bàng dang tay đón gió” sử dụng:',options:['Nhân hóa','So sánh','Điệp âm','Nói quá'],a:'Nhân hóa',e:'Cây bàng được gán hành động “dang tay” như con người.'},
{q:'Dấu phẩy thường dùng để:',options:['Ngăn cách các bộ phận có cùng chức vụ hoặc trạng ngữ','Kết thúc câu hỏi','Thay dấu chấm','Đánh dấu lời nói trực tiếp duy nhất'],a:'Ngăn cách các bộ phận có cùng chức vụ hoặc trạng ngữ',e:'Dấu phẩy có nhiều công dụng, trong đó có ngăn cách trạng ngữ và các bộ phận đồng chức.'},
{q:'Câu ghép là câu:',options:['Chỉ có một cụm chủ-vị','Có từ hai cụm chủ-vị trở lên có quan hệ với nhau','Không có động từ','Luôn có dấu chấm hỏi'],a:'Có từ hai cụm chủ-vị trở lên có quan hệ với nhau',e:'Câu ghép gồm các vế có quan hệ ý nghĩa.'},
{q:'Từ “lung linh” thuộc nhóm:',options:['Từ láy','Từ ghép','Tên riêng','Đại từ'],a:'Từ láy',e:'“Lung linh” là từ láy, gợi hình ảnh ánh sáng dao động đẹp mắt.'},
{q:'Khi viết câu, từ ngữ cần:',options:['Dùng tùy ý','Phù hợp nghĩa và ngữ cảnh','Càng dài càng tốt','Không cần liên kết'],a:'Phù hợp nghĩa và ngữ cảnh',e:'Dùng từ đúng nghĩa giúp câu rõ ràng, chính xác.'},
{q:'Một đoạn văn mạch lạc cần có:',options:['Các câu rời rạc','Liên kết về nội dung và hình thức','Chỉ câu ngắn','Nhiều từ khó'],a:'Liên kết về nội dung và hình thức',e:'Liên kết giúp các câu cùng hướng tới chủ đề và nối với nhau tự nhiên.'},
{q:'Khi muốn thay một từ bị lặp nhiều lần, em có thể:',options:['Bỏ hết câu','Dùng từ đồng nghĩa hoặc cách diễn đạt phù hợp','Đổi cả chủ đề','Chèn từ bất kỳ'],a:'Dùng từ đồng nghĩa hoặc cách diễn đạt phù hợp',e:'Đó là cách giảm lặp từ mà vẫn giữ nghĩa.'},
],
writing:[
{q:'Mở bài trực tiếp thường:',options:['Giới thiệu ngay đối tượng định tả/kể','Kể một chuyện rất xa đề','Không nêu đối tượng','Chỉ dùng câu hỏi'],a:'Giới thiệu ngay đối tượng định tả/kể',e:'Mở bài trực tiếp vào thẳng đối tượng hoặc vấn đề.'},
{q:'Một bài văn miêu tả tốt cần dựa trên:',options:['Quan sát cụ thể','Tưởng tượng hoàn toàn không có căn cứ','Chỉ lời kể của người khác','Một câu duy nhất'],a:'Quan sát cụ thể',e:'Quan sát giúp chọn chi tiết chân thực và gợi hình.'},
{q:'Khi tả người, nên ưu tiên:',options:['Mọi chi tiết','Một số chi tiết tiêu biểu gắn với tính cách','Chỉ chiều cao','Chỉ quần áo'],a:'Một số chi tiết tiêu biểu gắn với tính cách',e:'Chi tiết chọn lọc làm nhân vật chân thực và có nét riêng.'},
{q:'Khi tả cảnh, trình tự hợp lí có thể là:',options:['Không theo trình tự','Theo thời gian hoặc từ gần đến xa','Chỉ theo độ dài câu','Theo thứ tự bảng chữ cái'],a:'Theo thời gian hoặc từ gần đến xa',e:'Trình tự giúp bài văn rõ ràng, dễ hình dung.'},
{q:'Kết bài mở rộng thường:',options:['Đưa cảm nghĩ, liên hệ hoặc ước mong','Lặp nguyên mở bài','Thêm nhân vật mới không liên quan','Kết thúc đột ngột'],a:'Đưa cảm nghĩ, liên hệ hoặc ước mong',e:'Kết bài mở rộng giúp thể hiện tình cảm và suy nghĩ sâu hơn.'},
{q:'Một câu văn giàu hình ảnh thường có thể dùng:',options:['Từ gợi tả, so sánh, nhân hóa phù hợp','Chỉ số liệu','Nhiều từ viết tắt','Từ ngữ không liên quan'],a:'Từ gợi tả, so sánh, nhân hóa phù hợp',e:'Biện pháp tu từ vừa phải giúp câu văn sinh động.'},
{q:'Trước khi viết bài, dàn ý giúp:',options:['Không cần thiết','Sắp xếp ý theo trình tự','Kéo dài bài','Thay cho việc viết'],a:'Sắp xếp ý theo trình tự',e:'Dàn ý giúp đủ ý, tránh lạc đề và lặp ý.'},
{q:'Một đoạn văn nên có:',options:['Một ý chính được triển khai rõ','Nhiều ý không liên quan','Chỉ một từ','Không có câu chủ đề bao giờ'],a:'Một ý chính được triển khai rõ',e:'Đoạn văn cần tập trung vào một ý chính.'},
{q:'Khi sửa bài, nên kiểm tra:',options:['Chỉ độ dài','Nội dung, chính tả, từ ngữ, câu và liên kết','Chỉ chữ đẹp','Chỉ tiêu đề'],a:'Nội dung, chính tả, từ ngữ, câu và liên kết',e:'Sửa bài toàn diện giúp văn bản chính xác và mạch lạc.'},
{q:'Để tránh bài văn sáo rỗng, em nên:',options:['Dùng thật nhiều tính từ','Chọn chi tiết thật và gắn với trải nghiệm/cảm xúc','Chép văn mẫu','Viết câu thật dài'],a:'Chọn chi tiết thật và gắn với trải nghiệm/cảm xúc',e:'Chi tiết cụ thể và cảm xúc riêng tạo dấu ấn cá nhân.'},
],
speaking:[
{q:'Khi nói trước lớp, em nên:',options:['Nói quá nhỏ','Nói rõ, đủ nghe và nhìn người nghe','Đọc thật nhanh','Không cần chuẩn bị'],a:'Nói rõ, đủ nghe và nhìn người nghe',e:'Giọng nói, tốc độ và giao tiếp mắt giúp bài trình bày hiệu quả.'},
{q:'Khi lắng nghe bạn, cách phù hợp là:',options:['Ngắt lời liên tục','Chú ý và ghi lại ý chính','Nói chuyện riêng','Quay đi'],a:'Chú ý và ghi lại ý chính',e:'Lắng nghe tích cực giúp hiểu và phản hồi đúng.'},
{q:'Một ý kiến thuyết phục nên có:',options:['Lí do và dẫn chứng','Chỉ cảm xúc','Một từ','Thông tin bịa đặt'],a:'Lí do và dẫn chứng',e:'Lí do và dẫn chứng làm ý kiến có cơ sở.'},
{q:'Khi không đồng ý với bạn, nên:',options:['Chế giễu','Nêu ý kiến lịch sự và giải thích lí do','Quát bạn','Bỏ đi'],a:'Nêu ý kiến lịch sự và giải thích lí do',e:'Phản biện lịch sự giúp trao đổi hiệu quả.'},
{q:'Kể lại một câu chuyện nên chú ý:',options:['Nhân vật, sự việc và trình tự','Chỉ tên nhân vật','Không cần mở đầu','Không cần kết thúc'],a:'Nhân vật, sự việc và trình tự',e:'Các yếu tố giúp câu chuyện dễ theo dõi.'},
{q:'Khi trình bày nội dung dài, em nên:',options:['Nói một mạch không ngắt','Chia ý thành từng phần','Chỉ nói ví dụ','Bỏ phần kết'],a:'Chia ý thành từng phần',e:'Chia ý giúp người nghe theo dõi dễ hơn.'},
{q:'Ngôn ngữ phù hợp với bạn bè là:',options:['Lịch sự, gần gũi, dễ hiểu','Cố dùng từ khó','Cộc lốc','Khó hiểu'],a:'Lịch sự, gần gũi, dễ hiểu',e:'Ngôn ngữ cần phù hợp người nghe và hoàn cảnh.'},
{q:'Khi nghe một bài nói, câu hỏi tốt thường:',options:['Bám nội dung và cần suy nghĩ','Không liên quan','Chỉ hỏi tên người nói','Lặp y nguyên câu đầu'],a:'Bám nội dung và cần suy nghĩ',e:'Câu hỏi tốt giúp làm rõ hoặc mở rộng nội dung.'},
{q:'Một phần kết thúc bài nói nên:',options:['Dừng giữa chừng','Khái quát và gửi lời cảm ơn/ý kiến cuối','Đổi chủ đề','Xin lỗi vì nói dài'],a:'Khái quát và gửi lời cảm ơn/ý kiến cuối',e:'Kết thúc rõ ràng giúp bài nói trọn vẹn.'},
{q:'Khi dùng tranh/ảnh hỗ trợ trình bày, em nên:',options:['Cho ảnh thay toàn bộ lời nói','Giải thích ảnh liên quan nội dung','Cho thật nhiều ảnh','Không nhìn ảnh'],a:'Giải thích ảnh liên quan nội dung',e:'Phương tiện trực quan cần hỗ trợ thông điệp chứ không thay lời nói.'},
]
};

const themes = [
['ch_van_1','Chủ điểm 1: Thế giới tuổi thơ','Tuổi thơ và những điều thân thuộc',1 as const,'🌈','from-emerald-500 to-cyan-600','reading'],
['ch_van_2','Chủ điểm 2: Thiên nhiên kì thú','Khám phá vẻ đẹp và điều kì diệu của thiên nhiên',1 as const,'🌿','from-lime-500 to-green-600','reading'],
['ch_van_3','Chủ điểm 3: Trên con đường học tập','Học tập, khám phá và trưởng thành',1 as const,'📚','from-blue-500 to-indigo-600','language'],
['ch_van_4','Chủ điểm 4: Nghệ thuật muôn màu','Cảm nhận và thể hiện nghệ thuật',1 as const,'🎨','from-fuchsia-500 to-purple-600','writing'],
['ch_van_5','Chủ điểm 5: Vẻ đẹp cuộc sống','Những giá trị đẹp trong đời sống',2 as const,'🌟','from-amber-500 to-orange-600','reading'],
['ch_van_6','Chủ điểm 6: Hương sắc trăm miền','Văn hóa, vùng miền và vẻ đẹp Việt Nam',2 as const,'🪷','from-teal-500 to-emerald-600','speaking'],
['ch_van_7','Chủ điểm 7: Tiếp bước cha ông','Lịch sử, truyền thống và những tấm gương',2 as const,'🛡️','from-red-500 to-rose-600','reading'],
['ch_van_8','Chủ điểm 8: Thế giới của chúng ta','Trách nhiệm với cộng đồng và tương lai',2 as const,'🌍','from-sky-500 to-blue-600','writing'],
] as const;

export const vietnameseChapters: Chapter[] = themes.map(([id,title,vn,semester,icon,color,base],idx)=>{
 const modes=['reading','language','writing','speaking'];
 const lessons=modes.map((mode,i)=>{
   const q=buildQuestionSet(`${id}_l${i+1}`,title,banks[mode],10);
   const names:Record<string,string>={reading:'Đọc và khám phá văn bản',language:'Luyện từ và câu – dùng tiếng Việt chính xác',writing:'Viết – tạo lập văn bản theo chủ đề',speaking:'Nói và nghe – trình bày, trao đổi và lắng nghe'};
   return makeLesson(`${id}_l${i+1}`,id,names[mode],`Rèn ${mode} qua chủ điểm ${idx+1}`,i+1,['📖','🔤','✍️','🎙️'][i],names[mode],[`Liên hệ kiến thức với chủ điểm: ${title}.`,`Biết đọc/viết/nói/nghe có mục đích.`,`Biết dùng dẫn chứng và diễn đạt rõ ràng.`],q,'Đọc kĩ đề – xác định yêu cầu – trả lời có căn cứ – tự kiểm tra câu chữ.');
 });
 const all=lessons.flatMap(l=>l.questions);
 return {subjectId:'vietnamese' as const,id,title,vietnameseTitle:vn,description:`${title}: ${vn}. Cấu trúc app giữ đủ bốn mạch học tập Đọc, Luyện từ và câu, Viết, Nói và nghe.`,semester,color,bgGradient:`bg-gradient-to-r ${color}`,icon,boss:{id:`boss_${id}`,name:`Thủ lĩnh ${vn.split(' ')[0]} ${idx+1}`,avatar:['🧚','🌳','📚','🎭','🌟','🪷','🛡️','🌍'][idx],title:`Thủ lĩnh ${title}`,maxHp:360,story:`Hãy kết hợp đọc, dùng tiếng Việt, viết và giao tiếp để vượt qua ${title.toLowerCase()}.`,questions:makeBossQuestions(`boss_${id}`,title,all,10),rewardBadgeId:`badge_boss_${id}`},lessons};
});
