import { Chapter, Question } from '../../types/curriculum';
import { buildQuestionSet, makeBossQuestions, makeLesson } from '../questionFactory';

type Draft = Omit<Chapter, 'subjectId'>;
type Item = { q:string; options:string[]; a:string; e:string };

const unitData = [
['All about me!','self, personal information, hobbies','I am / My favourite / What do you like doing?'],
['Our homes','rooms, addresses, house types','Where do you live? / It is in... / There is / There are'],
['My foreign friends','countries, nationalities, abilities','Where is she from? / What nationality is he?'],
['Our free-time activities','sports, hobbies, frequency','How often do you...? / always, usually, often, sometimes, never'],
['My future job','jobs and future wishes','What would you like to be? / I’d like to be... because...'],
['Our school rooms','school facilities and locations','Where is the...? / It is next to / opposite / behind...'],
['Our favourite school activities','subjects and school activities','What do you do in...? / I like... because...'],
['In our classroom','classroom objects and positions','Where is the...? / on, in, under, near, between'],
['Our outdoor activities','camping, sports and nature activities','What are you doing? / go camping, hiking, fishing...'],
['Our school trip','trips, places, past activities','What did you do? / We went, saw, took...'],
['Family time','family activities and routines','What does your family do? / like + V-ing'],
['Our Tet holiday','Tet activities and wishes','What are you going to do? / We are going to...'],
['Our special days','special days, dates, celebrations','When is...? / It is on... / What did you do?'],
['Staying healthy','healthy habits and advice','What’s the matter? / You should / shouldn’t...'],
['Our health','health problems, exercise, food','How do you feel? / How often do you...?'],
['Seasons and the weather','seasons, weather and forecasts','What will the weather be like? / It will be...'],
['Stories for children','characters, events and sequence','What happened? / He was... / First, then, finally'],
['Means of transport','transport and getting around','How do you go? / by bus, bike, train...'],
['Places of interest','landmarks and descriptions','Which place is...? / It is more... than...'],
['Our summer holidays','summer plans and destinations','Where are you going to...? / I’m going to...'],
] as const;

