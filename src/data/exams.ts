import { Exam, SubjectId } from '../types/curriculum';

export const mathExams: Exam[] = [
  {
    id: 'exam_gk1',
    subjectId: 'math',
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
    subjectId: 'math',
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
    subjectId: 'math',
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
    subjectId: 'math',
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
    subjectId: 'math',
    title: 'Đề Thi Thử Tuyển Sinh Vào Lớp 6 CLC',
    semester: 2,
    type: 'grade-6-prep',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Thử thách IQ & Toán tư duy nâng cao vào trường Chuyên / Chất lượng cao: 10 dạng toán tinh hoa phân loại điểm 10.',
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

export const vietnameseExams: Exam[] = [
  {
    id: 'exam_van_gk1',
    subjectId: 'vietnamese',
    title: 'Đề Thi Giữa Học Kỳ 1 (Tiếng Việt 5 Chuẩn)',
    semester: 1,
    type: 'mid-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Đề kiểm tra chuẩn: Đọc hiểu văn bản thiên nhiên, từ đồng nghĩa, từ trái nghĩa, từ đồng âm, nghệ thuật so sánh - nhân hóa và nhận diện mở bài gián tiếp xuất sắc.',
    questions: [
      {
        id: 'vgk1_q1',
        topic: 'Từ đồng nghĩa',
        points: 1,
        question: 'Dãy từ nào sau đây gồm các từ đồng nghĩa chỉ màu vàng của thiên nhiên?',
        options: ['Vàng xuộm, vàng ươm, vàng ruộm', 'Vàng vọt, vàng ệch, xanh biếc', 'Vàng óng, đỏ ối, tím biếc', 'Vàng nhạt, trắng tinh, đen tuyền'],
        correctAnswer: 'Vàng xuộm, vàng ươm, vàng ruộm',
        explanation: 'Các từ "vàng xuộm, vàng ươm, vàng ruộm" đều là từ đồng nghĩa gợi màu sắc chín mọng, ấm áp của đồng quê mùa gặt.'
      },
      {
        id: 'vgk1_q2',
        topic: 'Từ nhiều nghĩa vs Từ đồng âm',
        points: 1,
        question: 'Từ "bạc" trong hai câu sau có quan hệ gì: "Cái bàn này làm bằng bạc" và "Ông cụ có mái tóc bạc trắng"?',
        options: ['Từ đồng âm', 'Từ nhiều nghĩa', 'Từ trái nghĩa', 'Từ đồng nghĩa'],
        correctAnswer: 'Từ đồng âm',
        explanation: '"Bạc" (kim loại quý) và "bạc" (màu trắng phai) phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau, không có mối liên hệ chuyển nghĩa.'
      },
      {
        id: 'vgk1_q3',
        topic: 'Biện pháp tu từ',
        points: 1,
        question: 'Câu văn nào sử dụng cả hai biện pháp nghệ thuật So sánh và Nhân hóa?',
        options: [
          'Dòng sông quê như người mẹ hiền từ, đêm ngày cần mẫn bồi đắp phù sa cho xóm làng.',
          'Mặt trời đỏ ối trên biển.',
          'Cây bàng rất cao và nhiều lá.',
          'Tiếng ve kêu râm ran ngoài vườn.'
        ],
        correctAnswer: 'Dòng sông quê như người mẹ hiền từ, đêm ngày cần mẫn bồi đắp phù sa cho xóm làng.',
        explanation: 'So sánh: "như người mẹ", Nhân hóa: "cần mẫn bồi đắp phù sa".'
      },
      {
        id: 'vgk1_q4',
        topic: 'Mở bài gián tiếp',
        points: 1,
        question: 'Mở bài nào sau đây là Mở bài GIÁN TIẾP cho đề bài "Tả một cơn mưa mùa hạ"?',
        options: [
          '"Lộp độp... rào rào...". Tiếng sấm nổ rền vang xé toạc bầu trời oi ả, báo hiệu cơn mưa rào mùa hạ – vị cứu tinh làm dịu mát lòng người và vạn vật sau những ngày nắng cháy.',
          'Mùa hè thường có mưa to. Sau đây em xin tả cơn mưa.',
          'Hôm qua trời mưa từ lúc 4 giờ chiều.',
          'Em rất thích mưa rào vì mưa giúp cây cối xanh tươi.'
        ],
        correctAnswer: '"Lộp độp... rào rào...". Tiếng sấm nổ rền vang xé toạc bầu trời oi ả, báo hiệu cơn mưa rào mùa hạ – vị cứu tinh làm dịu mát lòng người và vạn vật sau những ngày nắng cháy.',
        explanation: 'Mở bài đi từ âm thanh dồn dập và sự biến đổi khí trời tạo ấn tượng sâu sắc.'
      },
      {
        id: 'vgk1_q5',
        topic: 'Đa giác quan trong miêu tả',
        points: 1,
        question: 'Để miêu tả cảnh hoàng hôn trên biển sống động, ta nên kết hợp những giác quan nào?',
        options: [
          'Thị giác (màu ráng mây tím biếc) + Thính giác (sóng vỗ ì oạp) + Xúc giác (gió biển mát rượi)',
          'Chỉ cần dùng mắt nhìn',
          'Chỉ cần nêu ngày tháng đi du lịch',
          'Chỉ cần kể số người đang tắm biển'
        ],
        correctAnswer: 'Thị giác (màu ráng mây tím biếc) + Thính giác (sóng vỗ ì oạp) + Xúc giác (gió biển mát rượi)',
        explanation: 'Đa giác quan giúp người đọc như đang trực tiếp đứng trước biển ngắm hoàng hôn.'
      },
      {
        id: 'vgk1_q6',
        topic: 'Phát hiện lỗi câu cụt lủn',
        points: 1,
        question: 'Cách sửa câu cụt lủn "Mẹ em cao 1m60" thành câu miêu tả có hồn nhất:',
        options: [
          'Mẹ em có vóc dáng mảnh mai, thanh thoát cùng bước đi nhẹ nhàng, toát lên vẻ dịu dàng của người phụ nữ gia đình.',
          'Mẹ em có chiều cao trung bình so với mọi người.',
          'Mẹ em cao hơn em 20cm.',
          'Mẹ em cao khoảng 1 mét 60 cen-ti-mét.'
        ],
        correctAnswer: 'Mẹ em có vóc dáng mảnh mai, thanh thoát cùng bước đi nhẹ nhàng, toát lên vẻ dịu dàng của người phụ nữ gia đình.',
        explanation: 'Thay số đo vô cảm bằng từ ngữ gợi hình (mảnh mai, thanh thoát) và phẩm chất dịu dàng.'
      },
      {
        id: 'vgk1_q7',
        topic: 'Từ trái nghĩa',
        points: 1,
        question: 'Cặp từ trái nghĩa nào sau đây xuất hiện trong câu tục ngữ: "Gạn đục khơi trong"?',
        options: ['đục - trong', 'gạn - khơi', 'gạn - trong', 'đục - khơi'],
        correctAnswer: 'đục - trong',
        explanation: '"Đục" (nước bẩn, mờ) trái nghĩa với "trong" (nước sạch, nhìn thấu).'
      },
      {
        id: 'vgk1_q8',
        topic: 'Nghệ thuật Tả Người',
        points: 1,
        question: 'Khi tả ngoại hình của thầy cô giáo, chi tiết nào biểu tượng cho sự tận tụy của nghề giáo?',
        options: [
          'Bụi phấn trắng bay bay vương trên mái tóc người thầy đang say sưa giảng bài',
          'Chiếc đồng hồ đeo tay đắt tiền',
          'Đôi giày da màu đen',
          'Chiếc cặp da đựng nhiều tài liệu'
        ],
        correctAnswer: 'Bụi phấn trắng bay bay vương trên mái tóc người thầy đang say sưa giảng bài',
        explanation: 'Hình ảnh bụi phấn vương trên tóc là nét đẹp thiêng liêng gắn với lòng biết ơn thầy cô.'
      },
      {
        id: 'vgk1_q9',
        topic: 'Từ ngữ đắt giá',
        points: 1,
        question: 'Chọn từ ngữ điền vào chỗ chấm để câu văn giàu chất thơ: "Đêm rằm, ánh trăng vàng ... chảy tràn trên mặt sông êm đềm."',
        options: ['sóng sánh', 'vàng đặc', 'sáng choang', 'chói lòa'],
        correctAnswer: 'sóng sánh',
        explanation: '"Sóng sánh" nhân hóa ánh trăng như dòng mật ngọt ngào trôi trên làn nước biếc.'
      },
      {
        id: 'vgk1_q10',
        topic: 'Kết bài mở rộng',
        points: 1,
        question: 'Đoạn kết bài mở rộng nào sau đây giàu cảm xúc và sâu sắc nhất cho bài văn tả cảnh quê hương?',
        options: [
          'Dù mai này có đi đến chân trời góc bể, hình bóng dòng sông hiền hòa cùng lời ru êm đềm của mẹ bên lũy tre làng sẽ mãi là bến đỗ bình yên nhất, nhắc nhở em luôn nhớ về cội nguồn yêu thương.',
          'Quê em rất đẹp và em rất yêu quê em.',
          'Em mong quê em ngày càng phát triển hơn.',
          'Bài văn tả cảnh quê hương của em kết thúc tại đây.'
        ],
        correctAnswer: 'Dù mai này có đi đến chân trời góc bể, hình bóng dòng sông hiền hòa cùng lời ru êm đềm của mẹ bên lũy tre làng sẽ mãi là bến đỗ bình yên nhất, nhắc nhở em luôn nhớ về cội nguồn yêu thương.',
        explanation: 'Kết bài mở rộng liên hệ tới tương lai và gửi gắm tình yêu cội nguồn tha thiết.'
      }
    ]
  },
  {
    id: 'exam_van_ck1',
    subjectId: 'vietnamese',
    title: 'Đề Thi Cuối Học Kỳ 1 (Tiếng Việt 5 Toàn Diện)',
    semester: 1,
    type: 'final-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Tổng hợp HK1: Đại từ, kết từ, từ nhiều nghĩa, phân tích cấu trúc bài văn tả cảnh & tả người, kỹ thuật chuyển đoạn và lập dàn ý.',
    questions: [
      {
        id: 'vck1_q1',
        topic: 'Đại từ thay thế',
        points: 1,
        question: 'Trong câu: "Lan rất chăm học. Bạn ấy luôn đạt điểm 10", từ "Bạn ấy" là loại từ gì?',
        options: ['Đại từ dùng để thay thế', 'Danh từ riêng', 'Kết từ', 'Tính từ'],
        correctAnswer: 'Đại từ dùng để thay thế',
        explanation: '"Bạn ấy" là đại từ thay thế cho danh từ "Lan" nhằm tránh lỗi lặp từ trong đoạn văn.'
      },
      {
        id: 'vck1_q2',
        topic: 'Kết từ / Quan hệ từ',
        points: 1,
        question: 'Cặp kết từ nào biểu thị quan hệ Nguyên nhân - Kết quả?',
        options: ['Vì ... nên ...', 'Nếu ... thì ...', 'Tuy ... nhưng ...', 'Không những ... mà còn ...'],
        correctAnswer: 'Vì ... nên ...',
        explanation: '"Vì ... nên ..." thể hiện mối quan hệ nguyên nhân - kết quả.'
      },
      {
        id: 'vck1_q3',
        topic: 'Từ nhiều nghĩa',
        points: 1,
        question: 'Từ "chân" trong câu nào mang nghĩa CHUYỂN?',
        options: ['Chiếc bàn này có 4 chân rất vững.', 'Em bé đang tập đi từng bước chân.', 'Bàn chân em ấm áp trong đôi tất len.', 'Bác nông dân rửa sạch bùn nơi bàn chân.'],
        correctAnswer: 'Chiếc bàn này có 4 chân rất vững.',
        explanation: '"Chân bàn" là nghĩa chuyển dựa trên nét tương đồng về vị trí nâng đỡ ở phía dưới.'
      },
      {
        id: 'vck1_q4',
        topic: 'Kỹ thuật chuyển đoạn',
        points: 1,
        question: 'Cụm từ nào phù hợp nhất để chuyển đoạn từ phần mở bài sang thân bài tả cảnh bình minh?',
        options: [
          'Từ phía chân trời xa, khoảnh khắc kỳ diệu ấy bắt đầu hiện ra...',
          'Bây giờ em tả thân bài.',
          'Nói chung là rất đẹp.',
          'Tiếp theo là phần hai.'
        ],
        correctAnswer: 'Từ phía chân trời xa, khoảnh khắc kỳ diệu ấy bắt đầu hiện ra...',
        explanation: 'Lời dẫn tự nhiên mở ra không gian và tạo sự háo hức cho người đọc.'
      },
      {
        id: 'vck1_q5',
        topic: 'Tả người trong lúc làm việc',
        points: 1,
        question: 'Từ ngữ nào diễn tả sự khéo léo, chăm chút của người bà khi đan áo len cho cháu?',
        options: ['Đôi bàn tay gầy gầy thoăn thoắt đưa từng que đan nhịp nhàng', 'Bà ngồi im không động đậy', 'Bà đan rất nhanh không nhìn', 'Que đan làm bằng sắt'],
        correctAnswer: 'Đôi bàn tay gầy gầy thoăn thoắt đưa từng que đan nhịp nhàng',
        explanation: 'Từ "thoăn thoắt, nhịp nhàng" gợi tả sự khéo léo và tình cảm bà gửi gắm vào từng mũi len.'
      },
      {
        id: 'vck1_q6',
        topic: 'Thành ngữ - Tục ngữ',
        points: 1,
        question: 'Thành ngữ nào sau đây ca ngợi truyền thống đoàn kết, tương thân tương ái của dân tộc ta?',
        options: ['Lá lành đùm lá rách', 'Nước chảy đá mòn', 'Mưa dầm thấm lâu', 'Ăn quả nhớ kẻ trồng cây'],
        correctAnswer: 'Lá lành đùm lá rách',
        explanation: '"Lá lành đùm lá rách" nói về tinh thần đùm bọc, sẻ chia giúp đỡ người khó khăn.'
      },
      {
        id: 'vck1_q7',
        topic: 'Từ loại (Tính từ gợi tả âm thanh)',
        points: 1,
        question: 'Dãy từ nào sau đây toàn là từ láy tượng thanh (gợi tả âm thanh)?',
        options: ['Róc rách, xào xạc, rì rào, thì thầm', 'Lóng lánh, rực rỡ, lung linh, tươi tắn', 'Mênh mông, bao la, bát ngát, thăm thẳm', 'Nhanh nhẹn, thoăn thoắt, chậm chạp, vội vã'],
        correctAnswer: 'Róc rách, xào xạc, rì rào, thì thầm',
        explanation: 'Tất cả các từ này đều gợi âm thanh của nước chảy, lá rụng, gió thổi.'
      },
      {
        id: 'vck1_q8',
        topic: 'Nghệ thuật Tả Cây Cối',
        points: 1,
        question: 'Khi tả cây bàng mùa đông và mùa xuân, nét đối lập sống động nhất là:',
        options: [
          'Mùa đông cành cây trơ trụi khẳng khiu như những cánh tay gầy guộc; mùa xuân bật lên những búp non mơn mởn tràn đầy nhựa sống.',
          'Mùa đông cây bàng màu nâu, mùa xuân cây màu xanh.',
          'Cây bàng mùa đông rụng hết lá.',
          'Cây bàng rất to lớn.'
        ],
        correctAnswer: 'Mùa đông cành cây trơ trụi khẳng khiu như những cánh tay gầy guộc; mùa xuân bật lên những búp non mơn mởn tràn đầy nhựa sống.',
        explanation: 'Phép đối lập giữa sự cằn cỗi mùa đông và sức sống bừng dậy mùa xuân tạo nên vẻ đẹp kỳ diệu của thiên nhiên.'
      },
      {
        id: 'vck1_q9',
        topic: 'Phát hiện câu sai ngữ pháp',
        points: 1,
        question: 'Câu nào sau đây là CÂU ĐƠN hoàn chỉnh (đủ Chủ ngữ - Vị ngữ)?',
        options: [
          'Những bông lúa uốn câu trĩu hạt đang rì rào trò chuyện trong gió sớm.',
          'Mặc dù trời mưa to gió lớn.',
          'Khi mặt trời vừa nhô lên khỏi rặng tre làng.',
          'Để học sinh đạt kết quả cao trong kỳ thi sắp tới.'
        ],
        correctAnswer: 'Những bông lúa uốn câu trĩu hạt đang rì rào trò chuyện trong gió sớm.',
        explanation: 'Chủ ngữ: "Những bông lúa uốn câu trĩu hạt", Vị ngữ: "đang rì rào trò chuyện trong gió sớm". Các câu còn lại chỉ là trạng ngữ hoặc vế phụ.'
      },
      {
        id: 'vck1_q10',
        topic: 'Thử thách điểm 10 - Cảm thụ văn học',
        points: 1,
        question: 'Đọc hai câu thơ: "Quê hương là chùm khế ngọt / Cho con trèo hái mỗi ngày". Tác giả so sánh quê hương với "chùm khế ngọt" nhằm thể hiện điều gì?',
        options: [
          'Quê hương rất gần gũi, ngọt ngào, gắn liền với những kỷ niệm tuổi thơ bình dị và nuôi dưỡng tâm hồn con người.',
          'Quê hương có rất nhiều cây khế ngon.',
          'Tác giả rất thích ăn quả ngọt.',
          'Nhà tác giả trồng nhiều cây ăn quả.'
        ],
        correctAnswer: 'Quê hương rất gần gũi, ngọt ngào, gắn liền với những kỷ niệm tuổi thơ bình dị và nuôi dưỡng tâm hồn con người.',
        explanation: 'Hình ảnh so sánh thân thuộc làm quê hương trở nên ngọt ngào, gắn bó máu thịt với đời sống con người.'
      }
    ]
  },
  {
    id: 'exam_van_gk2',
    subjectId: 'vietnamese',
    title: 'Đề Thi Giữa Học Kỳ 2 (Tiếng Việt 5 Chuẩn)',
    semester: 2,
    type: 'mid-term-2',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Trọng tâm HK2: Câu ghép, cặp từ hô ứng, liên kết các vế câu ghép, biện pháp nhân hóa & so sánh nâng cao, kỹ năng Tả người & Tả đồ vật.',
    questions: [
      {
        id: 'vgk2_q1',
        topic: 'Câu ghép',
        points: 1,
        question: 'Câu nào sau đây là CÂU GHÉP có hai vế nối trực tiếp bằng dấu câu?',
        options: [
          'Mưa rào rào trút nước xuống, cây cối trong vườn nghiêng ngả theo từng cơn gió mạnh.',
          'Cây cối trong vườn rất xanh tươi.',
          'Vì trời mưa nên chúng em phải ở trong lớp.',
          'Học sinh đang chăm chú nghe cô giáo giảng bài.'
        ],
        correctAnswer: 'Mưa rào rào trút nước xuống, cây cối trong vườn nghiêng ngả theo từng cơn gió mạnh.',
        explanation: 'Câu gồm 2 vế câu (Vế 1: Mưa rào rào trút nước xuống, Vế 2: cây cối trong vườn nghiêng ngả...) nối với nhau bằng dấu phẩy.'
      },
      {
        id: 'vgk2_q2',
        topic: 'Cặp từ hô ứng trong câu ghép',
        points: 1,
        question: 'Điền cặp từ hô ứng thích hợp vào chỗ chấm: "Gió ... thổi mạnh, sóng biển ... dâng cao dồn dập."',
        options: ['càng ... càng ...', 'vừa ... đã ...', 'bao nhiêu ... bấy nhiêu ...', 'mới ... đã ...'],
        correctAnswer: 'càng ... càng ...',
        explanation: '"càng ... càng ..." biểu thị sự tăng tiến tỉ lệ thuận giữa mức độ gió và độ cao của sóng biển.'
      },
      {
        id: 'vgk2_q3',
        topic: 'Quan hệ tương phản',
        points: 1,
        question: 'Cặp kết từ nào biểu thị mối quan hệ TƯƠNG PHẢN (Đối lập)?',
        options: ['Tuy ... nhưng ...', 'Vì ... nên ...', 'Nếu ... thì ...', 'Không những ... mà còn ...'],
        correctAnswer: 'Tuy ... nhưng ...',
        explanation: '"Tuy ... nhưng ..." (hoặc "Mặc dù ... nhưng ...") thể hiện quan hệ tương phản.'
      },
      {
        id: 'vgk2_q4',
        topic: 'Nghệ thuật Tả Đồ Vật gắn với Kỷ niệm',
        points: 1,
        question: 'Khi tả chiếc đồng hồ báo thức bố tặng sinh nhật, chi tiết nào làm nổi bật ý nghĩa tình cảm?',
        options: [
          'Tiếng chuông "reng reng" rộn rã mỗi sáng như lời nhắc nhở ân cần của bố, giúp em luôn đúng giờ đến lớp.',
          'Đồng hồ làm bằng nhựa cứng màu đỏ.',
          'Đồng hồ chạy bằng 1 viên pin tiểu.',
          'Đồng hồ mua ở hiệu sách gần nhà.'
        ],
        correctAnswer: 'Tiếng chuông "reng reng" rộn rã mỗi sáng như lời nhắc nhở ân cần của bố, giúp em luôn đúng giờ đến lớp.',
        explanation: 'Gắn tiếng chuông với lời nhắn nhủ yêu thương của bố biến đồ vật thành người bạn đồng hành tri kỷ.'
      },
      {
        id: 'vgk2_q5',
        topic: 'Biện pháp Nhân hóa',
        points: 1,
        question: 'Cách nhân hóa nào sau đây giúp miêu tả chiếc bút mực sống động nhất?',
        options: [
          'Chiếc ngòi bút sáng loáng, chăm chỉ lướt trên trang giấy trắng như một vũ công miệt mài vẽ nên những con chữ thẳng tắp.',
          'Chiếc bút có vỏ màu xanh rất đẹp.',
          'Em dùng bút để viết bài hàng ngày.',
          'Bút chứa được nhiều mực.'
        ],
        correctAnswer: 'Chiếc ngòi bút sáng loáng, chăm chỉ lướt trên trang giấy trắng như một vũ công miệt mài vẽ nên những con chữ thẳng tắp.',
        explanation: 'Nhân hóa "chăm chỉ", so sánh "như một vũ công" thổi hồn nghệ thuật vào cây bút học trò.'
      },
      {
        id: 'vgk2_q6',
        topic: 'Mở rộng chủ ngữ trong câu',
        points: 1,
        question: 'Trong câu: "Những hạt sương mai long lanh đọng trên kẽ lá khẽ rung rinh dưới ánh nắng", bộ phận CHỦ NGỮ là:',
        options: [
          'Những hạt sương mai long lanh đọng trên kẽ lá',
          'Những hạt sương mai',
          'Những hạt sương mai long lanh',
          'đọng trên kẽ lá'
        ],
        correctAnswer: 'Những hạt sương mai long lanh đọng trên kẽ lá',
        explanation: 'Cụm danh từ "Những hạt sương mai long lanh đọng trên kẽ lá" đóng vai trò chủ ngữ.'
      },
      {
        id: 'vgk2_q7',
        topic: 'Mở bài gián tiếp Tả Người',
        points: 1,
        question: 'Mở bài gián tiếp nào sau đây giàu cảm xúc nhất cho đề bài: "Tả người bà kính yêu"?',
        options: [
          '"Bà ơi bà, cháu yêu bà lắm...". Câu hát ngọt ngào thuở ấu thơ luôn nhắc em về người bà hiền từ với mái tóc bạc phơ và đôi bàn tay ấm áp đã chở che cho em suốt những năm tháng tuổi thơ êm đềm.',
          'Nhà em có bà nội. Bà em năm nay 70 tuổi.',
          'Bà em tên là Nguyễn Thị Hoa.',
          'Em xin tả người bà của em.'
        ],
        correctAnswer: '"Bà ơi bà, cháu yêu bà lắm...". Câu hát ngọt ngào thuở ấu thơ luôn nhắc em về người bà hiền từ với mái tóc bạc phơ và đôi bàn tay ấm áp đã chở che cho em suốt những năm tháng tuổi thơ êm đềm.',
        explanation: 'Dẫn dắt từ lời bài hát quen thuộc gợi sự xúc động và lòng hiếu thảo sâu nặng.'
      },
      {
        id: 'vgk2_q8',
        topic: 'Từ láy tượng hình',
        points: 1,
        question: 'Dãy từ nào gồm các từ láy tượng hình gợi tả dáng điệu, đường nét?',
        options: ['Lom khom, thoăn thoắt, lặc lè, khẳng khiu', 'Rì rào, róc rách, ầm ầm, lao xao', 'Đỏ ối, xanh ngắt, vàng xuộm, đen nhánh', 'Vui vẻ, hớn hở, ủ rũ, buồn rầu'],
        correctAnswer: 'Lom khom, thoăn thoắt, lặc lè, khẳng khiu',
        explanation: 'Tất cả các từ này đều gợi tả dáng dấp, chuyển động của con người và cảnh vật.'
      },
      {
        id: 'vgk2_q9',
        topic: 'Cách dùng dấu phẩy',
        points: 1,
        question: 'Câu nào dưới đây sử dụng dấu phẩy ĐÚNG quy tắc nhất?',
        options: [
          'Trên cành cây cao, đàn chim hót líu lo, báo hiệu một ngày mới bắt đầu.',
          'Trên, cành cây cao đàn chim hót líu lo.',
          'Đàn chim, hót líu lo trên cành cây cao.',
          'Báo hiệu, một ngày mới bắt đầu đàn chim hót.'
        ],
        correctAnswer: 'Trên cành cây cao, đàn chim hót líu lo, báo hiệu một ngày mới bắt đầu.',
        explanation: 'Dấu phẩy ngăn cách trạng ngữ đầu câu và ngăn cách các vế vị ngữ bổ sung ý nghĩa.'
      },
      {
        id: 'vgk2_q10',
        topic: 'Thử thách điểm 10 - Nâng cấp câu văn',
        points: 1,
        question: 'Nâng cấp câu cụt lủn "Trời mùa thu đẹp" thành câu văn Thần Bút đạt điểm tối đa:',
        options: [
          'Mùa thu về dệt nên một khoảng trời xanh ngắt, gió heo may se se lạnh mơn man da thịt cùng hương cốm mới ngạt ngào lan tỏa khắp ngõ phố.',
          'Trời mùa thu rất mát mẻ và nhiều gió.',
          'Mùa thu là mùa thứ ba trong năm.',
          'Em rất thích mùa thu vì mùa thu đẹp.'
        ],
        correctAnswer: 'Mùa thu về dệt nên một khoảng trời xanh ngắt, gió heo may se se lạnh mơn man da thịt cùng hương cốm mới ngạt ngào lan tỏa khắp ngõ phố.',
        explanation: 'Kết hợp thị giác (trời xanh ngắt), xúc giác (gió heo may mơn man) và khứu giác (hương cốm ngạt ngào) tạo nên bức tranh thu đậm chất thơ.'
      }
    ]
  },
  {
    id: 'exam_van_ck2',
    subjectId: 'vietnamese',
    title: 'Đề Thi Cuối Học Kỳ 2 (Tiếng Việt 5 Toàn Diện)',
    semester: 2,
    type: 'final-term-2',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Đề thi tổng kết toàn diện Tiếng Việt 5: Liên kết câu bằng phép lặp, phép thế, phép nối; hệ thống dấu câu; kỹ thuật viết bài văn miêu tả đỉnh cao và cảm thụ văn học.',
    questions: [
      {
        id: 'vck2_q1',
        topic: 'Liên kết câu bằng Phép Thay Thế',
        points: 1,
        question: 'Hai câu sau liên kết với nhau bằng cách nào: "Hồ Gươm đẹp như một bức tranh ngọc bích. Nơi đây là trái tim linh thiêng của thủ đô Hà Nội ngàn năm văn hiến."?',
        options: ['Thay thế từ ngữ ("Nơi đây" thay cho "Hồ Gươm")', 'Lặp từ ngữ', 'Dùng từ ngữ nối', 'Không có liên kết'],
        correctAnswer: 'Thay thế từ ngữ ("Nơi đây" thay cho "Hồ Gươm")',
        explanation: 'Cụm từ "Nơi đây" thay thế cho "Hồ Gươm" ở câu trước để tránh lặp từ và tạo sự liền mạch.'
      },
      {
        id: 'vck2_q2',
        topic: 'Liên kết câu bằng Phép Nối',
        points: 1,
        question: 'Từ nối trong đoạn văn sau là từ nào: "Đêm qua trời mưa to gió lớn. Tuy nhiên, sáng nay vạn vật bỗng bừng tỉnh rạng rỡ dưới nắng ấm."?',
        options: ['Tuy nhiên', 'Đêm qua', 'Sáng nay', 'Rạng rỡ'],
        correctAnswer: 'Tuy nhiên',
        explanation: '"Tuy nhiên" là kết từ dùng để nối 2 câu, thể hiện sự đối lập giữa cảnh đêm mưa và buổi sáng rực rỡ.'
      },
      {
        id: 'vck2_q3',
        topic: 'Tác dụng của Dấu Hai Chấm (:)',
        points: 1,
        question: 'Dấu hai chấm trong câu sau có tác dụng gì: "Cảnh vật mùa xuân thật kỳ diệu: hoa đào khoe sắc thắm, chồi non bật mầm xanh biếc, bướm ong bay lượn rộn ràng."?',
        options: [
          'Báo hiệu phần giải thích, thuyết minh chi tiết cho bộ phận đứng trước',
          'Dẫn lời nói trực tiếp của nhân vật',
          'Để kết thúc một câu',
          'Ngăn cách các vế trong câu ghép'
        ],
        correctAnswer: 'Báo hiệu phần giải thích, thuyết minh chi tiết cho bộ phận đứng trước',
        explanation: 'Dấu hai chấm giải thích chi tiết cho sự "kỳ diệu của cảnh vật mùa xuân".'
      },
      {
        id: 'vck2_q4',
        topic: 'Tác dụng của Dấu Gạch Ngang (-)',
        points: 1,
        question: 'Dấu gạch ngang trong câu sau có tác dụng gì: "Bác Ba – người thợ rèn lâu năm nhất làng – luôn nở nụ cười đôn hậu với mọi người."?',
        options: [
          'Đánh dấu bộ phận chú thích, giải thích bổ sung',
          'Đánh dấu chỗ bắt đầu lời nói của nhân vật',
          'Đánh dấu các ý trong một danh sách liệt kê',
          'Nối các từ trong một liên danh'
        ],
        correctAnswer: 'Đánh dấu bộ phận chú thích, giải thích bổ sung',
        explanation: 'Hai dấu gạch ngang kẹp phần chú thích lai lịch, công việc của Bác Ba.'
      },
      {
        id: 'vck2_q5',
        topic: 'Nghệ thuật Tả Cảnh Đêm Trăng',
        points: 1,
        question: 'Hình ảnh nào thể hiện xuất sắc vẻ đẹp của ánh trăng vàng trên sông quê?',
        options: [
          'Ánh trăng vàng sóng sánh dát bạc trên mặt sông êm đềm, biến dòng nước thành một dải ngân hà lung linh huyền ảo.',
          'Mặt trăng chiếu sáng mặt sông.',
          'Sông có nhiều nước và có ánh trăng.',
          'Đêm trăng mọi người ra sông hóng mát.'
        ],
        correctAnswer: 'Ánh trăng vàng sóng sánh dát bạc trên mặt sông êm đềm, biến dòng nước thành một dải ngân hà lung linh huyền ảo.',
        explanation: 'Từ ngữ gợi hình (sóng sánh, dát bạc) và so sánh (dải ngân hà) tạo nên khung cảnh lộng lẫy, kỳ vĩ.'
      },
      {
        id: 'vck2_q6',
        topic: 'Kết bài mở rộng Tả Cảnh Quê Hương',
        points: 1,
        question: 'Kết bài mở rộng nào sau đây thể hiện sâu sắc tình yêu quê hương đất nước?',
        options: [
          'Dù mai này có đi đến muôn nẻo đường của Tổ quốc, hình bóng cánh đồng lúa chín vàng ươm cùng khúc hát ru của mẹ sẽ mãi là bến đỗ bình yên nâng bước em khôn lớn, thôi thúc em học tập thật tốt để dựng xây quê hương ngày càng giàu đẹp.',
          'Quê em rất đẹp. Em rất tự hào về quê hương.',
          'Em mong quê em không có rác.',
          'Bài văn của em đến đây là hết.'
        ],
        correctAnswer: 'Dù mai này có đi đến muôn nẻo đường của Tổ quốc, hình bóng cánh đồng lúa chín vàng ươm cùng khúc hát ru của mẹ sẽ mãi là bến đỗ bình yên nâng bước em khôn lớn, thôi thúc em học tập thật tốt để dựng xây quê hương ngày càng giàu đẹp.',
        explanation: 'Kết bài mở rộng gắn tình yêu quê hương với ước mơ cống hiến và trách nhiệm của người học sinh.'
      },
      {
        id: 'vck2_q7',
        topic: 'Nghệ thuật Tả Người Thân',
        points: 1,
        question: 'Khi tả đôi mắt của người mẹ, câu văn nào thể hiện trọn vẹn tình mẫu tử thiêng liêng?',
        options: [
          'Đôi mắt mẹ đen láy, hiền từ và ấm áp lạ kỳ. Mỗi khi nhìn em, ánh mắt ấy như ngọn lửa sưởi ấm, chất chứa bao yêu thương và niềm tin tưởng vô bờ bến.',
          'Mẹ em có đôi mắt bồ câu 2 mí.',
          'Mắt mẹ nhìn rất rõ không cần đeo kính.',
          'Mắt mẹ em màu đen.'
        ],
        correctAnswer: 'Đôi mắt mẹ đen láy, hiền từ và ấm áp lạ kỳ. Mỗi khi nhìn em, ánh mắt ấy như ngọn lửa sưởi ấm, chất chứa bao yêu thương và niềm tin tưởng vô bờ bến.',
        explanation: 'Tả ánh mắt gắn với tình yêu thương ấm áp, truyền cảm hứng và niềm tin cho con cái.'
      },
      {
        id: 'vck2_q8',
        topic: 'Cảm thụ bài thơ "Hạt gạo làng ta"',
        points: 1,
        question: 'Trong bài thơ "Hạt gạo làng ta" (Trần Đăng Khoa), hạt gạo được làm nên từ những giọt mồ hôi và công sức của ai?',
        options: [
          'Của người mẹ tảo tần "nước như ai nấu, chết cả cá cờ, cua ngoi lên bờ, mẹ em xuống cấy"',
          'Chỉ của thiên nhiên ban tặng',
          'Chỉ của các bạn thiếu nhi',
          'Của những người thợ máy móc'
        ],
        correctAnswer: 'Của người mẹ tảo tần "nước như ai nấu, chết cả cá cờ, cua ngoi lên bờ, mẹ em xuống cấy"',
        explanation: 'Hình ảnh mẹ lội ruộng cấy lúa trong cái nắng chang chang làm nên vị ngọt ngào, trân quý của hạt gạo quê hương.'
      },
      {
        id: 'vck2_q9',
        topic: 'Phép thế đại từ',
        points: 1,
        question: 'Tìm đại từ thay thế trong câu: "Bác nông dân đang cày ruộng. Bác ấy làm việc rất chăm chỉ."',
        options: ['Bác ấy', 'Bác nông dân', 'Ruộng', 'Chăm chỉ'],
        correctAnswer: 'Bác ấy',
        explanation: '"Bác ấy" là đại từ thay thế cho danh từ "Bác nông dân" ở câu trước.'
      },
      {
        id: 'vck2_q10',
        topic: 'Thử thách điểm 10 - Khai thác nghệ thuật',
        points: 1,
        question: 'Đọc câu văn: "Mỗi chiếc lá bàng mùa thu như một ngọn lửa nhỏ bập bùng thắp sáng cả góc sân trường". Biện pháp nghệ thuật đặc sắc nhất ở đây là:',
        options: [
          'So sánh và ẩn dụ màu sắc độc đáo (lá bàng đỏ như ngọn lửa nhỏ thắp sáng)',
          'Chỉ là câu kể thông thường',
          'Phép điệp từ',
          'Phép đối xứng'
        ],
        correctAnswer: 'So sánh và ẩn dụ màu sắc độc đáo (lá bàng đỏ như ngọn lửa nhỏ thắp sáng)',
        explanation: 'Hình ảnh so sánh lá bàng mùa thu với ngọn lửa nhỏ đem lại sự ấm áp và giàu sức gợi cảm nghệ thuật.'
      }
    ]
  },
  {
    id: 'exam_van_g6',
    subjectId: 'vietnamese',
    title: 'Đề Thi Thử Tuyển Sinh Vào Lớp 6 Chuyên Văn / CLC',
    semester: 2,
    type: 'grade-6-prep',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Đề thi chọn học sinh giỏi & tuyển sinh Lớp 6 Chất Lượng Cao: Phân tích dụng ý tu từ, cảm thụ thơ ca sâu sắc, đoạn văn nghị luận & miêu tả nghệ thuật đỉnh cao.',
    questions: [
      {
        id: 'vg6_q1',
        topic: 'Biện pháp Tu từ Điệp Ngữ',
        points: 1,
        question: 'Trong khổ thơ: "Tre xanh / Xanh tự bao giờ? / Chuyện ngày xưa... đã có bờ tre xanh" (Nguyễn Duy), việc lặp lại từ "xanh" 3 lần nhằm nhấn mạnh điều gì?',
        options: [
          'Nhấn mạnh sức sống trường tồn, bền bỉ và gắn bó keo sơn muôn đời của cây tre với đất nước và con người Việt Nam.',
          'Chỉ màu sắc của lá cây tre.',
          'Để cho bài thơ có đủ số chữ.',
          'Tác giả thích màu xanh lá cây.'
        ],
        correctAnswer: 'Nhấn mạnh sức sống trường tồn, bền bỉ và gắn bó keo sơn muôn đời của cây tre với đất nước và con người Việt Nam.',
        explanation: 'Điệp từ "xanh" khẳng định sức sống mãnh liệt, bất diệt của loài tre biểu tượng cho khí phách dân tộc.'
      },
      {
        id: 'vg6_q2',
        topic: 'Ẩn dụ chuyển đổi cảm giác',
        points: 1,
        question: 'Câu thơ: "Tiếng chim hót rộn rã / Nghe mát rượi bóng râm" sử dụng nghệ thuật gì?',
        options: [
          'Ẩn dụ chuyển đổi cảm giác (từ thính giác sang xúc giác)',
          'So sánh thông thường',
          'Hoán dụ vị trí',
          'Phép đảo ngữ'
        ],
        correctAnswer: 'Ẩn dụ chuyển đổi cảm giác (từ thính giác sang xúc giác)',
        explanation: 'Tiếng chim (âm thanh - thính giác) được cảm nhận bằng cảm giác "mát rượi" (xúc giác), tạo nên sự tươi mát diệu kỳ.'
      },
      {
        id: 'vg6_q3',
        topic: 'Cấu tạo câu Đảo Ngữ',
        points: 1,
        question: 'Câu thơ: "Lom khom dưới núi tiều vài chú / Lác đác bên sông chợ mấy nhà" (Bà Huyện Thanh Quan) sử dụng biện pháp ĐẢO NGỮ nhằm mục đích gì?',
        options: [
          'Đưa từ láy "Lom khom", "Lác đác" lên đầu câu để khắc họa sự thưa thớt, vắng lặng và gợi nỗi cô quạnh của cảnh chiều tà.',
          'Để gieo vần cho đúng luật thơ thất ngôn.',
          'Chỉ tả các chú tiều phu đi làm về.',
          'Kể số lượng nhà ở ven sông.'
        ],
        correctAnswer: 'Đưa từ láy "Lom khom", "Lác đác" lên đầu câu để khắc họa sự thưa thớt, vắng lặng và gợi nỗi cô quạnh của cảnh chiều tà.',
        explanation: 'Đảo vị ngữ lên trước chủ ngữ làm nổi bật vẻ đìu hiu, hoang sơ của Đèo Ngang trong buổi hoàng hôn.'
      },
      {
        id: 'vg6_q4',
        topic: 'Phân biệt Từ Hán Việt',
        points: 1,
        question: 'Cụm từ Hán Việt nào sau đây đồng nghĩa với "tình yêu quê hương, đất nước"?',
        options: ['Lòng ái quốc / Tình hoài hương', 'Đồng tâm hiệp lực', 'Cần cù nhẫn nại', 'Tương thân tương ái'],
        correctAnswer: 'Lòng ái quốc / Tình hoài hương',
        explanation: '"Ái quốc" là yêu nước, "Hoài hương" là nhớ thương hướng về quê hương cội nguồn.'
      },
      {
        id: 'vg6_q5',
        topic: 'Liên kết câu & Mạch lạc đoạn văn',
        points: 1,
        question: 'Để đoạn văn miêu tả bức tranh mùa thu Hà Nội có sự hòa quyện giữa không gian, thời gian và cảm xúc, câu kết nối nên là:',
        options: [
          'Tất cả hòa quyện vào nhau, làm nên một mùa thu Hà Nội thanh tao, cổ kính và xao xuyến đến nao lòng.',
          'Mùa thu Hà Nội rất đẹp và mát mẻ.',
          'Nói chung mùa thu ở đâu cũng giống nhau.',
          'Em thích mùa thu nhất trong năm.'
        ],
        correctAnswer: 'Tất cả hòa quyện vào nhau, làm nên một mùa thu Hà Nội thanh tao, cổ kính và xao xuyến đến nao lòng.',
        explanation: 'Câu văn đúc kết trọn vẹn nét đặc trưng tao nhã, gợi cảm xúc lắng đọng trong tâm trí người đọc.'
      },
      {
        id: 'vg6_q6',
        topic: 'Nhân hóa đỉnh cao',
        points: 1,
        question: 'Cách viết nào nhân hóa hạt mưa mùa xuân tinh tế nhất?',
        options: [
          'Mưa xuân không ồn ào gõ nhịp như mưa rào mùa hạ, mà nhẹ nhàng buông mình như những sợi tơ mỏng, dịu dàng đánh thức từng mầm non đang say ngủ.',
          'Mưa xuân rơi nhè nhẹ ngoài trời.',
          'Mưa xuân rất ẩm ướt.',
          'Hạt mưa rơi trên lá cây.'
        ],
        correctAnswer: 'Mưa xuân không ồn ào gõ nhịp như mưa rào mùa hạ, mà nhẹ nhàng buông mình như những sợi tơ mỏng, dịu dàng đánh thức từng mầm non đang say ngủ.',
        explanation: 'Nhân hóa "nhẹ nhàng buông mình", "dịu dàng đánh thức mầm non" làm mưa xuân mang tâm hồn của người mẹ hiền.'
      },
      {
        id: 'vg6_q7',
        topic: 'Nghị luận & Bài học đạo lý',
        points: 1,
        question: 'Câu tục ngữ "Ăn quả nhớ kẻ trồng cây" nhắc nhở thế hệ trẻ bài học đạo lý thiêng liêng nào?',
        options: [
          'Lòng biết ơn sâu sắc đối với ông bà, cha mẹ, thầy cô và những thế hệ đi trước đã hy sinh để ta có cuộc sống ấm no hôm nay.',
          'Khi ăn hoa quả phải nhớ người làm vườn.',
          'Cần phải trồng nhiều cây ăn quả quanh nhà.',
          'Chăm sóc cây cối để có quả ngọt.'
        ],
        correctAnswer: 'Lòng biết ơn sâu sắc đối với ông bà, cha mẹ, thầy cô và những thế hệ đi trước đã hy sinh để ta có cuộc sống ấm no hôm nay.',
        explanation: 'Đạo lý "Uống nước nhớ nguồn", "Ăn quả nhớ kẻ trồng cây" là truyền thống tri ân cao đẹp của dân tộc.'
      },
      {
        id: 'vg6_q8',
        topic: 'Đoạn văn tả người có chiều sâu nội tâm',
        points: 1,
        question: 'Chi tiết nào miêu tả chiều sâu nội tâm của người thầy giáo khi học trò đạt giải cao?',
        options: [
          'Đôi mắt thầy ánh lên niềm tự hào rạng rỡ, khóe môi khẽ run run xúc động khi ôm lấy học trò vào lòng.',
          'Thầy đứng vỗ tay cùng cả trường.',
          'Thầy mặc bộ com-lê màu đen.',
          'Thầy cầm cuốn sổ điểm danh trên tay.'
        ],
        correctAnswer: 'Đôi mắt thầy ánh lên niềm tự hào rạng rỡ, khóe môi khẽ run run xúc động khi ôm lấy học trò vào lòng.',
        explanation: 'Khắc họa biểu cảm ánh mắt và khóe môi run run diễn tả niềm xúc động chân thành và tình thương của người thầy.'
      },
      {
        id: 'vg6_q9',
        topic: 'Từ nhiều nghĩa trong ngữ cảnh nâng cao',
        points: 1,
        question: 'Từ "mùa xuân" trong câu: "Mùa xuân là Tết trồng cây / Làm cho đất nước càng ngày càng xuân" mang những tầng nghĩa nào?',
        options: [
          'Mùa xuân thứ nhất là mùa mở đầu của một năm; mùa xuân thứ hai ẩn dụ cho sự tươi trẻ, phồn vinh và phát triển hưng thịnh của đất nước.',
          'Cả hai từ đều chỉ thời tiết ấm áp.',
          'Cả hai từ đều chỉ việc trồng nhiều cây xanh.',
          'Chỉ là từ láy lặp lại cho vui tai.'
        ],
        correctAnswer: 'Mùa xuân thứ nhất là mùa mở đầu của một năm; mùa xuân thứ hai ẩn dụ cho sự tươi trẻ, phồn vinh và phát triển hưng thịnh của đất nước.',
        explanation: 'Bác Hồ đã sử dụng từ "xuân" với tầng nghĩa ẩn dụ sâu sắc cho sức sống và tương lai rạng rỡ của non sông.'
      },
      {
        id: 'vg6_q10',
        topic: 'Điểm 10 - Văn phong Thần Bút',
        points: 1,
        question: 'Mở bài gián tiếp nào sau đây xứng đáng điểm 10 tuyệt đối cho đề bài: "Tả dòng sông quê hương em"?',
        options: [
          '"Quê hương tôi có con sông xanh biếc / Nước gương trong soi tóc những hàng tre...". Tiếng thơ êm đềm của Tế Hanh như chiếc chìa khóa vạn năng mở toang cánh cửa ký ức, đưa tôi tìm về dòng sông tuổi thơ – dải lụa mềm hiền hòa đã ôm ấp bao kỷ niệm ngọt ngào của những ngày ấu thơ.',
          'Nhà em ở gần một con sông rất to và dài. Sau đây em xin tả con sông quê em.',
          'Dòng sông quê em có rất nhiều tôm cá và thuyền bè qua lại.',
          'Em rất yêu quý dòng sông quê hương vì nó cung cấp nước cho đồng ruộng.'
        ],
        correctAnswer: '"Quê hương tôi có con sông xanh biếc / Nước gương trong soi tóc những hàng tre...". Tiếng thơ êm đềm của Tế Hanh như chiếc chìa khóa vạn năng mở toang cánh cửa ký ức, đưa tôi tìm về dòng sông tuổi thơ – dải lụa mềm hiền hòa đã ôm ấp bao kỷ niệm ngọt ngào của những ngày ấu thơ.',
        explanation: 'Mở bài kết hợp thơ ca, hình ảnh ẩn dụ "chiếc chìa khóa vạn năng", so sánh "dải lụa mềm" tạo nên phong thái văn chương bậc thầy.'
      }
    ]
  }
];

export const englishExams: Exam[] = [
  {
    id: 'exam_eng_gk1',
    subjectId: 'english',
    title: 'Mid-Term 1 English Test (Global Success Grade 5)',
    semester: 1,
    type: 'mid-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Official Standard Test (Units 1 - 5): Odd one out, Nationalities, Free-time activities (Adverbs of Frequency), Future dream jobs, and Reading Comprehension.',
    questions: [
      {
        id: 'egk1_q1',
        topic: 'Odd One Out (Phonics & Vocabulary)',
        points: 1,
        question: 'Choose the word that has a different topic or part of speech from the others:',
        options: ['doctor', 'architect', 'friendly', 'journalist'],
        correctAnswer: 'friendly',
        explanation: '"Friendly" is an adjective (tính từ), while "doctor", "architect", and "journalist" are jobs (danh từ chỉ nghề nghiệp).'
      },
      {
        id: 'egk1_q2',
        topic: 'Countries & Nationalities (Unit 3)',
        points: 1,
        question: 'Complete the sentence: "Tony is from Sydney, Australia. He is ________."',
        options: ['Australian', 'Australia', 'American', 'British'],
        correctAnswer: 'Australian',
        explanation: 'A person from Australia has Australian nationality.'
      },
      {
        id: 'egk1_q3',
        topic: 'Adverbs of Frequency (Unit 4)',
        points: 1,
        question: 'How do you answer: "How often do you ride your bike to school?"',
        options: [
          'I usually ride my bike to school twice a week.',
          'I ride my bike yesterday.',
          'I like riding a bike very much.',
          'My bike is blue and new.'
        ],
        correctAnswer: 'I usually ride my bike to school twice a week.',
        explanation: 'The question "How often...?" asks about frequency (tần suất), answered with "usually... twice a week".'
      },
      {
        id: 'egk1_q4',
        topic: 'Future Dream Jobs (Unit 5)',
        points: 1,
        question: 'Fill in the blank: "What would you like to be in the future? - I\'d like to be a ________ because I\'d like to fly planes."',
        options: ['pilot', 'writer', 'nurse', 'teacher'],
        correctAnswer: 'pilot',
        explanation: 'A pilot is a person who flies airplanes.'
      },
      {
        id: 'egk1_q5',
        topic: 'Sentence Reordering (Writing)',
        points: 1,
        question: 'Reorder the words to make a correct sentence: "do / What / in / free / your / you / time / do / ?"',
        options: [
          'What do you do in your free time?',
          'What you do in your free time do?',
          'What in your free time do you do?',
          'Do you what do in your free time?'
        ],
        correctAnswer: 'What do you do in your free time?',
        explanation: 'Standard question structure: Wh-word + do/does + S + V + prepositional phrase?'
      },
      {
        id: 'egk1_q6',
        topic: 'Find ONE Mistake (Grammar)',
        points: 1,
        question: 'Find the mistake in this sentence: "She always go to the English club on Sunday mornings."',
        options: ['always go ➡️ always goes', 'on ➡️ at', 'Sunday mornings ➡️ Sunday morning', 'the ➡️ a'],
        correctAnswer: 'always go ➡️ always goes',
        explanation: 'Subject "She" is third-person singular, so the verb "go" must be changed to "goes".'
      },
      {
        id: 'egk1_q7',
        topic: 'Address & Location (Unit 2)',
        points: 1,
        question: 'Choose the correct preposition: "My grandparents live ________ Flat 302 on the third floor of Ha Noi Tower."',
        options: ['in', 'at', 'on', 'from'],
        correctAnswer: 'in',
        explanation: 'Use "in" with an apartment/flat: "live in Flat 302".'
      },
      {
        id: 'egk1_q8',
        topic: 'Reading Comprehension (Passage)',
        points: 1,
        question: 'Read the text: "Phong is an active boy. In his free time, he often plays football with his classmates and surfs the Internet for English songs. He would like to be an architect in the future because he likes drawing beautiful houses." - Why would Phong like to be an architect?',
        options: [
          'Because he likes drawing beautiful houses.',
          'Because he likes playing football.',
          'Because he surfs the Internet.',
          'Because he is an active boy.'
        ],
        correctAnswer: 'Because he likes drawing beautiful houses.',
        explanation: 'The passage clearly states: "...because he likes drawing beautiful houses."'
      },
      {
        id: 'egk1_q9',
        topic: 'Personal Character (Unit 1)',
        points: 1,
        question: 'What question is used to ask about someone\'s personality?',
        options: [
          'What is he like?',
          'What does he look like?',
          'What does he like?',
          'How is he today?'
        ],
        correctAnswer: 'What is he like?',
        explanation: '"What is he like?" asks about personality (tính cách: kind, clever, friendly), while "What does he look like?" asks about physical appearance.'
      },
      {
        id: 'egk1_q10',
        topic: 'Advanced Challenge - Sentence Transformation',
        points: 1,
        question: 'Choose the sentence that has the SAME meaning as: "Peter likes reading comic books very much."',
        options: [
          'Peter is fond of reading comic books.',
          'Peter never reads comic books.',
          'Peter would like to buy comic books.',
          'Peter dislikes reading comic books.'
        ],
        correctAnswer: 'Peter is fond of reading comic books.',
        explanation: '"To be fond of + V-ing" has the same meaning as "to like + V-ing" (yêu thích làm gì).'
      }
    ]
  },
  {
    id: 'exam_eng_ck1',
    subjectId: 'english',
    title: 'Final-Term 1 English Test (Global Success Grade 5)',
    semester: 1,
    type: 'final-term-1',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Comprehensive Term 1 Exam (Units 1 - 10): Past Simple Tense (school trips), school rooms, classroom activities, listening comprehension & error correction.',
    questions: [
      {
        id: 'eck1_q1',
        topic: 'Past Simple Tense (Unit 10)',
        points: 1,
        question: 'Complete the sentence: "Where did you go on your school trip last Friday? - We ________ to Cuc Phuong National Park."',
        options: ['went', 'go', 'going', 'goes'],
        correctAnswer: 'went',
        explanation: 'Past tense of "go" in the past simple is "went".'
      },
      {
        id: 'eck1_q2',
        topic: 'School Rooms (Unit 6)',
        points: 1,
        question: 'Where do students do science experiments at school?',
        options: ['In the science lab', 'In the computer room', 'In the gym', 'In the music room'],
        correctAnswer: 'In the science lab',
        explanation: 'Science experiments are conducted in the science laboratory (phòng thí nghiệm khoa học).'
      },
      {
        id: 'eck1_q3',
        topic: 'Past Simple Question',
        points: 1,
        question: 'Choose the correct question: "________ - It was fantastic! We saw many wild animals."',
        options: [
          'How was the trip?',
          'Where is the trip?',
          'What did you do?',
          'When was the trip?'
        ],
        correctAnswer: 'How was the trip?',
        explanation: '"How was the trip?" asks for opinion/experience about the trip (Chuyến đi thế nào?).'
      },
      {
        id: 'eck1_q4',
        topic: 'Outdoor Activities (Unit 9)',
        points: 1,
        question: 'Fill in the blank: "They are setting up a tent. They are going ________."',
        options: ['camping', 'swimming', 'fishing', 'jogging'],
        correctAnswer: 'camping',
        explanation: 'Setting up a tent (dựng lều) is associated with camping (cắm trại).'
      },
      {
        id: 'eck1_q5',
        topic: 'Find the Error',
        points: 1,
        question: 'Find the mistake in this sentence: "Did you went to the zoo with your family yesterday?"',
        options: ['went ➡️ go', 'with ➡️ to', 'yesterday ➡️ ago', 'Did ➡️ Do'],
        correctAnswer: 'went ➡️ go',
        explanation: 'After auxiliary verb "Did", the main verb must be in base form: "Did you go...?"'
      },
      {
        id: 'eck1_q6',
        topic: 'Preposition of Time',
        points: 1,
        question: 'Choose the correct preposition: "My school sports day was ________ November 20th."',
        options: ['on', 'in', 'at', 'for'],
        correctAnswer: 'on',
        explanation: 'Use "on" with specific dates (ngày tháng cụ thể: on November 20th).'
      },
      {
        id: 'eck1_q7',
        topic: 'Irregular Verbs (Past Simple)',
        points: 1,
        question: 'What is the past form of the verb "take"?',
        options: ['took', 'taked', 'taking', 'taken'],
        correctAnswer: 'took',
        explanation: 'The past simple of "take" is "took" (e.g., take photos ➡️ took photos).'
      },
      {
        id: 'eck1_q8',
        topic: 'School Subjects (Unit 7)',
        points: 1,
        question: 'Which subject teaches students about living things, plants and animals?',
        options: ['Science', 'History', 'Maths', 'Geography'],
        correctAnswer: 'Science',
        explanation: 'Science (Khoa học) teaches about nature, plants and animals.'
      },
      {
        id: 'eck1_q9',
        topic: 'Sentence Reordering',
        points: 1,
        question: 'Reorder the words: "saw / animals / at / We / many / the zoo / ."',
        options: [
          'We saw many animals at the zoo.',
          'We saw at the zoo many animals.',
          'Many animals we saw at the zoo.',
          'At the zoo saw we many animals.'
        ],
        correctAnswer: 'We saw many animals at the zoo.',
        explanation: 'S (We) + V (saw) + Object (many animals) + Place (at the zoo).'
      },
      {
        id: 'eck1_q10',
        topic: 'Reading Cloze Test',
        points: 1,
        question: 'Fill in the blank: "Last summer, Linda went to Da Nang by plane. She ________ in the luxury hotel near the beach."',
        options: ['stayed', 'stays', 'staying', 'stay'],
        correctAnswer: 'stayed',
        explanation: 'The story is in past tense ("went"), so use past verb "stayed".'
      }
    ]
  },
  {
    id: 'exam_eng_gk2',
    subjectId: 'english',
    title: 'Mid-Term 2 English Test (Global Success Grade 5)',
    semester: 2,
    type: 'mid-term-2',
    durationMinutes: 40,
    totalPoints: 10,
    description: 'Term 2 Official Test (Units 11 - 15): Health & Doctor advice with Should/Shouldn\'t, Home Safety, Folk Tales & Asking for Directions.',
    questions: [
      {
        id: 'egk2_q1',
        topic: 'Health Symptoms (Unit 11)',
        points: 1,
        question: 'Mary has a pain in her stomach. What\'s the matter with her?',
        options: ['She has a stomach ache.', 'She has a toothache.', 'She has an earache.', 'She has a sore throat.'],
        correctAnswer: 'She has a stomach ache.',
        explanation: 'A pain in the stomach is called a stomach ache (đau bụng).'
      },
      {
        id: 'egk2_q2',
        topic: 'Giving Health Advice (Should / Shouldn\'t)',
        points: 1,
        question: 'Tom has a high fever. What SHOULD he do?',
        options: [
          'He should stay in bed and take some medicine.',
          'He should go swimming in cold water.',
          'He should eat cold ice cream.',
          'He shouldn\'t drink warm water.'
        ],
        correctAnswer: 'He should stay in bed and take some medicine.',
        explanation: 'When having a fever, one should rest in bed and take medicine.'
      },
      {
        id: 'egk2_q3',
        topic: 'Home Safety Warnings (Unit 12)',
        points: 1,
        question: 'Complete the warning: "Don\'t ride your bike too fast! Because you may ________."',
        options: ['fall off your bike and break your leg', 'get a burn', 'cut your finger', 'drown'],
        correctAnswer: 'fall off your bike and break your leg',
        explanation: 'Riding a bike too fast can cause falling off and breaking a leg.'
      },
      {
        id: 'egk2_q4',
        topic: 'Safety with Matches',
        points: 1,
        question: 'Why shouldn\'t young children play with matches?',
        options: ['Because they may get a burn.', 'Because they can swim.', 'Because it is cold.', 'Because matches are toys.'],
        correctAnswer: 'Because they may get a burn.',
        explanation: 'Playing with matches may cause fires and burns (get a burn).'
      },
      {
        id: 'egk2_q5',
        topic: 'Vietnamese Folk Tales (Unit 13)',
        points: 1,
        question: 'In the story of Tam and Cam, what is Tam like?',
        options: ['Gentle, kind and hardworking', 'Greedy and cruel', 'Lazy and selfish', 'Fierce'],
        correctAnswer: 'Gentle, kind and hardworking',
        explanation: 'Tam is described as gentle, kind and hardworking (dịu dàng, tốt bụng và chăm chỉ).'
      },
      {
        id: 'egk2_q6',
        topic: 'World Fables (Unit 13)',
        points: 1,
        question: 'In "The Tortoise and the Hare", what lesson does the story teach?',
        options: [
          'Slow and steady wins the race.',
          'Always run fast and sleep.',
          'Never help other animals.',
          'Hares are always winners.'
        ],
        correctAnswer: 'Slow and steady wins the race.',
        explanation: 'The fable teaches that persistence and patience lead to success (Chậm mà chắc thắng cuộc).'
      },
      {
        id: 'egk2_q7',
        topic: 'Means of Transport (Unit 14)',
        points: 1,
        question: 'How did your family get to Phu Quoc Island? - We went ________ plane.',
        options: ['by', 'on', 'in', 'with'],
        correctAnswer: 'by',
        explanation: 'Use "by" with means of transport (by plane, by bus, by train).'
      },
      {
        id: 'egk2_q8',
        topic: 'Asking for Directions (Unit 15)',
        points: 1,
        question: 'Choose the correct response: "Excuse me, where is the pharmacy? - ________"',
        options: [
          'It is on the corner of the street, next to the bakery.',
          'I went there yesterday.',
          'It is ten o\'clock.',
          'I have a headache.'
        ],
        correctAnswer: 'It is on the corner of the street, next to the bakery.',
        explanation: 'Answers the location question "where is...?" with specific prepositions of place.'
      },
      {
        id: 'egk2_q9',
        topic: 'Find ONE Mistake',
        points: 1,
        question: 'Find the mistake: "You should not eating too much spicy food when you have a stomach ache."',
        options: ['eating ➡️ eat', 'much ➡️ many', 'when ➡️ why', 'have ➡️ has'],
        correctAnswer: 'eating ➡️ eat',
        explanation: 'After modal verb "should not", the verb must be in base form: "should not eat".'
      },
      {
        id: 'egk2_q10',
        topic: 'Sentence Transformation',
        points: 1,
        question: 'Choose the sentence that has the same meaning: "How about going to the cinema this evening?"',
        options: [
          'Let\'s go to the cinema this evening.',
          'We must go to the cinema.',
          'We cannot go to the cinema.',
          'Why did you go to the cinema?'
        ],
        correctAnswer: 'Let\'s go to the cinema this evening.',
        explanation: '"How about + V-ing?" and "Let\'s + V-inf" are both used to make suggestions.'
      }
    ]
  },
  {
    id: 'exam_eng_ck2',
    subjectId: 'english',
    title: 'Final-Term 2 English Exam (Comprehensive Grade 5)',
    semester: 2,
    type: 'final-term-2',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Year-End Comprehensive Exam (Units 1 - 20): Seasons & Weather forecasting, Stories & fables, Transport & Directions, Places of Interest (Comparatives), and Summer Holidays.',
    questions: [
      {
        id: 'eck2_q1',
        topic: 'Health & Advice with Should/Shouldn\'t (Unit 15)',
        points: 1,
        question: 'Tom has a high fever and a sore throat. What SHOULD he do?',
        options: [
          'He should go to see the doctor and take some medicine.',
          'He should eat a lot of cold ice cream.',
          'He should go swimming in the cold lake.',
          'He shouldn\'t stay in bed.'
        ],
        correctAnswer: 'He should go to see the doctor and take some medicine.',
        explanation: 'When having a fever and sore throat, one should visit a doctor.'
      },
      {
        id: 'eck2_q2',
        topic: 'Weather Forecast (Unit 16)',
        points: 1,
        question: 'What will the weather be like in Da Nang tomorrow? - It ________ sunny and windy.',
        options: ['will be', 'is being', 'was', 'were'],
        correctAnswer: 'will be',
        explanation: 'Future forecast with tomorrow uses "will be".'
      },
      {
        id: 'eck2_q3',
        topic: 'Comparatives (Unit 19)',
        points: 1,
        question: 'Which one is ________, Ha Long Bay or Nha Trang Beach? - I think Ha Long Bay is.',
        options: ['more attractive', 'attractive', 'most attractive', 'as attractive'],
        correctAnswer: 'more attractive',
        explanation: 'Comparing two places requires the comparative form "more attractive".'
      },
      {
        id: 'eck2_q4',
        topic: 'Means of Transport & Directions (Unit 18)',
        points: 1,
        question: 'How can I get to the museum? - You can ________ bus number 09.',
        options: ['take', 'drive', 'ride', 'fly'],
        correctAnswer: 'take',
        explanation: 'Use the collocation "take a bus" (bắt xe buýt).'
      },
      {
        id: 'eck2_q5',
        topic: 'Future Holiday Plans (Unit 20)',
        points: 1,
        question: 'Where are you going this summer vacation? - We are going ________ Phu Quoc Island.',
        options: ['to visit', 'visiting', 'visited', 'visit'],
        correctAnswer: 'to visit',
        explanation: '"be going to + V" expresses future plan: "going to visit".'
      },
      {
        id: 'eck2_q6',
        topic: 'Zoo Animals (Unit 17)',
        points: 1,
        question: 'What did the tigers do when you were at the zoo? - They ________ loudly.',
        options: ['roared', 'roar', 'roaring', 'roars'],
        correctAnswer: 'roared',
        explanation: 'The past action at the zoo uses past tense "roared" (gầm vang).'
      },
      {
        id: 'eck2_q7',
        topic: 'Four Seasons in Vietnam',
        points: 1,
        question: 'How many seasons are there in Southern Vietnam? - There are ________.',
        options: [
          'two seasons: the dry season and the rainy season',
          'four seasons: spring, summer, autumn and winter',
          'three seasons: hot, cold and cool',
          'only one season'
        ],
        correctAnswer: 'two seasons: the dry season and the rainy season',
        explanation: 'Southern Vietnam has 2 main seasons: dry season (mùa khô) and rainy season (mùa mưa).'
      },
      {
        id: 'eck2_q8',
        topic: 'Superlative Comparison',
        points: 1,
        question: 'Mount Everest is the ________ mountain in the world.',
        options: ['highest', 'higher', 'most high', 'as high'],
        correctAnswer: 'highest',
        explanation: 'Superlative of short adjective "high" is "the highest" (cao nhất).'
      },
      {
        id: 'eck2_q9',
        topic: 'Sentence Reordering',
        points: 1,
        question: 'Reorder: "like / What / tomorrow / will / be / the weather / ?"',
        options: [
          'What will the weather be like tomorrow?',
          'What the weather will like be tomorrow?',
          'Will what the weather be like tomorrow?',
          'What tomorrow will the weather like be?'
        ],
        correctAnswer: 'What will the weather be like tomorrow?',
        explanation: 'Correct structure for weather query: What + will + the weather + be like + time phrase?'
      },
      {
        id: 'eck2_q10',
        topic: 'Reading Comprehension',
        points: 1,
        question: 'Read: "Next month, Tony and his parents are going to visit London. They will visit the Big Ben tower, see the London Eye and take a boat cruise on the River Thames." - What will Tony\'s family see in London?',
        options: [
          'Big Ben tower and the London Eye',
          'Eiffel Tower',
          'Ha Long Bay',
          'Sydney Opera House'
        ],
        correctAnswer: 'Big Ben tower and the London Eye',
        explanation: 'The text clearly specifies: "...visit the Big Ben tower, see the London Eye".'
      }
    ]
  },
  {
    id: 'exam_eng_g6',
    subjectId: 'english',
    title: 'Advanced Grade 6 Entrance Examination (Selective Schools)',
    semester: 2,
    type: 'grade-6-prep',
    durationMinutes: 45,
    totalPoints: 10,
    description: 'Thử thách thi tuyển sinh Lớp 6 Trường Chuyên / Chất Lượng Cao: Phonics & Word Stress, Phrasal Verbs, Sentence Transformations & Reading Cloze.',
    questions: [
      {
        id: 'eg6_q1',
        topic: 'Word Stress (Trọng Âm)',
        points: 1,
        question: 'Choose the word that has a different stress pattern from the others:',
        options: ['architect', 'engineer', 'cinema', 'hospital'],
        correctAnswer: 'engineer',
        explanation: '"Engineer" has stress on the 3rd syllable (en-gi-NEER), while "architect", "cinema", "hospital" have stress on the 1st syllable.'
      },
      {
        id: 'eg6_q2',
        topic: 'Pronunciation of -ed ending',
        points: 1,
        question: 'Choose the word whose underlined part "-ed" is pronounced differently:',
        options: ['decided (/ɪd/)', 'played (/d/)', 'listened (/d/)', 'stayed (/d/)'],
        correctAnswer: 'decided (/ɪd/)',
        explanation: '"decided" ends in /d/, so "-ed" is pronounced as /ɪd/. The others are pronounced as /d/.'
      },
      {
        id: 'eg6_q3',
        topic: 'Sentence Transformation with "Prefer"',
        points: 1,
        question: 'Choose the sentence with the same meaning as: "I like playing football more than watching TV."',
        options: [
          'I prefer playing football to watching TV.',
          'I prefer playing football than watching TV.',
          'I prefer to play football than watch TV.',
          'I like watching TV more than playing football.'
        ],
        correctAnswer: 'I prefer playing football to watching TV.',
        explanation: 'Structure: "prefer + V-ing + TO + V-ing" (thích làm cái này hơn cái kia).'
      },
      {
        id: 'eg6_q4',
        topic: 'Conjunctions (Although vs In spite of)',
        points: 1,
        question: 'Complete the sentence: "________ it was raining heavily, we enjoyed our camping trip."',
        options: ['Although', 'Because', 'Despite', 'However'],
        correctAnswer: 'Although',
        explanation: '"Although + S + V" (Mặc dù trời mưa to, chúng tôi vẫn thích chuyến cắm trại).'
      },
      {
        id: 'eg6_q5',
        topic: 'Quantifiers (Few / A few / Little / A little)',
        points: 1,
        question: 'Choose the correct word: "There is only ________ milk left in the fridge, so we need to buy some more."',
        options: ['a little', 'a few', 'few', 'many'],
        correctAnswer: 'a little',
        explanation: '"Milk" is an uncountable noun (danh từ không đếm được), so use "a little" (một ít).'
      },
      {
        id: 'eg6_q6',
        topic: 'Subject-Verb Agreement',
        points: 1,
        question: 'Choose the correct verb form: "Either Mary or her brothers ________ going to clean the house."',
        options: ['are', 'is', 'was', 'be'],
        correctAnswer: 'are',
        explanation: 'In "Either A or B", the verb agrees with the closer subject "her brothers" (plural ➡️ are).'
      },
      {
        id: 'eg6_q7',
        topic: 'Preposition Collocations',
        points: 1,
        question: 'Nam is very good ________ solving difficult Maths puzzles.',
        options: ['at', 'in', 'on', 'with'],
        correctAnswer: 'at',
        explanation: 'The adjective collocation is "to be good AT + V-ing" (giỏi về cái gì).'
      },
      {
        id: 'eg6_q8',
        topic: 'Question Tags (Câu Hỏi Đuôi)',
        points: 1,
        question: 'Complete the question tag: "You haven\'t finished your English homework yet, ________?"',
        options: ['have you', 'haven\'t you', 'did you', 'do you'],
        correctAnswer: 'have you',
        explanation: 'Main clause is negative ("haven\'t finished"), so the tag question is positive ("have you").'
      },
      {
        id: 'eg6_q9',
        topic: 'Conditional Sentence Type 1',
        points: 1,
        question: 'If you ________ hard, you will pass the entrance exam with flying colors.',
        options: ['study', 'will study', 'studied', 'studies'],
        correctAnswer: 'study',
        explanation: 'In conditional sentence Type 1: If + S + V(present simple), S + will + V-inf.'
      },
      {
        id: 'eg6_q10',
        topic: 'Advanced Reading Cloze',
        points: 1,
        question: 'Read: "Learning a foreign language opens up new doors to the world. It not only helps students communicate with international friends but also develops their cognitive skills." - What does "opens up new doors" mean?',
        options: [
          'Provides new and exciting opportunities',
          'Opens physical wooden doors',
          'Builds new houses',
          'Teaches how to paint doors'
        ],
        correctAnswer: 'Provides new and exciting opportunities',
        explanation: 'The idiom "opens up new doors" metaphorically means creating new and valuable opportunities.'
      }
    ]
  }
];

export const exams: Exam[] = [
  ...mathExams,
  ...vietnameseExams,
  ...englishExams,
];

export function getExamsBySubject(subjectId: SubjectId): Exam[] {
  switch (subjectId) {
    case 'vietnamese':
      return vietnameseExams;
    case 'english':
      return englishExams;
    case 'math':
    default:
      return mathExams;
  }
}
