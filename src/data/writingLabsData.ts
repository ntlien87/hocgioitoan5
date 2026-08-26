export interface SentenceUpgradeLevel {
  level: number;
  badge: string;
  badgeColor: string;
  sentence: string;
  technique: string;
  bonusXp: number;
}

export interface SentenceUpgradeItem {
  id: string;
  topic: string;
  icon: string;
  baseSentence: string;
  levels: SentenceUpgradeLevel[];
}

export const sentenceUpgradeData: SentenceUpgradeItem[] = [
  {
    id: 'up_1',
    topic: 'Cảnh Bình Minh',
    icon: '🌅',
    baseSentence: 'Mặt trời mọc.',
    levels: [
      {
        level: 1,
        badge: 'Cấp 1: Thêm Màu Sắc & Từ Láy',
        badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
        sentence: 'Mặt trời đỏ ối từ từ nhô lên từ phía chân trời xa.',
        technique: 'Thêm từ láy gợi màu sắc: "đỏ ối", từ láy gợi chuyển động: "từ từ".',
        bonusXp: 10
      },
      {
        level: 2,
        badge: 'Cấp 2: Thêm Biện Pháp So Sánh',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
        sentence: 'Mặt trời đỏ ối như một quả cầu lửa khổng lồ từ từ nhô lên khỏi làn nước biếc mênh mông.',
        technique: 'Thêm so sánh độc đáo: "như một quả cầu lửa khổng lồ", không gian: "làn nước biếc".',
        bonusXp: 25
      },
      {
        level: 3,
        badge: 'Cấp 3: Thần Bút Đa Giác Quan & Cảm Xúc ⭐⭐⭐',
        badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-400',
        sentence: 'Từ phía chân trời xa, mặt trời đỏ ối như một quả cầu lửa khổng lồ từ từ nhô lên khỏi làn nước biếc, dát muôn ngàn vệt sáng vàng óng ánh lên mặt biển mênh mông, đánh thức đất trời trong khúc ca sớm mai rộn rã.',
        technique: 'Kết hợp: Nhân hóa "đánh thức đất trời", so sánh dát vàng, âm thanh "khúc ca rộn rã".',
        bonusXp: 50
      }
    ]
  },
  {
    id: 'up_2',
    topic: 'Cơn Mưa Mùa Hạ',
    icon: '⛈️',
    baseSentence: 'Trời mưa rất to.',
    levels: [
      {
        level: 1,
        badge: 'Cấp 1: Thêm Âm Thanh Tượng Thanh',
        badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
        sentence: 'Mưa đổ xuống ầm ầm, tiếng sấm nổ đùng đoàng trên mái nhà.',
        technique: 'Thêm từ tượng thanh: "ầm ầm", "đùng đoàng".',
        bonusXp: 10
      },
      {
        level: 2,
        badge: 'Cấp 2: Thêm Nghệ Thuật Nhân Hóa',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
        sentence: 'Từng hạt mưa trắng xóa hối hả nhảy múa rào rào trên mái tôn như một dàn hợp xướng náo nhiệt.',
        technique: 'Nhân hóa hạt mưa "hối hả nhảy múa", so sánh "như một dàn hợp xướng".',
        bonusXp: 25
      },
      {
        level: 3,
        badge: 'Cấp 3: Thần Bút Đa Giác Quan & Cảm Xúc ⭐⭐⭐',
        badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-400',
        sentence: 'Mưa rào xối xả trút nước xuống như ai dội gáo nước khổng lồ từ trời xanh. Những hàng cây trên phố hả hê giang rộng tán lá đón lấy dòng nước mát lành sau bao ngày nắng hạ gay gắt.',
        technique: 'Tả chuyển động dồn dập, sự tương phản "hả hê tắm mát" sau những ngày nắng hạn.',
        bonusXp: 50
      }
    ]
  },
  {
    id: 'up_3',
    topic: 'Tả Người Mẹ Nấu Cơm',
    icon: '🍳',
    baseSentence: 'Mẹ em đang nấu cơm ở dưới bếp.',
    levels: [
      {
        level: 1,
        badge: 'Cấp 1: Thêm Cử Chỉ & Hành Động',
        badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
        sentence: 'Dưới ánh đèn bếp ấm áp, đôi bàn tay mẹ thoăn thoắt thái rau và đảo đều chảo thức ăn.',
        technique: 'Thêm không gian ấm áp, từ láy chỉ cử chỉ: "thoăn thoắt".',
        bonusXp: 10
      },
      {
        level: 2,
        badge: 'Cấp 2: Thêm Chi Tiết Ngoại Hình & Cảm Xúc',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
        sentence: 'Từng hạt mồ hôi lấm tấm lăn trên vầng trán mẹ, nhưng khi nếm thử món canh vừa miệng, mẹ khẽ mỉm cười đầy dịu dàng.',
        technique: 'Chi tiết "mồ hôi lấm tấm", nụ cười dịu dàng thể hiện sự tần tảo.',
        bonusXp: 25
      },
      {
        level: 3,
        badge: 'Cấp 3: Thần Bút Đa Giác Quan & Tình Cảm ⭐⭐⭐',
        badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-400',
        sentence: 'Dưới ánh đèn bếp vàng ấm cúng, đôi bàn tay mẹ thoăn thoắt nêm nếm từng món ăn. Mùi thơm ngào ngạt của bữa cơm chiều hòa cùng ánh mắt trìu mến của mẹ khiến em thấy gia đình mình sao mà bình yên và hạnh phúc đến thế.',
        technique: 'Hòa quyện khứu giác (mùi thơm), thị giác (ánh đèn vàng), cảm xúc (bình yên hạnh phúc).',
        bonusXp: 50
      }
    ]
  },
  {
    id: 'up_4',
    topic: 'Cánh Đồng Lúa Quê Em',
    icon: '🌾',
    baseSentence: 'Cánh đồng lúa chín vàng.',
    levels: [
      {
        level: 1,
        badge: 'Cấp 1: Thêm Không Gian & Từ Láy',
        badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
        sentence: 'Cánh đồng lúa chín vàng ruộm trải dài bát ngát ngút tầm mắt.',
        technique: 'Thêm từ láy gợi màu sắc "vàng ruộm", không gian "bát ngát ngút tầm mắt".',
        bonusXp: 10
      },
      {
        level: 2,
        badge: 'Cấp 2: Thêm Biện Pháp Nhân Hóa & So Sánh',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
        sentence: 'Mỗi khi cơn gió thu nhẹ lướt qua, cả biển lúa lại dập dờn gợn sóng như một tấm thảm nhung vàng khổng lồ.',
        technique: 'So sánh "tấm thảm nhung vàng khổng lồ", nhân hóa "biển lúa dập dờn gợn sóng".',
        bonusXp: 25
      },
      {
        level: 3,
        badge: 'Cấp 3: Thần Bút Đa Giác Quan & Hồn Quê ⭐⭐⭐',
        badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-400',
        sentence: 'Cánh đồng lúa chín vàng ươm dập dờn theo làn gió thu mát rượi, thoang thoảng hương lúa mới thơm ngòn ngọt. Xa xa, đàn cò trắng chao liệng trên nền trời trong biếc, vẽ nên một bức tranh đồng quê thanh bình tuyệt mỹ.',
        technique: 'Đủ 5 giác quan: Màu vàng lúa, gió mát rượi (Xúc giác), hương lúa thơm (Khứu giác), đàn cò trắng chao liệng (Thị giác).',
        bonusXp: 50
      }
    ]
  }
];