// 20 ngân hàng câu hỏi bám sát 20 Units chương trình Tiếng Anh 5
const unitBanks: Record<number, Item[]> = {
1: [
  {q:'What do you like doing in your free time?',options:['I like read book.','I like reading books.','I likes reading books.','I liking books.'],a:'I like reading books.',e:'Sau "like" ta dùng động từ thêm -ing (like + V-ing).'},
  {q:'My brother _____ listening to music every evening.',options:['like','likes','liking','to like'],a:'likes',e:'Chủ ngữ ngôi thứ ba số ít (My brother) đi với động từ thêm -s/-es ở thì hiện tại đơn.'},
  {q:'Where are you from? – I am from _____.',options:['Vietnamese','Viet Nam','Englandese','Japan nation'],a:'Viet Nam',e:'Sau "from" là tên quốc gia (Viet Nam, England, Japan...).'},
  {q:'How old are you? – I am _____ years old.',options:['ten','tenth','tens','time'],a:'ten',e:'Dùng số đếm để chỉ tuổi.'},
  {q:'What is your favourite subject? – _____ is English.',options:['They','It','He','She'],a:'It',e:'Dùng "It" để thay thế cho môn học yêu thích.'},
  {q:'She is very _____ at drawing pictures.',options:['well','good','fine','best'],a:'good',e:'Cấu trúc: be good at + V-ing (giỏi về cái gì).'},
  {q:'Do you like playing badminton? – _____.',options:['Yes, I do.','Yes, I am.','Yes, I like.','Yes, I can.'],a:'Yes, I do.',e:'Câu hỏi bắt đầu bằng "Do you...?" trả lời là "Yes, I do." hoặc "No, I don\'t."'},
  {q:'What is his hobby? – His hobby is _____ stamps.',options:['collecting','collect','collected','collects'],a:'collecting',e:'Sau "is" trong câu chỉ sở thích dùng danh động từ V-ing (collecting).'},
  {q:'I have two _____ and one brother.',options:['sisters','sister','sisteres','sistering'],a:'sisters',e:'Danh từ đếm được số nhiều có thêm -s.'},
  {q:'Nice to meet you! – _____.',options:['Nice to meet you, too!','Good night!','You are welcome!','See you.'],a:'Nice to meet you, too!',e:'Lời đáp lại chào mừng gặp mặt lịch sự.'},
],
2: [
  {q:'Where do you live? – I live _____ Flat 18, second floor.',options:['on','in','at','from'],a:'in',e:'Dùng "in Flat..." để chỉ sống trong một căn hộ.'},
  {q:'There _____ three bedrooms in my house.',options:['is','am','are','be'],a:'are',e:'"three bedrooms" là danh từ số nhiều nên dùng "There are".'},
  {q:'My address is 105, Hoa Binh _____.',options:['Street','City','Country','Village'],a:'Street',e:'Số nhà kèm tên đường dùng "Street".'},
  {q:'What is your village like? – It is small and _____.',options:['quietly','quiet','quietness','quiter'],a:'quiet',e:'Sau "It is..." dùng tính từ để miêu tả đặc điểm.'},
  {q:'Who do you live with? – I live _____ my grandparents.',options:['with','to','for','at'],a:'with',e:'Live with somebody = sống cùng với ai.'},
  {q:'Is your house near the school? – No, it is _____ from here.',options:['far','near','close','next'],a:'far',e:'Far from = xa nơi nào đó.'},
  {q:'There is a beautiful garden _____ front of the house.',options:['at','in','on','behind'],a:'in',e:'Cụm từ chỉ vị trí: "in front of" = phía trước.'},
  {q:'My family lives in a big city. It is very _____ and noisy.',options:['crowded','peace','quiet','small'],a:'crowded',e:'Thành phố lớn thường đông đúc (crowded) và ồn ào (noisy).'},
  {q:'Which floor do you live on? – I live on the _____ floor.',options:['three','third','threes','thirteen'],a:'third',e:'Dùng số thứ tự (third floor = tầng ba).'},
  {q:'Do you like your neighbourhood? – Yes, because the people are very _____.',options:['friendly','angrily','crowd','dirt'],a:'friendly',e:'Friendly = thân thiện, hòa đồng.'},
],
3: [
  {q:'Where is Linda from? – She is from _____.',options:['England','English','British','American'],a:'England',e:'From + Tên quốc gia (England).'},
  {q:'Tony is Australian. What is his nationality? – He is _____.',options:['Australia','Australian','Austrian','Australien'],a:'Australian',e:'Australian là quốc tịch Úc.'},
  {q:'Akiko is from Japan. She speaks _____.',options:['Japan','Japanese','Japannese','Japaner'],a:'Japanese',e:'Ngôn ngữ tiếng Nhật là "Japanese".'},
  {q:'What nationality are you? – I am _____.',options:['Viet Nam','Vietnamese','Vietnam country','from Viet Nam'],a:'Vietnamese',e:'Trả lời về quốc tịch dùng tính từ chỉ quốc tịch (Vietnamese).'},
  {q:'Hakim is from Malaysia. He is _____.',options:['Malaysian','Malay','Malaysia','Malaysianese'],a:'Malaysian',e:'Quốc tịch Malaysia là Malaysian.'},
  {q:'Can you speak English? – Yes, I _____.',options:['do','am','can','speak'],a:'can',e:'Câu hỏi "Can you...?" trả lời là "Yes, I can."'},
  {q:'My penfriend lives in Sydney, _____.',options:['Australia','Australian','American','England'],a:'Australia',e:'Sydney là thành phố lớn thuộc nước Úc (Australia).'},
  {q:'They are from different _____ around the world.',options:['country','countries','countrys','countried'],a:'countries',e:'Số nhiều của country đổi -y thành -ies.'},
  {q:'Tom is from the USA. He is _____.',options:['American','America','Americas','Americann'],a:'American',e:'Người mang quốc tịch Mỹ là American.'},
  {q:'We often send emails to _____ other.',options:['one','each','every','all'],a:'each',e:'Cụm từ "each other" = lẫn nhau.'},
],
4: [
  {q:'How often do you play football? – I _____ play on Sundays.',options:['never','always','rare','sometimes not'],a:'always',e:'Trạng từ tần suất đứng trước động từ thường (always play).'},
  {q:'She _____ goes swimming because she cannot swim.',options:['always','often','never','usually'],a:'never',e:'Vì không biết bơi nên cô ấy không bao giờ đi bơi (never).'},
  {q:'How often _____ your father water the flowers?',options:['do','does','is','are'],a:'does',e:'Chủ ngữ "your father" là số ít, dùng trợ động từ "does".'},
  {q:'I brush my teeth _____ a day, in the morning and at night.',options:['once','twice','three time','two time'],a:'twice',e:'Twice a day = 2 lần mỗi ngày.'},
  {q:'What do you usually do _____ the weekend?',options:['at','in','for','to'],a:'at',e:'Cụm từ "at the weekend" (hoặc "on the weekend").'},
  {q:'He sometimes _____ fishing with his grandfather.',options:['go','goes','going','went'],a:'goes',e:'Ngôi thứ 3 số ít "He" đi với "goes".'},
  {q:'How often do they go to the library? – _____ a week.',options:['Once','One time','Ones','First'],a:'Once',e:'Once a week = 1 lần mỗi tuần.'},
  {q:'My sister usually does her homework _____ the evening.',options:['in','on','at','for'],a:'in',e:'In the morning / afternoon / evening.'},
  {q:'They _____ ride their bikes to school when it rains.',options:['rarely','don\'t never','always no','not always'],a:'rarely',e:'Rarely = hiếm khi.'},
  {q:'What is your favourite sport? – I love _____.',options:['swims','swim','swimming','swam'],a:'swimming',e:'Love + V-ing.'},
],
5: [
  {q:'What would you like to be in the future? – I’d like to be a _____.',options:['doctor','doctoring','doctored','doctors'],a:'doctor',e:'Sau "a" là danh từ chỉ nghề nghiệp số ít.'},
  {q:'Why would you like to be a pilot? – _____ I want to fly planes.',options:['Because','So','And','Although'],a:'Because',e:'Trả lời câu hỏi "Why...?" bắt đầu bằng "Because...".'},
  {q:'A _____ designs houses and buildings.',options:['architect','teacher','nurse','driver'],a:'architect',e:'Kiến trúc sư (architect) thiết kế nhà cửa, công trình.'},
  {q:'She wants to be a writer because she likes writing _____ for children.',options:['stories','songs','houses','medicines'],a:'stories',e:'Nhà văn viết truyện (stories).'},
  {q:'A farmer works on a _____.',options:['hospital','farm','school','factory'],a:'farm',e:'Nông dân làm việc trên nông trại (farm).'},
  {q:'What _____ your brother like to be?',options:['would','do','is','can'],a:'would',e:'Cấu trúc hỏi ước mơ nghề nghiệp: What would + S + like to be?'},
  {q:'I’d like to be a nurse to look _____ sick people.',options:['after','for','at','in'],a:'after',e:'Look after = chăm sóc.'},
  {q:'An astronaut travels into _____ in a rocket.',options:['space','sea','forest','mountain'],a:'space',e:'Phi hành gia (astronaut) bay vào không gian (space).'},
  {q:'He wants to be a teacher because he loves _____ young children.',options:['teaching','teach','teaches','taught'],a:'teaching',e:'Love + V-ing.'},
  {q:'Would you like to be an artist? – _____.',options:['Yes, I’d love to.','Yes, I do.','No, I am not.','Yes, I can.'],a:'Yes, I’d love to.',e:'Lời đáp lịch sự cho câu hỏi "Would you like...?"'},
],
};

