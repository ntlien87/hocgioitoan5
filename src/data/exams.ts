import { Exam } from '../types/math';

export const exams: Exam[] = [
  {
    id: 'exam_gk1',
    title: 'Đề Thi Giữa Học Kỳ 1 (Toán 5 Chuẩn)',
    semester: 1,
    type: 'mid-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Kiểm tra chuẩn Bộ GD&ĐT: Phân số, hỗn số, bảng đơn vị đo độ dài & diện tích (ha), giải toán tỉ lệ thuận - nghịch, dạng bài thi phân loại 10 điểm.',
    questions: [
      {
        id: 'gk1_q1',
        topic: 'Số thập phân & Phân số',
        points: 1,
        question: 'Phân số thập phân 45/1000 được viết dưới dạng số thập phân là:',
        options: ['0.045', '0.45', '0.0045', '4.5'],
        correctAnswer: '0.045',
        explanation: '45/1000 = 0.045 (có 3 chữ số ở phần thập phân vì mẫu số là 1000).'
      },
      {
        id: 'gk1_q2',
        topic: 'Hỗn số',
        points: 1,
        question: 'Chuyển hỗn số 4 3/8 thành phân số ta được kết quả là:',
        options: ['35/8', '32/8', '24/8', '12/8'],
        correctAnswer: '35/8',
        explanation: 'Tử số mới = 4 × 8 + 3 = 35. Giữ nguyên mẫu số 8 => 35/8.'
      },
      {
        id: 'gk1_q3',
        topic: 'Đo lường diện tích',
        points: 1,
        question: 'Điền số thích hợp vào chỗ chấm: 8 ha 5 dam² = ... ha',
        options: ['8.05 ha', '8.5 ha', '80.5 ha', '8.005 ha'],
        correctAnswer: '8.05 ha',
        explanation: 'Vì 1 ha = 100 dam², nên 5 dam² = 5/100 ha = 0.05 ha. Do đó: 8 ha 5 dam² = 8.05 ha.'
      },
      {
        id: 'gk1_q4',
        topic: 'Phép tính phân số',
        points: 1,
        question: 'Tính giá trị biểu thức: 5/6 + 2/3 : 4/9 = ?',
        options: ['7/3', '15/8', '2/3', '11/6'],
        correctAnswer: '7/3',
        explanation: 'Chia trước: 2/3 : 4/9 = 2/3 × 9/4 = 18/12 = 3/2. Cộng: 5/6 + 3/2 = 5/6 + 9/6 = 14/6 = 7/3.'
      },
      {
        id: 'gk1_q5',
        topic: 'So sánh phân số',
        points: 1,
        question: 'Phân số nào sau đây lớn nhất trong 4 phân số: 3/4, 4/5, 5/6, 7/8?',
        options: ['7/8', '5/6', '4/5', '3/4'],
        correctAnswer: '7/8',
        explanation: 'So sánh phần bù tới 1: 1 - 7/8 = 1/8 là phần bù nhỏ nhất trong các phân số, do đó 7/8 là phân số lớn nhất.'
      },
      {
        id: 'gk1_q6',
        topic: 'Toán tỉ lệ thuận',
        points: 1,
        question: 'Mua 12 quyển vở hết 108.000 đồng. Hỏi có 180.000 đồng thì mua được bao nhiêu quyển vở cùng loại?',
        options: ['20 quyển', '18 quyển', '22 quyển', '24 quyển'],
        correctAnswer: '20 quyển',
        explanation: 'Giá tiền 1 quyển: 108.000 : 12 = 9.000 đồng. Số vở mua được: 180.000 : 9.000 = 20 quyển.'
      },
      {
        id: 'gk1_q7',
        topic: 'Toán tỉ lệ nghịch',
        points: 1,
        question: 'Một đội gồm 10 người dự định làm xong một công việc trong 6 ngày. Nếu muốn xong sớm trong 4 ngày thì cần bao nhiêu người? (mức làm như nhau)',
        options: ['15 người', '12 người', '16 người', '18 người'],
        correctAnswer: '15 người',
        explanation: 'Tổng công: 10 × 6 = 60 công. Muốn xong trong 4 ngày cần: 60 : 4 = 15 người.'
      },
      {
        id: 'gk1_q8',
        topic: 'Hình học & Héc-ta',
        points: 1,
        question: 'Một mảnh đất hình chữ nhật có chiều dài 250 m, chiều rộng bằng 3/5 chiều dài. Diện tích mảnh đất đó tính theo héc-ta (ha) là:',
        options: ['3.75 ha', '37.5 ha', '0.375 ha', '375 ha'],
        correctAnswer: '3.75 ha',
        explanation: 'Chiều rộng: 250 × 3/5 = 150 m. Diện tích: 250 × 150 = 37.500 m² = 3.75 ha.'
      },
      {
        id: 'gk1_q9',
        topic: 'Tìm hai số khi biết Tổng và Tỉ',
        points: 1,
        question: 'Hai thùng dầu có tất cả 160 lít dầu. Thùng thứ nhất có số dầu bằng 3/5 số dầu thùng thứ hai. Hỏi thùng thứ nhất có bao nhiêu lít dầu?',
        options: ['60 lít', '100 lít', '80 lít', '50 lít'],
        correctAnswer: '60 lít',
        explanation: 'Tổng số phần bằng nhau: 3 + 5 = 8 phần. Số dầu thùng thứ nhất: 160 : 8 × 3 = 60 lít.'
      },
      {
        id: 'gk1_q10',
        topic: 'Thử thách điểm 10 - Tính nhanh',
        points: 1,
        question: 'Tính nhanh giá trị biểu thức: A = 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64',
        options: ['63/64', '61/64', '1', '127/128'],
        correctAnswer: '63/64',
        explanation: 'Ta có 2 × A = 1 + 1/2 + 1/4 + ... + 1/32. Lấy 2 × A - A = 1 - 1/64 = 63/64.'
      }
    ]
  },
  {
    id: 'exam_ck1',
    title: 'Đề Thi Cuối Học Kỳ 1 (Toán 5 Toàn Diện)',
    semester: 1,
    type: 'final-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Đề thi chuẩn học kỳ 1: Số thập phân, 4 phép tính thập phân, tỉ số phần trăm 3 dạng, tính nhanh và bài toán kinh tế thực tế.',
    questions: [
      {
        id: 'ck1_q1',
        topic: 'Hàng của số thập phân',
        points: 1,
        question: 'Trong số thập phân 128.459, chữ số 5 có giá trị là:',
        options: ['5/100', '5/10', '5/1000', '50'],
        correctAnswer: '5/100',
        explanation: 'Chữ số 5 nằm ở hàng phần trăm nên có giá trị là 5/100 (tức 0.05).'
      },
      {
        id: 'ck1_q2',
        topic: 'Nhân nhẩm số thập phân',
        points: 1,
        question: 'Kết quả của phép tính: 3.45 × 0.01 là:',
        options: ['0.0345', '0.345', '34.5', '345'],
        correctAnswer: '0.0345',
        explanation: 'Nhân với 0.01 dịch dấu phẩy sang trái 2 chữ số => 0.0345.'
      },
      {
        id: 'ck1_q3',
        topic: 'Tìm % của một số',
        points: 1,
        question: 'Tìm 25% của 480 kg gạo ta được kết quả là:',
        options: ['120 kg', '160 kg', '100 kg', '240 kg'],
        correctAnswer: '120 kg',
        explanation: '480 × 25 : 100 = 120 kg (hoặc 480 : 4 = 120 kg).'
      },
      {
        id: 'ck1_q4',
        topic: 'Tìm một số biết giá trị %',
        points: 1,
        question: 'Tìm một số biết 30% của số đó là 72:',
        options: ['240', '216', '180', '250'],
        correctAnswer: '240',
        explanation: 'Số cần tìm: 72 : 30 × 100 = 2.4 × 100 = 240.'
      },
      {
        id: 'ck1_q5',
        topic: 'Chia số thập phân',
        points: 1,
        question: 'Thực hiện phép tính: 17.55 : 3.9 = ?',
        options: ['4.5', '45', '0.45', '4.05'],
        correctAnswer: '4.5',
        explanation: 'Dịch dấu phẩy thành 175.5 : 39 = 4.5.'
      },
      {
        id: 'ck1_q6',
        topic: 'Tính thuận tiện',
        points: 1,
        question: 'Tính nhanh: 4.8 × 13.5 + 4.8 × 86.5 = ?',
        options: ['480', '48', '4800', '4.8'],
        correctAnswer: '480',
        explanation: '4.8 × (13.5 + 86.5) = 4.8 × 100 = 480.'
      },
      {
        id: 'ck1_q7',
        topic: 'Tỉ số % học sinh',
        points: 1,
        question: 'Một trường tiểu học có 1200 học sinh, trong đó có 54% học sinh nữ. Hỏi trường đó có bao nhiêu học sinh nam?',
        options: ['552 học sinh', '648 học sinh', '520 học sinh', '600 học sinh'],
        correctAnswer: '552 học sinh',
        explanation: 'Tỉ số % học sinh nam: 100% - 54% = 46%. Số học sinh nam: 1200 × 46 : 100 = 552 học sinh.'
      },
      {
        id: 'ck1_q8',
        topic: 'Toán lãi suất ngân hàng',
        points: 1,
        question: 'Bác Ba gửi tiết kiệm 50.000.000 đồng với lãi suất 0.5% một tháng. Sau 1 tháng, cả tiền gửi và tiền lãi bác nhận được là:',
        options: ['50.250.000 đồng', '52.500.000 đồng', '50.500.000 đồng', '55.000.000 đồng'],
        correctAnswer: '50.250.000 đồng',
        explanation: 'Tiền lãi: 50.000.000 × 0.5% = 250.000 đồng. Tổng nhận: 50.000.000 + 250.000 = 50.250.000 đồng.'
      },
      {
        id: 'ck1_q9',
        topic: 'Hình học & Tỉ số phần trăm',
        points: 1,
        question: 'Một mảnh vườn hình chữ nhật có chiều dài 30 m, chiều rộng 20 m. Người ta dành 35% diện tích để trồng rau. Diện tích đất còn lại là:',
        options: ['390 m²', '210 m²', '420 m²', '360 m²'],
        correctAnswer: '390 m²',
        explanation: 'Diện tích vườn: 30 × 20 = 600 m². Phần còn lại chiếm: 100% - 35% = 65%. Diện tích còn lại: 600 × 65% = 390 m².'
      },
      {
        id: 'ck1_q10',
        topic: 'Thử thách điểm 10 - Giá bán & Lãi',
        points: 1,
        question: 'Một cửa hàng bán một chiếc xe đạp với giá 1.800.000 đồng và được lãi 20% theo giá vốn. Hỏi tiền vốn của chiếc xe đạp đó là bao nhiêu?',
        options: ['1.500.000 đồng', '1.440.000 đồng', '1.600.000 đồng', '1.400.000 đồng'],
        correctAnswer: '1.500.000 đồng',
        explanation: 'Giá bán ứng với: 100% + 20% = 120% giá vốn. Tiền vốn: 1.800.000 : 120 × 100 = 1.500.000 đồng.'
      }
    ]
  },
  {
    id: 'exam_gk2',
    title: 'Đề Thi Giữa Học Kỳ 2 (Toán 5 Chuẩn)',
    semester: 2,
    type: 'mid-term-2',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Trọng tâm HK2: Diện tích tam giác, hình thang, chu vi & diện tích hình tròn, diện tích & thể tích hình hộp chữ nhật, hình lập phương, số đo thời gian.',
    questions: [
      {
        id: 'gk2_q1',
        topic: 'Diện tích hình tam giác',
        points: 1,
        question: 'Một hình tam giác có độ dài đáy 14 cm và chiều cao 8 cm. Diện tích của tam giác đó là:',
        options: ['56 cm²', '112 cm²', '48 cm²', '28 cm²'],
        correctAnswer: '56 cm²',
        explanation: 'S = 14 × 8 : 2 = 56 cm².'
      },
      {
        id: 'gk2_q2',
        topic: 'Diện tích hình thang',
        points: 1,
        question: 'Một thửa ruộng hình thang có đáy lớn 18 m, đáy bé 12 m và chiều cao 9 m. Diện tích thửa ruộng là:',
        options: ['135 m²', '270 m²', '150 m²', '120 m²'],
        correctAnswer: '135 m²',
        explanation: 'S = (18 + 12) × 9 : 2 = 30 × 9 : 2 = 135 m².'
      },
      {
        id: 'gk2_q3',
        topic: 'Hình tròn',
        points: 1,
        question: 'Một hình tròn có đường kính d = 10 cm. Diện tích của hình tròn đó là:',
        options: ['78.5 cm²', '31.4 cm²', '314 cm²', '15.7 cm²'],
        correctAnswer: '78.5 cm²',
        explanation: 'Bán kính r = 10 : 2 = 5 cm. Diện tích: S = 5 × 5 × 3.14 = 78.5 cm².'
      },
      {
        id: 'gk2_q4',
        topic: 'Đơn vị đo thể tích',
        points: 1,
        question: 'Điền số thích hợp vào chỗ chấm: 3.5 m³ = ... dm³ (lít)',
        options: ['3500 dm³', '350 dm³', '35000 dm³', '35 dm³'],
        correctAnswer: '3500 dm³',
        explanation: '1 m³ = 1000 dm³. Do đó 3.5 m³ = 3500 dm³ = 3500 lít.'
      },
      {
        id: 'gk2_q5',
        topic: 'Hình lập phương',
        points: 1,
        question: 'Một hình lập phương có cạnh 4 dm. Diện tích toàn phần của hình lập phương đó là:',
        options: ['96 dm²', '64 dm²', '16 dm²', '48 dm²'],
        correctAnswer: '96 dm²',
        explanation: 'Diện tích toàn phần = cạnh × cạnh × 6 = 4 × 4 × 6 = 96 dm².'
      },
      {
        id: 'gk2_q6',
        topic: 'Thể tích hình hộp chữ nhật',
        points: 1,
        question: 'Một khối gỗ dạng hình hộp chữ nhật có dài 12 cm, rộng 8 cm, cao 5 cm. Thể tích khối gỗ là:',
        options: ['480 cm³', '240 cm³', '960 cm³', '400 cm³'],
        correctAnswer: '480 cm³',
        explanation: 'V = a × b × c = 12 × 8 × 5 = 480 cm³.'
      },
      {
        id: 'gk2_q7',
        topic: 'Phép tính thời gian',
        points: 1,
        question: 'Tính: (3 giờ 20 phút + 2 giờ 45 phút) × 2 = ?',
        options: ['12 giờ 10 phút', '11 giờ 10 phút', '10 giờ 70 phút', '12 giờ 30 phút'],
        correctAnswer: '12 giờ 10 phút',
        explanation: '3h 20p + 2h 45p = 5h 65p = 6 giờ 5 phút. Nhân 2: 6h 5p × 2 = 12 giờ 10 phút.'
      },
      {
        id: 'gk2_q8',
        topic: 'Chia thời gian',
        points: 1,
        question: 'Người thợ làm 3 sản phẩm hết 5 giờ 15 phút. Hỏi trung bình người đó làm 1 sản phẩm hết bao lâu?',
        options: ['1 giờ 45 phút', '1 giờ 35 phút', '1 giờ 50 phút', '2 giờ 15 phút'],
        correctAnswer: '1 giờ 45 phút',
        explanation: 'Đổi 5 giờ 15 phút = 315 phút. Lấy 315 : 3 = 105 phút = 1 giờ 45 phút.'
      },
      {
        id: 'gk2_q9',
        topic: 'Toán thực tế bể nước',
        points: 1,
        question: 'Một bể nuôi cá dạng hình hộp chữ nhật có dài 1.2 m, rộng 0.8 m và cao 0.5 m. Hiện tại 3/4 thể tích bể chứa nước. Cần đổ thêm bao nhiêu lít nước nữa để đầy bể?',
        options: ['120 lít', '480 lít', '360 lít', '150 lít'],
        correctAnswer: '120 lít',
        explanation: 'Thể tích cả bể: 1.2 × 0.8 × 0.5 = 0.48 m³ = 480 lít. Lượng nước cần đổ thêm chiếm 1/4 bể: 480 × 1/4 = 120 lít.'
      },
      {
        id: 'gk2_q10',
        topic: 'Thử thách điểm 10 - Diện tích hình ghép',
        points: 1,
        question: 'Một hình vuông có cạnh 10 cm. Ở trong hình vuông vẽ một hình tròn nội tiếp tiếp xúc 4 cạnh hình vuông. Diện tích phần hình vuông nằm ngoài hình tròn là:',
        options: ['21.5 cm²', '78.5 cm²', '25 cm²', '31.4 cm²'],
        correctAnswer: '21.5 cm²',
        explanation: 'Diện tích hình vuông: 10 × 10 = 100 cm². Bán kính hình tròn r = 10 : 2 = 5 cm. Diện tích hình tròn: 5 × 5 × 3.14 = 78.5 cm². Diện tích phần ngoài: 100 - 78.5 = 21.5 cm².'
      }
    ]
  },
  {
    id: 'exam_ck2',
    title: 'Đề Thi Cuối Học Kỳ 2 (Toán 5 Toàn Diện)',
    semester: 2,
    type: 'final-term-2',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Đề thi tổng kết toàn diện cả năm Toán 5: Chuyển động đều (ngược chiều, cùng chiều, xuôi ngược dòng), hình học không gian, năng suất và giải toán thực tế.',
    questions: [
      {
        id: 'ck2_q1',
        topic: 'Đổi đơn vị thời gian',
        points: 1,
        question: 'Số thích hợp điền vào chỗ chấm: 2.5 giờ = ... phút',
        options: ['150 phút', '125 phút', '250 phút', '130 phút'],
        correctAnswer: '150 phút',
        explanation: '2.5 × 60 = 150 phút.'
      },
      {
        id: 'ck2_q2',
        topic: 'Công thức chuyển động',
        points: 1,
        question: 'Một người đi bộ với vận tốc 4.8 km/h. Quãng đường người đó đi được trong 45 phút là:',
        options: ['3.6 km', '36 km', '2.16 km', '4.2 km'],
        correctAnswer: '3.6 km',
        explanation: '45 phút = 0.75 giờ. Quãng đường s = v × t = 4.8 × 0.75 = 3.6 km.'
      },
      {
        id: 'ck2_q3',
        topic: 'Thời gian chuyển động có nghỉ',
        points: 1,
        question: 'Một ô tô đi từ Hà Nội lúc 6 giờ 15 phút, đến Hải Phòng lúc 8 giờ 45 phút. Dọc đường xe nghỉ 15 phút. Biết vận tốc ô tô là 48 km/h, quãng đường Hà Nội - Hải Phòng dài:',
        options: ['108 km', '120 km', '96 km', '114 km'],
        correctAnswer: '108 km',
        explanation: 'Thời gian đi thực tế: 8h 45p - 6h 15p - 15p = 2 giờ 15 phút = 2.25 giờ. Quãng đường: 48 × 2.25 = 108 km.'
      },
      {
        id: 'ck2_q4',
        topic: 'Hai xe ngược chiều',
        points: 1,
        question: 'Quãng đường AB dài 135 km. Lúc 7 giờ 30 phút, một ô tô đi từ A đến B với v = 54 km/h, cùng lúc một xe máy đi từ B về A với v = 36 km/h. Hai xe gặp nhau lúc:',
        options: ['9 giờ', '9 giờ 30 phút', '8 giờ 45 phút', '10 giờ'],
        correctAnswer: '9 giờ',
        explanation: 'Tổng vận tốc: 54 + 36 = 90 km/h. Thời gian đi để gặp nhau: 135 : 90 = 1.5 giờ = 1 giờ 30 phút. Gặp nhau lúc: 7h 30p + 1h 30p = 9 giờ.'
      },
      {
        id: 'ck2_q5',
        topic: 'Hai xe cùng chiều đuổi nhau',
        points: 1,
        question: 'Một người đi xe máy từ A với vận tốc 35 km/h. Sau 1 giờ 12 phút, một ô tô cũng khởi hành từ A đuổi theo xe máy với vận tốc 55 km/h. Hỏi sau bao lâu ô tô đuổi kịp xe máy?',
        options: ['2.1 giờ (2 giờ 6 phút)', '2 giờ', '1.5 giờ', '2 giờ 30 phút'],
        correctAnswer: '2.1 giờ (2 giờ 6 phút)',
        explanation: '1 giờ 12 phút = 1.2 giờ. Quãng đường xe máy đi trước: 35 × 1.2 = 42 km. Hiệu vận tốc: 55 - 35 = 20 km/h. Thời gian đuổi kịp: 42 : 20 = 2.1 giờ = 2 giờ 6 phút.'
      },
      {
        id: 'ck2_q6',
        topic: 'Chuyển động trên dòng nước',
        points: 1,
        question: 'Một chiếc ca nô xuôi dòng từ A đến B hết 2 giờ với vận tốc thực của ca nô là 25 km/h, vận tốc dòng nước là 3 km/h. Quãng đường sông AB dài:',
        options: ['56 km', '50 km', '44 km', '60 km'],
        correctAnswer: '56 km',
        explanation: 'Vận tốc xuôi dòng: 25 + 3 = 28 km/h. Quãng đường AB: 28 × 2 = 56 km.'
      },
      {
        id: 'ck2_q7',
        topic: 'Sơn thùng sắt không nắp',
        points: 1,
        question: 'Người ta quét sơn toàn bộ mặt ngoài của một cái thùng sắt không có nắp dạng hình lập phương cạnh 1.5 m. Diện tích cần quét sơn là:',
        options: ['11.25 m²', '13.5 m²', '9 m²', '15 m²'],
        correctAnswer: '11.25 m²',
        explanation: 'Thùng không nắp có 5 mặt. Diện tích 1 mặt: 1.5 × 1.5 = 2.25 m². Diện tích quét sơn: 2.25 × 5 = 11.25 m².'
      },
      {
        id: 'ck2_q8',
        topic: 'Toán tỉ số & Năng suất',
        points: 1,
        question: 'Một tổ công nhân dự định đắp xong một đoạn đê trong 10 ngày. Nhưng do được bổ sung thêm 4 người nữa nên hoàn thành sớm hơn 2 ngày. Hỏi lúc đầu tổ có bao nhiêu người?',
        options: ['16 người', '20 người', '12 người', '24 người'],
        correctAnswer: '16 người',
        explanation: 'Thời gian thực tế: 10 - 2 = 8 ngày. Tỉ số ngày = 10/8 = 5/4 => Tỉ số người thực tế/ban đầu = 5/4. Hiệu số người là 4 ứng với (5 - 4 = 1 phần). Số người ban đầu: 4 × 4 = 16 người.'
      },
      {
        id: 'ck2_q9',
        topic: 'Tìm hai số thập phân Tổng - Hiệu',
        points: 1,
        question: 'Tổng của hai số thập phân là 89.32. Nếu chuyển dấu phẩy của số bé sang phải một chữ số thì được số lớn. Tìm số bé:',
        options: ['8.12', '8.934', '7.45', '9.2'],
        correctAnswer: '8.12',
        explanation: 'Chuyển dấu phẩy sang phải 1 chữ số tức số lớn gấp 10 lần số bé. Tổng số phần: 1 + 10 = 11 phần. Số bé: 89.32 : 11 = 8.12.'
      },
      {
        id: 'ck2_q10',
        topic: 'Thử thách điểm 10 - Chuyển động đoàn tàu',
        points: 1,
        question: 'Một đoàn tàu hỏa dài 180 m chạy qua một cái hầm dài 720 m hết 45 giây. Vận tốc của đoàn tàu là bao nhiêu km/h?',
        options: ['72 km/h', '20 km/h', '54 km/h', '60 km/h'],
        correctAnswer: '72 km/h',
        explanation: 'Khi tàu qua hầm, đầu tàu vào đến khi đuôi tàu ra khỏi hầm đi được quãng đường: 180 + 720 = 900 m. Vận tốc tàu: 900 : 45 = 20 m/s. Đổi 20 m/s = 20 × 3.6 = 72 km/h.'
      }
    ]
  },
  {
    id: 'exam_g6_vip',
    title: 'Đề Thi Thử Tuyển Sinh Vào Lớp 6 CLC',
    semester: 2,
    type: 'grade-6-prep',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Thử thách IQ & Toán tư duy nâng cao vào trường Chuyên / Chất lượng cao (Archimedes, Amsterdam, Lương Thế Vinh): 10 dạng toán tinh hoa phân loại điểm 10.',
    questions: [
      {
        id: 'g6_q1',
        topic: 'Dãy phân số sai phân quy luật',
        points: 1,
        question: 'Tính giá trị biểu thức: A = 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100)',
        options: ['99/100', '1/100', '100/99', '1'],
        correctAnswer: '99/100',
        explanation: 'Ta có 1/(n×(n+1)) = 1/n - 1/(n+1). Do đó A = (1 - 1/2) + (1/2 - 1/3) + ... + (1/99 - 1/100) = 1 - 1/100 = 99/100.'
      },
      {
        id: 'g6_q2',
        topic: 'Toán tính ngược từ cuối',
        points: 1,
        question: 'Bác nông dân mang rổ trứng ra chợ bán. Lần 1 bán 1/2 số trứng và 1 quả. Lần 2 bán 1/2 số trứng còn lại và 1 quả. Lần 3 bán 1/2 số trứng còn lại sau lần 2 và 1 quả thì vừa hết. Hỏi ban đầu có bao nhiêu quả trứng?',
        options: ['14 quả', '16 quả', '12 quả', '18 quả'],
        correctAnswer: '14 quả',
        explanation: 'Trước lần 3: (0 + 1) × 2 = 2 quả. Trước lần 2: (2 + 1) × 2 = 6 quả. Ban đầu: (6 + 1) × 2 = 14 quả.'
      },
      {
        id: 'g6_q3',
        topic: 'Chuyển động tương đối theo bước',
        points: 1,
        question: 'Chó săn đuổi theo thỏ rừng đang cách mình 60 bước chân của chó. Mỗi khi chó chạy được 3 bước thì thỏ chạy được 5 bước, nhưng 2 bước của chó lại dài bằng 5 bước của thỏ. Hỏi chó phải chạy bao nhiêu bước nữa mới bắt kịp thỏ?',
        options: ['180 bước', '120 bước', '150 bước', '200 bước'],
        correctAnswer: '180 bước',
        explanation: '1 bước chó = 2.5 bước thỏ. Trong 1 nhịp: chó chạy 3 bước chó = 7.5 bước thỏ; thỏ chạy 5 bước thỏ. Rút ngắn được: 7.5 - 5 = 2.5 bước thỏ = 1 bước chó. Cần 60 nhịp => Số bước chó chạy: 60 × 3 = 180 bước.'
      },
      {
        id: 'g6_q4',
        topic: 'Toán chữ số & trang sách',
        points: 1,
        question: 'Để đánh số trang một cuốn sách Toán từ trang 1, người ta đã phải dùng tất cả 282 chữ số. Hỏi cuốn sách đó dày bao nhiêu trang?',
        options: ['130 trang', '140 trang', '128 trang', '135 trang'],
        correctAnswer: '130 trang',
        explanation: 'Từ trang 1 đến 99 dùng 189 chữ số. Số chữ số dùng cho trang có 3 chữ số: 282 - 189 = 93 chữ số. Số trang có 3 chữ số: 93 : 3 = 31 trang (từ 100 đến 130). Vậy sách dày 130 trang.'
      },
      {
        id: 'g6_q5',
        topic: 'Dãy số cách đều',
        points: 1,
        question: 'Cho dãy số: 3, 7, 11, 15, 19, ... Tìm số hạng thứ 100 của dãy số:',
        options: ['399', '403', '395', '400'],
        correctAnswer: '399',
        explanation: 'Khoảng cách là d = 4. Số hạng thứ 100 = Số đầu + (100 - 1) × d = 3 + 99 × 4 = 3 + 396 = 399.'
      },
      {
        id: 'g6_q6',
        topic: 'Cấu tạo số tự nhiên',
        points: 1,
        question: 'Tìm một số tự nhiên có hai chữ số, biết rằng nếu viết thêm chữ số 2 vào bên trái số đó ta được số mới gấp 9 lần số ban đầu:',
        options: ['25', '24', '20', '28'],
        correctAnswer: '25',
        explanation: 'Gọi số cần tìm là ab. Viết thêm chữ số 2 bên trái được 2ab = 200 + ab. Ta có: 200 + ab = 9 × ab => 8 × ab = 200 => ab = 200 : 8 = 25.'
      },
      {
        id: 'g6_q7',
        topic: 'Tỉ số diện tích tam giác',
        points: 1,
        question: 'Cho tam giác ABC có diện tích 120 cm². Trên cạnh BC lấy điểm M sao cho BM = 2 × MC. Diện tích tam giác ABM là:',
        options: ['80 cm²', '60 cm²', '40 cm²', '90 cm²'],
        correctAnswer: '80 cm²',
        explanation: 'Hai tam giác ABM và ABC có chung chiều cao hạ từ đỉnh A xuống đáy BC. Đáy BM = 2/3 đáy BC => S(ABM) = 2/3 × S(ABC) = 2/3 × 120 = 80 cm².'
      },
      {
        id: 'g6_q8',
        topic: 'Năng suất hai vòi nước',
        points: 1,
        question: 'Vòi thứ nhất chảy một mình mất 4 giờ thì đầy bể, vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy nước?',
        options: ['2.4 giờ (2 giờ 24 phút)', '5 giờ', '2.5 giờ', '2 giờ 30 phút'],
        correctAnswer: '2.4 giờ (2 giờ 24 phút)',
        explanation: 'Trong 1 giờ: Vòi 1 chảy được 1/4 bể, vòi 2 chảy được 1/6 bể. Cả hai vòi chảy: 1/4 + 1/6 = 5/12 bể. Thời gian đầy bể: 1 : 5/12 = 12/5 giờ = 2.4 giờ = 2 giờ 24 phút.'
      },
      {
        id: 'g6_q9',
        topic: 'Giả thiết tạm',
        points: 1,
        question: 'Một bãi gửi xe có tất cả 36 chiếc xe gồm xe máy (2 bánh) và ô tô (4 bánh). Bác bảo vệ đếm được tổng cộng 100 bánh xe. Hỏi có bao nhiêu chiếc ô tô?',
        options: ['14 xe ô tô', '22 xe ô tô', '16 xe ô tô', '12 xe ô tô'],
        correctAnswer: '14 xe ô tô',
        explanation: 'Giả sử cả 36 xe đều là xe máy thì tổng số bánh xe là: 36 × 2 = 72 bánh. Số bánh thiếu: 100 - 72 = 28 bánh. Thay 1 xe máy bằng 1 ô tô số bánh tăng: 4 - 2 = 2 bánh. Số ô tô là: 28 : 2 = 14 xe ô tô (xe máy = 22 chiếc).'
      },
      {
        id: 'g6_q10',
        topic: 'Điểm 10 - Logic & Nguyên lý Dirichlet',
        points: 1,
        question: 'Trong một hộp có 10 viên bi đỏ, 8 viên bi xanh và 6 viên bi vàng giống hệt nhau về kích thước. Không nhìn vào hộp, phải lấy ra ít nhất bao nhiêu viên bi để chắc chắn có ít nhất 1 viên bi màu vàng?',
        options: ['19 viên bi', '18 viên bi', '15 viên bi', '20 viên bi'],
        correctAnswer: '19 viên bi',
        explanation: 'Trường hợp rủi ro nhất là lấy hết 10 viên bi đỏ và 8 viên bi xanh (tổng 18 viên) mà vẫn chưa có viên vàng nào. Khi lấy thêm 1 viên thứ 19, chắc chắn viên đó là bi vàng. Vậy cần lấy ít nhất 10 + 8 + 1 = 19 viên.'
      }
    ]
  }
];