export interface SensoryPaletteItem {
  id: string;
  title: string;
  icon: string;
  sight: string[];
  sound: string[];
  smell: string[];
  touch: string[];
  emotion: string[];
  sampleParagraph: string;
}

export const sensoryPaletteData: SensoryPaletteItem[] = [
  {
    id: 'sen_1',
    title: 'Hoàng Hôn Trên Biển',
    icon: '🌇',
    sight: ['Mặt trời đỏ ối', 'Sóng biển dát bạc', 'Ráng mây ngũ sắc tím thẫm', 'Cánh buồm xa xa'],
    sound: ['Tiếng sóng vỗ ì oạp', 'Gió biển rì rào', 'Tiếng chim hải âu gọi bầy'],
    smell: ['Vị mặn mòi của gió biển', 'Mùi tanh nồng của rong rêu', 'Hơi sương ẩm ướt'],
    touch: ['Gió biển mát rượi', 'Hạt cát mịn màng mơn man bàn chân', 'Nước biển lành lạnh'],
    emotion: ['Bình yên đến nao lòng', 'Thư thái tâm hồn', 'Trầm trồ trước sự kỳ vĩ của thiên nhiên'],
    sampleParagraph: 'Chiều buông, mặt trời như quả cầu lửa đỏ ối từ từ lặn xuống biển sâu, nhuộm ráng mây thành màu tím biếc. Từng con sóng rì rào vỗ vào bờ cát mịn màng mơn man bàn chân, mang theo vị mặn mòi nồng nàn của biển cả khiến lòng người cảm thấy bình yên đến lạ kỳ.'
  },
  {
    id: 'sen_2',
    title: 'Đêm Trăng Rằm Làng Quê',
    icon: '🌕',
    sight: ['Trăng tròn vành vạnh như đĩa bạc', 'Ánh trăng vàng sóng sánh dát trên mái ngói', 'Bóng tre nghiêng mình'],
    sound: ['Tiếng côn trùng rả rích', 'Tiếng lá tre xào xạc', 'Tiếng gió đêm thì thầm'],
    smell: ['Hương hoa cau thoang thoảng', 'Mùi rơm rạ khô nồng nàn', 'Hơi sương đêm ngai ngái'],
    touch: ['Gió đêm se se lạnh', 'Sương đọng mát lạnh trên ngọn cỏ'],
    emotion: ['Bồi hồi nhớ kỷ niệm', 'Yêu thương gắn bó với cội nguồn quê hương'],
    sampleParagraph: 'Vầng trăng tròn vành vạnh như chiếc đĩa bạc lơ lửng giữa trời xanh, rót ánh trăng vàng sóng sánh xuống khắp ngõ xóm. Gió đêm nhè nhẹ thổi, mang theo hương hoa cau thoảng thơm ngào ngạt hòa cùng tiếng côn trùng rả rích, tạo nên khúc nhạc đêm êm đềm ru xóm làng vào giấc ngủ say.'
  },
  {
    id: 'sen_3',
    title: 'Nụ Cười Của Mẹ',
    icon: '💖',
    sight: ['Đôi mắt đen láy lấp lánh yêu thương', 'Vết chân chim nơi khóe mắt', 'Nụ cười rạng rỡ như nắng mai'],
    sound: ['Giọng nói trầm ấm, dịu dàng', 'Tiếng cười giòn tan xua tan mệt mỏi'],
    smell: ['Mùi hương bồ kết trên mái tóc mẹ', 'Mùi thơm quen thuộc của tình mẫu tử'],
    touch: ['Bàn tay ấm áp chai sần xoa đầu em', 'Cái ôm dịu êm chở che'],
    emotion: ['Yêu thương vô bờ bến', 'Biết ơn sâu sắc sự hy sinh của mẹ', 'Thấy mình luôn an toàn trong vòng tay mẹ'],
    sampleParagraph: 'Mỗi khi nhìn em đạt điểm tốt, đôi mắt mẹ lại lấp lánh niềm vui khôn tả. Nụ cười rạng rỡ nở trên đôi môi mẹ như đóa hoa rạng ngời, xua tan đi bao vết chân chim nhọc nhằn nơi khóe mắt. Được mẹ ôm vào lòng và hít hà mùi hương bồ kết thơm dịu, em cảm thấy mình là đứa trẻ hạnh phúc nhất trần đời.'
  }
];

