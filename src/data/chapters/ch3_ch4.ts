import { Chapter } from '../../types/math';

export const ch3_ch4_chapters: Chapter[] = [
  // CHỦ ĐỀ 3: CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (Bài 15 - 28)
  {
    id: 'ch3',
    title: 'Chủ đề 3: Các Phép Tính Số Thập Phân',
    vietnameseTitle: 'Thung Lũng Tứ Phép Thập Phân',
    description: 'Học kỳ 1 (Bài 15 - 28) • Thành thạo cộng, trừ, nhân, chia số thập phân, nhân chia nhẩm 10, 100, 0.1, 0.01 và tính nhanh.',
    semester: 1,
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    icon: '⚡',
    boss: {
      id: 'boss_ch3',
      name: 'Pháp Sư Phép Tính Quadra',
      avatar: '🧙‍♂️',
      title: 'Đại Pháp Sư 4 Phép Tính',
      maxHp: 350,
      story: 'Quadra nắm giữ ấn chú 4 phép tính thần thánh. Bạn cần đặt tính thẳng cột dấu phẩy và xử lý phép chia số thập phân chuẩn xác!',
      rewardBadgeId: 'badge_boss_ch3',
      questions: [
        {
          id: 'b3_q1',
          question: 'Tính: 15.8 + 6.75 - 4.3 = ?',
          options: ['18.25', '18.5', '17.25', '19.25'],
          correctAnswer: '18.25',
          hint: '15.8 + 6.75 = 22.55. Lấy 22.55 - 4.3 = 18.25.',
          explanation: '15.8 + 6.75 = 22.55. Sau đó 22.55 - 4.3 = 18.25.'
        },
        {
          id: 'b3_q2',
          question: 'Tính nhanh: 3.6 × 4.5 + 3.6 × 5.5 = ?',
          options: ['36', '3.6', '360', '18'],
          correctAnswer: '36',
          hint: 'Đặt 3.6 làm thừa số chung: 3.6 × (4.5 + 5.5) = 3.6 × 10.',
          explanation: '3.6 × (4.5 + 5.5) = 3.6 × 10 = 36.'
        },
        {
          id: 'b3_q3',
          question: 'Thực hiện phép chia: 21.6 : 4.5 = ?',
          options: ['4.8', '4.5', '0.48', '5.2'],
          correctAnswer: '4.8',
          hint: 'Dời dấu phẩy: 216 : 45 = 4.8.',
          explanation: '21.6 : 4.5 = 216 : 45 = 4.8.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch3_l1',
        chapterId: 'ch3',
        title: 'Phép cộng & Phép trừ số thập phân',
        subtitle: 'Quy tắc đặt tính thẳng cột dấu phẩy',
        levelNumber: 7,
        icon: '➕',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'Phép cộng và Phép trừ số thập phân',
          keyPoints: [
            'Viết số hạng này dưới số hạng kia sao cho các chữ số ở cùng một hàng đặt thẳng cột với nhau (dấu phẩy thẳng cột).',
            'Cộng/trừ như cộng/trừ các số tự nhiên.',
            'Viết dấu phẩy ở kết quả thẳng cột với các dấu phẩy của các số hạng/số bị trừ và số trừ.'
          ],
          formula: 'a + b = b + a | (a + b) + c = a + (b + c) | a - b - c = a - (b + c)',
          examples: [
            {
              problem: 'Tính: 45.8 + 27.64',
              solution: 'Đặt tính thẳng hàng dấu phẩy: 45.80 + 27.64 = 73.44.'
            }
          ],
          memoryTip: '💡 "Dấu phẩy thẳng hàng là chìa khóa vàng của phép cộng trừ!"'
        },
        questions: [
          {
            id: 'c3l1_q1',
            question: 'Kết quả của phép tính: 35.8 + 24.36 là:',
            options: ['60.16', '59.16', '60.44', '59.44'],
            correctAnswer: '60.16',
            hint: '35.80 + 24.36 = 60.16.',
            explanation: '35.80 + 24.36 = 60.16.'
          },
          {
            id: 'c3l1_q2',
            question: 'Kết quả của phép tính: 72.5 - 28.37 là:',
            options: ['44.13', '44.23', '43.13', '45.13'],
            correctAnswer: '44.13',
            hint: '72.50 - 28.37 = 44.13.',
            explanation: '72.50 - 28.37 = 44.13.'
          },
          {
            id: 'c3l1_q3',
            question: 'Tìm x biết: x + 12.8 = 35.4',
            options: ['x = 22.6', 'x = 23.6', 'x = 22.4', 'x = 48.2'],
            correctAnswer: 'x = 22.6',
            hint: 'x = 35.4 - 12.8.',
            explanation: 'x = 35.4 - 12.8 = 22.6.'
          },
          {
            id: 'c3l1_q4',
            question: 'Tìm x biết: 80 - x = 24.75',
            options: ['x = 55.25', 'x = 56.25', 'x = 55.35', 'x = 104.75'],
            correctAnswer: 'x = 55.25',
            hint: 'Số trừ = Số bị trừ - Hiệu = 80.00 - 24.75.',
            explanation: 'x = 80.00 - 24.75 = 55.25.'
          },
          {
            id: 'c3l1_q5',
            question: 'Tính nhanh: 14.75 + 8.9 + 5.25 = ?',
            options: ['28.9', '29.9', '28.0', '30.0'],
            correctAnswer: '28.9',
            hint: 'Nhóm: (14.75 + 5.25) + 8.9 = 20 + 8.9 = 28.9.',
            explanation: '(14.75 + 5.25) + 8.9 = 20 + 8.9 = 28.9.'
          },
          {
            id: 'c3l1_q6',
            question: 'Tính giá trị biểu thức: 100 - (34.5 + 28.75) = ?',
            options: ['36.75', '37.75', '35.75', '36.25'],
            correctAnswer: '36.75',
            hint: 'Trong ngoặc: 34.50 + 28.75 = 63.25. Lấy 100.00 - 63.25 = 36.75.',
            explanation: '34.5 + 28.75 = 63.25. 100 - 63.25 = 36.75.'
          },
          {
            id: 'c3l1_q7',
            question: 'Một người thợ cắt một sợi dây dài 15.4 m thành ba đoạn. Đoạn 1 dài 4.2 m, đoạn 2 dài 5.65 m. Hỏi đoạn thứ ba dài bao nhiêu mét?',
            options: ['5.55 m', '5.45 m', '5.65 m', '4.55 m'],
            correctAnswer: '5.55 m',
            hint: 'Tổng hai đoạn đầu: 4.2 + 5.65 = 9.85 m. Đoạn 3: 15.4 - 9.85 = 5.55 m.',
            explanation: '15.4 - (4.2 + 5.65) = 15.4 - 9.85 = 5.55 m.'
          },
          {
            id: 'c3l1_q8',
            question: 'Một thùng đựng 45.5 kg dầu. Người ta lấy ra 18.25 kg, sau đó lại đổ thêm vào 12.5 kg. Hỏi lúc này thùng có bao nhiêu kg dầu?',
            options: ['39.75 kg', '40.75 kg', '38.75 kg', '39.5 kg'],
            correctAnswer: '39.75 kg',
            hint: '45.5 - 18.25 + 12.5 = 27.25 + 12.5 = 39.75 kg.',
            explanation: '45.5 - 18.25 + 12.5 = 27.25 + 12.5 = 39.75 kg.'
          },
          {
            id: 'c3l1_q9',
            question: 'Tính nhanh: 46.8 - 15.7 - 4.3 = ?',
            options: ['26.8', '27.8', '25.8', '24.8'],
            correctAnswer: '26.8',
            hint: '46.8 - (15.7 + 4.3) = 46.8 - 20 = 26.8.',
            explanation: 'Trừ một tổng: 46.8 - (15.7 + 4.3) = 46.8 - 20 = 26.8.'
          },
          {
            id: 'c3l1_q10',
            question: 'Thử thách điểm 10: Tìm hai số thập phân biết tổng của chúng là 48.6 và nếu gấp số thứ nhất lên 3 lần, giữ nguyên số thứ hai thì tổng mới là 86.4:',
            options: ['Số thứ nhất là 18.9; Số thứ hai là 29.7', 'Số thứ nhất là 19.8; Số thứ hai là 28.8', 'Số thứ nhất là 20.5; Số thứ hai là 28.1', 'Số thứ nhất là 18.0; Số thứ hai là 30.6'],
            correctAnswer: 'Số thứ nhất là 18.9; Số thứ hai là 29.7',
            hint: '2 lần số thứ nhất = 86.4 - 48.6 = 37.8. Số thứ nhất: 37.8 : 2 = 18.9.',
            explanation: 'Tăng thêm 2 lần số thứ nhất ứng với 86.4 - 48.6 = 37.8. Số thứ nhất: 37.8 : 2 = 18.9. Số thứ hai: 48.6 - 18.9 = 29.7.'
          }
        ]
      },
      {
        id: 'ch3_l2',
        chapterId: 'ch3',
        title: 'Phép nhân số thập phân & Nhân nhẩm',
        subtitle: 'Nhân với số tự nhiên, nhân hai số thập phân, nhân nhẩm 10, 100, 0.1, 0.01',
        levelNumber: 8,
        icon: '✖️',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'Phép nhân số thập phân',
          keyPoints: [
            'Nhân như nhân các số tự nhiên.',
            'Đếm xem trong phần thập phân của cả hai thừa số có tất cả bao nhiêu chữ số rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số kể từ phải sang trái.',
            'Nhân với 10, 100, 1000...: Dịch dấu phẩy sang PHẢI 1, 2, 3... chữ số.',
            'Nhân với 0.1, 0.01, 0.001...: Dịch dấu phẩy sang TRÁI 1, 2, 3... chữ số (tương đương chia cho 10, 100, 1000).'
          ],
          formula: 'a × 0.1 = a : 10 | a × 0.01 = a : 100',
          examples: [
            {
              problem: 'Tính: 4.25 × 3.6',
              solution: '425 × 36 = 15300. Cả hai thừa số có 2 + 1 = 3 chữ số thập phân => 15.300 = 15.3.'
            }
          ],
          memoryTip: '💡 "Nhân với 10, 100 dịch sang Phải / Nhân với 0.1, 0.01 dịch sang Trái!"'
        },
        questions: [
          {
            id: 'c3l2_q1',
            question: 'Kết quả của phép nhân nhẩm: 4.75 × 100 là:',
            options: ['475', '47.5', '4750', '0.475'],
            correctAnswer: '475',
            hint: 'Dịch dấu phẩy sang phải 2 chữ số.',
            explanation: '4.75 × 100 = 475.'
          },
          {
            id: 'c3l2_q2',
            question: 'Kết quả của phép nhân: 23.8 × 0.1 là:',
            options: ['2.38', '0.238', '238', '23.80'],
            correctAnswer: '2.38',
            hint: 'Nhân với 0.1 lùi dấu phẩy sang trái 1 chữ số.',
            explanation: '23.8 × 0.1 = 2.38.'
          },
          {
            id: 'c3l2_q3',
            question: 'Thực hiện phép tính: 3.4 × 2.5 = ?',
            options: ['8.5', '85', '0.85', '7.5'],
            correctAnswer: '8.5',
            hint: '34 × 25 = 850. Đếm 2 chữ số thập phân: 8.50 = 8.5.',
            explanation: '3.4 × 2.5 = 8.5.'
          },
          {
            id: 'c3l2_q4',
            question: 'Một hình vuông có cạnh dài 4.5 dm. Chu vi của hình vuông đó là:',
            options: ['18 dm', '20.25 dm²', '16 dm', '18 dm²'],
            correctAnswer: '18 dm',
            hint: 'Chu vi hình vuông = cạnh × 4 = 4.5 × 4.',
            explanation: 'P = 4.5 × 4 = 18 dm.'
          },
          {
            id: 'c3l2_q5',
            question: 'Tính nhanh: 0.25 × 1.34 × 4 = ?',
            options: ['1.34', '13.4', '0.134', '5.36'],
            correctAnswer: '1.34',
            hint: 'Nhóm: (0.25 × 4) × 1.34 = 1 × 1.34 = 1.34.',
            explanation: '(0.25 × 4) × 1.34 = 1 × 1.34 = 1.34.'
          },
          {
            id: 'c3l2_q6',
            question: 'Tính nhanh: 1.25 × 8.8 = ?',
            options: ['11', '10.8', '11.2', '10'],
            correctAnswer: '11',
            hint: 'Tách 8.8 = 8 × 1.1 => (1.25 × 8) × 1.1 = 10 × 1.1 = 11.',
            explanation: '1.25 × 8 × 1.1 = 10 × 1.1 = 11.'
          },
          {
            id: 'c3l2_q7',
            question: 'Một can chứa 10.5 lít nước mắm. Biết 1 lít nước mắm cân nặng 1.15 kg và vỏ can nặng 0.8 kg. Can nước mắm đó cân nặng tất cả là:',
            options: ['12.875 kg', '12.075 kg', '13.075 kg', '11.875 kg'],
            correctAnswer: '12.875 kg',
            hint: 'Khối lượng nước mắm: 10.5 × 1.15 = 12.075 kg. Cả can: 12.075 + 0.8 = 12.875 kg.',
            explanation: '10.5 × 1.15 + 0.8 = 12.075 + 0.8 = 12.875 kg.'
          },
          {
            id: 'c3l2_q8',
            question: 'Điền dấu thích hợp: 34.5 × 0.1 ... 34.5 : 10',
            options: ['=', '>', '<', 'Không so sánh được'],
            correctAnswer: '=',
            hint: 'Nhân với 0.1 chính là chia cho 10.',
            explanation: '34.5 × 0.1 = 3.45 và 34.5 : 10 = 3.45 => Hai kết quả bằng nhau.'
          },
          {
            id: 'c3l2_q9',
            question: 'Một người đi xe máy trong 2.5 giờ, mỗi giờ đi được 38.4 km. Quãng đường người đó đã đi được là:',
            options: ['96 km', '95 km', '96.5 km', '98 km'],
            correctAnswer: '96 km',
            hint: 'Quãng đường = Vận tốc × Thời gian = 38.4 × 2.5 = 96 km.',
            explanation: '38.4 × 2.5 = 96 km.'
          },
          {
            id: 'c3l2_q10',
            question: 'Thử thách điểm 10: Tính thuận tiện biểu thức: A = 0.2 × 517 × 2 + 0.4 × 483',
            options: ['400', '40', '4000', '200'],
            correctAnswer: '400',
            hint: '0.2 × 2 = 0.4. Ta có: 0.4 × 517 + 0.4 × 483 = 0.4 × (517 + 483) = 0.4 × 1000 = 400.',
            explanation: '0.2 × 517 × 2 = 0.4 × 517. Biểu thức: 0.4 × (517 + 483) = 0.4 × 1000 = 400.'
          }
        ]
      },
      {
        id: 'ch3_l3',
        chapterId: 'ch3',
        title: 'Phép chia số thập phân',
        subtitle: 'Chia cho số tự nhiên, chia cho số thập phân, chia nhẩm 10, 100, 0.1, 0.01',
        levelNumber: 9,
        icon: '➗',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Phép chia số thập phân',
          keyPoints: [
            'Chia số thập phân cho số tự nhiên: Chia phần nguyên trước, đặt dấu phẩy vào thương rồi hạ chữ số đầu tiên ở phần thập phân để chia tiếp.',
            'Chia cho số thập phân: Đếm số chữ số ở phần thập phân của số chia, dời dấu phẩy của cả số bị chia và số chia sang phải bấy nhiêu chữ số rồi chia.',
            'Chia cho 0.1, 0.01: Tương đương nhân với 10, 100.'
          ],
          formula: 'a : 0.1 = a × 10 | a : 0.01 = a × 100 | a : 0.5 = a × 2 | a : 0.25 = a × 4',
          examples: [
            {
              problem: 'Tính: 19.5 : 2.5',
              solution: 'Dời dấu phẩy 1 chữ số: 195 : 25 = 7.8.'
            }
          ],
          memoryTip: '💡 "Chia cho 0.5 là nhân 2 / Chia cho 0.25 là nhân 4 cực tài!"'
        },
        questions: [
          {
            id: 'c3l3_q1',
            question: 'Kết quả của phép chia: 28.5 : 10 là:',
            options: ['2.85', '285', '0.285', '28.50'],
            correctAnswer: '2.85',
            hint: 'Chia cho 10 dịch dấu phẩy sang trái 1 chữ số.',
            explanation: '28.5 : 10 = 2.85.'
          },
          {
            id: 'c3l3_q2',
            question: 'Kết quả của phép chia: 4.8 : 0.1 là:',
            options: ['48', '0.48', '4.80', '480'],
            correctAnswer: '48',
            hint: 'Chia cho 0.1 chính là nhân với 10.',
            explanation: '4.8 : 0.1 = 48.'
          },
          {
            id: 'c3l3_q3',
            question: 'Thực hiện phép tính: 75.52 : 32 = ?',
            options: ['2.36', '23.6', '0.236', '2.46'],
            correctAnswer: '2.36',
            hint: '75 : 32 = 2 dư 11. Đặt dấu phẩy, hạ 5: 115 : 32 = 3 dư 19. Hạ 2: 192 : 32 = 6.',
            explanation: '75.52 : 32 = 2.36.'
          },
          {
            id: 'c3l3_q4',
            question: 'Thực hiện phép tính: 17.55 : 3.9 = ?',
            options: ['4.5', '45', '0.45', '4.05'],
            correctAnswer: '4.5',
            hint: 'Dời dấu phẩy: 175.5 : 39 = 4.5.',
            explanation: '17.55 : 3.9 = 175.5 : 39 = 4.5.'
          },
          {
            id: 'c3l3_q5',
            question: 'Tìm x biết: x × 4.8 = 16.8',
            options: ['x = 3.5', 'x = 3.2', 'x = 4.2', 'x = 3.8'],
            correctAnswer: 'x = 3.5',
            hint: 'x = 16.8 : 4.8 = 168 : 48 = 3.5.',
            explanation: 'x = 16.8 : 4.8 = 3.5.'
          },
          {
            id: 'c3l3_q6',
            question: 'Một người may 5 bộ quần áo hết 14.5 m vải. Hỏi may 8 bộ quần áo như thế hết bao nhiêu mét vải?',
            options: ['23.2 m', '24.2 m', '22.8 m', '25 m'],
            correctAnswer: '23.2 m',
            hint: '1 bộ may hết: 14.5 : 5 = 2.9 m. 8 bộ may hết: 2.9 × 8 = 23.2 m.',
            explanation: '14.5 : 5 × 8 = 2.9 × 8 = 23.2 m.'
          },
          {
            id: 'c3l3_q7',
            question: 'Tính nhanh: 34.8 : 0.5 + 34.8 : 0.25 = ?',
            options: ['208.8', '208', '210.8', '174'],
            correctAnswer: '208.8',
            hint: ': 0.5 = × 2; : 0.25 = × 4. Biểu thức = 34.8 × 2 + 34.8 × 4 = 34.8 × 6 = 208.8.',
            explanation: '34.8 × (2 + 4) = 34.8 × 6 = 208.8.'
          },
          {
            id: 'c3l3_q8',
            question: 'Có 65 lít dầu hỏa chia đều vào các chai, mỗi chai chứa 0.75 lít. Hỏi rót được nhiều nhất bao nhiêu chai và còn thừa bao nhiêu lít dầu?',
            options: ['86 chai, thừa 0.5 lít', '86 chai, thừa 5 lít', '87 chai, không thừa', '85 chai, thừa 1.25 lít'],
            correctAnswer: '86 chai, thừa 0.5 lít',
            hint: '65 : 0.75 = 86 dư 0.5 (lưu ý số dư theo giá trị hàng thập phân).',
            explanation: '65 = 86 × 0.75 + 0.5. Vậy rót được 86 chai và thừa 0.5 lít dầu.'
          },
          {
            id: 'c3l3_q9',
            question: 'Tìm x biết: 4.5 : x = 0.9',
            options: ['x = 5', 'x = 4.05', 'x = 0.5', 'x = 50'],
            correctAnswer: 'x = 5',
            hint: 'x = 4.5 : 0.9 = 45 : 9 = 5.',
            explanation: 'x = 4.5 : 0.9 = 5.'
          },
          {
            id: 'c3l3_q10',
            question: 'Thử thách điểm 10: Tìm số dư trong phép chia: 218 : 3.7 khi lấy đến 2 chữ số ở phần thập phân của thương:',
            options: ['0.03', '0.3', '3', '0.003'],
            correctAnswer: '0.03',
            hint: '218 : 3.7 = 58.91 (dư 0.03 vì 58.91 × 3.7 = 217.967 => 218 - 217.967 = 0.033... Khi dời dấu phẩy dóng thẳng hàng số ban đầu ta được dư 0.03).',
            explanation: 'Thực hiện chia 218 : 3.7 được thương 58.91 và số dư theo vị trí thẳng hàng ban đầu là 0.03.'
          }
        ]
      }
    ]
  },

  // CHỦ ĐỀ 4: TỈ SỐ PHẦN TRĂM & HÌNH HỌC PHẲNG (Bài 29 - 45)
  {
    id: 'ch4',
    title: 'Chủ đề 4: Tỉ Số Phần Trăm & Hình Phẳng',
    vietnameseTitle: 'Vương Quốc Tỉ Lệ & Đa Giác Kỳ Ảo',
    description: 'Học kỳ 1 & 2 (Bài 29 - 45) • 3 dạng toán tỉ số phần trăm, diện tích hình tam giác, hình thang, chu vi và diện tích hình tròn.',
    semester: 1,
    color: 'from-purple-500 to-indigo-600',
    bgGradient: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    icon: '🎯',
    boss: {
      id: 'boss_ch4',
      name: 'Nữ Thần Hình Học Geometra',
      avatar: '👑',
      title: 'Chủ Nhân Hình Tròn & Tỉ Số',
      maxHp: 380,
      story: 'Geometra nắm giữ bí ẩn số Pi 3.14 và ma trận phần trăm. Hãy chinh phục các câu đố hình học đỉnh cao để giành huy hiệu vàng!',
      rewardBadgeId: 'badge_boss_ch4',
      questions: [
        {
          id: 'b4_q1',
          question: 'Tìm 30% của 250 kg:',
          options: ['75 kg', '80 kg', '70 kg', '65 kg'],
          correctAnswer: '75 kg',
          hint: '250 × 30 : 100 = 75 kg.',
          explanation: '250 × 30 : 100 = 75 kg.'
        },
        {
          id: 'b4_q2',
          question: 'Một hình tam giác có đáy 12 cm, chiều cao 8 cm. Diện tích tam giác là:',
          options: ['48 cm²', '96 cm²', '24 cm²', '50 cm²'],
          correctAnswer: '48 cm²',
          hint: 'S = (đáy × chiều cao) : 2 = (12 × 8) : 2 = 48 cm².',
          explanation: 'S = 12 × 8 : 2 = 48 cm².'
        },
        {
          id: 'b4_q3',
          question: 'Một hình tròn có bán kính r = 3 cm. Chu vi của hình tròn đó là:',
          options: ['18.84 cm', '28.26 cm', '9.42 cm', '37.68 cm'],
          correctAnswer: '18.84 cm',
          hint: 'C = r × 2 × 3.14 = 3 × 2 × 3.14 = 18.84 cm.',
          explanation: 'C = 3 × 2 × 3.14 = 18.84 cm.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch4_l1',
        chapterId: 'ch4',
        title: 'Ba dạng toán Tỉ số phần trăm',
        subtitle: 'Dạng 1: Tìm tỉ số % | Dạng 2: Tìm % của số | Dạng 3: Tìm số biết %',
        levelNumber: 10,
        icon: '💯',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: '3 Dạng toán Tỉ số phần trăm',
          keyPoints: [
            'Dạng 1: Tìm tỉ số % của a và b: Lấy (a : b) × 100%.',
            'Dạng 2: Tìm a% của số B: Lấy B × a : 100.',
            'Dạng 3: Tìm số B biết a% của nó là k: Lấy k : a × 100.'
          ],
          formula: 'D1: (a : b) × 100% | D2: B × a% | D3: k : a%',
          examples: [
            {
              problem: 'Lớp có 40 học sinh, trong đó có 24 nữ. Tỉ số phần trăm nữ là bao nhiêu?',
              solution: '24 : 40 = 0.6 = 60%.'
            }
          ],
          memoryTip: '💡 "Dạng 1 chia ra nhân trăm / Dạng 2 nhân % / Dạng 3 chia ngược lại tìm ban đầu!"'
        },
        questions: [
          {
            id: 'c4l1_q1',
            question: 'Viết tỉ số 3/5 dưới dạng tỉ số phần trăm:',
            options: ['60%', '35%', '50%', '75%'],
            correctAnswer: '60%',
            hint: '3 : 5 = 0.6 = 60%.',
            explanation: '3 : 5 = 0.6 = 60%.'
          },
          {
            id: 'c4l1_q2',
            question: 'Tìm 20% của 350:',
            options: ['70', '60', '80', '75'],
            correctAnswer: '70',
            hint: '350 × 20 : 100 = 70.',
            explanation: '350 × 20 : 100 = 70.'
          },
          {
            id: 'c4l1_q3',
            question: 'Tìm một số biết 25% của số đó là 50:',
            options: ['200', '150', '125', '250'],
            correctAnswer: '200',
            hint: '50 : 25 × 100 = 200.',
            explanation: '50 : 25 × 100 = 200.'
          },
          {
            id: 'c4l1_q4',
            question: 'Một lớp có 32 học sinh, trong đó có 8 học sinh giỏi. Tỉ số phần trăm học sinh giỏi là:',
            options: ['25%', '30%', '20%', '32%'],
            correctAnswer: '25%',
            hint: '8 : 32 = 0.25 = 25%.',
            explanation: '8 : 32 = 0.25 = 25%.'
          },
          {
            id: 'c4l1_q5',
            question: 'Một trường tiểu học có 800 học sinh. Số học sinh nam chiếm 48%. Số học sinh nữ của trường là:',
            options: ['416 học sinh', '384 học sinh', '400 học sinh', '420 học sinh'],
            correctAnswer: '416 học sinh',
            hint: '% học sinh nữ = 100% - 48% = 52%. Số nữ = 800 × 52 : 100 = 416.',
            explanation: '800 × (100% - 48%) = 800 × 52% = 416 học sinh.'
          },
          {
            id: 'c4l1_q6',
            question: 'Bác gửi tiết kiệm 20.000.000 đồng với lãi suất 0.6% một tháng. Sau một tháng, số tiền lãi nhận được là:',
            options: ['120.000 đồng', '1.200.000 đồng', '12.000 đồng', '60.000 đồng'],
            correctAnswer: '120.000 đồng',
            hint: '20.000.000 × 0.6 : 100 = 120.000 đồng.',
            explanation: '20.000.000 × 0.6% = 120.000 đồng.'
          },
          {
            id: 'c4l1_q7',
            question: 'Giá một chiếc cặp sách là 150.000 đồng. Nhân ngày 1/6, cửa hàng giảm giá 15%. Giá bán của chiếc cặp sau khi giảm là:',
            options: ['127.500 đồng', '135.000 đồng', '125.000 đồng', '130.000 đồng'],
            correctAnswer: '127.500 đồng',
            hint: 'Số tiền giảm: 150.000 × 15% = 22.500 đồng. Giá bán: 150.000 - 22.500 = 127.500 đồng.',
            explanation: '150.000 × (100% - 15%) = 150.000 × 85% = 127.500 đồng.'
          },
          {
            id: 'c4l1_q8',
            question: 'Vườn nhà bác An thu hoạch được 1.2 tấn thóc. Biết rằng số thóc khô sau khi phơi bằng 85% số thóc tươi. Khối lượng thóc khô thu được là:',
            options: ['1.02 tấn (1020 kg)', '1.05 tấn', '1.1 tấn', '0.98 tấn'],
            correctAnswer: '1.02 tấn (1020 kg)',
            hint: '1.2 × 85 : 100 = 1.02 tấn.',
            explanation: '1.2 × 85% = 1.02 tấn.'
          },
          {
            id: 'c4l1_q9',
            question: 'Diện tích hình chữ nhật tăng bao nhiêu % nếu chiều dài tăng 10% và chiều rộng tăng 10%?',
            options: ['21%', '20%', '10%', '25%'],
            correctAnswer: '21%',
            hint: '1.1 × 1.1 = 1.21 = 121%. Tăng thêm: 121% - 100% = 21%.',
            explanation: 'Diện tích mới = (100% + 10%) × (100% + 10%) = 1.1 × 1.1 = 1.21 = 121%. Tăng 21%.'
          },
          {
            id: 'c4l1_q10',
            question: 'Thử thách điểm 10: Một cửa hàng bán được lãi 25% theo giá bán. Hỏi người đó được lãi bao nhiêu % theo giá vốn?',
            options: ['33.33% (1/3)', '25%', '30%', '20%'],
            correctAnswer: '33.33% (1/3)',
            hint: 'Giá bán = 100%, Tiền lãi = 25% => Giá vốn = 100% - 25% = 75%. Tỉ số lãi/vốn = 25/75 = 1/3 = 33.33%.',
            explanation: 'Giá vốn = 100% - 25% = 75% giá bán. Tỉ số % lãi so với vốn: (25 : 75) × 100% = 33.33%.'
          }
        ]
      },
      {
        id: 'ch4_l2',
        chapterId: 'ch4',
        title: 'Diện tích Hình tam giác & Hình thang',
        subtitle: 'Công thức diện tích đa giác đáy và chiều cao tương ứng',
        levelNumber: 11,
        icon: '📐',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Diện tích Hình tam giác & Hình thang',
          keyPoints: [
            'Diện tích hình tam giác = (Độ dài đáy × Chiều cao) : 2 (cùng đơn vị đo).',
            'Diện tích hình thang = (Đáy lớn + Đáy bé) × Chiều cao : 2 (cùng đơn vị đo).'
          ],
          formula: 'Tam giác: S = (a × h) : 2 | Hình thang: S = (a + b) × h : 2',
          examples: [
            {
              problem: 'Tính diện tích hình thang có đáy lớn 14 cm, đáy bé 10 cm, cao 6 cm.',
              solution: 'S = (14 + 10) × 6 : 2 = 24 × 3 = 72 cm².'
            }
          ],
          memoryTip: '💡 "Muốn tính diện tích hình thang / Đáy lớn đáy nhỏ ta mang cộng vào / Cộng rồi nhân với chiều cao / Chia đôi lấy nửa thế nào cũng ra!"'
        },
        questions: [
          {
            id: 'c4l2_q1',
            question: 'Một hình tam giác có đáy a = 15 cm và chiều cao h = 8 cm. Diện tích của tam giác đó là:',
            options: ['60 cm²', '120 cm²', '45 cm²', '30 cm²'],
            correctAnswer: '60 cm²',
            hint: 'S = (15 × 8) : 2 = 60 cm².',
            explanation: 'S = 15 × 8 : 2 = 60 cm².'
          },
          {
            id: 'c4l2_q2',
            question: 'Một hình tam giác vuông có hai cạnh góc vuông lần lượt là 6 dm và 8 dm. Diện tích hình tam giác vuông đó là:',
            options: ['24 dm²', '48 dm²', '14 dm²', '12 dm²'],
            correctAnswer: '24 dm²',
            hint: 'Diện tích tam giác vuông = tích hai cạnh góc vuông chia cho 2.',
            explanation: 'S = (6 × 8) : 2 = 24 dm².'
          },
          {
            id: 'c4l2_q3',
            question: 'Một thửa ruộng hình thang có đáy lớn 24 m, đáy bé 16 m và chiều cao 10 m. Diện tích thửa ruộng đó là:',
            options: ['200 m²', '400 m²', '240 m²', '180 m²'],
            correctAnswer: '200 m²',
            hint: 'S = (24 + 16) × 10 : 2 = 40 × 10 : 2 = 200 m².',
            explanation: 'S = (24 + 16) × 10 : 2 = 200 m².'
          },
          {
            id: 'c4l2_q4',
            question: 'Một tam giác có diện tích là 36 cm² và độ dài đáy là 9 cm. Chiều cao tương ứng của tam giác đó là:',
            options: ['8 cm', '4 cm', '16 cm', '6 cm'],
            correctAnswer: '8 cm',
            hint: 'h = (S × 2) : a = (36 × 2) : 9 = 72 : 9 = 8 cm.',
            explanation: 'h = (36 × 2) : 9 = 8 cm.'
          },
          {
            id: 'c4l2_q5',
            question: 'Một mảnh đất hình thang có diện tích 150 m², chiều cao 10 m. Tổng độ dài hai đáy là:',
            options: ['30 m', '15 m', '60 m', '45 m'],
            correctAnswer: '30 m',
            hint: 'Tổng hai đáy = (S × 2) : h = (150 × 2) : 10 = 30 m.',
            explanation: 'a + b = (150 × 2) : 10 = 30 m.'
          },
          {
            id: 'c4l2_q6',
            question: 'Một hình thang có đáy lớn 18 m, đáy bé bằng 2/3 đáy lớn, chiều cao bằng trung bình cộng hai đáy. Diện tích hình thang là:',
            options: ['225 m²', '450 m²', '180 m²', '240 m²'],
            correctAnswer: '225 m²',
            hint: 'Đáy bé = 18 × 2/3 = 12 m. Chiều cao = (18 + 12) : 2 = 15 m. Diện tích = (18 + 12) × 15 : 2 = 225 m².',
            explanation: 'Đáy bé: 12 m. Chiều cao: 15 m. Diện tích: 30 × 15 : 2 = 225 m².'
          },
          {
            id: 'c4l2_q7',
            question: 'Nếu tăng độ dài đáy của một hình tam giác thêm 20% và giữ nguyên chiều cao thì diện tích tam giác đó tăng bao nhiêu %?',
            options: ['20%', '10%', '40%', ' Không đổi'],
            correctAnswer: '20%',
            hint: 'Diện tích tỉ lệ thuận với độ dài đáy khi chiều cao không đổi.',
            explanation: 'S mới = (1.2 × a × h) : 2 = 1.2 × S cũ = 120% => Tăng 20%.'
          },
          {
            id: 'c4l2_q8',
            question: 'Một thửa ruộng hình thang có diện tích 360 m². Người ta cấy lúa, trung bình cứ 100 m² thu được 65 kg thóc. Số thóc thu hoạch được trên cả thửa ruộng là:',
            options: ['234 kg', '2340 kg', '23.4 kg', '240 kg'],
            correctAnswer: '234 kg',
            hint: '360 : 100 × 65 = 234 kg.',
            explanation: '360 : 100 × 65 = 234 kg.'
          },
          {
            id: 'c4l2_q9',
            question: 'Tam giác ABC có diện tích 90 cm². Kéo dài đáy BC thêm một đoạn CD = 4 cm thì diện tích tăng thêm 24 cm². Độ dài đáy BC ban đầu là:',
            options: ['15 cm', '12 cm', '18 cm', '20 cm'],
            correctAnswer: '15 cm',
            hint: 'Chiều cao chung = (24 × 2) : 4 = 12 cm. Đáy BC = (90 × 2) : 12 = 15 cm.',
            explanation: 'Chiều cao tam giác: 24 × 2 : 4 = 12 cm. Đáy BC: 90 × 2 : 12 = 15 cm.'
          },
          {
            id: 'c4l2_q10',
            question: 'Thử thách điểm 10: Cho hình thang ABCD có đáy AB = 1/3 CD. Hai đường chéo AC và BD cắt nhau tại O. Biết diện tích tam giác AOB là 6 cm², diện tích hình thang ABCD là:',
            options: ['96 cm²', '72 cm²', '64 cm²', '108 cm²'],
            correctAnswer: '96 cm²',
            hint: 'S(BOC) = S(AOD) = 3 × S(AOB) = 18 cm². S(DOC) = 9 × S(AOB) = 54 cm². S(ABCD) = 6 + 18 + 18 + 54 = 96 cm².',
            explanation: 'Tỉ số đáy AB/CD = 1/3 => S(AOB)/S(DOC) = (1/3)² = 1/9 => S(DOC) = 54 cm². S(AOD) = S(BOC) = 3 × 6 = 18 cm². Tổng diện tích = 6 + 18 + 18 + 54 = 96 cm².'
          }
        ]
      },
      {
        id: 'ch4_l3',
        chapterId: 'ch4',
        title: 'Chu vi & Diện tích Hình tròn',
        subtitle: 'Khám phá hằng số Pi 3.14, đường kính và bán kính',
        levelNumber: 12,
        icon: '⚪',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Chu vi & Diện tích Hình tròn',
          keyPoints: [
            'Đường kính d = 2 × r (bán kính gấp đôi).',
            'Chu vi hình tròn: C = d × 3.14 hoặc C = r × 2 × 3.14.',
            'Diện tích hình tròn: S = r × r × 3.14.'
          ],
          formula: 'Chu vi: C = 2 × r × 3.14 | Diện tích: S = r × r × 3.14',
          examples: [
            {
              problem: 'Tính diện tích hình tròn có bán kính r = 4 cm.',
              solution: 'S = 4 × 4 × 3.14 = 50.24 cm².'
            }
          ],
          memoryTip: '💡 "Chu vi lấy kính nhân ba phẩy mười bốn / Diện tích lấy bán kính nhân chính nó rồi nhân ba phẩy mười bốn nha!"'
        },
        questions: [
          {
            id: 'c4l3_q1',
            question: 'Một hình tròn có đường kính d = 6 cm. Chu vi của hình tròn đó là:',
            options: ['18.84 cm', '28.26 cm', '12.56 cm', '37.68 cm'],
            correctAnswer: '18.84 cm',
            hint: 'C = d × 3.14 = 6 × 3.14 = 18.84 cm.',
            explanation: 'C = 6 × 3.14 = 18.84 cm.'
          },
          {
            id: 'c4l3_q2',
            question: 'Một hình tròn có bán kính r = 5 cm. Diện tích của hình tròn đó là:',
            options: ['78.5 cm²', '31.4 cm²', '15.7 cm²', '314 cm²'],
            correctAnswer: '78.5 cm²',
            hint: 'S = 5 × 5 × 3.14 = 78.5 cm².',
            explanation: 'S = 5 × 5 × 3.14 = 78.5 cm².'
          },
          {
            id: 'c4l3_q3',
            question: 'Một hình tròn có chu vi là 31.4 cm. Bán kính của hình tròn đó là:',
            options: ['5 cm', '10 cm', '2.5 cm', '7.5 cm'],
            correctAnswer: '5 cm',
            hint: 'r = C : 2 : 3.14 = 31.4 : 6.28 = 5 cm.',
            explanation: 'r = 31.4 : 2 : 3.14 = 5 cm.'
          },
          {
            id: 'c4l3_q4',
            question: 'Đường kính bánh xe ô tô là 0.8 m. Khi bánh xe lăn được 100 vòng thì ô tô đi được quãng đường là:',
            options: ['251.2 m', '25.12 m', '2512 m', '125.6 m'],
            correctAnswer: '251.2 m',
            hint: 'Chu vi 1 vòng = 0.8 × 3.14 = 2.512 m. 100 vòng = 2.512 × 100 = 251.2 m.',
            explanation: 'Quãng đường = 0.8 × 3.14 × 100 = 251.2 m.'
          },
          {
            id: 'c4l3_q5',
            question: 'Một bảng biển báo giao thông hình tròn có bán kính 30 cm. Diện tích của biển báo đó là:',
            options: ['2826 cm² (0.2826 m²)', '1884 cm²', '942 cm²', '3140 cm²'],
            correctAnswer: '2826 cm² (0.2826 m²)',
            hint: 'S = 30 × 30 × 3.14 = 2826 cm².',
            explanation: 'S = 30 × 30 × 3.14 = 2826 cm².'
          },
          {
            id: 'c4l3_q6',
            question: 'Nếu bán kính của hình tròn tăng lên gấp 2 lần thì diện tích của nó tăng lên gấp mấy lần?',
            options: ['4 lần', '2 lần', '8 lần', '6 lần'],
            correctAnswer: '4 lần',
            hint: 'S = r × r × 3.14. Bán kính tăng 2 lần => Diện tích tăng 2 × 2 = 4 lần.',
            explanation: 'S mới = (2r) × (2r) × 3.14 = 4 × (r × r × 3.14) = 4 lần.'
          },
          {
            id: 'c4l3_q7',
            question: 'Một bồn hoa hình tròn có bán kính 2m. Người ta làm một lối đi rộng 1m chạy xung quanh bồn hoa đó. Diện tích của lối đi là:',
            options: ['15.7 m²', '28.26 m²', '12.56 m²', '31.4 m²'],
            correctAnswer: '15.7 m²',
            hint: 'Bán kính cả lối đi = 2 + 1 = 3 m. S cả ngoài = 3 × 3 × 3.14 = 28.26 m². S trong = 2 × 2 × 3.14 = 12.56 m². S lối đi = 28.26 - 12.56 = 15.7 m².',
            explanation: 'S lối đi = (3² - 2²) × 3.14 = 5 × 3.14 = 15.7 m².'
          },
          {
            id: 'c4l3_q8',
            question: 'Một miệng giếng nước hình tròn có bán kính 0.7 m. Người ta xây thành giếng rộng 0.3 m bao quanh. Diện tích của thành giếng là:',
            options: ['1.6014 m²', '3.14 m²', '1.5386 m²', '2.14 m²'],
            correctAnswer: '1.6014 m²',
            hint: 'Bán kính vòng ngoài = 0.7 + 0.3 = 1 m. S ngoài = 1 × 1 × 3.14 = 3.14 m². S trong = 0.7 × 0.7 × 3.14 = 1.5386 m². S thành giếng = 3.14 - 1.5386 = 1.6014 m².',
            explanation: 'S thành giếng = 3.14 - 1.5386 = 1.6014 m².'
          },
          {
            id: 'c4l3_q9',
            question: 'Một sợi dây thép uốn thành hình tròn có bán kính 10 cm. Nếu dùng sợi dây đó uốn thành một hình vuông thì cạnh hình vuông đó dài:',
            options: ['15.7 cm', '62.8 cm', '31.4 cm', '12.56 cm'],
            correctAnswer: '15.7 cm',
            hint: 'Chiều dài sợi dây = Chu vi hình tròn = 2 × 10 × 3.14 = 62.8 cm. Cạnh hình vuông = 62.8 : 4 = 15.7 cm.',
            explanation: 'Cạnh hình vuông = (2 × 10 × 3.14) : 4 = 62.8 : 4 = 15.7 cm.'
          },
          {
            id: 'c4l3_q10',
            question: 'Thử thách điểm 10: Cho hình vuông có diện tích là 32 cm². Diện tích hình tròn nội tiếp tiếp xúc 4 cạnh của hình vuông đó là:',
            options: ['25.12 cm²', '24 cm²', '28.26 cm²', '30 cm²'],
            correctAnswer: '25.12 cm²',
            hint: 'Gọi cạnh hình vuông là a. Ta có a × a = 32. Bán kính hình tròn r = a/2 => r × r = (a × a)/4 = 32/4 = 8. Diện tích hình tròn = 8 × 3.14 = 25.12 cm²!',
            explanation: 'S(vuông) = a² = 32 => r² = (a/2)² = a²/4 = 8. S(tròn) = r² × 3.14 = 8 × 3.14 = 25.12 cm².'
          }
        ]
      }
    ]
  }
];