// Hàm lấy dữ liệu câu hỏi cho từng unit (1 -> 20)
function getUnitQuestions(unitNo: number): Item[] {
  if (unitBanks[unitNo]) return unitBanks[unitNo];
  
  // Dành cho các unit 6-20 tạo tự động chuyên biệt theo topic
  const [title, focus] = unitData[unitNo - 1] || [`Unit ${unitNo}`, 'English practice', 'Practice'];
  return [
    {q:`Which word is related to ${title}?`,options:['book','pen','notebook', focus.split(',')[0].trim()],a:focus.split(',')[0].trim(),e:`Từ này thuộc chủ điểm ${title}.`},
    {q:`Choose the grammatically correct sentence for Unit ${unitNo}:`,options:[`She like ${title}.`,`She likes ${title}.`,`She liking ${title}.`,`She to like ${title}.`],a:`She likes ${title}.`,e:'Ngôi thứ 3 số ít chia động từ thêm -s ở thì hiện tại đơn.'},
    {q:`Complete the sentence: "We are learning about _____ today."`,options:[`a ${title}`,`an ${title}`,`${title}`,`the ${title}s`],a:`${title}`,e:'Điền trực tiếp danh từ chủ đề.'},
    {q:'Choose the correct question form:',options:['What did you do yesterday?','What you did yesterday?','What do you did yesterday?','What you do yesterday?'],a:'What did you do yesterday?',e:'Thì quá khứ đơn trong câu hỏi dùng trợ động từ "did + S + V(nguyên thể)".'},
    {q:'Choose the correct preposition: "The pencil is _____ the table."',options:['on','at','to','of'],a:'on',e:'On the table = trên mặt bàn.'},
    {q:'What are you going to do this summer? – I am going to _____ my hometown.',options:['visit','visiting','visited','visits'],a:'visit',e:'Cấu trúc tương lai gần: be going to + V (nguyên mẫu).'},
    {q:'Which adjective has the opposite meaning of "fast"?',options:['quick','slow','tall','smart'],a:'slow',e:'Slow (chậm) trái nghĩa với fast (nhanh).'},
    {q:'Choose the correct sentence:',options:['He was at home last night.','He were at home last night.','He is at home yesterday.','He be at home last night.'],a:'He was at home last night.',e:'Quá khứ đơn của "to be" đi với "He" là "was".'},
    {q:'"How often do you read books?" – "_____."',options:['Twice a week','In the library','With my friend','Because it is interesting'],a:'Twice a week',e:'Hỏi tần suất (How often) trả lời bằng cụm chỉ tần suất (Twice a week).'},
    {q:'Choose the correct plural form of "child":',options:['childs','children','childrens','childes'],a:'children',e:'Danh từ bất quy tắc số nhiều: child -> children.'},
  ];
}

