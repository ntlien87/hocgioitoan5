import { Chapter } from '../../types/math';

export const ch5_ch6_ch7_chapters: Chapter[] = [
  // ==================== HỌC KỲ 2 ====================
  // CHỦ ĐỀ 5: HÌNH HỘP CHỮ NHẬT, HÌNH LẬP PHƯƠNG & THỂ TÍCH
  {
    id: 'ch5',
    title: 'Chủ đề 5: Hình Học Không Gian & Thể Tích',
    vietnameseTitle: 'Thế Giới Không Gian 3D & Thể Tích',
    description: 'Học kỳ 2 (Bài 46 - 58) • Diện tích xung quanh, diện tích toàn phần và thể tích của hình hộp chữ nhật & hình lập phương.',
    semester: 2,
    color: 'from-rose-500 to-pink-600',
    bgGradient: 'bg-gradient-to-r from-rose-500 to-pink-600',
    icon: '📦',
    boss: {
      id: 'boss_ch5',
      name: 'Titan Khối Hộp Cubus',
      avatar: '🗿',
      title: 'Chúa Tể Không Gian 3 Chiều',
      maxHp: 400,
      story: 'Cubus canh giữ không gian 3 chiều với các bài toán diện tích mặt ngoài và thể tích khối lập phương. Hãy vận dụng công thức chuẩn để giải phóng cánh cổng!',
      rewardBadgeId: 'badge_boss_ch5',
      questions: [
        {
          id: 'b5_q1',
          question: 'Một hình lập phương có cạnh 5 cm. Thể tích của nó là:',
          options: ['125 cm³', '150 cm²', '25 cm³', '100 cm³'],
          correctAnswer: '125 cm³',
          hint: 'V = a × a × a = 5 × 5 × 5 = 125 cm³.',
          explanation: 'V = 5 × 5 × 5 = 125 cm³.'
        },
        {
          id: 'b5_q2',
          question: 'Một hình hộp chữ nhật có dài 8 cm, rộng 5 cm, cao 4 cm. Diện tích xung quanh của nó là:',
          options: ['104 cm²', '160 cm³', '184 cm²', '52 cm²'],
          correctAnswer: '104 cm²',
          hint: 'Sxq = (dài + rộng) × 2 × cao = (8 + 5) × 2 × 4 = 104 cm².',
          explanation: 'Sxq = (8 + 5) × 2 × 4 = 104 cm².'
        },
        {
          id: 'b5_q3',
          question: 'Điền số thích hợp: 2.5 m³ = ... dm³ (lít)',
          options: ['2500 dm³', '250 dm³', '25000 dm³', '25 dm³'],
          correctAnswer: '2500 dm³',
          hint: '1 m³ = 1000 dm³ = 1000 lít.',
          explanation: '2.5 × 1000 = 2500 dm³.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch5_l1',
        chapterId: 'ch5',
        title: 'Diện tích Xung quanh & Toàn phần Hình hộp chữ nhật',
        subtitle: 'Công thức tính diện tích 4 mặt bên và 2 mặt đáy',
        levelNumber: 13,
        icon: '📦',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Hình hộp chữ nhật: Diện tích xung quanh & toàn phần',
          keyPoints: [
            'Diện tích xung quanh: Sxq = Chu vi đáy × Chiều cao = (a + b) × 2 × c.',
            'Diện tích toàn phần: Stp = Sxq + Diện tích 2 đáy = Sxq + (a × b × 2).',
            'Lưu ý dạng thùng không có nắp: Chỉ tính Sxq + diện tích 1 đáy (5 mặt).'
          ],
          formula: 'Sxq = (a + b) × 2 × c | Stp = Sxq + 2 × a × b',
          examples: [
            {
              problem: 'Hình hộp chữ nhật có dài 10 cm, rộng 6 cm, cao 5 cm.',
              solution: 'Sxq = (10 + 6) × 2 × 5 = 160 cm². Stp = 160 + (10 × 6 × 2) = 280 cm².'
            }
          ],
          memoryTip: '💡 "Xung quanh lấy chu vi đáy nhân cao / Toàn phần cộng thêm hai đáy thế nào cũng xong!"'
        },
        questions: [
          {
            id: 'c5l1_q1',
            question: 'Một hình hộp chữ nhật có chiều dài 6 dm, chiều rộng 4 dm và chiều cao 3 dm. Diện tích xung quanh của nó là:',
            options: ['60 dm²', '72 dm³', '108 dm²', '30 dm²'],
            correctAnswer: '60 dm²',
            hint: 'Sxq = (6 + 4) × 2 × 3 = 60 dm².',
            explanation: 'Sxq = (6 + 4) × 2 × 3 = 60 dm².'
          },
          {
            id: 'c5l1_q2',
            question: 'Với hình hộp chữ nhật ở câu trên (dài 6 dm, rộng 4 dm, cao 3 dm), diện tích toàn phần là:',
            options: ['108 dm²', '60 dm²', '72 dm²', '84 dm²'],
            correctAnswer: '108 dm²',
            hint: 'Stp = 60 + 2 × (6 × 4) = 60 + 48 = 108 dm².',
            explanation: 'Stp = Sxq + 2 × S đáy = 60 + 48 = 108 dm².'
          },
          {
            id: 'c5l1_q3',
            question: 'Một cái hộp bằng tôn không có nắp có dài 1.5 m, rộng 0.8 m và cao 0.6 m. Diện tích tôn cần dùng để làm hộp là (không tính mép hàn):',
            options: ['3.96 m²', '5.16 m²', '2.76 m²', '4.2 m²'],
            correctAnswer: '3.96 m²',
            hint: 'Hộp không nắp có 5 mặt: Sxq + 1 đáy = (1.5 + 0.8) × 2 × 0.6 + (1.5 × 0.8) = 2.76 + 1.2 = 3.96 m².',
            explanation: 'S tôn = (1.5 + 0.8) × 2 × 0.6 + (1.5 × 0.8) = 2.76 + 1.2 = 3.96 m².'
          },
          {
            id: 'c5l1_q4',
            question: 'Một căn phòng dạng hình hộp chữ nhật có dài 8 m, rộng 6 m và cao 4 m. Người ta muốn sơn trần nhà và 4 bức tường xung quanh. Diện tích các cửa là 12 m². Diện tích cần quét sơn là:',
            options: ['148 m²', '160 m²', '112 m²', '136 m²'],
            correctAnswer: '148 m²',
            hint: 'Sxq = (8 + 6) × 2 × 4 = 112 m². S trần = 8 × 6 = 48 m². S sơn = 112 + 48 - 12 = 148 m².',
            explanation: 'S sơn = Sxq + S trần - S cửa = 112 + 48 - 12 = 148 m².'
          },
          {
            id: 'c5l1_q5',
            question: 'Một hình hộp chữ nhật có diện tích xung quanh là 140 cm², chiều cao 5 cm, chiều dài 8 cm. Chiều rộng của hình hộp chữ nhật đó là:',
            options: ['6 cm', '7 cm', '5 cm', '4 cm'],
            correctAnswer: '6 cm',
            hint: 'Chu vi đáy = 140 : 5 = 28 cm. Nửa chu vi đáy = 28 : 2 = 14 cm. Chiều rộng = 14 - 8 = 6 cm.',
            explanation: 'Nửa chu vi đáy: 140 : 5 : 2 = 14 cm => Chiều rộng = 14 - 8 = 6 cm.'
          },
          {
            id: 'c5l1_q6',
            question: 'Nếu tăng chiều dài, chiều rộng và chiều cao của hình hộp chữ nhật lên gấp đôi thì diện tích xung quanh tăng lên mấy lần?',
            options: ['4 lần', '2 lần', '8 lần', '6 lần'],
            correctAnswer: '4 lần',
            hint: 'Sxq = (2a + 2b) × 2 × (2c) = 4 × Sxq cũ.',
            explanation: 'Cả chu vi đáy và chiều cao cùng tăng 2 lần => Diện tích tăng 2 × 2 = 4 lần.'
          },
          {
            id: 'c5l1_q7',
            question: 'Một khối bê tông hình hộp chữ nhật có diện tích đáy là 24 m² và chiều cao 2.5 m. Thể tích khối bê tông đó là:',
            options: ['60 m³', '48 m³', '50 m³', '72 m³'],
            correctAnswer: '60 m³',
            hint: 'V = S đáy × chiều cao = 24 × 2.5 = 60 m³.',
            explanation: 'V = 24 × 2.5 = 60 m³.'
          },
          {
            id: 'c5l1_q8',
            question: 'Một bể bơi hình hộp chữ nhật có chiều dài 25 m, chiều rộng 10 m, chiều sâu 1.8 m. Người ta dùng gạch men hình vuông cạnh 50 cm (0.5 m) để lát đáy và 4 thành bể bơi. Cần bao nhiêu viên gạch (bỏ qua mép vữa)?',
            options: ['1504 viên', '1500 viên', '1600 viên', '1400 viên'],
            correctAnswer: '1504 viên',
            hint: 'S lát gạch = (25 + 10) × 2 × 1.8 + (25 × 10) = 126 + 250 = 376 m². S 1 viên gạch = 0.5 × 0.5 = 0.25 m². Số gạch = 376 : 0.25 = 1504 viên.',
            explanation: 'Tổng diện tích lát gạch = 376 m². Số gạch = 376 : 0.25 = 1504 viên.'
          },
          {
            id: 'c5l1_q9',
            question: 'Một hình hộp chữ nhật có tỉ số chiều rộng và chiều dài là 2/3, chu vi đáy là 50 cm, chiều cao 12 cm. Diện tích xung quanh là:',
            options: ['600 cm²', '300 cm²', '720 cm²', '500 cm²'],
            correctAnswer: '600 cm²',
            hint: 'Sxq = Chu vi đáy × chiều cao = 50 × 12 = 600 cm².',
            explanation: 'Sxq = Chu vi đáy × chiều cao = 50 × 12 = 600 cm².'
          },
          {
            id: 'c5l1_q10',
            question: 'Thử thách điểm 10: Người ta sơn toàn bộ 6 mặt của một khối gỗ hình hộp chữ nhật có dài 12 cm, rộng 8 cm, cao 6 cm rồi cắt thành các khối lập phương nhỏ cạnh 1 cm. Có bao nhiêu khối lập phương nhỏ không được sơn mặt nào?',
            options: ['240 khối', '360 khối', '280 khối', '192 khối'],
            correctAnswer: '240 khối',
            hint: 'Kích thước phần lõi bên trong: dài (12 - 2) = 10 cm, rộng (8 - 2) = 6 cm, cao (6 - 2) = 4 cm. Số khối không sơn = 10 × 6 × 4 = 240 khối!',
            explanation: 'Bớt đi 1 cm ở mỗi đầu: Số khối không sơn mặt nào = (12 - 2) × (8 - 2) × (6 - 2) = 10 × 6 × 4 = 240 khối.'
          }
        ]
      },
      {
        id: 'ch5_l2',
        chapterId: 'ch5',
        title: 'Hình Lập Phương & Thể Tích',
        subtitle: 'Diện tích xung quanh, toàn phần và thể tích hình lập phương',
        levelNumber: 14,
        icon: '🎲',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Hình Lập Phương & Thể Tích',
          keyPoints: [
            'Hình lập phương là hình hộp chữ nhật đặc biệt có 6 mặt là các hình vuông bằng nhau.',
            'Diện tích xung quanh: Sxq = (a × a) × 4 (4 mặt bên).',
            'Diện tích toàn phần: Stp = (a × a) × 6 (cả 6 mặt).',
            'Thể tích hình lập phương: V = a × a × a.'
          ],
          formula: 'Sxq = a² × 4 | Stp = a² × 6 | V = a³',
          examples: [
            {
              problem: 'Tính diện tích toàn phần và thể tích hình lập phương cạnh 3 dm.',
              solution: 'Stp = (3 × 3) × 6 = 54 dm². V = 3 × 3 × 3 = 27 dm³ (27 lít).'
            }
          ],
          memoryTip: '💡 "Xung quanh nhân 4 / Toàn phần nhân 6 / Thể tích 3 cạnh nhân nhau thật tài!"'
        },
        questions: [
          {
            id: 'c5l2_q1',
            question: 'Một hình lập phương có cạnh 6 cm. Diện tích một mặt của hình lập phương là:',
            options: ['36 cm²', '24 cm²', '216 cm²', '144 cm²'],
            correctAnswer: '36 cm²',
            hint: 'S 1 mặt = a × a = 6 × 6 = 36 cm².',
            explanation: 'S 1 mặt = 6 × 6 = 36 cm².'
          },
          {
            id: 'c5l2_q2',
            question: 'Với hình lập phương có cạnh 6 cm, diện tích toàn phần của nó là:',
            options: ['216 cm²', '144 cm²', '36 cm²', '108 cm²'],
            correctAnswer: '216 cm²',
            hint: 'Stp = 36 × 6 = 216 cm².',
            explanation: 'Stp = 6 × 6 × 6 = 216 cm².'
          },
          {
            id: 'c5l2_q3',
            question: 'Với hình lập phương có cạnh 6 cm, thể tích của nó là:',
            options: ['216 cm³', '144 cm³', '36 cm³', '72 cm³'],
            correctAnswer: '216 cm³',
            hint: 'V = a × a × a = 6 × 6 × 6 = 216 cm³.',
            explanation: 'V = 6 × 6 × 6 = 216 cm³.'
          },
          {
            id: 'c5l2_q4',
            question: 'Một hình lập phương có diện tích toàn phần là 150 dm². Cạnh của hình lập phương đó là:',
            options: ['5 dm', '6 dm', '25 dm', '4 dm'],
            correctAnswer: '5 dm',
            hint: 'Diện tích 1 mặt = 150 : 6 = 25 dm². Cạnh = 5 dm vì 5 × 5 = 25.',
            explanation: 'S 1 mặt = 150 : 6 = 25 dm² => Cạnh a = 5 dm.'
          },
          {
            id: 'c5l2_q5',
            question: 'Nếu gấp cạnh của hình lập phương lên 3 lần thì thể tích của nó tăng lên mấy lần?',
            options: ['27 lần', '9 lần', '3 lần', '18 lần'],
            correctAnswer: '27 lần',
            hint: 'V = (3a) × (3a) × (3a) = 27 × a³.',
            explanation: 'Thể tích tăng 3 × 3 × 3 = 27 lần.'
          },
          {
            id: 'c5l2_q6',
            question: 'Một bể nước hình lập phương cạnh 1.2 m. Khi bể chứa đầy nước thì có bao nhiêu lít nước?',
            options: ['1728 lít', '172.8 lít', '1440 lít', '1200 lít'],
            correctAnswer: '1728 lít',
            hint: 'V = 1.2 × 1.2 × 1.2 = 1.728 m³ = 1728 dm³ = 1728 lít.',
            explanation: 'V = 1.728 m³ = 1728 lít.'
          },
          {
            id: 'c5l2_q7',
            question: 'Một khối kim loại hình lập phương cạnh 0.5 dm. Biết 1 dm³ kim loại đó cân nặng 7.8 kg. Khối kim loại đó cân nặng:',
            options: ['0.975 kg (975 g)', '3.9 kg', '1.95 kg', '0.78 kg'],
            correctAnswer: '0.975 kg (975 g)',
            hint: 'V = 0.5 × 0.5 × 0.5 = 0.125 dm³. Cân nặng = 0.125 × 7.8 = 0.975 kg.',
            explanation: 'V = 0.125 dm³. Khối lượng = 0.125 × 7.8 = 0.975 kg.'
          },
          {
            id: 'c5l2_q8',
            question: 'Người ta xếp các hình lập phương nhỏ cạnh 1 cm thành một hình lập phương lớn cạnh 10 cm. Tổng số hình lập phương nhỏ cần dùng là:',
            options: ['1000 khối', '100 khối', '600 khối', '10000 khối'],
            correctAnswer: '1000 khối',
            hint: 'Số khối = 10 × 10 × 10 = 1000 khối.',
            explanation: 'V lớn = 1000 cm³. Số khối = 1000 : 1 = 1000 khối.'
          },
          {
            id: 'c5l2_q9',
            question: 'Người ta sơn 6 mặt của hình lập phương lớn cạnh 10 cm ở câu trên. Số khối lập phương nhỏ cạnh 1 cm chỉ được sơn đúng 1 mặt là:',
            options: ['384 khối', '96 khối', '216 khối', '480 khối'],
            correctAnswer: '384 khối',
            hint: 'Mỗi mặt có (10 - 2) × (10 - 2) = 64 khối sơn 1 mặt. Có 6 mặt => 64 × 6 = 384 khối.',
            explanation: 'Số khối sơn 1 mặt = (10 - 2)² × 6 = 8 × 8 × 6 = 384 khối.'
          },
          {
            id: 'c5l2_q10',
            question: 'Thử thách điểm 10: Hai hình lập phương A và B có tỉ số thể tích V(A) / V(B) = 8/27. Tỉ số diện tích toàn phần Stp(A) / Stp(B) là:',
            options: ['4/9', '2/3', '8/27', '16/81'],
            correctAnswer: '4/9',
            hint: 'V(A)/V(B) = (a/b)³ = 8/27 => a/b = 2/3. Tỉ số diện tích Stp = (a/b)² = (2/3)² = 4/9!',
            explanation: 'Tỉ số cạnh = ∛(8/27) = 2/3. Tỉ số diện tích toàn phần = (2/3)² = 4/9.'
          }
        ]
      },
      {
        id: 'ch5_l3',
        chapterId: 'ch5',
        title: 'Bảng đơn vị đo thể tích & Bài toán mực nước bể kính',
        subtitle: 'Chuyển đổi m³, dm³ (lít), cm³ và giải toán hình học thực tế',
        levelNumber: 15,
        icon: '🧪',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Đơn vị đo Thể tích & Mực nước bể',
          keyPoints: [
            '1 m³ = 1000 dm³ = 1.000.000 cm³.',
            '1 dm³ = 1 lít = 1000 cm³ = 1000 ml.',
            'Mỗi đơn vị thể tích liền kề gấp/kém nhau 1000 lần (3 chữ số).',
            'Thể tích nước dâng lên khi thả hòn đá/vật rắn = Thể tích của vật rắn đó!'
          ],
          formula: 'V(nước dâng) = Diện tích đáy bể × Chiều cao nước dâng (h_dâng)',
          examples: [
            {
              problem: 'Đổi: 4.05 m³ sang dm³.',
              solution: '4.05 × 1000 = 4050 dm³ (4050 lít).'
            }
          ],
          memoryTip: '💡 "Thể tích cách nhau 1000 lần / 1 đề-xi-mét khối chính là 1 lít nước trong veo!"'
        },
        questions: [
          {
            id: 'c5l3_q1',
            question: 'Điền số thích hợp: 4.8 m³ = ... dm³',
            options: ['4800 dm³', '480 dm³', '48 dm³', '48000 dm³'],
            correctAnswer: '4800 dm³',
            hint: '4.8 × 1000 = 4800 dm³.',
            explanation: '4.8 × 1000 = 4800 dm³.'
          },
          {
            id: 'c5l3_q2',
            question: 'Điền số thích hợp: 3500 cm³ = ... dm³ (lít)',
            options: ['3.5 dm³', '35 dm³', '0.35 dm³', '350 dm³'],
            correctAnswer: '3.5 dm³',
            hint: '3500 : 1000 = 3.5 dm³.',
            explanation: '3500 : 1000 = 3.5 dm³.'
          },
          {
            id: 'c5l3_q3',
            question: 'Một bể cá hình hộp chữ nhật có kích thước lòng bể: dài 80 cm, rộng 50 cm, cao 40 cm. Mực nước trong bể cao 25 cm. Thể tích nước hiện có trong bể là:',
            options: ['100 lít (100.000 cm³)', '160 lít', '80 lít', '120 lít'],
            correctAnswer: '100 lít (100.000 cm³)',
            hint: 'V nước = 80 × 50 × 25 = 100.000 cm³ = 100 dm³ = 100 lít.',
            explanation: 'V nước = 80 × 50 × 25 = 100.000 cm³ = 100 lít.'
          },
          {
            id: 'c5l3_q4',
            question: 'Với bể cá ở câu trên (dài 80 cm, rộng 50 cm, cao 40 cm, nước đang cao 25 cm), cần đổ thêm bao nhiêu lít nước nữa để đầy bể?',
            options: ['60 lít', '100 lít', '160 lít', '40 lít'],
            correctAnswer: '60 lít',
            hint: 'Chiều cao phần chưa có nước: 40 - 25 = 15 cm. Lượng nước cần đổ: 80 × 50 × 15 = 60.000 cm³ = 60 lít.',
            explanation: 'V cần thêm = 80 × 50 × (40 - 25) = 60.000 cm³ = 60 lít.'
          },
          {
            id: 'c5l3_q5',
            question: 'Một bể kính nuôi cá hình hộp chữ nhật có diện tích đáy là 30 dm². Khi thả một hòn non bộ vào bể thì mực nước dâng cao thêm 4 cm (0.4 dm). Thể tích của hòn non bộ là:',
            options: ['12 dm³ (12 lít)', '120 dm³', '1.2 dm³', '24 dm³'],
            correctAnswer: '12 dm³ (12 lít)',
            hint: 'V hòn non bộ = S đáy × chiều cao nước dâng = 30 × 0.4 = 12 dm³.',
            explanation: 'V = 30 × 0.4 = 12 dm³ = 12 lít.'
          },
          {
            id: 'c5l3_q6',
            question: 'Một khối kim loại hình lập phương cạnh 20 cm được thả chìm hoàn toàn vào bể nước có diện tích đáy 800 cm². Mực nước trong bể dâng lên thêm:',
            options: ['10 cm', '8 cm', '5 cm', '12 cm'],
            correctAnswer: '10 cm',
            hint: 'V khối kim loại = 20 × 20 × 20 = 8000 cm³. Chiều cao dâng = 8000 : 800 = 10 cm.',
            explanation: 'h dâng = 8000 : 800 = 10 cm.'
          },
          {
            id: 'c5l3_q7',
            question: 'Một bể nước có thể tích 4.5 m³. Một vòi nước chảy vào bể mỗi phút được 75 lít nước. Hỏi sau bao lâu vòi chảy đầy bể (ban đầu bể cạn)?',
            options: ['60 phút (1 giờ)', '75 phút', '50 phút', '90 phút'],
            correctAnswer: '60 phút (1 giờ)',
            hint: '4.5 m³ = 4500 lít. Thời gian = 4500 : 75 = 60 phút = 1 giờ.',
            explanation: '4.5 m³ = 4500 dm³ = 4500 lít. Thời gian: 4500 : 75 = 60 phút.'
          },
          {
            id: 'c5l3_q8',
            question: 'Điền số thích hợp: 3 m³ 45 dm³ = ... m³',
            options: ['3.045 m³', '3.45 m³', '3450 m³', '3.0045 m³'],
            correctAnswer: '3.045 m³',
            hint: '45 dm³ = 45/1000 m³ = 0.045 m³.',
            explanation: '3 + 0.045 = 3.045 m³.'
          },
          {
            id: 'c5l3_q9',
            question: 'Một bể nước hình hộp chữ nhật có dài 2 m, rộng 1.5 m, cao 1.2 m. Hiện bể đang chứa 60% lượng nước. Lượng nước hiện có trong bể là:',
            options: ['2160 lít', '3600 lít', '1440 lít', '2500 lít'],
            correctAnswer: '2160 lít',
            hint: 'V cả bể = 2 × 1.5 × 1.2 = 3.6 m³ = 3600 lít. 60% nước = 3600 × 60 : 100 = 2160 lít.',
            explanation: 'V nước = 3600 × 60% = 2160 lít.'
          },
          {
            id: 'c5l3_q10',
            question: 'Thử thách điểm 10: Người ta đúc một khối sắt hình hộp chữ nhật có kích thước 20 cm, 10 cm, 5 cm thành một khối sắt hình lập phương. Cạnh của khối sắt hình lập phương mới là:',
            options: ['10 cm', '8 cm', '12 cm', '15 cm'],
            correctAnswer: '10 cm',
            hint: 'V = 20 × 10 × 5 = 1000 cm³. Cạnh hình lập phương = ∛1000 = 10 cm vì 10 × 10 × 10 = 1000 cm³!',
            explanation: 'V khối sắt = 20 × 10 × 5 = 1000 cm³. Vì 10 × 10 × 10 = 1000 nên cạnh hình lập phương mới là 10 cm.'
          }
        ]
      }
    ]
  },

  // CHỦ ĐỀ 6: SỐ ĐO THỜI GIAN & TOÁN CHUYỂN ĐỘNG ĐỀU
  {
    id: 'ch6',
    title: 'Chủ đề 6: Số Đo Thời Gian & Vận Tốc',
    vietnameseTitle: 'Đấu Trường Tốc Độ & Thời Gian',
    description: 'Học kỳ 2 (Bài 59 - 70) • Phép tính số đo thời gian, vận tốc, quãng đường, thời gian, hai xe ngược chiều, cùng chiều và chuyển động dòng nước.',
    semester: 2,
    color: 'from-amber-600 to-red-600',
    bgGradient: 'bg-gradient-to-r from-amber-600 to-red-600',
    icon: '🚀',
    boss: {
      id: 'boss_ch6',
      name: 'Chúa Tể Tốc Độ Chronos',
      avatar: '🏎️',
      title: 'Thần Gió Vận Tốc Vượt Thời Gian',
      maxHp: 420,
      story: 'Chronos thách thức bạn giải các bài toán đuổi bắt cùng chiều và xuôi ngược dòng sông với độ chính xác tuyệt đối!',
      rewardBadgeId: 'badge_boss_ch6',
      questions: [
        {
          id: 'b6_q1',
          question: 'Một người đi bộ với vận tốc 5 km/h trong 2.5 giờ. Quãng đường người đó đi được là:',
          options: ['12.5 km', '10 km', '15 km', '7.5 km'],
          correctAnswer: '12.5 km',
          hint: 's = v × t = 5 × 2.5 = 12.5 km.',
          explanation: 's = 5 × 2.5 = 12.5 km.'
        },
        {
          id: 'b6_q2',
          question: 'Hai xe xuất phát cùng lúc đi ngược chiều nhau trên quãng đường 180 km với vận tốc 50 km/h và 40 km/h. Sau bao lâu 2 xe gặp nhau?',
          options: ['2 giờ', '2.5 giờ', '1.8 giờ', '3 giờ'],
          correctAnswer: '2 giờ',
          hint: 't = s : (v1 + v2) = 180 : (50 + 40) = 180 : 90 = 2 giờ.',
          explanation: 't = 180 : (50 + 40) = 2 giờ.'
        },
        {
          id: 'b6_q3',
          question: 'Vận tốc thuyền là 18 km/h, dòng nước chảy 2 km/h. Vận tốc thuyền khi xuôi dòng là:',
          options: ['20 km/h', '16 km/h', '22 km/h', '18 km/h'],
          correctAnswer: '20 km/h',
          hint: 'V xuôi = V thực + V nước = 18 + 2 = 20 km/h.',
          explanation: 'V xuôi = 18 + 2 = 20 km/h.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch6_l1',
        chapterId: 'ch6',
        title: 'Các phép tính Số đo thời gian',
        subtitle: 'Cộng, trừ, nhân, chia số đo thời gian và đổi đơn vị',
        levelNumber: 16,
        icon: '⏱️',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'Phép tính Số đo thời gian',
          keyPoints: [
            '1 ngày = 24 giờ | 1 giờ = 60 phút | 1 phút = 60 giây.',
            'Cộng/trừ số đo thời gian: Đặt tính thẳng cột từng đơn vị, nếu số phút/giây >= 60 thì đổi sang đơn vị lớn hơn liền kề.',
            'Đổi ra số thập phân của giờ: Số phút : 60 (ví dụ: 15 phút = 0.25 giờ, 30 phút = 0.5 giờ, 45 phút = 0.75 giờ).'
          ],
          formula: '45 phút = 0.75 giờ | 30 phút = 0.5 giờ | 15 phút = 0.25 giờ | 12 phút = 0.2 giờ',
          examples: [
            {
              problem: 'Tính: 3 giờ 40 phút + 2 giờ 35 phút',
              solution: '5 giờ 75 phút = 6 giờ 15 phút (vì 75 phút = 1 giờ 15 phút).'
            }
          ],
          memoryTip: '💡 "Hễ thấy phút giây qua 60 / Đổi sang giờ phút tươi cười điểm mười!"'
        },
        questions: [
          {
            id: 'c6l1_q1',
            question: 'Tính: 4 giờ 35 phút + 3 giờ 40 phút = ?',
            options: ['8 giờ 15 phút', '7 giờ 75 phút', '8 giờ 25 phút', '7 giờ 15 phút'],
            correctAnswer: '8 giờ 15 phút',
            hint: '4h 35p + 3h 40p = 7h 75p = 8 giờ 15 phút.',
            explanation: '7 giờ 75 phút = 8 giờ 15 phút.'
          },
          {
            id: 'c6l1_q2',
            question: 'Tính: 8 giờ 15 phút - 3 giờ 45 phút = ?',
            options: ['4 giờ 30 phút', '5 giờ 30 phút', '4 giờ 45 phút', '5 giờ 15 phút'],
            correctAnswer: '4 giờ 30 phút',
            hint: 'Đổi 8 giờ 15 phút = 7 giờ 75 phút. Lấy 7h 75p - 3h 45p = 4 giờ 30 phút.',
            explanation: '7 giờ 75 phút - 3 giờ 45 phút = 4 giờ 30 phút.'
          },
          {
            id: 'c6l1_q3',
            question: 'Tính: 1 giờ 25 phút × 3 = ?',
            options: ['4 giờ 15 phút', '3 giờ 75 phút', '4 giờ 25 phút', '3 giờ 15 phút'],
            correctAnswer: '4 giờ 15 phút',
            hint: '1h 25p × 3 = 3h 75p = 4 giờ 15 phút.',
            explanation: '3 giờ 75 phút = 4 giờ 15 phút.'
          },
          {
            id: 'c6l1_q4',
            question: 'Tính: 7 giờ 30 phút : 5 = ?',
            options: ['1 giờ 30 phút', '1 giờ 15 phút', '1 giờ 45 phút', '1.5 giờ'],
            correctAnswer: '1 giờ 30 phút',
            hint: '7 giờ : 5 = 1 giờ dư 2 giờ (120 phút). 120 + 30 = 150 phút : 5 = 30 phút => 1 giờ 30 phút.',
            explanation: '7h 30p : 5 = 450 phút : 5 = 90 phút = 1 giờ 30 phút.'
          },
          {
            id: 'c6l1_q5',
            question: 'Đổi 2 giờ 18 phút ra số thập phân có đơn vị giờ:',
            options: ['2.3 giờ', '2.18 giờ', '2.25 giờ', '2.5 giờ'],
            correctAnswer: '2.3 giờ',
            hint: '18 phút = 18/60 giờ = 3/10 giờ = 0.3 giờ. Kết quả: 2.3 giờ.',
            explanation: '18 : 60 = 0.3 => 2 + 0.3 = 2.3 giờ.'
          },
          {
            id: 'c6l1_q6',
            question: 'Đổi 3.75 giờ ra giờ và phút:',
            options: ['3 giờ 45 phút', '3 giờ 75 phút', '3 giờ 30 phút', '3 giờ 15 phút'],
            correctAnswer: '3 giờ 45 phút',
            hint: '0.75 × 60 = 45 phút => 3 giờ 45 phút.',
            explanation: '0.75 giờ = 0.75 × 60 = 45 phút => 3 giờ 45 phút.'
          },
          {
            id: 'c6l1_q7',
            question: 'Một người thợ làm việc từ 7 giờ 30 phút đến 11 giờ 45 phút, giữa giờ nghỉ 25 phút. Thời gian người đó làm việc thực tế là:',
            options: ['3 giờ 50 phút', '4 giờ 15 phút', '3 giờ 45 phút', '4 giờ'],
            correctAnswer: '3 giờ 50 phút',
            hint: 'Tổng thời gian: 11h 45p - 7h 30p = 4h 15p. Trừ nghỉ: 4h 15p - 25p = 3h 75p - 25p = 3 giờ 50 phút.',
            explanation: '4 giờ 15 phút - 25 phút = 3 giờ 50 phút.'
          },
          {
            id: 'c6l1_q8',
            question: 'Một vận động viên bơi hoàn thành 4 vòng hồ bơi hết 9 phút 20 giây. Thời gian trung bình bơi 1 vòng là:',
            options: ['2 phút 20 giây', '2 phút 15 giây', '2 phút 30 giây', '1 phút 45 giây'],
            correctAnswer: '2 phút 20 giây',
            hint: '9 phút 20 giây = 560 giây. 560 : 4 = 140 giây = 2 phút 20 giây.',
            explanation: '560 giây : 4 = 140 giây = 2 phút 20 giây.'
          },
          {
            id: 'c6l1_q9',
            question: 'Một máy in in 500 trang sách hết 12 phút 30 giây. Thời gian in 1000 trang sách như thế là:',
            options: ['25 phút', '24 phút 60 giây', '26 phút', '24 phút'],
            correctAnswer: '25 phút',
            hint: '1000 trang gấp đôi 500 trang: 12 phút 30 giây × 2 = 24 phút 60 giây = 25 phút.',
            explanation: '12 phút 30 giây × 2 = 25 phút.'
          },
          {
            id: 'c6l1_q10',
            question: 'Thử thách điểm 10: Tính giá trị biểu thức: A = (4 giờ 15 phút + 3 giờ 45 phút) : 4 × 3 - 2 giờ 30 phút',
            options: ['3 giờ 30 phút', '4 giờ', '3 giờ 15 phút', '2 giờ 45 phút'],
            correctAnswer: '3 giờ 30 phút',
            hint: 'Trong ngoặc: 4h 15p + 3h 45p = 8 giờ. 8 giờ : 4 × 3 = 6 giờ. 6 giờ - 2 giờ 30 phút = 3 giờ 30 phút.',
            explanation: '8 giờ : 4 × 3 - 2h 30p = 6 giờ - 2 giờ 30 phút = 3 giờ 30 phút.'
          }
        ]
      },
      {
        id: 'ch6_l2',
        chapterId: 'ch6',
        title: 'Vận Tốc, Quãng Đường & Thời Gian',
        subtitle: 'Tam giác công thức s = v × t, v = s : t, t = s : v',
        levelNumber: 17,
        icon: '🚗',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Vận tốc - Quãng đường - Thời gian',
          keyPoints: [
            'Vận tốc v = s : t (đơn vị: km/h hoặc m/phút, m/giây).',
            'Quãng đường s = v × t (đơn vị: km hoặc m).',
            'Thời gian t = s : v (đơn vị: giờ hoặc phút, giây).',
            'Đổi m/giây sang km/h: Nhân với 3.6 (ví dụ: 10 m/s = 36 km/h).'
          ],
          formula: 's = v × t | v = s : t | t = s : v',
          examples: [
            {
              problem: 'Một ô tô chạy quãng đường 120 km hết 2.5 giờ. Vận tốc là bao nhiêu?',
              solution: 'v = 120 : 2.5 = 48 km/h.'
            }
          ],
          memoryTip: '💡 "Vận tốc lấy quãng chia thời / Quãng đường vận tốc nhân thời gian ngay!"'
        },
        questions: [
          {
            id: 'c6l2_q1',
            question: 'Một xe máy đi quãng đường 90 km hết 2 giờ. Vận tốc của xe máy là:',
            options: ['45 km/h', '40 km/h', '50 km/h', '180 km/h'],
            correctAnswer: '45 km/h',
            hint: 'v = s : t = 90 : 2 = 45 km/h.',
            explanation: 'v = 90 : 2 = 45 km/h.'
          },
          {
            id: 'c6l2_q2',
            question: 'Một ô tô chạy với vận tốc 54 km/h. Quãng đường ô tô đi được trong 3.5 giờ là:',
            options: ['189 km', '162 km', '190 km', '175 km'],
            correctAnswer: '189 km',
            hint: 's = v × t = 54 × 3.5 = 189 km.',
            explanation: 's = 54 × 3.5 = 189 km.'
          },
          {
            id: 'c6l2_q3',
            question: 'Một máy bay bay với vận tốc 720 km/h. Thời gian máy bay bay hết quãng đường 1800 km là:',
            options: ['2.5 giờ (2 giờ 30 phút)', '2 giờ', '3 giờ', '2.25 giờ'],
            correctAnswer: '2.5 giờ (2 giờ 30 phút)',
            hint: 't = s : v = 1800 : 720 = 2.5 giờ.',
            explanation: 't = 1800 : 720 = 2.5 giờ = 2 giờ 30 phút.'
          },
          {
            id: 'c6l2_q4',
            question: 'Một người đi bộ với vận tốc 1.2 m/giây. Vận tốc của người đó tính theo km/h là:',
            options: ['4.32 km/h', '3.6 km/h', '4.5 km/h', '7.2 km/h'],
            correctAnswer: '4.32 km/h',
            hint: '1.2 × 3.6 = 4.32 km/h (hoặc 1.2 × 3600 : 1000 = 4.32 km/h).',
            explanation: '1.2 × 3.6 = 4.32 km/h.'
          },
          {
            id: 'c6l2_q5',
            question: 'Một xe đạp đi quãng đường 18 km với vận tốc 12 km/h. Thời gian xe đạp đi hết quãng đường là:',
            options: ['1 giờ 30 phút', '1 giờ 20 phút', '1 giờ 45 phút', '1.2 giờ'],
            correctAnswer: '1 giờ 30 phút',
            hint: 't = 18 : 12 = 1.5 giờ = 1 giờ 30 phút.',
            explanation: 't = 18 : 12 = 1.5 giờ = 1 giờ 30 phút.'
          },
          {
            id: 'c6l2_q6',
            question: 'Ô tô đi từ A lúc 7 giờ 15 phút và đến B lúc 10 giờ cùng ngày. Biết quãng đường AB dài 132 km, vận tốc của ô tô là:',
            options: ['48 km/h', '50 km/h', '44 km/h', '52 km/h'],
            correctAnswer: '48 km/h',
            hint: 'Thời gian đi: 10h - 7h 15p = 2 giờ 45 phút = 2.75 giờ. Vận tốc: 132 : 2.75 = 48 km/h.',
            explanation: 't = 2.75 giờ => v = 132 : 2.75 = 48 km/h.'
          },
          {
            id: 'c6l2_q7',
            question: 'Một con ong mật bay với vận tốc 8.4 km/h. Quãng đường ong bay được trong 15 phút là:',
            options: ['2.1 km', '21 km', '1.26 km', '2.5 km'],
            correctAnswer: '2.1 km',
            hint: '15 phút = 0.25 giờ. s = 8.4 × 0.25 = 2.1 km.',
            explanation: 's = 8.4 × 0.25 = 2.1 km.'
          },
          {
            id: 'c6l2_q8',
            question: 'Quãng đường AB dài 99 km. Một ô tô khởi hành từ A lúc 8 giờ 30 phút với vận tốc 45 km/h. Dọc đường ô tô nghỉ 20 phút. Ô tô đến B lúc:',
            options: ['11 giờ 2 phút', '10 giờ 42 phút', '11 giờ', '11 giờ 15 phút'],
            correctAnswer: '11 giờ 2 phút',
            hint: 'Thời gian chạy xe: 99 : 45 = 2.2 giờ = 2 giờ 12 phút. Thời gian đến B: 8h 30p + 2h 12p + 20p = 11 giờ 2 phút.',
            explanation: '99 : 45 = 2 giờ 12 phút. Đến lúc: 8h 30p + 2h 12p + 20p = 11 giờ 2 phút.'
          },
          {
            id: 'c6l2_q9',
            question: 'Vận tốc của một người đi xe đạp bằng 1/3 vận tốc ô tô. Biết ô tô đi 120 km trong 2 giờ. Quãng đường người đi xe đạp đi trong 1.5 giờ là:',
            options: ['30 km', '20 km', '40 km', '25 km'],
            correctAnswer: '30 km',
            hint: 'Vận tốc ô tô = 120 : 2 = 60 km/h. Vận tốc xe đạp = 60 : 3 = 20 km/h. Quãng đường = 20 × 1.5 = 30 km.',
            explanation: 'v(xe đạp) = 60/3 = 20 km/h. s = 20 × 1.5 = 30 km.'
          },
          {
            id: 'c6l2_q10',
            question: 'Thử thách điểm 10: Một người đi từ A đến B: nửa quãng đường đầu đi với vận tốc 40 km/h, nửa quãng đường sau đi với vận tốc 60 km/h. Vận tốc trung bình trên cả quãng đường là:',
            options: ['48 km/h', '50 km/h', '45 km/h', '52 km/h'],
            correctAnswer: '48 km/h',
            hint: 'V trung bình = Tổng quãng đường : Tổng thời gian = 2s : (s/40 + s/60) = 2 : (5/120) = 2 × 24 = 48 km/h (không phải lấy trung bình cộng 50 km/h!).',
            explanation: 'V_tb = 2 / (1/40 + 1/60) = 2 / (5/120) = 48 km/h.'
          }
        ]
      },
      {
        id: 'ch6_l3',
        chapterId: 'ch6',
        title: 'Chuyển Động Ngược Chiều & Cùng Chiều',
        subtitle: 'Thời gian gặp nhau, thời gian đuổi kịp và toán chuyển động dòng nước',
        levelNumber: 18,
        icon: '↔️',
        xpReward: 45,
        coinReward: 25,
        theory: {
          title: 'Hai xe ngược chiều & cùng chiều đuổi nhau',
          keyPoints: [
            'Chuyển động ngược chiều (gặp nhau): Thời gian gặp t = Quãng đường : (v1 + v2) (Tổng vận tốc).',
            'Chuyển động cùng chiều (đuổi kịp): Thời gian đuổi kịp t = Khoảng cách ban đầu : (v1 - v2) (Hiệu vận tốc).',
            'Toán xuôi/ngược dòng: V_xuôi = V_thực + V_nước | V_ngược = V_thực - V_nước | V_nước = (V_xuôi - V_ngược) : 2.'
          ],
          formula: 'Ngược chiều: t = s / (v1 + v2) | Cùng chiều: t = d / (v1 - v2)',
          examples: [
            {
              problem: 'Hai xe cách nhau 100 km đi ngược chiều, v1 = 30 km/h, v2 = 20 km/h. Sau bao lâu gặp nhau?',
              solution: 't = 100 : (30 + 20) = 100 : 50 = 2 giờ.'
            }
          ],
          memoryTip: '💡 "Đi ngược chiều cộng vận tốc / Đi cùng chiều trừ vận tốc để tìm thời gian!"'
        },
        questions: [
          {
            id: 'c6l3_q1',
            question: 'Quãng đường AB dài 120 km. Ô tô đi từ A đến B với v1 = 50 km/h, xe máy đi từ B về A với v2 = 30 km/h. Hai xe khởi hành cùng lúc thì gặp nhau sau:',
            options: ['1.5 giờ (1 giờ 30 phút)', '2 giờ', '1.25 giờ', '1.75 giờ'],
            correctAnswer: '1.5 giờ (1 giờ 30 phút)',
            hint: 't = 120 : (50 + 30) = 120 : 80 = 1.5 giờ.',
            explanation: 't = 120 : (50 + 30) = 1.5 giờ = 1 giờ 30 phút.'
          },
          {
            id: 'c6l3_q2',
            question: 'Lúc 6 giờ sáng, một người đi xe đạp từ A với v = 12 km/h. Đến 8 giờ, một xe máy cũng từ A đuổi theo với v = 36 km/h. Xe máy đuổi kịp xe đạp lúc:',
            options: ['9 giờ sáng', '8 giờ 30 phút', '9 giờ 30 phút', '10 giờ sáng'],
            correctAnswer: '9 giờ sáng',
            hint: 'Xe đạp đi trước 2 giờ: 12 × 2 = 24 km. Thời gian đuổi kịp: 24 : (36 - 12) = 24 : 24 = 1 giờ. Đuổi kịp lúc: 8h + 1h = 9 giờ.',
            explanation: 'Khoảng cách trước = 24 km. t = 24 : (36 - 12) = 1 giờ => Đuổi kịp lúc 8h + 1h = 9 giờ.'
          },
          {
            id: 'c6l3_q3',
            question: 'Một ca nô xuôi dòng từ A đến B với vận tốc 24 km/h và ngược dòng từ B về A với vận tốc 18 km/h. Vận tốc của dòng nước là:',
            options: ['3 km/h', '6 km/h', '2 km/h', '4 km/h'],
            correctAnswer: '3 km/h',
            hint: 'V nước = (V xuôi - V ngược) : 2 = (24 - 18) : 2 = 3 km/h.',
            explanation: 'V nước = (24 - 18) : 2 = 3 km/h.'
          },
          {
            id: 'c6l3_q4',
            question: 'Một chiếc thuyền đi xuôi dòng với vận tốc 15 km/h, vận tốc dòng nước là 2 km/h. Vận tốc thực của thuyền khi nước lặng là:',
            options: ['13 km/h', '17 km/h', '11 km/h', '14 km/h'],
            correctAnswer: '13 km/h',
            hint: 'V thực = V xuôi - V nước = 15 - 2 = 13 km/h.',
            explanation: 'V thực = 15 - 2 = 13 km/h.'
          },
          {
            id: 'c6l3_q5',
            question: 'Hai thành phố A và B cách nhau 150 km. Lúc 7 giờ, một xe máy đi từ A đến B với v = 35 km/h, cùng lúc một ô tô đi từ B về A với v = 65 km/h. Hai xe gặp nhau lúc:',
            options: ['8 giờ 30 phút', '8 giờ 45 phút', '9 giờ', '8 giờ 15 phút'],
            correctAnswer: '8 giờ 30 phút',
            hint: 'Thời gian đi để gặp nhau: 150 : (35 + 65) = 150 : 100 = 1.5 giờ = 1 giờ 30 phút. Gặp nhau lúc: 7h + 1h 30p = 8 giờ 30 phút.',
            explanation: 't = 150 : 100 = 1.5 giờ. Gặp nhau lúc 7h + 1h 30p = 8 giờ 30 phút.'
          },
          {
            id: 'c6l3_q6',
            question: 'Một người đi bộ khởi hành lúc 6 giờ với v = 5 km/h. Lúc 7 giờ 30 phút, một người đi xe đạp đuổi theo với v = 15 km/h. Địa điểm người đi xe đạp đuổi kịp người đi bộ cách điểm xuất phát:',
            options: ['11.25 km', '7.5 km', '15 km', '10 km'],
            correctAnswer: '11.25 km',
            hint: 'Người đi bộ đi trước 1.5 giờ: 5 × 1.5 = 7.5 km. Thời gian xe đạp đuổi kịp: 7.5 : (15 - 5) = 0.75 giờ. Cách điểm xuất phát: 15 × 0.75 = 11.25 km.',
            explanation: 'Khoảng cách đuổi = 7.5 km. t = 7.5 : 10 = 0.75 giờ. Quãng đường = 15 × 0.75 = 11.25 km.'
          },
          {
            id: 'c6l3_q7',
            question: 'Một cụm bèo trôi xuôi dòng sông từ A đến B dài 12 km hết 4 giờ. Vận tốc dòng nước là:',
            options: ['3 km/h', '4 km/h', '2 km/h', '1.5 km/h'],
            correctAnswer: '3 km/h',
            hint: 'Bèo trôi với chính vận tốc của dòng nước: v = 12 : 4 = 3 km/h.',
            explanation: 'Vận tốc bèo trôi = Vận tốc dòng nước = 12 : 4 = 3 km/h.'
          },
          {
            id: 'c6l3_q8',
            question: 'Hai ô tô xuất phát cùng lúc từ A và B cách nhau 60 km, cùng đi về phía C (B nằm giữa A và C). Vận tốc xe từ A là 60 km/h, xe từ B là 40 km/h. Sau bao lâu xe đi từ A đuổi kịp xe đi từ B?',
            options: ['3 giờ', '2 giờ', '2.5 giờ', '4 giờ'],
            correctAnswer: '3 giờ',
            hint: 't = 60 : (60 - 40) = 60 : 20 = 3 giờ.',
            explanation: 't = 60 : (60 - 40) = 3 giờ.'
          },
          {
            id: 'c6l3_q9',
            question: 'Một con tàu hỏa chạy qua một cột điện ven đường hết 12 giây với vận tốc 54 km/h (15 m/s). Chiều dài của con tàu là:',
            options: ['180 m', '150 m', '200 m', '120 m'],
            correctAnswer: '180 m',
            hint: '54 km/h = 15 m/s. Khi tàu qua cột điện, quãng đường đi bằng đúng chiều dài tàu: s = 15 × 12 = 180 m.',
            explanation: '54 km/h = 15 m/s. Chiều dài tàu = 15 × 12 = 180 m.'
          },
          {
            id: 'c6l3_q10',
            question: 'Thử thách điểm 10: Một ca nô xuôi dòng từ A đến B hết 2 giờ và ngược dòng từ B về A hết 3 giờ. Biết khúc sông AB dài 60 km. Vận tốc của dòng nước là:',
            options: ['5 km/h', '10 km/h', '2.5 km/h', '4 km/h'],
            correctAnswer: '5 km/h',
            hint: 'V xuôi = 60 : 2 = 30 km/h. V ngược = 60 : 3 = 20 km/h. V nước = (30 - 20) : 2 = 5 km/h!',
            explanation: 'V xuôi = 30 km/h, V ngược = 20 km/h => V nước = (30 - 20) : 2 = 5 km/h.'
          }
        ]
      }
    ]
  },

  // CHỦ ĐỀ 7: TỔNG ÔN TẬP CUỐI NĂM & LUYỆN ĐỀ THI LỚP 6 CLC
  {
    id: 'ch7',
    title: 'Chủ đề 7: Chinh Phục Điểm 10 Lớp 5 & Thi Lớp 6',
    vietnameseTitle: 'Đỉnh Núi Trí Tuệ & Tuyển Sinh CLC',
    description: 'Tổng kết toàn diện cả năm • 10 chuyên đề tinh hoa ôn tập điểm 10 và đề thi thử vào các trường chất lượng cao (Ams, Archimedes, Lương Thế Vinh).',
    semester: 2,
    color: 'from-yellow-500 to-amber-600',
    bgGradient: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    icon: '🏆',
    boss: {
      id: 'boss_ch7',
      name: 'Rồng Thần Trí Tuệ Grandis',
      avatar: '🐉',
      title: 'Đại Thần Rồng Trí Tuệ Tối Cao',
      maxHp: 500,
      story: 'Grandis là thử thách tối thượng kiểm tra toàn diện năng lực Toán học lớp 5 của bạn. Hãy thể hiện phong độ của một thủ khoa!',
      rewardBadgeId: 'badge_boss_ch7',
      questions: [
        {
          id: 'b7_q1',
          question: 'Tính nhanh: 1/2 + 1/6 + 1/12 + 1/20 + 1/30 = ?',
          options: ['5/6', '4/5', '1', '6/7'],
          correctAnswer: '5/6',
          hint: '1/(1×2) + 1/(2×3) + 1/(3×4) + 1/(4×5) + 1/(5×6) = 1 - 1/6 = 5/6.',
          explanation: 'Tách: (1 - 1/2) + (1/2 - 1/3) + ... + (1/5 - 1/6) = 1 - 1/6 = 5/6.'
        },
        {
          id: 'b7_q2',
          question: 'Tìm x biết: (x + 1) + (x + 4) + (x + 7) + ... + (x + 28) = 175',
          options: ['x = 3', 'x = 4', 'x = 5', 'x = 2'],
          correctAnswer: 'x = 3',
          hint: 'Dãy có 10 số hạng: 10x + (1 + 4 + 7 + ... + 28) = 10x + 145 = 175 => 10x = 30 => x = 3.',
          explanation: 'Tổng số tự nhiên = (1 + 28) × 10 : 2 = 145. Ta có: 10x + 145 = 175 => x = 3.'
        },
        {
          id: 'b7_q3',
          question: 'Vừa gà vừa chó có tất cả 36 con và 100 chân. Hỏi có bao nhiêu con chó?',
          options: ['14 con chó', '22 con chó', '16 con chó', '12 con chó'],
          correctAnswer: '14 con chó',
          hint: 'Giả sử 36 con đều là gà: 36 × 2 = 72 chân. Thiếu 28 chân. Số chó = 28 : (4 - 2) = 14 con.',
          explanation: 'Số chó = (100 - 36 × 2) : 2 = 28 : 2 = 14 con chó (gà = 22 con).'
        }
      ]
    },
    lessons: [
      {
        id: 'ch7_l1',
        chapterId: 'ch7',
        title: 'Tổng ôn tập 4 Phép tính & Số học lớp 5',
        subtitle: 'Hệ thống hóa toàn bộ kiến thức phân số, số thập phân, tỉ số và đại lượng',
        levelNumber: 19,
        icon: '📚',
        xpReward: 50,
        coinReward: 30,
        theory: {
          title: 'Tổng ôn Số học Lớp 5',
          keyPoints: [
            'Thứ tự thực hiện: Trong ngoặc trước, nhân/chia trước, cộng/trừ sau.',
            'Tính chất phân phối: a × b + a × c = a × (b + c).',
            'Tìm thành phần chưa biết: Muốn tìm thừa số chưa biết lấy tích chia thừa số đã biết; Số bị trừ = Hiệu + Số trừ; Số bị chia = Thương × Số chia.'
          ],
          formula: 'a × b + a × c = a × (b + c) | a : c + b : c = (a + b) : c',
          examples: [
            {
              problem: 'Tính nhanh: 3.75 × 4.8 + 3.75 × 5.2',
              solution: '3.75 × (4.8 + 5.2) = 3.75 × 10 = 37.5.'
            }
          ],
          memoryTip: '💡 "Làm bài cẩn thận từng bước / Đọc kỹ đề bài tự tin 10 điểm tuyệt đối!"'
        },
        questions: [
          {
            id: 'c7l1_q1',
            question: 'Tính: 1.25 × 0.8 × 4 × 25 = ?',
            options: ['100', '10', '1000', '80'],
            correctAnswer: '100',
            hint: '(1.25 × 0.8) × (4 × 25) = 1 × 100 = 100.',
            explanation: '(1.25 × 0.8) = 1; (4 × 25) = 100 => 1 × 100 = 100.'
          },
          {
            id: 'c7l1_q2',
            question: 'Tính giá trị biểu thức: 45.6 : (1.2 + 2.8) × 2.5 = ?',
            options: ['28.5', '2.85', '285', '30'],
            correctAnswer: '28.5',
            hint: '1.2 + 2.8 = 4. 45.6 : 4 = 11.4. 11.4 × 2.5 = 28.5.',
            explanation: '45.6 : 4 × 2.5 = 11.4 × 2.5 = 28.5.'
          },
          {
            id: 'c7l1_q3',
            question: 'Tìm x biết: x × 0.75 + x × 0.25 = 18.6',
            options: ['x = 18.6', 'x = 186', 'x = 1.86', 'x = 9.3'],
            correctAnswer: 'x = 18.6',
            hint: 'x × (0.75 + 0.25) = x × 1 = 18.6 => x = 18.6.',
            explanation: 'x × 1 = 18.6 => x = 18.6.'
          },
          {
            id: 'c7l1_q4',
            question: 'Số trung bình cộng của 4 số: 12.5; 15.3; 18.2 và 14.0 là:',
            options: ['15', '16', '14.5', '15.5'],
            correctAnswer: '15',
            hint: 'Tổng = 12.5 + 15.3 + 18.2 + 14 = 60. TBC = 60 : 4 = 15.',
            explanation: 'TBC = (12.5 + 15.3 + 18.2 + 14.0) : 4 = 60 : 4 = 15.'
          },
          {
            id: 'c7l1_q5',
            question: 'Tìm hai số khi biết Tổng là 135 và Tỉ số là 2/3:',
            options: ['54 và 81', '50 và 85', '60 và 75', '45 và 90'],
            correctAnswer: '54 và 81',
            hint: 'Tổng số phần = 2 + 3 = 5. Số bé = 135 : 5 × 2 = 54. Số lớn = 135 - 54 = 81.',
            explanation: 'Số bé = 135 : 5 × 2 = 54. Số lớn = 135 - 54 = 81.'
          },
          {
            id: 'c7l1_q6',
            question: 'Tìm hai số khi biết Hiệu là 42 và Tỉ số là 5/2:',
            options: ['70 và 28', '80 và 38', '60 và 18', '75 và 33'],
            correctAnswer: '70 và 28',
            hint: 'Hiệu số phần = 5 - 2 = 3. Số bé = 42 : 3 × 2 = 28. Số lớn = 28 + 42 = 70.',
            explanation: 'Số bé = 42 : 3 × 2 = 28. Số lớn = 28 + 42 = 70.'
          },
          {
            id: 'c7l1_q7',
            question: 'Tìm một phân số biết nếu cộng thêm 5 đơn vị vào tử số ta được phân số bằng 1, còn nếu bớt 1 đơn vị ở tử số ta được phân số bằng 1/2:',
            options: ['7/12', '5/10', '6/11', '8/13'],
            correctAnswer: '7/12',
            hint: 'Tử số kém mẫu số 5 đơn vị (mẫu = tử + 5). Khi bớt 1 ở tử: (tử - 1)/mẫu = 1/2 => mẫu = 2(tử - 1). Ta có: tử + 5 = 2(tử - 1) => tử = 7, mẫu = 12.',
            explanation: 'Tử = 7, mẫu = 12 => Phân số là 7/12.'
          },
          {
            id: 'c7l1_q8',
            question: 'Tính nhanh: 19.8 × 2 + 19.8 × 7 + 19.8 = ?',
            options: ['198', '19.8', '1980', '178.2'],
            correctAnswer: '198',
            hint: '19.8 × (2 + 7 + 1) = 19.8 × 10 = 198.',
            explanation: '19.8 × (2 + 7 + 1) = 19.8 × 10 = 198.'
          },
          {
            id: 'c7l1_q9',
            question: 'Một khu đất hình chữ nhật có chu vi 280 m. Chiều dài hơn chiều rộng 20 m. Diện tích khu đất đó tính theo héc-ta (ha) là:',
            options: ['0.48 ha (4800 m²)', '4.8 ha', '0.048 ha', '48 ha'],
            correctAnswer: '0.48 ha (4800 m²)',
            hint: 'Nửa chu vi = 140 m. Chiều dài = (140 + 20) : 2 = 80 m. Chiều rộng = 60 m. Diện tích = 80 × 60 = 4800 m² = 0.48 ha.',
            explanation: 'Dài 80 m, Rộng 60 m. Diện tích = 4800 m² = 0.48 ha.'
          },
          {
            id: 'c7l1_q10',
            question: 'Thử thách điểm 10: Tính nhanh giá trị biểu thức: A = 0.18 × 1230 + 0.9 × 4567 × 2 + 3 × 5310 × 0.6',
            options: ['18000', '1800', '9000', '180000'],
            correctAnswer: '18000',
            hint: '0.18 × 1230 = 1.8 × 123; 0.9 × 2 = 1.8 × 4567; 3 × 0.6 = 1.8 × 5310. Đặt 1.8 làm thừa số chung: 1.8 × (123 + 4567 + 5310) = 1.8 × 10000 = 18000!',
            explanation: 'Biến đổi về thừa số chung 1.8: 1.8 × (123 + 4567 + 5310) = 1.8 × 10000 = 18000.'
          }
        ]
      },
      {
        id: 'ch7_l2',
        chapterId: 'ch7',
        title: '10 Dạng Toán Tư Duy Nâng Cao Tuyển Sinh Lớp 6',
        subtitle: 'Giả thiết tạm, tính ngược từ cuối, dãy số cách đều, trồng cây, công việc chung',
        levelNumber: 20,
        icon: '👑',
        xpReward: 60,
        coinReward: 35,
        theory: {
          title: 'Các phương pháp giải Toán tư duy Lớp 5',
          keyPoints: [
            'Phương pháp Giả thiết tạm: Tạm giả sử tất cả các đối tượng đều thuộc 1 loại để tìm độ chênh lệch.',
            'Phương pháp Tính ngược từ cuối (Sơ đồ đoạn thẳng): Đi từ kết quả cuối cùng suy ngược lại ban đầu.',
            'Phương pháp Sai phân / Quy luật dãy số: Nhận diện cấu trúc số hạng tổng quát.'
          ],
          formula: 'Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1 | Tổng = (Số đầu + Số cuối) × Số số hạng : 2',
          examples: [
            {
              problem: 'Tính tổng: 1 + 2 + 3 + ... + 100',
              solution: 'Tổng = (1 + 100) × 100 : 2 = 5050.'
            }
          ],
          memoryTip: '💡 "Đọc kỹ giả thiết - Vẽ sơ đồ tư duy - Làm chủ mọi dạng toán vào trường Chuyên!"'
        },
        questions: [
          {
            id: 'c7l2_q1',
            question: 'Tính tổng của 50 số chẵn liên tiếp bắt đầu từ 2: S = 2 + 4 + 6 + ... + 100',
            options: ['2550', '2500', '2600', '5050'],
            correctAnswer: '2550',
            hint: 'S = (2 + 100) × 50 : 2 = 102 × 25 = 2550.',
            explanation: 'S = (2 + 100) × 50 : 2 = 2550.'
          },
          {
            id: 'c7l2_q2',
            question: 'Vừa gà vừa chó có tất cả 36 con và 100 chân. Hỏi có bao nhiêu con gà?',
            options: ['22 con gà', '14 con gà', '24 con gà', '20 con gà'],
            correctAnswer: '22 con gà',
            hint: 'Số chó = (100 - 36 × 2) : 2 = 14 con. Số gà = 36 - 14 = 22 con.',
            explanation: 'Số gà = 36 - 14 = 22 con.'
          },
          {
            id: 'c7l2_q3',
            question: 'Một người mang cam đi bán. Lần 1 bán 1/2 số cam và 1 quả. Lần 2 bán 1/2 số cam còn lại và 1 quả. Lần 3 bán 1/2 số cam còn lại sau lần 2 và 1 quả thì vừa hết. Số cam ban đầu là:',
            options: ['14 quả', '16 quả', '12 quả', '18 quả'],
            correctAnswer: '14 quả',
            hint: 'Tính ngược: Trước lần 3 có: (0 + 1) × 2 = 2 quả. Trước lần 2 có: (2 + 1) × 2 = 6 quả. Ban đầu có: (6 + 1) × 2 = 14 quả.',
            explanation: 'Tính ngược từ cuối: ( (0+1)×2 + 1 )×2 + 1 )×2 = (2+1)×2 = 6 => (6+1)×2 = 14 quả.'
          },
          {
            id: 'c7l2_q4',
            question: 'Trên một đoạn đường dài 100 m, người ta trồng cây cả hai bên đường, cứ cách 5 m trồng 1 cây (ở cả 2 đầu đường đều có cây). Tổng số cây trồng được là:',
            options: ['42 cây', '21 cây', '40 cây', '20 cây'],
            correctAnswer: '42 cây',
            hint: 'Số cây 1 bên = (100 : 5) + 1 = 21 cây. Hai bên đường = 21 × 2 = 42 cây.',
            explanation: 'Một bên: 100 : 5 + 1 = 21 cây. Hai bên: 21 × 2 = 42 cây.'
          },
          {
            id: 'c7l2_q5',
            question: 'Hai người cùng làm chung một công việc thì sau 6 giờ sẽ xong. Nếu người thứ nhất làm một mình mất 10 giờ mới xong. Hỏi người thứ hai làm một mình mất mấy giờ?',
            options: ['15 giờ', '12 giờ', '16 giờ', '14 giờ'],
            correctAnswer: '15 giờ',
            hint: '1 giờ cả 2 người làm 1/6 công việc; người 1 làm 1/10 công việc. 1 giờ người 2 làm: 1/6 - 1/10 = 4/60 = 1/15 công việc => Cần 15 giờ.',
            explanation: 'Trong 1 giờ người thứ 2 làm được: 1/6 - 1/10 = 1/15 công việc. Vậy người 2 làm 1 mình hết 15 giờ.'
          },
          {
            id: 'c7l2_q6',
            question: 'Một đoàn tàu dài 150 m chạy qua một cây cầu dài 450 m hết 30 giây. Vận tốc của đoàn tàu là:',
            options: ['72 km/h (20 m/s)', '54 km/h', '60 km/h', '90 km/h'],
            correctAnswer: '72 km/h (20 m/s)',
            hint: 'Quãng đường đi = 150 + 450 = 600 m. Vận tốc = 600 : 30 = 20 m/s = 20 × 3.6 = 72 km/h.',
            explanation: 's = 150 + 450 = 600 m => v = 600 : 30 = 20 m/s = 72 km/h.'
          },
          {
            id: 'c7l2_q7',
            question: 'Để đánh số trang một cuốn sách từ trang 1 cần dùng tất cả 282 chữ số. Cuốn sách đó có số trang là:',
            options: ['130 trang', '140 trang', '128 trang', '135 trang'],
            correctAnswer: '130 trang',
            hint: 'Từ 1-9: 9 chữ số. Từ 10-99: 180 chữ số. Còn lại: 282 - 189 = 93 chữ số (3 chữ số/trang) => 93 : 3 = 31 trang (100 đến 130).',
            explanation: 'Tổng trang = 99 + (282 - 189) : 3 = 99 + 31 = 130 trang.'
          },
          {
            id: 'c7l2_q8',
            question: 'Cho dãy số: 2, 5, 8, 11, 14, ... Số hạng thứ 50 của dãy số là:',
            options: ['149', '150', '148', '152'],
            correctAnswer: '149',
            hint: 'Số hạng thứ n = Số đầu + (n - 1) × khoảng cách = 2 + (50 - 1) × 3 = 2 + 147 = 149.',
            explanation: 'Số hạng 50 = 2 + 49 × 3 = 149.'
          },
          {
            id: 'c7l2_q9',
            question: 'Tìm một số tự nhiên có 2 chữ số, biết rằng khi viết thêm chữ số 1 vào bên phải và bên trái số đó ta được số mới gấp 23 lần số ban đầu:',
            options: ['77', '75', '85', '65'],
            correctAnswer: '77',
            hint: '1ab1 = 1000 + 10ab + 1 = 1001 + 10ab. Theo đề: 1001 + 10ab = 23ab => 13ab = 1001 => ab = 1001 : 13 = 77.',
            explanation: '1001 + 10 × ab = 23 × ab => 13 × ab = 1001 => ab = 77.'
          },
          {
            id: 'c7l2_q10',
            question: 'Thử thách điểm 10 Tuyển sinh Lớp 6 CLC: Tính nhanh giá trị biểu thức: S = 1/(2×4) + 1/(4×6) + 1/(6×8) + ... + 1/(98×100)',
            options: ['49/200', '49/100', '1/2', '99/200'],
            correctAnswer: '49/200',
            hint: '2 × S = 2/(2×4) + 2/(4×6) + ... = (1/2 - 1/4) + (1/4 - 1/6) + ... + (1/98 - 1/100) = 1/2 - 1/100 = 49/100 => S = 49/200!',
            explanation: '2 × S = 1/2 - 1/100 = 49/100 => S = (49/100) : 2 = 49/200.'
          }
        ]
      }
    ]
  }
];
