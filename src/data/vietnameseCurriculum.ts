import { Chapter } from '../types/curriculum';

export const vietnameseChapters: Chapter[] = [
  {
    id: 'ch_van_1',
    subjectId: 'vietnamese',
    title: 'Chương 1',
    vietnameseTitle: 'Xứ Sở Thiên Nhiên (Văn Tả Cảnh)',
    description: 'Đánh thức 5 giác quan: Tả cảnh bình minh, hoàng hôn, cơn mưa rào, cánh đồng quê hương và đêm trăng huyền diệu.',
    semester: 1,
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    icon: '🌿',
    boss: {
      id: 'boss_van_1',
      name: 'Quái Vật Khô Khan',
      avatar: '🗿',
      title: 'Kẻ Nuốt Chửng Cảm Xúc',
      maxHp: 100,
      story: 'Quái Vật Khô Khan đang biến mọi cảnh đẹp thiên nhiên thành những câu văn cụt lủn không chút màu sắc! Hãy dùng những câu văn giàu hình ảnh và từ láy để đánh bại hắn!',
      rewardBadgeId: 'badge_van_nature_master',
      questions: [
        {
          id: 'b1_q1',
          question: 'Câu nào sau đây miêu tả cơn mưa mùa hạ sống động nhất (có âm thanh và chuyển động)?',
          options: [
            'Hôm nay trời có mưa rào rất to.',
            'Mưa đổ xuống ầm ầm, những hạt mưa nhảy múa rào rào trên mái tôn như một dàn hợp xướng.',
            'Trời mưa từ 3 giờ chiều đến 5 giờ chiều mới tạnh.',
            'Nước mưa chảy đầy trên đường phố.'
          ],
          correctAnswer: 'Mưa đổ xuống ầm ầm, những hạt mưa nhảy múa rào rào trên mái tôn như một dàn hợp xướng.',
          explanation: 'Câu này sử dụng từ tượng thanh (ầm ầm, rào rào), nhân hóa (hạt mưa nhảy múa) và so sánh (như một dàn hợp xướng) cực kỳ sinh động.'
        },
        {
          id: 'b1_q2',
          question: 'Hãy chọn từ láy phù hợp nhất để điền vào câu: "Mặt trời chiều tà từ từ lặn xuống biển, nhuộm cả bầu trời một màu đỏ..."',
          options: ['đỏ ửng', 'đỏ rực / đỏ ối', 'đỏ nhạt', 'đỏ đen'],
          correctAnswer: 'đỏ rực / đỏ ối',
          explanation: 'Từ "đỏ rực" hoặc "đỏ ối" gợi tả màu sắc chói lọi, đậm đà của hoàng hôn buông xuống.'
        },
        {
          id: 'b1_q3',
          question: 'Hình ảnh so sánh nào sau đây phù hợp nhất khi miêu tả dòng sông quê hương?',
          options: [
            'Dòng sông dài như một đoạn dây thừng.',
            'Dòng sông uốn lượn hiền hòa như một dải lụa mềm vắt ngang qua cánh đồng.',
            'Dòng sông có nhiều nước và cá bơi lội.',
            'Dòng sông nhìn giống như một cái mương lớn.'
          ],
          correctAnswer: 'Dòng sông uốn lượn hiền hòa như một dải lụa mềm vắt ngang qua cánh đồng.',
          explanation: 'So sánh "dải lụa mềm" gợi cảm giác mềm mại, thơ mộng và trữ tình của dòng sông.'
        },
        {
          id: 'b1_q4',
          question: 'Khi tả cảnh đêm trăng rằm, câu văn nào thể hiện tốt nghệ thuật "Tả tĩnh để gợi động"?',
          options: [
            'Đêm nay trăng rất sáng.',
            'Không gian tĩnh mịch, chỉ có tiếng gió khẽ thì thầm và ánh trăng vàng sóng sánh dát bạc mặt hồ.',
            'Mọi người trong xóm đã đi ngủ hết.',
            'Mặt trăng to và tròn xoe trên trời.'
          ],
          correctAnswer: 'Không gian tĩnh mịch, chỉ có tiếng gió khẽ thì thầm và ánh trăng vàng sóng sánh dát bạc mặt hồ.',
          explanation: 'Câu văn dùng hình ảnh nhân hóa "gió thì thầm", "sóng sánh dát bạc" làm cảnh đêm trăng trở nên lung linh huyền ảo.'
        }
      ]
    },
    lessons: [
      {
        id: 'van_c1_l1',
        chapterId: 'ch_van_1',
        title: 'Bí Kíp 5 Giác Quan',
        subtitle: 'Khai phá siêu giác quan khi làm văn miêu tả cảnh vật',
        levelNumber: 1,
        icon: '👁️',
        theory: {
          title: 'Công thức Thần Bút: Quan sát Đa Giác Quan',
          keyPoints: [
            'Thị giác (Mắt nhìn): Màu sắc, ánh sáng, hình khối, sự chuyển động.',
            'Thính giác (Tai nghe): Tiếng gió reo, chim hót, tiếng lá xào xạc, tiếng sấm ầm vang.',
            'Khứu giác & Vị giác (Mũi ngửi, Lưỡi nếm): Mùi rơm rạ nồng nàn, vị ngọt mát của sương sớm, mùi đất ẩm sau cơn mưa.',
            'Xúc giác (Da cảm nhận): Làn gió mát rượi, hơi lạnh buốt, giọt nắng ấm áp.',
            'Cảm xúc: Tâm trạng háo hức, bình yên hay bồi hồi trước cảnh vật.'
          ],
          formula: 'Câu miêu tả = Hình ảnh (Mắt) + Âm thanh (Tai) + Cảm giác (Da/Mũi) + Cảm xúc',
          sensoryGuide: {
            sight: ['vàng óng ả', 'xanh mướt mát', 'đỏ rực', 'lấp lánh như dát vàng'],
            sound: ['róc rách', 'vi vu', 'rào rào', 'xào xạc', 'líu lo'],
            smell: ['ngai ngái mùi đất', 'ngào ngạt hương hoa bưởi', 'nồng nàn rơm rạ'],
            touch: ['mát rượi', 'ấm áp', 'se se lạnh', 'mơn man làn da'],
            emotion: ['bình yên đến lạ', 'xao xuyến bồi hồi', 'trào dâng niềm tự hào']
          },
          examples: [
            {
              problem: 'Câu thô (Chỉ dùng mắt):',
              solution: 'Cánh đồng lúa chín vàng.',
              tag: 'Cấp 0 (Cụt lủn)'
            },
            {
              problem: 'Nâng cấp đa giác quan:',
              solution: 'Cánh đồng lúa chín vàng rực trải dài ngút tầm mắt (Mắt), hương lúa mới thơm ngào ngạt (Mũi), từng cơn gió mát rượi thổi qua (Da) làm sóng lúa rì rào như đang ca hát (Tai).',
              tag: 'Cấp Thần Bút ⭐⭐⭐'
            }
          ],
          memoryTip: 'Muốn cảnh vật sống dậy, hãy bật trọn vẹn 5 giác quan như bật camera chất lượng 4K!'
        },
        questions: [
          {
            id: 'v1_l1_q1',
            question: 'Giác quan nào được sử dụng trong câu: "Hương hoa ngâu thơm ngào ngạt lan tỏa khắp góc vườn"?',
            options: ['Thị giác (Mắt nhìn)', 'Khứu giác (Mũi ngửi)', 'Thính giác (Tai nghe)', 'Xúc giác (Chạm vào)'],
            correctAnswer: 'Khứu giác (Mũi ngửi)',
            explanation: '"Thơm ngào ngạt" là cảm nhận mùi hương thông qua khứu giác.'
          },
          {
            id: 'v1_l1_q2',
            question: 'Hãy ghép giác quan Thính giác vào câu "Khu rừng buổi sớm rất đẹp" để câu văn hấp dẫn hơn:',
            options: [
              'Khu rừng có diện tích khoảng 10 héc-ta.',
              'Khu rừng thức giấc trong tiếng chim hót líu lo, ríu rít như một bản hòa ca rộn rã.',
              'Khu rừng có rất nhiều cây gỗ quý.',
              'Tôi rất thích đi vào khu rừng này.'
            ],
            correctAnswer: 'Khu rừng thức giấc trong tiếng chim hót líu lo, ríu rít như một bản hòa ca rộn rã.',
            explanation: '"Tiếng chim hót líu lo, ríu rít như một bản hòa ca" bổ sung âm thanh thính giác sống động.'
          },
          {
            id: 'v1_l1_q3',
            question: 'Từ láy nào diễn tả Xúc giác (cảm giác da tiếp xúc với gió thu)?',
            options: ['Mơn man', 'Đỏ ửng', 'Róc rách', 'Thơm lừng'],
            correctAnswer: 'Mơn man',
            explanation: '"Mơn man" diễn tả cảm giác làn gió nhẹ nhàng chạm khẽ vào da thịt.'
          }
        ],
        xpReward: 150,
        coinReward: 40
      },
      {
        id: 'van_c1_l2',
        chapterId: 'ch_van_1',
        title: 'Bình Minh & Hoàng Hôn',
        subtitle: 'Bí thuật miêu tả ánh sáng và sự biến đổi màu sắc bầu trời',
        levelNumber: 2,
        icon: '🌅',
        theory: {
          title: 'Nghệ thuật Tả Cảnh Theo Thời Gian',
          keyPoints: [
            'Bình minh: Màn đêm tan dần ➡️ Vệt hồng phương đông ➡️ Mặt trời nhô lên như lòng đỏ trứng gà ➡️ Ánh nắng tinh khôi rọi sáng muôn loài.',
            'Hoàng hôn: Nắng nhạt dần ➡️ Mặt trời đỏ ối như quả cầu lửa ➡️ Ráng mây ngũ sắc rực rỡ ➡️ Hoàng hôn buông rèm tím thẫm.',
            'Từ vựng đắt giá: ửng hồng, đỏ rực, dát vàng, le lói, lung linh, dát bạc.'
          ],
          formula: 'Cảnh chuyển sắc = Trạng thái trước (Mờ mờ) ➡️ Khoảnh khắc vàng (Mặt trời lên/lặn) ➡️ Vạn vật bừng tỉnh/nghỉ ngơi',
          examples: [
            {
              problem: 'Câu đơn giản:',
              solution: 'Mặt trời mọc trên biển.',
              tag: 'Cấp 1'
            },
            {
              problem: 'Nâng cấp Thần Bút:',
              solution: 'Từ phía chân trời xa, mặt trời đỏ ối như một quả cầu lửa khổng lồ từ từ nhô lên khỏi làn nước biếc, dát muôn ngàn vệt sáng vàng óng ánh lên mặt biển mênh mông.',
              tag: 'Cấp 3 ⭐⭐⭐'
            }
          ],
          memoryTip: 'Tả bình minh/hoàng hôn là tả "phép thuật đổi màu" của ông trời!'
        },
        questions: [
          {
            id: 'v1_l2_q1',
            question: 'Hình ảnh so sánh nào hay nhất để miêu tả mặt trời lúc bình minh vừa hé rạng?',
            options: [
              'Mặt trời như một quả bóng bay bằng cao su.',
              'Mặt trời đỏ rực như chiếc lòng đỏ trứng gà khổng lồ đặt trên chiếc đĩa mây ngũ sắc.',
              'Mặt trời sáng như bóng đèn điện 500W.',
              'Mặt trời to như một cái bánh chưng.'
            ],
            correctAnswer: 'Mặt trời đỏ rực như chiếc lòng đỏ trứng gà khổng lồ đặt trên chiếc đĩa mây ngũ sắc.',
            explanation: 'Hình ảnh so sánh vừa độc đáo, vừa gợi tả màu sắc ấm áp, tròn trịa của mặt trời sớm mai.'
          },
          {
            id: 'v1_l2_q2',
            question: 'Từ ngữ nào thích hợp nhất để diễn tả ánh nắng sớm mai chiếu qua tán lá?',
            options: ['Chiếu gắt gao', 'Le lói, nhảy nhót tinh nghịch', 'Cháy bỏng rát', 'Mờ tịt'],
            correctAnswer: 'Le lói, nhảy nhót tinh nghịch',
            explanation: '"Nhảy nhót tinh nghịch" nhân hóa những tia nắng sớm, tạo cảm giác tươi vui rộn rã.'
          }
        ],
        xpReward: 160,
        coinReward: 45
      },
      {
        id: 'van_c1_l3',
        chapterId: 'ch_van_1',
        title: 'Cơn Mưa Rào Mùa Hạ',
        subtitle: 'Tả chuyển động dồn dập, âm thanh dữ dội và vạn vật sau mưa',
        levelNumber: 3,
        icon: '⛈️',
        theory: {
          title: 'Cấu trúc 3 Hồi: Trước mưa - Trong mưa - Sau mưa',
          keyPoints: [
            'Trước mưa: Mây đen ùn ùn kéo đến, gió cuồn cuộn thổi bụi mù mịt, cây cối ngả nghiêng, kiến hối hả dọn tổ.',
            'Trong mưa: Mưa sầm sập đổ xuống, hạt mưa gõ rào rào trên mái tôn, sấm sét đùng đoàng, dòng nước cuồn cuộn chảy.',
            'Sau mưa: Bầu trời trong vắt, cầu vồng bảy sắc hiện ra, cây cối như vừa được tắm gội xanh mướt mát, chim chóc cất tiếng hót reo vui.'
          ],
          formula: 'Tả mưa = Chuyển động nhanh + Từ tượng thanh dồn dập + Biến đổi của cây cối và con vật',
          examples: [
            {
              problem: 'Đoạn văn mẫu mực:',
              solution: 'Mưa trút xuống xối xả như ai cầm gáo nước khổng lồ dội xuống. Những giọt nước nhảy múa trên sân gạch, cây cối hả hê giang rộng tán lá đón lấy dòng nước mát lành sau bao ngày nắng hạn.',
              tag: 'Văn mẫu xuất sắc'
            }
          ],
          memoryTip: 'Cơn mưa mùa hạ giống như một bộ phim hành động: Mở màn căng thẳng, cao trào nổ tung và kết thúc trong trẻo!'
        },
        questions: [
          {
            id: 'v1_l3_q1',
            question: 'Dãy từ nào sau đây toàn là từ tượng thanh mô tả tiếng mưa và sấm sét?',
            options: [
              'Ầm ầm, đùng đoàng, rào rào, lộp độp',
              'Xanh ngắt, đỏ ối, vàng ruộm, trắng xóa',
              'Mênh mông, bao la, bát ngát, tít tắp',
              'Hối hả, vội vã, nhẹ nhàng, thoăn thoắt'
            ],
            correctAnswer: 'Ầm ầm, đùng đoàng, rào rào, lộp độp',
            explanation: 'Đây đều là những từ tượng thanh gợi cảm giác âm thanh chân thực của cơn mưa giông.'
          },
          {
            id: 'v1_l3_q2',
            question: 'Cây cối sau cơn mưa được miêu tả sinh động nhất qua hình ảnh nhân hóa nào?',
            options: [
              'Cây cối bị ướt sũng nước.',
              'Những hàng cây như những đứa trẻ vừa được tắm mát, hớn hở rung rinh những chiếc lá xanh non óng ả.',
              'Cây cối vẫn đứng nguyên ở vị trí cũ.',
              'Lá cây rơi rụng đầy mặt đất.'
            ],
            correctAnswer: 'Những hàng cây như những đứa trẻ vừa được tắm mát, hớn hở rung rinh những chiếc lá xanh non óng ả.',
            explanation: 'Hình ảnh nhân hóa "đứa trẻ vừa được tắm mát, hớn hở" mang lại sức sống mãnh liệt cho cảnh vật.'
          }
        ],
        xpReward: 170,
        coinReward: 50
      },
      {
        id: 'van_c1_l4',
        chapterId: 'ch_van_1',
        title: 'Cánh Đồng & Dòng Sông Quê Hương',
        subtitle: 'Tả cảnh bao la, tĩnh lặng và đậm đà hồn quê Việt Nam',
        levelNumber: 4,
        icon: '🌾',
        theory: {
          title: 'Bí quyết Tả Cảnh Quê Hương Trữ Tình',
          keyPoints: [
            'Cánh đồng lúa: Nhấp nhô sóng lúa vàng rực, đàn cò trắng chao liệng, hương lúa ngòn ngọt phảng phất.',
            'Dòng sông quê: Nước trong xanh in bóng rặng tre nghiêng mình, mái chèo khua róc rách, con thuyền nhẹ trôi.',
            'Tình cảm gắn bó: Nhớ lại những buổi chăn trâu thả diều, tắm mát trên dòng sông êm đềm.'
          ],
          formula: 'Cảnh quê = Màu sắc yên bình (vàng lúa, xanh tre) + Âm thanh đồng nội + Tình yêu tha thiết',
          examples: [
            {
              problem: 'Nâng cấp câu:',
              solution: 'Dòng sông quê tôi hiền hòa uốn lượn như một dải lụa mềm ôm ấp lấy xóm làng, sớm chiều soi bóng những rặng tre xanh ngắt.',
              tag: 'Câu văn mẫu'
            }
          ],
          memoryTip: 'Cảnh quê hương phải gắn liền với "hồn quê": rặng tre, đàn cò, cánh diều và hương lúa thơm.'
        },
        questions: [
          {
            id: 'v1_l4_q1',
            question: 'Từ ngữ nào gợi tả chính xác nhất sự bao la của cánh đồng lúa chín?',
            options: ['Bát ngát / Trải dài ngút tầm mắt', 'Chật hẹp', 'Bé nhỏ', 'Ngắn ngủn'],
            correctAnswer: 'Bát ngát / Trải dài ngút tầm mắt',
            explanation: '"Bát ngát" và "ngút tầm mắt" diễn tả không gian rộng lớn vô tận của đồng quê.'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'van_c1_l5',
        chapterId: 'ch_van_1',
        title: 'Đêm Trăng Rằm Huyền Ảo',
        subtitle: 'Tuyệt kỹ phối hợp ánh sáng vàng dịu và không gian êm đềm',
        levelNumber: 5,
        icon: '🌕',
        theory: {
          title: 'Nghệ thuật Tả Cảnh Ban Đêm',
          keyPoints: [
            'Trăng lên: Tròn vành vạnh như chiếc đĩa bạc khổng lồ lơ lửng giữa biển mây.',
            'Ánh sáng: Ánh trăng vằng vặc chảy tràn xuống mái ngói, dát bạc lên từng ngọn cỏ, dòng nước.',
            'Âm thanh đêm: Tiếng côn trùng ri ri, tiếng lá rụng khẽ khàng, tiếng gió đêm thì thầm.'
          ],
          examples: [
            {
              problem: 'Câu văn hay:',
              solution: 'Đêm rằm, vầng trăng tròn vành vạnh như chiếc đĩa bạc dát ánh sáng lung linh khắp vạn vật, biến làng quê yên ả thành một bức tranh cổ tích thần tiên.',
              tag: 'Văn mẫu điểm 10'
            }
          ],
          memoryTip: 'Tả trăng rằm: Hãy nhớ đến "chiếc đĩa bạc", "dát ánh bạc" và sự êm đềm của đêm quê.'
        },
        questions: [
          {
            id: 'v1_l5_q1',
            question: 'Hình ảnh nào miêu tả ánh trăng rằm đẹp và gợi cảm nhất?',
            options: [
              'Trăng rằm sáng như ngọn đèn cao áp ngoài đường.',
              'Ánh trăng vàng sóng sánh như mật ong chảy tràn xuống mặt sân, dát bạc lên từng tán cây ngọn cỏ.',
              'Trăng rằm có màu vàng nhạt.',
              'Trăng rằm chiếu vào nhà làm tôi không ngủ được.'
            ],
            correctAnswer: 'Ánh trăng vàng sóng sánh như mật ong chảy tràn xuống mặt sân, dát bạc lên từng tán cây ngọn cỏ.',
            explanation: 'Hình ảnh so sánh "sóng sánh như mật ong", "dát bạc" mang đậm chất thơ và nghệ thuật.'
          }
        ],
        xpReward: 190,
        coinReward: 55
      }
    ]
  },
  {
    id: 'ch_van_2',
    subjectId: 'vietnamese',
    title: 'Chương 2',
    vietnameseTitle: 'Vương Quốc Chân Dung (Văn Tả Người)',
    description: 'Bí kíp tả người có "Hồn": Tả ngoại hình chọn lọc, cử chỉ yêu thương, hoạt động sinh động của người thân, thầy cô, bạn bè.',
    semester: 1,
    color: 'from-amber-500 to-rose-600',
    bgGradient: 'bg-gradient-to-r from-amber-500 to-rose-600',
    icon: '👤',
    boss: {
      id: 'boss_van_2',
      name: 'Chúa Tể Liệt Kê',
      avatar: '🤖',
      title: 'Kẻ Biến Văn Thành Bản Khai Lý Lịch',
      maxHp: 120,
      story: 'Chúa Tể Liệt Kê chuyên bắt các bạn học sinh viết văn tả người như khai lý lịch: "Mẹ em 38 tuổi, cao 1m60, nặng 50kg, tóc màu đen, mũi dọc dừa...". Hãy tiêu diệt hắn bằng những nét tả có chiều sâu tâm hồn!',
      rewardBadgeId: 'badge_van_portrait_master',
      questions: [
        {
          id: 'b2_q1',
          question: 'Đoạn văn nào sau đây tả đôi mắt của người mẹ chứa chan tình cảm nhất?',
          options: [
            'Mẹ em có hai con mắt màu đen, lông mi dài.',
            'Đôi mắt mẹ đen láy, hiền từ và ấm áp lạ kỳ. Mỗi khi nhìn em, ánh mắt ấy như ngọn lửa sưởi ấm, chất chứa bao yêu thương và niềm tin tưởng.',
            'Mẹ em bị cận thị nên phải đeo kính trắng hai mắt.',
            'Mắt mẹ em hình bầu dục, có mí mắt rõ ràng.'
          ],
          correctAnswer: 'Đôi mắt mẹ đen láy, hiền từ và ấm áp lạ kỳ. Mỗi khi nhìn em, ánh mắt ấy như ngọn lửa sưởi ấm, chất chứa bao yêu thương và niềm tin tưởng.',
          explanation: 'Tả đôi mắt không chỉ tả màu sắc mà phải gắn liền với ánh nhìn, tình cảm yêu thương dành cho con.'
        },
        {
          id: 'b2_q2',
          question: 'Khi tả ngoại hình của ông/bà, chi tiết nào thể hiện rõ nhất dấu ấn thời gian và sự hy sinh?',
          options: [
            'Ông mặc một chiếc áo phông màu xám.',
            'Mái tóc ông bạc trắng như cước, đôi bàn tay gầy gầy nổi rõ những đường gân xanh – dấu tích của những năm tháng lao động vất vả nuôi con khôn lớn.',
            'Ông đi đôi dép tổ ong màu xanh.',
            'Ông cao khoảng 1 mét 65.'
          ],
          correctAnswer: 'Mái tóc ông bạc trắng như cước, đôi bàn tay gầy gầy nổi rõ những đường gân xanh – dấu tích của những năm tháng lao động vất vả nuôi con khôn lớn.',
          explanation: 'Chi tiết "mái tóc bạc", "bàn tay gân guốc" vừa chân thực vừa chan chứa lòng hiếu thảo, biết ơn.'
        },
        {
          id: 'b2_q3',
          question: 'Lỗi sai lớn nhất của câu văn: "Thầy giáo em cao 1m72, nặng 68kg, mặt hình chữ nhật" là gì?',
          options: [
            'Viết đúng ngữ pháp rồi, không có lỗi gì.',
            'Viết khô khan như bản đo chỉ số sức khỏe, thiếu cảm xúc và không gợi hình.',
            'Câu văn quá dài dòng.',
            'Dùng sai dấu chấm câu.'
          ],
          correctAnswer: 'Viết khô khan như bản đo chỉ số sức khỏe, thiếu cảm xúc và không gợi hình.',
          explanation: 'Trong văn miêu tả, không dùng số đo cứng nhắc (cm, kg) mà nên dùng từ gợi hình như: vóc dáng cao ráo, bước đi nhanh nhẹn, gương mặt phúc hậu.'
        }
      ]
    },
    lessons: [
      {
        id: 'van_c2_l1',
        chapterId: 'ch_van_2',
        title: 'Ngoại Hình Có "Hồn"',
        subtitle: 'Cách chọn 3-4 chi tiết đắt giá nhất (Mắt, Miệng cười, Bàn tay, Giọng nói)',
        levelNumber: 1,
        icon: '✨',
        theory: {
          title: 'Quy Tắc Vàng Tả Ngoại Hình',
          keyPoints: [
            'KHÔNG tả từ đầu đến chân như chụp ảnh thẻ.',
            'CHỈ CHỌN 3-4 nét đặc sắc nhất: Ánh mắt, nụ cười, mái tóc, đôi bàn tay.',
            'Luôn gắn ngoại hình với TÍNH CÁCH và TÌNH CẢM (VD: Đôi bàn tay chai sần vì chăm lo gia đình).',
            'Thay thế số đo: Thay vì "cao 1m60" ➡️ "dáng người mảnh mai, thanh thoát".'
          ],
          formula: 'Nét ngoại hình tiêu biểu + Từ gợi cảm + Cảm xúc / Ý nghĩa gắn liền',
          examples: [
            {
              problem: 'Tả nụ cười thô:',
              solution: 'Mẹ em cười rất tươi.',
              tag: 'Cấp 1'
            },
            {
              problem: 'Tả nụ cười Thần Bút:',
              solution: 'Mỗi khi mẹ cười, khóe mắt mẹ hằn lên những vết chân chim mờ mờ, nhưng nụ cười ấy rạng rỡ như ánh nắng ban mai, xua tan mọi mệt mỏi trong căn nhà nhỏ.',
              tag: 'Cấp 3 ⭐⭐⭐'
            }
          ],
          memoryTip: 'Tả người đừng đếm xăng-ti-mét, hãy nhìn vào ánh mắt và nụ cười!'
        },
        questions: [
          {
            id: 'v2_l1_q1',
            question: 'Để thay thế câu "Bố em cao 1m75", câu nào sau đây hay và tự nhiên nhất?',
            options: [
              'Bố em có vóc dáng cao ráo, bờ vai rộng vững chãi như một chỗ dựa bình yên cho cả gia đình.',
              'Bố em dài ngoằng như cây tre.',
              'Bố em cao hơn mẹ em 15cm.',
              'Bố em có số đo cơ thể rất chuẩn.'
            ],
            correctAnswer: 'Bố em có vóc dáng cao ráo, bờ vai rộng vững chãi như một chỗ dựa bình yên cho cả gia đình.',
            explanation: 'Gắn vóc dáng cao ráo với hình ảnh bờ vai vững chãi thể hiện sự tin cậy, yêu thương.'
          }
        ],
        xpReward: 160,
        coinReward: 40
      },
      {
        id: 'van_c2_l2',
        chapterId: 'ch_van_2',
        title: 'Tả Người Thân Đang Hoạt Động',
        subtitle: 'Tả mẹ nấu cơm, bố sửa đồ, ông chăm sóc vườn cây',
        levelNumber: 2,
        icon: '🍳',
        theory: {
          title: 'Nghệ Thuật Tả Người Trong Lao Động',
          keyPoints: [
            'Tả động tác dứt khoát, khéo léo (đôi tay thoăn thoắt thái rau, ánh mắt tập trung chăm chú).',
            'Tả giọt mồ hôi lăn trên má, nụ cười hài lòng khi hoàn thành món ăn.',
            'Cảm nhận của người viết: Muốn chạy lại giúp đỡ, thấu hiểu nỗi vất vả của người thân.'
          ],
          examples: [
            {
              problem: 'Đoạn văn hay tả mẹ nấu ăn:',
              solution: 'Dưới ánh đèn bếp ấm áp, đôi bàn tay mẹ thoăn thoắt đảo đều chảo thức ăn. Từng hạt mồ hôi lấm tấm trên vầng trán mẹ, nhưng khi nếm thử món canh vừa miệng, mẹ khẽ mỉm cười đầy hạnh phúc.',
              tag: 'Văn mẫu xuất sắc'
            }
          ],
          memoryTip: 'Tả người trong lúc làm việc sẽ bộc lộ rõ nhất tình yêu thương và sự chịu thương chịu khó.'
        },
        questions: [
          {
            id: 'v2_l2_q1',
            question: 'Từ ngữ nào sau đây thích hợp nhất để miêu tả sự nhanh nhẹn, khéo léo của đôi bàn tay mẹ khi làm bếp?',
            options: ['Thoăn thoắt, nhịp nhàng', 'Chậm chạp, ngập ngừng', 'Vụng về, lóng ngóng', 'Nặng nề, uể oải'],
            correctAnswer: 'Thoăn thoắt, nhịp nhàng',
            explanation: '"Thoăn thoắt, nhịp nhàng" gợi tả động tác thuần thục, điêu luyện của người mẹ.'
          }
        ],
        xpReward: 170,
        coinReward: 45
      },
      {
        id: 'van_c2_l3',
        chapterId: 'ch_van_2',
        title: 'Thầy Cô Giáo Trên Bục Giảng',
        subtitle: 'Tả ánh mắt truyền cảm hứng, giọng nói trầm ấm và viên phấn trắng',
        levelNumber: 3,
        icon: '👩‍🏫',
        theory: {
          title: 'Tả Thầy Cô Giáo Say Sưa Bài Giảng',
          keyPoints: [
            'Giọng nói: Trầm ấm, truyền cảm, lúc ngân vang hào sảng, lúc thủ thỉ tâm tình.',
            'Cử chỉ: Viên phấn trắng thoăn thoắt trên bảng đen, bụi phấn vương trên mái tóc.',
            'Ánh mắt: Bao dung, khích lệ từng bạn học sinh chưa hiểu bài.'
          ],
          examples: [
            {
              problem: 'Đoạn văn mẫu:',
              solution: 'Tiếng cô giảng bài trầm ấm, nhẹ nhàng đưa chúng em bước vào thế giới diệu kỳ của những câu chuyện cổ tích. Từng dòng chữ ngay ngắn hiện lên dưới tay cô, bụi phấn bay bay vương nhẹ trên mái tóc người cô kính yêu.',
              tag: 'Văn mẫu điểm cao'
            }
          ]
        },
        questions: [
          {
            id: 'v2_l3_q1',
            question: 'Hình ảnh nào gắn liền với hình tượng người thầy cô giáo trên bục giảng?',
            options: [
              'Bụi phấn trắng bay bay và viên phấn lướt nhẹ trên bảng đen',
              'Chiếc máy cày trên đồng ruộng',
              'Chiếc còi thổi trên sân cỏ',
              'Chiếc búa đập trên công trường'
            ],
            correctAnswer: 'Bụi phấn trắng bay bay và viên phấn lướt nhẹ trên bảng đen',
            explanation: 'Bụi phấn và bảng đen là những hình ảnh biểu tượng thân thương của nghề dạy học.'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'van_c2_l4',
        chapterId: 'ch_van_2',
        title: 'Tả Bạn Thân Tuổi Học Trò',
        subtitle: 'Tả nụ cười tinh nghịch, sự sẻ chia và kỷ niệm học tập',
        levelNumber: 4,
        icon: '🎒',
        theory: {
          title: 'Tả Bạn Thân Gần Gũi, Đáng Yêu',
          keyPoints: [
            'Ngoại hình: Vui tươi, hoạt bát, nụ cười tươi rói để lộ chiếc răng khểnh duyên dáng.',
            'Tính cách: Tốt bụng, hay giúp đỡ bạn bè cùng giải những bài toán khó.',
            'Kỷ niệm: Cùng che chung chiếc ô dưới trời mưa, cùng chia nhau nửa gói xôi buổi sáng.'
          ]
        },
        questions: [
          {
            id: 'v2_l4_q1',
            question: 'Khi tả bạn thân, làm thế nào để bài văn không bị lẫn với các bạn khác trong lớp?',
            options: [
              'Nêu rõ một nét riêng độc đáo (như chiếc răng khểnh, nụ cười tít mắt) và kể một kỷ niệm đáng nhớ giữa hai bạn.',
              'Chỉ cần tả bạn mặc áo đồng phục trắng và quần đen.',
              'Kể tất cả số điểm 10 bạn đã đạt được trong năm.',
              'Tả chiều cao chính xác của bạn.'
            ],
            correctAnswer: 'Nêu rõ một nét riêng độc đáo (như chiếc răng khểnh, nụ cười tít mắt) và kể một kỷ niệm đáng nhớ giữa hai bạn.',
            explanation: 'Nét riêng và kỷ niệm chân thực là chìa khóa tạo nên cái "hồn" của nhân vật.'
          }
        ],
        xpReward: 190,
        coinReward: 50
      }
    ]
  },
  {
    id: 'ch_van_3',
    subjectId: 'vietnamese',
    title: 'Chương 3',
    vietnameseTitle: 'Rừng Phép Thuật (Cây Cối & Đồ Vật, Con Vật)',
    description: 'Nghệ thuật thổi hồn vào vật thể: Tả cây cối đổi màu 4 mùa, đồ vật kỷ niệm và thú cưng trung thành.',
    semester: 2,
    color: 'from-blue-500 to-indigo-600',
    bgGradient: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    icon: '🌳',
    boss: {
      id: 'boss_van_3',
      name: 'Bóng Ma Bí Từ',
      avatar: '👻',
      title: 'Kẻ Gây Ra Căn Bệnh Tịt Ngòi Bút',
      maxHp: 130,
      story: 'Bóng Ma Bí Từ luôn làm các bạn nhỏ ngồi cắn bút hàng giờ mà không viết được dòng nào. Hãy dùng kho từ láy và các phép so sánh thần kỳ để xua tan bóng ma!',
      rewardBadgeId: 'badge_van_object_master',
      questions: [
        {
          id: 'b3_q1',
          question: 'Biện pháp tu từ nào được sử dụng trong câu: "Cây bàng như một người lính gác khổng lồ, sừng sững che mát cho cả sân trường"?',
          options: ['So sánh và nhân hóa', 'Chỉ có so sánh', 'Chỉ có nhân hóa', 'Không có biện pháp tu từ nào'],
          correctAnswer: 'So sánh và nhân hóa',
          explanation: '"Như người lính gác" là so sánh, "che mát / gác sân trường" mang tính chất nhân hóa người bảo vệ thân thương.'
        },
        {
          id: 'b3_q2',
          question: 'Khi tả chiếc cặp sách của em, chi tiết nào thể hiện tình cảm sâu sắc nhất?',
          options: [
            'Chiếc cặp làm bằng vải dù chống nước màu xanh dương.',
            'Chiếc cặp là món quà sinh nhật đầu tiên bà ngoại tặng trước ngày em vào lớp 1. Mỗi vết xước trên khóa cặp đều là kỷ niệm gắn bó suốt năm năm tiểu học.',
            'Chiếc cặp có hai ngăn lớn và một ngăn nhỏ đựng bút.',
            'Chiếc cặp giá 250 nghìn đồng mua ở siêu thị.'
          ],
          correctAnswer: 'Chiếc cặp là món quà sinh nhật đầu tiên bà ngoại tặng trước ngày em vào lớp 1. Mỗi vết xước trên khóa cặp đều là kỷ niệm gắn bó suốt năm năm tiểu học.',
          explanation: 'Đồ vật trở nên quý giá khi được gắn với tình cảm gia đình và những kỷ niệm tuổi thơ.'
        }
      ]
    },
    lessons: [
      {
        id: 'van_c3_l1',
        chapterId: 'ch_van_3',
        title: 'Cây Bàng & Cây Phượng Bốn Mùa',
        subtitle: 'Tả sự biến hóa kỳ diệu qua Xuân - Hạ - Thu - Đông',
        levelNumber: 1,
        icon: '🍂',
        theory: {
          title: 'Tả Cây Cối Theo Mùa',
          keyPoints: [
            'Mùa xuân: Chồi non lộc biếc nhú lên như những ngọn nến xanh lung linh.',
            'Mùa hạ: Tán lá xum xuê như chiếc ô khổng lồ, hoa phượng đỏ rực như đốm lửa bập bùng.',
            'Mùa thu: Lá bàng ngả sang màu đồng đỏ au, rụng xào xạc theo làn gió.',
            'Mùa đông: Cành khẳng khiu trơ trụi nhưng âm thầm ấp ủ nhựa sống chờ xuân tới.'
          ],
          examples: [
            {
              problem: 'Đoạn văn hay:',
              solution: 'Mùa đông, cây bàng trút hết lá, giương những cành khẳng khiu lên nền trời xám xịt như muốn chịu đựng cái giá rét thay cho học trò chúng em.',
              tag: 'Văn mẫu cảm xúc'
            }
          ]
        },
        questions: [
          {
            id: 'v3_l1_q1',
            question: 'Hình ảnh so sánh nào miêu tả hoa phượng mùa hè rực rỡ nhất?',
            options: [
              'Hoa phượng đỏ như những ngọn lửa bập bùng thắp sáng cả một góc trời.',
              'Hoa phượng có năm cánh hoa màu đỏ.',
              'Hoa phượng mọc ở trên cành cây phượng.',
              'Hoa phượng rơi rụng dưới đất khi có mưa.'
            ],
            correctAnswer: 'Hoa phượng đỏ như những ngọn lửa bập bùng thắp sáng cả một góc trời.',
            explanation: 'So sánh "những ngọn lửa bập bùng" thể hiện sắc đỏ mãnh liệt và sự rộn rã của mùa hè.'
          }
        ],
        xpReward: 170,
        coinReward: 45
      },
      {
        id: 'van_c3_l2',
        chapterId: 'ch_van_3',
        title: 'Chiếc Cặp Sách & Kỷ Vật Thân Yêu',
        subtitle: 'Gắn công dụng của đồ vật với tình cảm người thân trao tặng',
        levelNumber: 2,
        icon: '🎒',
        theory: {
          title: 'Tả Đồ Vật Có Cảm Xúc',
          keyPoints: [
            'Bao quát: Hình dáng, màu sắc, chất liệu bên ngoài.',
            'Chi tiết: Khóa kéo kêu rè rè vui tai, ngăn trong chứa đựng tri thức.',
            'Kỷ niệm: Đồ vật chứng kiến những lúc em được điểm 10 hay những ngày mưa gió đến trường.'
          ]
        },
        questions: [
          {
            id: 'v3_l2_q1',
            question: 'Khi tả đồ vật, câu kết bài nào sau đây sâu sắc nhất?',
            options: [
              'Em rất quý chiếc đồng hồ này và sẽ giữ gìn cẩn thận để nó luôn nhắc nhở em biết quý trọng thời gian học tập.',
              'Chiếc đồng hồ này dùng pin con thỏ.',
              'Nếu hỏng em sẽ bảo bố mua cái mới.',
              'Bài văn tả đồ vật của em đến đây là hết.'
            ],
            correctAnswer: 'Em rất quý chiếc đồng hồ này và sẽ giữ gìn cẩn thận để nó luôn nhắc nhở em biết quý trọng thời gian học tập.',
            explanation: 'Kết bài thể hiện bài học nhân văn về sự trân trọng thời gian.'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'van_c3_l3',
        chapterId: 'ch_van_3',
        title: 'Chú Cún / Mèo Cưng Đáng Yêu',
        subtitle: 'Tả ngoại hình lông mượt, đôi mắt tinh ranh và thói quen quấn quýt',
        levelNumber: 3,
        icon: '🐶',
        theory: {
          title: 'Tả Con Vật Nuôi Tinh Nghịch',
          keyPoints: [
            'Bộ lông: Mềm mại mượt mà như nhung.',
            'Đôi mắt: Tròn xoe lấp lánh như hai hòn bi ve.',
            'Hành động: Vẫy đuôi tít mù mừng chủ về, dụi đầu nũng nịu vào chân.'
          ]
        },
        questions: [
          {
            id: 'v3_l3_q1',
            question: 'Từ ngữ nào diễn tả sự mừng rỡ của chú chó cưng khi thấy chủ đi học về?',
            options: [
              'Vẫy đuôi tít mù, chạy vòng quanh chân và sủa lên những tiếng ăng ẳng đầy phấn khích',
              'Nằm im một chỗ trong góc nhà',
              'Nhìn chằm chằm không có phản ứng gì',
              'Bỏ chạy ra ngoài vườn'
            ],
            correctAnswer: 'Vẫy đuôi tít mù, chạy vòng quanh chân và sủa lên những tiếng ăng ẳng đầy phấn khích',
            explanation: 'Hành động "vẫy đuôi tít mù", "sủa ăng ẳng phấn khích" thể hiện tình cảm quấn quýt của thú cưng.'
          }
        ],
        xpReward: 190,
        coinReward: 50
      }
    ]
  },
  {
    id: 'ch_van_4',
    subjectId: 'vietnamese',
    title: 'Chương 4',
    vietnameseTitle: 'Tuyệt Đỉnh Thần Bút (Kỹ Thuật Đỉnh Cao)',
    description: 'Bí kíp 4 cách mở bài gián tiếp cuốn hút, kết bài mở rộng sâu sắc và kỹ thuật chuyển đoạn đỉnh cao.',
    semester: 2,
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'bg-gradient-to-r from-purple-500 to-pink-600',
    icon: '👑',
    boss: {
      id: 'boss_van_4',
      name: 'Rồng Khổng Lồ Văn Mẫu',
      avatar: '🐉',
      title: 'Kẻ Giam Cầm Sự Sáng Tạo',
      maxHp: 150,
      story: 'Rồng Văn Mẫu đã khóa chặt mọi ngòi bút bằng những bài văn chép rập khuôn vô cảm. Hãy giải phóng sức sáng tạo của chính mình để trở thành ĐẠI TÔNG SƯ THẦN BÚT!',
      rewardBadgeId: 'badge_van_grand_master',
      questions: [
        {
          id: 'b4_q1',
          question: 'Đoạn văn nào sau đây là Mở bài GIÁN TIẾP cho đề bài "Tả một đêm trăng đẹp"?',
          options: [
            'Nhà em có một cái sân rất rộng. Đêm nay trăng rằm rất sáng, em xin phép mẹ ra sân ngắm trăng.',
            '"Trăng ơi... từ đâu đến? / Hay từ cánh đồng xa / Trăng hồng như quả chín / Lửng lơ lên trước nhà...". Mỗi lần nghe câu thơ ấy của Trần Đăng Khoa, lòng em lại bồi hồi nhớ về những đêm trăng rằm tuyệt đẹp nơi làng quê thân thương.',
            'Hôm nay là ngày 15 tháng 8 âm lịch. Trời có trăng tròn. Sau đây em xin tả vầng trăng.',
            'Em rất thích trăng. Trăng đêm nay rất to và tròn.'
          ],
          correctAnswer: '"Trăng ơi... từ đâu đến? / Hay từ cánh đồng xa / Trăng hồng như quả chín / Lửng lơ lên trước nhà...". Mỗi lần nghe câu thơ ấy của Trần Đăng Khoa, lòng em lại bồi hồi nhớ về những đêm trăng rằm tuyệt đẹp nơi làng quê thân thương.',
          explanation: 'Mở bài gián tiếp bằng một đoạn thơ liên quan tạo cảm xúc nghệ thuật và lôi cuốn người đọc ngay từ dòng đầu tiên.'
        },
        {
          id: 'b4_q2',
          question: 'Đoạn văn nào là Kết bài MỞ RỘNG cho đề bài "Tả người mẹ của em"?',
          options: [
            'Em rất yêu mẹ của em.',
            'Mai này dù có lớn khôn và đi đến muôn phương, hình bóng người mẹ tảo tần cùng lời ru êm đềm thuở ấu thơ sẽ mãi là bến đỗ bình yên nhất nâng bước em trên mọi nẻo đường đời.',
            'Mẹ em là người mẹ tốt nhất thế giới. Hết bài.',
            'Em hứa sẽ học thật giỏi để mẹ không bị buồn.'
          ],
          correctAnswer: 'Mai này dù có lớn khôn và đi đến muôn phương, hình bóng người mẹ tảo tần cùng lời ru êm đềm thuở ấu thơ sẽ mãi là bến đỗ bình yên nhất nâng bước em trên mọi nẻo đường đời.',
          explanation: 'Kết bài mở rộng vượt ra ngoài thực tại, liên hệ tới tương lai và gửi gắm triết lý tình mẫu tử thiêng liêng.'
        }
      ]
    },
    lessons: [
      {
        id: 'van_c4_l1',
        chapterId: 'ch_van_4',
        title: '4 Công Thức Mở Bài Gián Tiếp Bất Bại',
        subtitle: 'Mở bài bằng Thơ ca, Bằng Âm thanh, Bằng Câu hỏi và Bằng Kỷ niệm',
        levelNumber: 1,
        icon: '💡',
        theory: {
          title: '4 Tuyệt Chiêu Mở Bài Gián Tiếp',
          keyPoints: [
            'Cách 1 (Bằng Thơ ca): Dẫn 2-4 câu thơ hay về chủ đề ➡️ Giới thiệu đối tượng.',
            'Cách 2 (Bằng Âm thanh): Bắt đầu bằng âm thanh ấn tượng (tiếng còi tàu, tiếng ve kêu râm ran, tiếng chim líu lo) ➡️ Dẫn vào cảnh vật.',
            'Cách 3 (Bằng Kỷ niệm): Nhớ lại một kỷ niệm khó quên ➡️ Giới thiệu con người/đồ vật.',
            'Cách 4 (Bằng Đối lập): Nêu sự ồn ào phố thị đối lập với sự yên ả làng quê ➡️ Giới thiệu cảnh đẹp.'
          ],
          examples: [
            {
              problem: 'Mở bài bằng Âm thanh (Tả Mùa Hè):',
              solution: '"Râm ran... râm ran...". Khi những dàn đồng ca ve sầu cất lên khúc nhạc rộn rã trên những tán phượng vĩ đỏ rực, em biết rằng mùa hè rực rỡ đã gõ cửa mái trường thân yêu.',
              tag: 'Công thức Âm thanh ⭐⭐⭐'
            }
          ]
        },
        questions: [
          {
            id: 'v4_l1_q1',
            question: 'Khi làm đề bài "Tả cánh đồng lúa quê em", cách mở bài gián tiếp nào sau đây đi từ KỶ NIỆM tuổi thơ?',
            options: [
              'Tuổi thơ tôi không lớn lên bên những tòa nhà chọc trời hào nhoáng, mà êm đềm trôi qua theo cánh diều no gió trên bờ đê và mùi rơm rạ thơm nồng của cánh đồng lúa chín quê nhà.',
              'Nhà em ở nông thôn có cánh đồng lúa.',
              'Cánh đồng lúa rộng 5 mẫu.',
              'Em rất thích ngắm lúa.'
            ],
            correctAnswer: 'Tuổi thơ tôi không lớn lên bên những tòa nhà chọc trời hào nhoáng, mà êm đềm trôi qua theo cánh diều no gió trên bờ đê và mùi rơm rạ thơm nồng của cánh đồng lúa chín quê nhà.',
            explanation: 'Dẫn dắt từ ký ức tuổi thơ tạo sự xúc động và chiều sâu cho bài văn.'
          }
        ],
        xpReward: 200,
        coinReward: 60
      },
      {
        id: 'van_c4_l2',
        chapterId: 'ch_van_4',
        title: 'Tuyệt Kỹ Kết Bài Mở Rộng Sâu Sắc',
        subtitle: 'Không chỉ nói "Em rất yêu...", hãy gửi gắm bài học và ước mơ',
        levelNumber: 2,
        icon: '🌟',
        theory: {
          title: 'Bí Quyết Kết Bài Mở Rộng',
          keyPoints: [
            'Khẳng định tình cảm bền vững theo năm tháng.',
            'Liên hệ tương lai: Dù đi đâu cũng không bao giờ quên cội nguồn.',
            'Bài học rút ra: Lời hứa hành động cụ thể để bảo vệ cảnh đẹp hoặc đền đáp công ơn.'
          ]
        },
        questions: [
          {
            id: 'v4_l2_q1',
            question: 'Yếu tố nào làm nên một Kết bài mở rộng đạt điểm tối đa?',
            options: [
              'Có tình cảm chân thành, có liên hệ trách nhiệm bản thân và hướng tới tương lai tốt đẹp.',
              'Chỉ cần nhắc lại tên đề bài thật to.',
              'Viết thật dài hơn 20 dòng nhưng không có cảm xúc.',
              'Chép lại toàn bộ phần mở bài.'
            ],
            correctAnswer: 'Có tình cảm chân thành, có liên hệ trách nhiệm bản thân và hướng tới tương lai tốt đẹp.',
            explanation: 'Kết bài mở rộng cần có chiều sâu tư tưởng và bài học hành động ý nghĩa.'
          }
        ],
        xpReward: 200,
        coinReward: 60
      },
      {
        id: 'van_c4_l3',
        chapterId: 'ch_van_4',
        title: 'Chuyển Đoạn Tự Nhiên & Cảm Xúc',
        subtitle: 'Sử dụng từ nối mượt mà, biến bài văn thành dòng chảy êm ả',
        levelNumber: 3,
        icon: '🌊',
        theory: {
          title: 'Kỹ Thuật Chuyển Đoạn Không Bị Vấp',
          keyPoints: [
            'Từ nối thời gian: "Thời gian thấm thoát trôi qua...", "Khi nắng vừa tắt...", "Chẳng mấy chốc...".',
            'Từ nối không gian: "Nhìn từ xa...", "Lại gần hơn...", "Bước sâu vào bên trong...".',
            'Từ nối cảm xúc: "Càng ngắm nhìn, em lại càng...", "Có lẽ điều làm em ấn tượng nhất chính là...".'
          ]
        },
        questions: [
          {
            id: 'v4_l3_q1',
            question: 'Từ chuyển đoạn nào thích hợp nhất để nối từ phần Tả bao quát sang Tả chi tiết?',
            options: [
              'Nhìn từ xa là thế, nhưng khi bước lại gần hơn...',
              'Và rồi kết thúc.',
              'Bây giờ em tả cái khác.',
              'Nói chung là rất đẹp.'
            ],
            correctAnswer: 'Nhìn từ xa là thế, nhưng khi bước lại gần hơn...',
            explanation: '"Nhìn từ xa là thế, nhưng khi bước lại gần hơn..." tạo sự chuyển đổi không gian vô cùng mượt mà.'
          }
        ],
        xpReward: 220,
        coinReward: 70
      }
    ]
  }
];