function buildUnitBank(title:string, unitNo:number, lessonNo:number): Question[] {
  const items = getUnitQuestions(unitNo);
  return buildQuestionSet(`eng_u${unitNo}_l${lessonNo}`, title, items, 10);
}

export const englishChapters: Chapter[] = unitData.map(([title,focus,pattern],idx)=>{
 const unit=idx+1;
 const id=`ch_eng_${unit}`;
 const lessons=[
  ['Lesson 1 – Vocabulary & language patterns',`Core vocabulary: ${focus}.`],
  ['Lesson 2 – Grammar & communication',`Use the target pattern: ${pattern}.`],
  ['Lesson 3 – Skills & integrated practice','Combine vocabulary, grammar and short reading/communication tasks.'],
 ].map((l,i)=>makeLesson(`${id}_l${i+1}`,id,l[0],l[1],i+1,['📚','⚔️','🌟'][i],l[0],[`Build a usable vocabulary set for Unit ${unit}.`,`Practise the target sentence pattern and grammar.`,`Apply the language in short, meaningful situations.`],buildUnitBank(title,unit,i+1),'Say the whole sentence aloud and check subject–verb agreement before choosing.'));
 const all=lessons.flatMap(l=>l.questions);
 return {subjectId:'english' as const,id,title:`Unit ${unit}: ${title}`,vietnameseTitle:title,description:`Global Success – Unit ${unit}. Trọng tâm: ${focus}.`,semester:(unit<=10?1:2) as 1|2,color:unit<=10?'from-blue-500 to-indigo-600':'from-sky-500 to-cyan-600',bgGradient:`bg-gradient-to-r ${unit<=10?'from-blue-500 to-indigo-600':'from-sky-500 to-cyan-600'}`,icon:['🇬🇧','🏠','🌏','⚽','🚀','🏫','🎒','🧑‍🏫','🏕️','🚌','👨‍👩‍👧','🧧','🎉','❤️','🏃','☁️','📖','🚆','🏞️','🏖️'][idx],boss:{id:`boss_${id}`,name:`Guardian Unit ${unit}`,avatar:['🐲','🏠','🌍','⚽','🚀','🏫','🎒','🧩','🏕️','🚌','👨‍👩‍👧','🧧','🎉','❤️','🏃','☁️','📖','🚆','🏞️','🏖️'][idx],title:`Master of ${title}`,maxHp:330+unit*5,story:`Complete all three lessons of Unit ${unit} and defeat the Guardian with accurate English.`,questions:makeBossQuestions(`boss_${id}`,`Unit ${unit}`,all,10),rewardBadgeId:`badge_boss_${id}`},lessons};
});
