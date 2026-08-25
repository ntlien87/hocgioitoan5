import { Chapter } from '../../types/math';

export const ch1_ch2_chapters: Chapter[] = [
  // ==================== HỌC KỲ 1 ====================
  // CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG (Bài 1 - 9)
  {
    id: 'ch1',
    title: 'Chủ đề 1: Ôn Tập & Bổ Sung',
    vietnameseTitle: 'Vương Quốc Phân Số & Hỗn Số',
    description: 'Học kỳ 1 (Bài 1 - 9) • Ôn tập số tự nhiên, tính chất phân số, rút gọn, quy đồng, 4 phép tính và hỗn số.',
    semester: 1,
    color: 'from-amber-500 to-orange-600',
    bgGradient: 'bg-gradient-to-r from-amber-500 to-orange-600',
    icon: '🍰',
    boss: {
      id: 'boss_ch1',
      name: 'Vua Rồng Phân Số Ignis',
      avatar: '🐲',
      title: 'Chúa Tể Mẫu Số Chung',
      maxHp: 300,
      story: 'Vua Rồng Phân Số canh giữ kho báu cổ xưa. Hãy dùng tài năng tính toán phân số và hỗn số siêu phàm để thuần phục Rồng lửa!',
      rewardBadgeId: 'badge_boss_ch1',
      questions: [
        {
          id: 'b1_q1',
          question: 'Vua Rồng tung đòn: Tính giá trị biểu thức: (3/4 + 1/2) × 4/5 = ?',
          options: ['1', '5/4', '7/5', '3/5'],
          correctAnswer: '1',
          hint: 'Tính trong ngoặc trước: 3/4 + 1/2 = 3/4 + 2/4 = 5/4. Sau đó lấy 5/4 × 4/5!',
          explanation: 'Ta có 3/4 + 1/2 = 5/4. Tiếp theo 5/4 × 4/5 = (5×4)/(4×5) = 20/20 = 1.'
        },
        {
          id: 'b1_q2',
          question: 'Tìm x biết: x : 2/3 = 9/4 - 3/4',
          options: ['x = 1', 'x = 3/2', 'x = 2/3', 'x = 5/4'],
          correctAnswer: 'x = 1',
          hint: 'Tính vế phải: 9/4 - 3/4 = 6/4 = 3/2. Muốn tìm số bị chia x, lấy thương nhân số chia: x = 3/2 × 2/3!',
          explanation: 'Vế phải: 9/4 - 3/4 = 6/4 = 3/2. Ta có x : 2/3 = 3/2 => x = 3/2 × 2/3 = 6/6 = 1.'
        },
        {
          id: 'b1_q3',
          question: 'Đòn quyết định: Chuyển hỗn số 3 4/5 thành phân số rồi chia cho 19/10 ta được kết quả là:',
          options: ['2', '1', '19/5', '1/2'],
          correctAnswer: '2',
          hint: 'Chuyển hỗn số: 3 4/5 = (3×5 + 4)/5 = 19/5. Sau đó 19/5 : 19/10 = 19/5 × 10/19!',
          explanation: '3 4/5 = 19/5. Lấy 19/5 : 19/10 = 19/5 × 10/19 = (19×10)/(5×19) = 10/5 = 2.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch1_l1',
        chapterId: 'ch1',
        title: 'Khái niệm & Rút gọn phân số',
        subtitle: 'Bí kíp tối giản phân số về dạng gọn gàng nhất',
        levelNumber: 1,
        icon: '✂️',
        xpReward: 30,
        coinReward: 15,
        theory: {
          title: 'Khái niệm & Rút gọn phân số',
          keyPoints: [
            'Phân số gồm có Tử số (viết trên gạch ngang) và Mẫu số (viết dưới, khác 0).',
            'Khi nhân cả tử và mẫu với cùng một số tự nhiên khác 0, ta được phân số bằng nó.',
            'Rút gọn phân số: Chia cả tử và mẫu cho cùng một ước chung lớn hơn 1 để được phân số tối giản.'
          ],
          formula: 'a / b = (a : k) / (b : k)  (với k là ước chung lớn nhất của a và b)',
          examples: [
            {
              problem: 'Rút gọn phân số 18/24 về tối giản.',
              solution: 'Cả 18 và 24 cùng chia hết cho 6. Ta lấy: 18 : 6 = 3 và 24 : 6 = 4. Vậy 18/24 = 3/4.'
            }
          ],
          memoryTip: '💡 Mẹo vàng: Nếu thấy tận cùng là số chẵn -> chia cho 2. Tận cùng là 0 hoặc 5 -> chia cho 5. Tổng các chữ số chia hết cho 3/9 -> chia cho 3/9!'
        },
        questions: [
          {
            id: 'l1_q1',
            question: 'Phân số nào dưới đây là phân số tối giản?',
            options: ['6/8', '7/9', '15/25', '12/18'],
            correctAnswer: '7/9',
            hint: 'Phân số tối giản là phân số mà tử số và mẫu số không cùng chia hết cho số nào lớn hơn 1.',
            explanation: '7 và 9 không có ước chung nào khác 1, nên 7/9 là phân số tối giản.'
          },
          {
            id: 'l1_q2',
            question: 'Rút gọn phân số 36/48 về phân số tối giản ta được:',
            options: ['3/4', '6/8', '9/12', '2/3'],
            correctAnswer: '3/4',
            hint: 'Tìm số lớn nhất mà cả 36 và 48 cùng chia hết (12).',
            explanation: 'Chia cả tử và mẫu cho 12: 36 : 12 = 3 và 48 : 12 = 4. Ta được 3/4.'
          },
          {
            id: 'l1_q3',
            question: 'Tìm số tự nhiên x sao cho: 15 / x = 3 / 7',
            options: ['x = 35', 'x = 21', 'x = 28', 'x = 42'],
            correctAnswer: 'x = 35',
            hint: 'Tử số từ 3 tăng lên 15 gấp 5 lần (3 × 5 = 15). Mẫu số cũng nhân 5: 7 × 5 = ?',
            explanation: 'Vì 3 × 5 = 15 nên x = 7 × 5 = 35.'
          },
          {
            id: 'l1_q4',
            question: 'Phân số nào bằng phân số 3/5?',
            options: ['9/15', '6/15', '9/10', '12/25'],
            correctAnswer: '9/15',
            hint: 'Nhân cả tử và mẫu của 3/5 với cùng một số tự nhiên (ví dụ với 3).',
            explanation: '3/5 = (3 × 3) / (5 × 3) = 9/15.'
          },
          {
            id: 'l1_q5',
            question: 'Rút gọn phân số 75/100 về phân số tối giản:',
            options: ['3/4', '15/20', '4/5', '1/2'],
            correctAnswer: '3/4',
            hint: 'Cả 75 và 100 cùng chia hết cho 25.',
            explanation: '75 : 25 = 3 và 100 : 25 = 4 => 3/4.'
          },
          {
            id: 'l1_q6',
            question: 'Có bao nhiêu phân số có mẫu số là 12 và bằng phân số 1/3, 1/2, 2/3?',
            options: ['3 phân số (4/12, 6/12, 8/12)', '2 phân số', '4 phân số', '1 phân số'],
            correctAnswer: '3 phân số (4/12, 6/12, 8/12)',
            hint: 'Quy đồng từng phân số về mẫu số 12.',
            explanation: '1/3 = 4/12; 1/2 = 6/12; 2/3 = 8/12. Tổng cộng có 3 phân số.'
          },
          {
            id: 'l1_q7',
            question: 'Tìm x biết: 24/32 = x/4',
            options: ['x = 3', 'x = 4', 'x = 6', 'x = 8'],
            correctAnswer: 'x = 3',
            hint: 'Rút gọn phân số 24/32 bằng cách chia cho 8.',
            explanation: '24 : 8 = 3 và 32 : 8 = 4 => 24/32 = 3/4 => x = 3.'
          },
          {
            id: 'l1_q8',
            question: 'Một lớp học có 36 học sinh, trong đó có 20 học sinh nữ. Phân số chỉ số học sinh nam so với cả lớp rút gọn là:',
            options: ['4/9', '5/9', '4/5', '16/36'],
            correctAnswer: '4/9',
            hint: 'Số nam = 36 - 20 = 16 học sinh. Phân số = 16/36, rút gọn cho 4.',
            explanation: 'Số nam = 36 - 20 = 16. Phân số chỉ học sinh nam: 16/36 = (16 : 4)/(36 : 4) = 4/9.'
          },
          {
            id: 'l1_q9',
            question: 'Cho phân số 15/39. Tìm số tự nhiên k sao cho khi cộng k vào tử số và bớt k ở mẫu số ta được phân số 1/2:',
            options: ['k = 3', 'k = 4', 'k = 2', 'k = 5'],
            correctAnswer: 'k = 3',
            hint: 'Tổng tử và mẫu không đổi: 15 + 39 = 54. Tử mới = 54 : (1+2) = 18 => k = 18 - 15 = 3.',
            explanation: 'Tổng tử và mẫu là 15 + 39 = 54. Phân số mới bằng 1/2 nên tử số mới là 54 : 3 = 18. Vậy k = 18 - 15 = 3.'
          },
          {
            id: 'l1_q10',
            question: 'Thử thách điểm 10: Rút gọn biểu thức tích sau: A = (1 - 1/2) × (1 - 1/3) × (1 - 1/4) × ... × (1 - 1/20)',
            options: ['1/20', '1/19', '2/20', '1/10'],
            correctAnswer: '1/20',
            hint: 'Tính từng ngoặc: 1/2 × 2/3 × 3/4 × ... × 19/20 và triệt tiêu chéo!',
            explanation: 'A = 1/2 × 2/3 × 3/4 × ... × 19/20 = (1 × 2 × 3 × ... × 19) / (2 × 3 × 4 × ... × 20) = 1/20.'
          }
        ]
      },
      {
        id: 'ch1_l2',
        chapterId: 'ch1',
        title: 'Quy đồng & So sánh phân số',
        subtitle: 'Tìm mẫu số chung nhỏ nhất & so sánh phần bù',
        levelNumber: 2,
        icon: '⚖️',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'Quy đồng mẫu số và So sánh phân số',
          keyPoints: [
            'Quy đồng mẫu số: Biến đổi các phân số về cùng một mẫu số chung dương.',
            'Cùng mẫu số: Phân số nào có tử lớn hơn thì phân số đó lớn hơn.',
            'Cùng tử số: Phân số nào có mẫu NHỎ hơn thì phân số đó LỚN hơn.',
            'So sánh với 1: Tử > Mẫu thì > 1; Tử < Mẫu thì < 1.'
          ],
          formula: 'So sánh phần bù tới 1: 1 - a/b càng bé thì a/b càng lớn!',
          examples: [
            {
              problem: 'So sánh 4/5 và 5/6.',
              solution: 'Phần bù tới 1: 1 - 4/5 = 1/5; 1 - 5/6 = 1/6. Vì 1/5 > 1/6 nên 4/5 < 5/6.'
            }
          ],
          memoryTip: '💡 Mẹo thần tốc: Khi hai phân số gần bằng 1, hãy so sánh phần bù với 1! Phần thiếu ít hơn thì số đó lớn hơn!'
        },
        questions: [
          {
            id: 'l2_q1',
            question: 'Mẫu số chung nhỏ nhất của hai phân số 5/6 và 3/8 là:',
            options: ['24', '48', '14', '18'],
            correctAnswer: '24',
            hint: 'Tìm số nhỏ nhất chia hết cho cả 6 và 8.',
            explanation: '24 chia hết cho 6 (được 4) và chia hết cho 8 (được 3). 24 là mẫu số chung nhỏ nhất.'
          },
          {
            id: 'l2_q2',
            question: 'Sắp xếp các phân số sau theo thứ tự từ bé đến lớn: 2/3, 5/6, 1/2',
            options: ['1/2 < 2/3 < 5/6', '2/3 < 1/2 < 5/6', '5/6 < 2/3 < 1/2', '1/2 < 5/6 < 2/3'],
            correctAnswer: '1/2 < 2/3 < 5/6',
            hint: 'Quy đồng về mẫu chung là 6: 1/2 = 3/6; 2/3 = 4/6; 5/6 = 5/6.',
            explanation: 'Vì 3/6 < 4/6 < 5/6 nên 1/2 < 2/3 < 5/6.'
          },
          {
            id: 'l2_q3',
            question: 'So sánh 2 phân số có cùng tử số: 7/11 và 7/13. Phân số nào lớn hơn?',
            options: ['7/11 > 7/13', '7/11 < 7/13', '7/11 = 7/13', 'Không so sánh được'],
            correctAnswer: '7/11 > 7/13',
            hint: 'Khi hai phân số có cùng tử số dương, phân số nào có mẫu số bé hơn thì lớn hơn.',
            explanation: 'Vì cùng có tử là 7, mẫu số 11 < 13 nên 7/11 > 7/13.'
          },
          {
            id: 'l2_q4',
            question: 'Phân số nào sau đây bé hơn 1?',
            options: ['5/6', '6/5', '7/7', '9/8'],
            correctAnswer: '5/6',
            hint: 'Phân số bé hơn 1 có tử số nhỏ hơn mẫu số.',
            explanation: '5 < 6 nên 5/6 < 1.'
          },
          {
            id: 'l2_q5',
            question: 'Quy đồng mẫu số hai phân số 3/4 và 5/12 với mẫu số chung 12 ta được:',
            options: ['9/12 và 5/12', '6/12 và 5/12', '12/12 và 5/12', '3/12 và 5/12'],
            correctAnswer: '9/12 và 5/12',
            hint: '3/4 = (3 × 3)/(4 × 3) = 9/12.',
            explanation: '12 : 4 = 3 => 3/4 = (3 × 3) / (4 × 3) = 9/12. Giữ nguyên 5/12.'
          },
          {
            id: 'l2_q6',
            question: 'Tìm phân số nằm giữa 1/3 và 1/2 có mẫu số là 12:',
            options: ['5/12', '7/12', '4/12', '6/12'],
            correctAnswer: '5/12',
            hint: '1/3 = 4/12 và 1/2 = 6/12.',
            explanation: 'Quy đồng: 1/3 = 4/12 và 1/2 = 6/12. Số nằm giữa là 5/12.'
          },
          {
            id: 'l2_q7',
            question: 'So sánh 4/5 và 5/6 bằng phương pháp so sánh phần bù:',
            options: ['4/5 < 5/6', '4/5 > 5/6', '4/5 = 5/6', 'Không xác định'],
            correctAnswer: '4/5 < 5/6',
            hint: '1 - 4/5 = 1/5 và 1 - 5/6 = 1/6. Vì 1/5 > 1/6 nên 4/5 < 5/6.',
            explanation: 'Phần bù của 4/5 là 1/5 lớn hơn phần bù của 5/6 là 1/6 => 4/5 < 5/6.'
          },
          {
            id: 'l2_q8',
            question: 'Có ba bạn chạy bộ: Lan chạy được 2/3 quãng đường, Mai chạy 3/4 quãng đường, Nam chạy 5/6 quãng đường. Ai chạy được xa nhất?',
            options: ['Nam chạy xa nhất (5/6)', 'Mai chạy xa nhất (3/4)', 'Lan chạy xa nhất (2/3)', 'Cả 3 bạn bằng nhau'],
            correctAnswer: 'Nam chạy xa nhất (5/6)',
            hint: 'So sánh 2/3, 3/4 và 5/6 qua phần bù: 1/3 > 1/4 > 1/6 => 5/6 lớn nhất.',
            explanation: '1 - 2/3 = 1/3; 1 - 3/4 = 1/4; 1 - 5/6 = 1/6. Vì 1/6 nhỏ nhất nên 5/6 lớn nhất.'
          },
          {
            id: 'l2_q9',
            question: 'So sánh 2023/2024 và 2024/2025. Phân số nào lớn hơn?',
            options: ['2024/2025 lớn hơn', '2023/2024 lớn hơn', 'Hai phân số bằng nhau', 'Không so sánh được'],
            correctAnswer: '2024/2025 lớn hơn',
            hint: '1 - 2023/2024 = 1/2024 và 1 - 2024/2025 = 1/2025. So sánh hai phần bù!',
            explanation: 'Vì 1/2024 > 1/2025 nên 2023/2024 thiếu nhiều hơn để đủ 1, suy ra 2024/2025 > 2023/2024.'
          },
          {
            id: 'l2_q10',
            question: 'Thử thách điểm 10: So sánh hai phân số không quy đồng: A = 13/17 và B = 1313/1717',
            options: ['A = B', 'A > B', 'A < B', 'Không kết luận được'],
            correctAnswer: 'A = B',
            hint: 'Rút gọn phân số B bằng cách chia cả tử và mẫu cho 101!',
            explanation: '1313 = 13 × 101 và 1717 = 17 × 101 => 1313/1717 = 13/17. Vậy A = B.'
          }
        ]
      },
      {
        id: 'ch1_l3',
        chapterId: 'ch1',
        title: 'Phân số thập phân & Hỗn số',
        subtitle: 'Chuyển đổi hỗn số sang phân số và ngược lại',
        levelNumber: 3,
        icon: '🥞',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Phân số thập phân & Hỗn số',
          keyPoints: [
            'Phân số thập phân: Là phân số có mẫu số là 10, 100, 1000...',
            'Hỗn số: Gồm phần nguyên và phần phân số (phần phân số luôn bé hơn 1).',
            'Chuyển hỗn số sang phân số: Tử số = (Phần nguyên × Mẫu số) + Tử số cũ; Mẫu số giữ nguyên.'
          ],
          formula: 'a (b/c) = (a × c + b) / c',
          examples: [
            {
              problem: 'Chuyển hỗn số 3 2/5 sang phân số.',
              solution: 'Tử số mới = 3 × 5 + 2 = 17. Mẫu số = 5. Kết quả: 17/5.'
            }
          ],
          memoryTip: '💡 "Lấy nguyên nhân mẫu cộng vào tử / Giữ nguyên mẫu số thế là xong!"'
        },
        questions: [
          {
            id: 'l3_q1',
            question: 'Phân số nào sau đây là phân số thập phân?',
            options: ['35/100', '4/25', '7/50', '9/30'],
            correctAnswer: '35/100',
            hint: 'Phân số thập phân có mẫu số là 10, 100, 1000...',
            explanation: '35/100 có mẫu số là 100 nên là phân số thập phân.'
          },
          {
            id: 'l3_q2',
            question: 'Hỗn số 5 3/4 được viết thành phân số là:',
            options: ['23/4', '15/4', '20/4', '8/4'],
            correctAnswer: '23/4',
            hint: 'Tử số = 5 × 4 + 3 = 23.',
            explanation: '5 × 4 + 3 = 23 => 23/4.'
          },
          {
            id: 'l3_q3',
            question: 'Viết phân số 17/5 dưới dạng hỗn số ta được:',
            options: ['3 2/5', '3 1/5', '2 7/5', '4 2/5'],
            correctAnswer: '3 2/5',
            hint: 'Lấy 17 chia cho 5: được 3 dư 2.',
            explanation: '17 : 5 = 3 dư 2 => 3 2/5.'
          },
          {
            id: 'l3_q4',
            question: 'Phân số 3/25 chuyển thành phân số thập phân có mẫu số là 100 là:',
            options: ['12/100', '15/100', '6/100', '9/100'],
            correctAnswer: '12/100',
            hint: 'Nhân cả tử và mẫu với 4 (vì 25 × 4 = 100).',
            explanation: '3/25 = (3 × 4)/(25 × 4) = 12/100.'
          },
          {
            id: 'l3_q5',
            question: 'Tính: 2 1/3 + 3 1/2 = ?',
            options: ['5 5/6 (hoặc 35/6)', '5 2/5', '6 1/6', '5 1/6'],
            correctAnswer: '5 5/6 (hoặc 35/6)',
            hint: '2 1/3 = 7/3; 3 1/2 = 7/2. Quy đồng mẫu số là 6: 14/6 + 21/6 = 35/6 = 5 5/6.',
            explanation: 'Cộng phần nguyên: 2 + 3 = 5. Cộng phân số: 1/3 + 1/2 = 5/6 => 5 5/6.'
          },
          {
            id: 'l3_q6',
            question: 'Tính: 4 2/5 - 1 1/2 = ?',
            options: ['2 9/10 (hoặc 29/10)', '3 1/3', '2 1/10', '3 9/10'],
            correctAnswer: '2 9/10 (hoặc 29/10)',
            hint: '4 2/5 = 22/5 = 44/10; 1 1/2 = 3/2 = 15/10.',
            explanation: '44/10 - 15/10 = 29/10 = 2 9/10.'
          },
          {
            id: 'l3_q7',
            question: 'Tính tích của hai hỗn số: 1 1/2 × 2 2/3 = ?',
            options: ['4', '3 1/3', '3', '4 1/2'],
            correctAnswer: '4',
            hint: 'Chuyển sang phân số: 1 1/2 = 3/2; 2 2/3 = 8/3.',
            explanation: '3/2 × 8/3 = 24/6 = 4.'
          },
          {
            id: 'l3_q8',
            question: 'Tính thương: 3 1/3 : 2 2/9 = ?',
            options: ['1 1/2 (hoặc 3/2)', '1 2/3', '2', '4/3'],
            correctAnswer: '1 1/2 (hoặc 3/2)',
            hint: '3 1/3 = 10/3; 2 2/9 = 20/9.',
            explanation: '10/3 : 20/9 = 10/3 × 9/20 = 90/60 = 3/2 = 1 1/2.'
          },
          {
            id: 'l3_q9',
            question: 'Một tấm vải dài 12 1/2 m. Người thợ cắt may 3 bộ quần áo, mỗi bộ hết 2 1/4 m. Hỏi tấm vải còn lại bao nhiêu mét?',
            options: ['5 3/4 m (5.75 m)', '6 1/4 m', '5 1/2 m', '6 m'],
            correctAnswer: '5 3/4 m (5.75 m)',
            hint: 'Tổng vải đã cắt: 3 × 2 1/4 = 3 × 9/4 = 27/4 = 6 3/4 m. Lấy 12 1/2 - 6 3/4.',
            explanation: '12 1/2 = 25/2 = 50/4 m. Vải cắt: 3 × 9/4 = 27/4 m. Còn lại: 50/4 - 27/4 = 23/4 m = 5 3/4 m.'
          },
          {
            id: 'l3_q10',
            question: 'Thử thách điểm 10: Tìm x biết: (x + 1/2) + (x + 1/4) + (x + 1/8) = 7/8',
            options: ['x = 0', 'x = 1/8', 'x = 1/4', 'x = 1/2'],
            correctAnswer: 'x = 0',
            hint: 'Nhóm: 3 × x + (1/2 + 1/4 + 1/8) = 7/8. Tính tổng phân số: 4/8 + 2/8 + 1/8 = 7/8!',
            explanation: '3 × x + 7/8 = 7/8 => 3 × x = 0 => x = 0.'
          }
        ]
      }
    ]
  },

  // CHỦ ĐỀ 2: SỐ THẬP PHÂN (Bài 10 - 14)
  {
    id: 'ch2',
    title: 'Chủ đề 2: Số Thập Phân',
    vietnameseTitle: 'Vùng Đất Số Thập Phân Huyền Bí',
    description: 'Học kỳ 1 (Bài 10 - 14) • Khái niệm, so sánh, viết số đo đại lượng và làm tròn số thập phân.',
    semester: 1,
    color: 'from-blue-500 to-cyan-600',
    bgGradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    icon: '🔮',
    boss: {
      id: 'boss_ch2',
      name: 'Thần Thạch Decimus',
      avatar: '🗿',
      title: 'Người Khổng Lồ Dấu Phẩy',
      maxHp: 320,
      story: 'Decimus nắm giữ bí thuật dịch chuyển dấu phẩy. Hãy thể hiện kiến thức làm tròn và so sánh số thập phân để vượt ải!',
      rewardBadgeId: 'badge_boss_ch2',
      questions: [
        {
          id: 'b2_q1',
          question: 'Chữ số 7 trong số thập phân 45.872 có giá trị là:',
          options: ['7/100 (bảy phần trăm)', '7/10 (bảy phần mười)', '7/1000 (bảy phần nghìn)', '7 đơn vị'],
          correctAnswer: '7/100 (bảy phần trăm)',
          hint: 'Chữ số 8 ở hàng phần mười, chữ số 7 ở hàng phần trăm.',
          explanation: 'Số 7 đứng ở vị trí thứ hai sau dấu phẩy nên thuộc hàng phần trăm, giá trị là 7/100 = 0.07.'
        },
        {
          id: 'b2_q2',
          question: 'Làm tròn số 84.675 đến hàng phần mười (chữ số thập phân thứ nhất) ta được:',
          options: ['84.7', '84.6', '85.0', '84.68'],
          correctAnswer: '84.7',
          hint: 'Chữ số ngay sau hàng phần mười là 7 (>= 5), nên tăng chữ số phần mười lên 1 đơn vị: 6 + 1 = 7.',
          explanation: 'Vì số ngay sau hàng phần mười là 7 >= 5 nên làm tròn lên 84.7.'
        },
        {
          id: 'b2_q3',
          question: 'Viết số đo 5m 8cm dưới dạng số thập phân có đơn vị mét là:',
          options: ['5.08 m', '5.8 m', '5.80 m', '50.8 m'],
          correctAnswer: '5.08 m',
          hint: '1 m = 100 cm, do đó 8 cm = 8/100 m = 0.08 m.',
          explanation: '5m + 0.08m = 5.08m.'
        }
      ]
    },
    lessons: [
      {
        id: 'ch2_l1',
        chapterId: 'ch2',
        title: 'Khái niệm & Hàng của số thập phân',
        subtitle: 'Cấu tạo số thập phân: Phần nguyên & phần thập phân',
        levelNumber: 4,
        icon: '🔢',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'Khái niệm & Hàng của số thập phân',
          keyPoints: [
            'Số thập phân gồm hai phần: Phần nguyên (trước dấu phẩy) và Phần thập phân (sau dấu phẩy).',
            'Các hàng phần thập phân lần lượt là: Hàng phần mười, hàng phần trăm, hàng phần nghìn, hàng phần chục nghìn...',
            'Đọc số: Đọc phần nguyên trước, dấu "phẩy", rồi đọc phần thập phân.'
          ],
          formula: 'Ví dụ số 324.568: 5 là phần mười, 6 là phần trăm, 8 là phần nghìn.',
          examples: [
            {
              problem: 'Số 48.092 gồm những hàng nào?',
              solution: '4 chục, 8 đơn vị, 0 phần mười, 9 phần trăm, 2 phần nghìn.'
            }
          ],
          memoryTip: '💡 "Trước phẩy đơn vị chục trăm / Sau phẩy phần mười, phần trăm, phần nghìn!"'
        },
        questions: [
          {
            id: 'c2l1_q1',
            question: 'Trong số thập phân 85.342, chữ số 4 thuộc hàng nào?',
            options: ['Hàng phần trăm', 'Hàng phần mười', 'Hàng phần nghìn', 'Hàng chục'],
            correctAnswer: 'Hàng phần trăm',
            hint: 'Số 3 là phần mười, số 4 là phần trăm.',
            explanation: 'Vị trí thứ 2 sau dấu phẩy là hàng phần trăm.'
          },
          {
            id: 'c2l1_q2',
            question: 'Số "Bảy mươi lăm phẩy không tám" được viết là:',
            options: ['75.08', '75.8', '705.08', '75.80'],
            correctAnswer: '75.08',
            hint: 'Không tám có chữ số 0 ở hàng phần mười và 8 ở hàng phần trăm.',
            explanation: '75.08 viết là bảy mươi lăm phẩy không tám.'
          },
          {
            id: 'c2l1_q3',
            question: 'Số thập phân 0.009 đọc là:',
            options: ['Không phẩy không không chín (chín phần nghìn)', 'Không phẩy chín', 'Chín phần trăm', 'Chín phần mười'],
            correctAnswer: 'Không phẩy không không chín (chín phần nghìn)',
            hint: 'Có 3 chữ số sau dấu phẩy là phần nghìn.',
            explanation: '0.009 có 9 ở hàng phần nghìn, đọc là chín phần nghìn.'
          },
          {
            id: 'c2l1_q4',
            question: 'Phân số thập phân 245/100 viết dưới dạng số thập phân là:',
            options: ['2.45', '24.5', '0.245', '245.0'],
            correctAnswer: '2.45',
            hint: 'Chia cho 100 lùi dấu phẩy 2 chữ số sang trái.',
            explanation: '245 : 100 = 2.45.'
          },
          {
            id: 'c2l1_q5',
            question: 'Trong số 39.875, giá trị của chữ số 8 lớn gấp bao nhiêu lần giá trị của chữ số 5?',
            options: ['160 lần', '100 lần', '1000 lần', '80 lần'],
            correctAnswer: '160 lần',
            hint: 'Chữ số 8 có giá trị 0.8; chữ số 5 có giá trị 0.005. Lấy 0.8 : 0.005.',
            explanation: '0.8 : 0.005 = 800 : 5 = 160 lần.'
          },
          {
            id: 'c2l1_q6',
            question: 'Viết số thập phân gồm: 5 đơn vị, 7 phần trăm và 2 phần nghìn:',
            options: ['5.072', '5.72', '5.702', '5.27'],
            correctAnswer: '5.072',
            hint: 'Hàng phần mười không có nên là chữ số 0.',
            explanation: '5 đơn vị, 0 phần mười, 7 phần trăm, 2 phần nghìn => 5.072.'
          },
          {
            id: 'c2l1_q7',
            question: 'Nếu viết thêm chữ số 0 vào bên phải phần thập phân của một số thập phân thì giá trị của nó:',
            options: ['Không thay đổi', 'Tăng lên 10 lần', 'Giảm đi 10 lần', 'Tăng 100 lần'],
            correctAnswer: 'Không thay đổi',
            hint: 'Ví dụ: 0.5 = 0.50 = 0.500.',
            explanation: 'Tính chất số thập phân bằng nhau: thêm hoặc bớt chữ số 0 ở tận cùng bên phải phần thập phân thì giá trị không đổi.'
          },
          {
            id: 'c2l1_q8',
            question: 'Số thập phân nào bằng số thập phân 6.8?',
            options: ['6.800', '6.08', '0.68', '60.8'],
            correctAnswer: '6.800',
            hint: 'Viết thêm chữ số 0 ở bên phải phần thập phân.',
            explanation: '6.8 = 6.80 = 6.800.'
          },
          {
            id: 'c2l1_q9',
            question: 'Chuyển phân số 7/8 thành số thập phân ta được:',
            options: ['0.875', '0.78', '0.87', '0.85'],
            correctAnswer: '0.875',
            hint: 'Lấy 7 chia cho 8 (hoặc nhân cả tử và mẫu với 125).',
            explanation: '7 : 8 = 0.875 (7/8 = 875/1000 = 0.875).'
          },
          {
            id: 'c2l1_q10',
            question: 'Thử thách điểm 10: Tìm số tự nhiên x có 2 chữ số biết: 12.3 < x < 13.1 và x là số chia hết cho cả 2 và 3',
            options: ['Không tồn tại số tự nhiên nào thỏa mãn', 'x = 12', 'x = 13', 'x = 18'],
            correctAnswer: 'Không tồn tại số tự nhiên nào thỏa mãn',
            hint: 'Số tự nhiên giữa 12.3 và 13.1 duy nhất là 13. Kiểm tra xem 13 có chia hết cho 2 và 3 không!',
            explanation: 'Số tự nhiên duy nhất thỏa mãn 12.3 < x < 13.1 là x = 13. Nhưng 13 là số nguyên tố không chia hết cho 2 và 3. Vậy không tồn tại số tự nhiên nào thỏa mãn.'
          }
        ]
      },
      {
        id: 'ch2_l2',
        chapterId: 'ch2',
        title: 'So sánh & Sắp xếp số thập phân',
        subtitle: 'Bí kíp so sánh từng hàng từ trái sang phải',
        levelNumber: 5,
        icon: '📊',
        xpReward: 35,
        coinReward: 15,
        theory: {
          title: 'So sánh & Sắp xếp số thập phân',
          keyPoints: [
            'So sánh phần nguyên trước: Số nào có phần nguyên lớn hơn thì lớn hơn.',
            'Nếu phần nguyên bằng nhau: So sánh đến phần thập phân lần lượt từ hàng phần mười, hàng phần trăm, hàng phần nghìn...',
            'Đến cùng một hàng, số nào có chữ số lớn hơn thì số đó lớn hơn.'
          ],
          formula: 'Ví dụ: 9.85 < 10.1 (vì 9 < 10); 7.42 > 7.39 (vì 4 > 3 ở hàng phần mười).',
          examples: [
            {
              problem: 'So sánh 5.6 và 5.58',
              solution: 'Phần nguyên bằng nhau (5 = 5). Hàng phần mười: 6 > 5. Vậy 5.6 > 5.58.'
            }
          ],
          memoryTip: '💡 Đừng nhìn vào độ dài của số! Hãy so sánh từng hàng từ trái sang phải!'
        },
        questions: [
          {
            id: 'c2l2_q1',
            question: 'Trong các số sau, số thập phân nào lớn nhất: 4.85, 4.9, 4.879, 4.099?',
            options: ['4.9', '4.879', '4.85', '4.099'],
            correctAnswer: '4.9',
            hint: 'Hàng phần mười: 9 > 8 => 4.9 lớn nhất (4.9 = 4.900).',
            explanation: '4.900 có hàng phần mười là 9 lớn nhất.'
          },
          {
            id: 'c2l2_q2',
            question: 'Điền dấu thích hợp: 12.05 ... 12.050',
            options: ['=', '>', '<', 'Không so sánh được'],
            correctAnswer: '=',
            hint: 'Viết thêm chữ số 0 vào tận cùng bên phải phần thập phân giá trị không đổi.',
            explanation: '12.05 = 12.050.'
          },
          {
            id: 'c2l2_q3',
            question: 'Sắp xếp các số sau theo thứ tự từ bé đến lớn: 3.42, 3.24, 3.402, 3.204',
            options: ['3.204 < 3.24 < 3.402 < 3.42', '3.24 < 3.204 < 3.42 < 3.402', '3.42 < 3.402 < 3.24 < 3.204', '3.204 < 3.402 < 3.24 < 3.42'],
            correctAnswer: '3.204 < 3.24 < 3.402 < 3.42',
            hint: '3.204 < 3.240 < 3.402 < 3.420.',
            explanation: 'So sánh từng hàng từ phần mười rồi đến phần trăm và phần nghìn.'
          },
          {
            id: 'c2l2_q4',
            question: 'Tìm chữ số x thích hợp để: 5.67x > 5.678',
            options: ['x = 9', 'x = 8', 'x = 7', 'x = 6'],
            correctAnswer: 'x = 9',
            hint: 'So sánh hàng phần nghìn: x > 8.',
            explanation: 'Vì các hàng trước đều bằng nhau nên x phải lớn hơn 8 => x = 9.'
          },
          {
            id: 'c2l2_q5',
            question: 'Có bao nhiêu số tự nhiên x thỏa mãn: 8.9 < x < 14.2?',
            options: ['6 số (9, 10, 11, 12, 13, 14)', '5 số', '7 số', '4 số'],
            correctAnswer: '6 số (9, 10, 11, 12, 13, 14)',
            hint: 'Các số tự nhiên từ 9 đến 14.',
            explanation: 'x gồm các số 9, 10, 11, 12, 13, 14 (tổng cộng có 14 - 9 + 1 = 6 số).'
          },
          {
            id: 'c2l2_q6',
            question: 'Tìm số tự nhiên liền sau của số thập phân 19.99:',
            options: ['20', '19', '21', '20.01'],
            correctAnswer: '20',
            hint: 'Số tự nhiên nhỏ nhất lớn hơn 19.99 là 20.',
            explanation: 'Số tự nhiên nhỏ nhất lớn hơn 19.99 là 20.'
          },
          {
            id: 'c2l2_q7',
            question: 'Tìm hai số tự nhiên liên tiếp x và y sao cho: x < 7.85 < y',
            options: ['x = 7 và y = 8', 'x = 6 và y = 7', 'x = 7 và y = 9', 'x = 8 và y = 9'],
            correctAnswer: 'x = 7 và y = 8',
            hint: '7.85 nằm giữa hai số nguyên 7 và 8.',
            explanation: '7 < 7.85 < 8 nên x = 7, y = 8.'
          },
          {
            id: 'c2l2_q8',
            question: 'Bốn bạn chạy 100m có thành tích: An: 15.2 giây, Bình: 14.85 giây, Cường: 15.05 giây, Dũng: 14.9 giây. Ai chạy nhanh nhất?',
            options: ['Bình (14.85 giây)', 'Dũng (14.9 giây)', 'Cường (15.05 giây)', 'An (15.2 giây)'],
            correctAnswer: 'Bình (14.85 giây)',
            hint: 'Chạy nhanh nhất là người có thời gian ít nhất (nhỏ nhất).',
            explanation: '14.85 < 14.90 < 15.05 < 15.20 => Bình ít thời gian nhất nên chạy nhanh nhất.'
          },
          {
            id: 'c2l2_q9',
            question: 'Tìm một số thập phân có một chữ số ở phần thập phân sao cho: 3.5 < x < 3.7',
            options: ['x = 3.6', 'x = 3.55', 'x = 3.65', 'x = 3.75'],
            correctAnswer: 'x = 3.6',
            hint: 'Đề bài yêu cầu chỉ có 1 chữ số ở phần thập phân.',
            explanation: '3.6 có 1 chữ số thập phân và 3.5 < 3.6 < 3.7.'
          },
          {
            id: 'c2l2_q10',
            question: 'Thử thách điểm 10: Có bao nhiêu số thập phân có 2 chữ số ở phần thập phân lớn hơn 4.5 và bé hơn 4.6?',
            options: ['9 số (4.51 đến 4.59)', '10 số', 'Vô số', '8 số'],
            correctAnswer: '9 số (4.51 đến 4.59)',
            hint: '4.50 < x < 4.60. Đếm các số từ 4.51 đến 4.59.',
            explanation: 'Các số gồm: 4.51, 4.52, 4.53, 4.54, 4.55, 4.56, 4.57, 4.58, 4.59. Có đúng 9 số.'
          }
        ]
      },
      {
        id: 'ch2_l3',
        chapterId: 'ch2',
        title: 'Viết số đo đại lượng & Làm tròn số thập phân',
        subtitle: 'Đổi đơn vị độ dài, khối lượng, diện tích và quy tắc làm tròn',
        levelNumber: 6,
        icon: '📐',
        xpReward: 40,
        coinReward: 20,
        theory: {
          title: 'Viết số đo đại lượng & Làm tròn số thập phân',
          keyPoints: [
            'Bảng độ dài & khối lượng: Mỗi hàng liền kề gấp/kém nhau 10 lần.',
            'Bảng diện tích: Mỗi hàng liền kề gấp/kém nhau 100 lần (1 ha = 10000 m² = 1 hm²).',
            'Quy tắc làm tròn: Xét chữ số ngay sau hàng làm tròn. Nếu < 5 thì giữ nguyên; nếu >= 5 thì tăng 1 đơn vị.'
          ],
          formula: '1 km = 1000 m | 1 tấn = 1000 kg | 1 ha = 10000 m² = 100 dam²',
          examples: [
            {
              problem: 'Làm tròn 18.375 đến hàng phần mười.',
              solution: 'Chữ số ngay sau hàng phần mười là 7 (>= 5), tăng 3 lên 4 => Kết quả 18.4.'
            }
          ],
          memoryTip: '💡 "Dưới 5 giữ nguyên thảnh thơi / Từ 5 trở lên cộng 1 tròn trịa tuyệt vời!"'
        },
        questions: [
          {
            id: 'c2l3_q1',
            question: 'Viết số đo 7m 4dm dưới dạng số thập phân có đơn vị mét:',
            options: ['7.4 m', '7.04 m', '74 m', '0.74 m'],
            correctAnswer: '7.4 m',
            hint: '4 dm = 4/10 m = 0.4 m.',
            explanation: '7m + 0.4m = 7.4 m.'
          },
          {
            id: 'c2l3_q2',
            question: 'Viết số đo 3 tấn 50 kg dưới dạng số thập phân có đơn vị tấn:',
            options: ['3.05 tấn', '3.5 tấn', '3.005 tấn', '30.5 tấn'],
            correctAnswer: '3.05 tấn',
            hint: '1 tấn = 1000 kg, nên 50 kg = 50/1000 tấn = 0.05 tấn.',
            explanation: '3 + 0.05 = 3.05 tấn.'
          },
          {
            id: 'c2l3_q3',
            question: 'Viết số đo diện tích 4 ha 500 m² dưới dạng héc-ta (ha):',
            options: ['4.05 ha', '4.5 ha', '4.005 ha', '45 ha'],
            correctAnswer: '4.05 ha',
            hint: '1 ha = 10.000 m², nên 500 m² = 500/10.000 ha = 0.05 ha.',
            explanation: '4 ha + 0.05 ha = 4.05 ha.'
          },
          {
            id: 'c2l3_q4',
            question: 'Làm tròn số 62.483 đến hàng phần mười (chữ số thập phân thứ nhất) ta được:',
            options: ['62.5', '62.4', '62.48', '63.0'],
            correctAnswer: '62.5',
            hint: 'Chữ số ngay sau phần mười là 8 (>= 5) nên làm tròn lên.',
            explanation: 'Vì 8 >= 5 nên tăng 4 lên 5 => 62.5.'
          },
          {
            id: 'c2l3_q5',
            question: 'Làm tròn số 129.845 đến hàng đơn vị ta được:',
            options: ['130', '129', '129.8', '130.0'],
            correctAnswer: '130',
            hint: 'Chữ số phần mười là 8 (>= 5) nên làm tròn lên 1 đơn vị: 129 + 1 = 130.',
            explanation: 'Vì hàng phần mười là 8 >= 5 nên làm tròn lên 130.'
          },
          {
            id: 'c2l3_q6',
            question: 'Điền số thích hợp: 8 km² 5 ha = ... km²',
            options: ['8.05 km²', '8.5 km²', '80.5 km²', '8.005 km²'],
            correctAnswer: '8.05 km²',
            hint: '1 km² = 100 ha, nên 5 ha = 5/100 km² = 0.05 km².',
            explanation: '8 + 0.05 = 8.05 km².'
          },
          {
            id: 'c2l3_q7',
            question: 'Điền số thích hợp: 4 m² 8 dm² = ... m²',
            options: ['4.08 m²', '4.8 m²', '4.008 m²', '48 m²'],
            correctAnswer: '4.08 m²',
            hint: '1 m² = 100 dm² nên 8 dm² = 0.08 m².',
            explanation: '4 + 0.08 = 4.08 m².'
          },
          {
            id: 'c2l3_q8',
            question: 'Một bao gạo nặng 50 kg 400 g. Hỏi 10 bao gạo như thế nặng tất cả bao nhiêu ki-lô-gam?',
            options: ['504 kg', '50.4 kg', '540 kg', '5040 kg'],
            correctAnswer: '504 kg',
            hint: '50 kg 400 g = 50.4 kg. Nhân với 10 dịch dấu phẩy sang phải 1 chữ số.',
            explanation: '50.4 × 10 = 504 kg.'
          },
          {
            id: 'c2l3_q9',
            question: 'Một khu rừng hình chữ nhật có diện tích là 350.000 m². Diện tích khu rừng tính theo héc-ta (ha) là:',
            options: ['35 ha', '3.5 ha', '350 ha', '0.35 ha'],
            correctAnswer: '35 ha',
            hint: '1 ha = 10.000 m². Lấy 350.000 : 10.000.',
            explanation: '350.000 : 10.000 = 35 ha.'
          },
          {
            id: 'c2l3_q10',
            question: 'Thử thách điểm 10: Cho số thập phân A. Khi làm tròn A đến hàng phần mười ta được 15.6. Biết A có hai chữ số sau dấu phẩy và chữ số tận cùng là 8. Số A lớn nhất có thể là:',
            options: ['15.58', '15.64', '15.68', '15.65'],
            correctAnswer: '15.58',
            hint: 'Để làm tròn lên 15.6 với tận cùng là 8, hàng phần mười phải là 5 và phần trăm là 8 (15.58 >= 5 làm tròn thành 15.6).',
            explanation: 'Nếu phần mười là 5: 15.58 có tận cùng là 8 >= 5 nên làm tròn lên 15.6. Nếu là 15.68 thì làm tròn thành 15.7 (loại). Vậy số A thỏa mãn là 15.58.'
          }
        ]
      }
    ]
  }
];