export interface IndirectIntroTemplate {
  id: string;
  formulaName: string;
  formulaIcon: string;
  description: string;
  exampleTopic: string;
  templateText: string;
  explanation: string;
}

export const indirectIntroTemplates: IndirectIntroTemplate[] = [
  {
    id: 'intro_poem',
    formulaName: 'Công Thức 1: Mở Bài Bằng Thơ Ca',
    formulaIcon: '📜',
    description: 'Dẫn một bài thơ / câu ca dao liên quan để tạo ấn tượng nghệ thuật sâu sắc.',
    exampleTopic: 'Đề bài: Tả người mẹ thân yêu của em',
    templateText: `"Con dù lớn vẫn là con của mẹ / Đi hết đời, lòng mẹ vẫn theo con." Mỗi lần nghe những vần thơ ngọt ngào ấy, lòng em lại dâng trào niềm xúc động thiêng liêng khi nghĩ về mẹ – người phụ nữ tuyệt vời nhất trong cuộc đời em.`,
    explanation: 'Dùng câu thơ làm "bàn đạp" tạo cảm xúc lắng đọng ngay từ câu chữ đầu tiên.'
  },
  {
    id: 'intro_sound',
    formulaName: 'Công Thức 2: Mở Bài Bằng Âm Thanh Sống Động',
    formulaIcon: '🔔',
    description: 'Bắt đầu bằng một âm thanh độc đáo đánh thức thính giác người đọc.',
    exampleTopic: 'Đề bài: Tả cảnh trường em trước giờ vào lớp',
    templateText: `"Tùng! Tùng! Tùng!". Tiếng trống trường ngân vang giòn giã phá tan không gian yên ắng sớm mai, báo hiệu một ngày học mới đầy hứng khởi. Đó cũng là lúc ngôi trường thân yêu của em khoác lên mình vẻ rộn rã, tươi vui nhất.`,
    explanation: 'Tiếng trống trường vang lên tạo sự dồn dập, kéo người đọc bước ngay vào khung cảnh rộn ràng.'
  },
  {
    id: 'intro_memory',
    formulaName: 'Công Thức 3: Mở Bài Bằng Kỷ Niệm Tuổi Thơ',
    formulaIcon: '🧸',
    description: 'Khơi gợi một ký ức tuổi thơ khó phai gắn liền với đối tượng miêu tả.',
    exampleTopic: 'Đề bài: Tả cây phượng vĩ ở sân trường',
    templateText: `Tuổi học trò của em trôi qua êm đềm dưới mái trường tiểu học, nơi lưu giữ biết bao kỷ niệm vui buồn. Nhưng có lẽ, người bạn chứng kiến nhiều tiếng cười và cả những giọt nước mắt chia tay của chúng em nhất chính là cây phượng già sừng sững nơi góc sân trường.`,
    explanation: 'Gắn hình ảnh cây phượng với dòng hồi tưởng kỷ niệm giúp bài văn có hồn và cảm xúc sâu lắng.'
  },
  {
    id: 'intro_contrast',
    formulaName: 'Công Thức 4: Mở Bài Bằng Sự Đối Lập',
    formulaIcon: '⚖️',
    description: 'Đưa ra sự so sánh đối lập giữa hai không gian hoặc thời gian để làm nổi bật cảnh vật.',
    exampleTopic: 'Đề bài: Tả cảnh bình yên của làng quê',
    templateText: `Nếu như nơi phố thị luôn tấp nập tiếng còi xe và những ánh đèn neon rực rỡ, thì làng quê ngoại em lại mở ra một thế giới hoàn toàn khác – một thế giới của sự thanh bình, nơi có dòng sông êm đềm soi bóng rặng tre và những buổi chiều hoàng hôn đẹp như tranh vẽ.`,
    explanation: 'Sự đối lập giữa phố xá ồn ào và làng quê thanh bình làm nổi bật nét quyến rũ của cảnh thôn dã.'
  }
];
