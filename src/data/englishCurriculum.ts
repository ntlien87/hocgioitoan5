import { Chapter } from '../types/curriculum';

export const englishChapters: Chapter[] = [
  {
    id: 'ch_eng_1',
    subjectId: 'english',
    title: 'Chương 1',
    vietnameseTitle: 'Units 1-5: All About Us & Daily Life',
    description: 'Khám phá thông tin cá nhân, thói quen hàng ngày (trạng từ tần suất), môn học, nghề nghiệp ước mơ và tính cách bạn bè.',
    semester: 1,
    color: 'from-sky-500 to-blue-600',
    bgGradient: 'bg-gradient-to-r from-sky-500 to-blue-600',
    icon: '🇬🇧',
    boss: {
      id: 'boss_eng_1',
      name: 'Vocabulary Dragon',
      avatar: '🐲',
      title: 'Lord of Words & Routine Quests',
      maxHp: 100,
      story: 'Vocabulary Dragon canh giữ Cánh Cổng Tiếng Anh 5! Hắn thách thức con sử dụng từ vựng về hoạt động hàng ngày, trạng từ tần suất và nghề nghiệp tương lai!',
      rewardBadgeId: 'badge_eng_starter',
      questions: [
        {
          id: 'eng_b1_q1',
          question: 'Choose the correct sentence to describe your daily routine:',
          options: [
            'I always gets up at 6 a.m.',
            'I always get up at 6 a.m. and brush my teeth.',
            'I always getting up at 6 a.m.',
            'I gets up always at 6 a.m.'
          ],
          correctAnswer: 'I always get up at 6 a.m. and brush my teeth.',
          explanation: 'Với chủ ngữ "I" ở thì hiện tại đơn, động từ giữ nguyên mẫu (get up) và trạng từ tần suất (always) đứng trước động từ thường.'
        },
        {
          id: 'eng_b1_q2',
          question: 'What is the opposite of "quiet" when describing a bustling city?',
          options: ['Noisy / Crowded', 'Small', 'Calm', 'Clean'],
          correctAnswer: 'Noisy / Crowded',
          explanation: '"Noisy" (ồn ào) và "Crowded" (đông đúc) là từ trái nghĩa với "quiet" (yên tĩnh).'
        },
        {
          id: 'eng_b1_q3',
          question: 'Complete the dialogue: "What would you like to be in the future? - I\'d like to be an ________ because I want to design beautiful buildings."',
          options: ['architect', 'astronaut', 'actor', 'artist'],
          correctAnswer: 'architect',
          explanation: '"An architect" là kiến trúc sư - người thiết kế các tòa nhà.'
        },
        {
          id: 'eng_b1_q4',
          question: 'Choose the correct question: "________ - She is very kind and helpful."',
          options: [
            'What is your new teacher like?',
            'What does your new teacher look like?',
            'What does your teacher like?',
            'How is your teacher like?'
          ],
          correctAnswer: 'What is your new teacher like?',
          explanation: '"What is ... like?" dùng để hỏi về tính cách/phẩm chất của một người (kind, helpful, cheerful).'
        }
      ]
    },
    lessons: [
      {
        id: 'eng_c1_l1',
        chapterId: 'ch_eng_1',
        title: 'Daily Routines & Frequency',
        subtitle: 'What do you do in your free time? Adverbs of frequency (always, usually, often...)',
        levelNumber: 1,
        icon: '⏰',
        theory: {
          title: 'Adverbs of Frequency (Trạng từ chỉ tần suất)',
          keyPoints: [
            'Always (100% - luôn luôn), Usually (80% - thường xuyên), Often (60% - hay), Sometimes (30% - thỉnh thoảng), Never (0% - không bao giờ).',
            'Vị trí trong câu: Subject + Adverb + Verb (Ví dụ: I usually ride my bike to school).',
            'Cấu trúc câu hỏi: "How often do you + V?" ➡️ "I + V + once / twice / three times a week."'
          ],
          formula: 'S + (always / usually / often / sometimes / never) + V(s/es)',
          examples: [
            {
              problem: 'Hỏi & Đáp về tần suất:',
              solution: 'Q: How often do you go swimming? - A: I go swimming twice a week with my father.'
            }
          ],
          memoryTip: 'Trạng từ chỉ tần suất đứng TRƯỚC động từ thường và SAU động từ to-be!'
        },
        questions: [
          {
            id: 'eng_l1_q1',
            question: 'Fill in the blank: "My brother ________ plays football after school because he loves sports."',
            options: ['often', 'never', 'rarely', 'hardly'],
            correctAnswer: 'often',
            explanation: '"Often" (thường xuyên) phù hợp với vế giải thích "because he loves sports".'
          },
          {
            id: 'eng_l1_q2',
            question: 'How do you answer: "How often do you go to the library?"',
            options: [
              'I go to the library twice a week.',
              'I am going to the library.',
              'Yes, I like the library.',
              'It is very big.'
            ],
            correctAnswer: 'I go to the library twice a week.',
            explanation: '"Twice a week" (hai lần một tuần) trả lời cho câu hỏi về tần suất "How often...?"'
          },
          {
            id: 'eng_l1_q3',
            question: 'Choose the correct word order: "surfs / the Internet / in / She / the evening / usually / ."',
            options: [
              'She usually surfs the Internet in the evening.',
              'She surfs usually the Internet in the evening.',
              'Usually she surfs in the evening the Internet.',
              'She in the evening usually surfs the Internet.'
            ],
            correctAnswer: 'She usually surfs the Internet in the evening.',
            explanation: 'Cấu trúc chuẩn: Chủ ngữ (She) + trạng từ (usually) + động từ (surfs) + tân ngữ (the Internet) + cụm thời gian (in the evening).'
          }
        ],
        xpReward: 150,
        coinReward: 40
      },
      {
        id: 'eng_c1_l2',
        chapterId: 'ch_eng_1',
        title: 'Future Dream Jobs & Reasons',
        subtitle: 'What would you like to be in the future? & Why would you like to be...?',
        levelNumber: 2,
        icon: '🚀',
        theory: {
          title: 'Hỏi & Trả Lời Về Nghề Nghiệp Ước Mơ',
          keyPoints: [
            'Hỏi ước mơ: "What would you like to be in the future?"',
            'Trả lời: "I\'d like to be a/an + Job (doctor, pilot, teacher, architect, engineer, writer, nurse)."',
            'Hỏi lý do: "Why would you like to be a/an ...?" ➡️ "Because I\'d like to + V (fly planes / help sick people / look after patients / write stories)."'
          ],
          formula: "I'd like to be a/an [Job] because I'd like to [Action]",
          examples: [
            {
              problem: 'Mẫu câu ước mơ làm phi công:',
              solution: "I'd like to be a pilot because I'd like to fly airplanes around the world."
            }
          ]
        },
        questions: [
          {
            id: 'eng_l2_q1',
            question: 'Complete the sentence: "Mai wants to look after sick animals. She would like to be a ________."',
            options: ['vet', 'dentist', 'driver', 'cook'],
            correctAnswer: 'vet',
            explanation: '"Vet" (bác sĩ thú y) là người chăm sóc động vật bị ốm (look after sick animals).'
          },
          {
            id: 'eng_l2_q2',
            question: 'Why would Nam like to be a writer? - "Because he\'d like to ________ for children."',
            options: ['write interesting stories', 'fly airplanes', 'grow vegetables', 'design houses'],
            correctAnswer: 'write interesting stories',
            explanation: 'Nhà văn (writer) viết các câu chuyện thú vị cho thiếu nhi (write interesting stories).'
          }
        ],
        xpReward: 160,
        coinReward: 45
      },
      {
        id: 'eng_c1_l3',
        chapterId: 'ch_eng_1',
        title: 'Personality & Appearance',
        subtitle: 'Distinguish between "What is he like?" and "What does he look like?"',
        levelNumber: 3,
        icon: '🌟',
        theory: {
          title: 'Tính Cách (Personality) & Ngoại Hình (Appearance)',
          keyPoints: [
            'Ngoại hình (Appearance): "What does he/she look like?" ➡️ "He is tall and slim with short black hair."',
            'Tính cách (Personality): "What is he/she like?" ➡️ "She is friendly, hardworking, generous and clever."',
            'Từ vựng tính cách: kind (tốt bụng), clever (thông minh), cheerful (vui vẻ), confident (tự tin), polite (lịch sự).'
          ]
        },
        questions: [
          {
            id: 'eng_l3_q1',
            question: 'Which question asks about someone\'s PHYSICAL APPEARANCE?',
            options: [
              'What does your brother look like?',
              'What is your brother like?',
              'What does your brother like?',
              'How is your brother today?'
            ],
            correctAnswer: 'What does your brother look like?',
            explanation: '"What does ... look like?" hỏi về ngoại hình (vóc dáng, tóc, mắt), còn "What is ... like?" hỏi về tính cách.'
          },
          {
            id: 'eng_l3_q2',
            question: 'Choose the word that means "ready to give help or share things with others":',
            options: ['generous / helpful', 'lazy', 'shy', 'careless'],
            correctAnswer: 'generous / helpful',
            explanation: '"Generous" (hào phóng) và "helpful" (hay giúp đỡ) là những đức tính tốt.'
          }
        ],
        xpReward: 170,
        coinReward: 50
      }
    ]
  },
  {
    id: 'ch_eng_2',
    subjectId: 'english',
    title: 'Chương 2',
    vietnameseTitle: 'Units 6-10: Our School & Wonderful Trips',
    description: 'Làm chủ từ vựng về trường lớp, phòng chức năng, các hoạt động cắm trại dã ngoại và thì Quá Khứ Đơn (Past Simple Tense).',
    semester: 1,
    color: 'from-indigo-500 to-purple-600',
    bgGradient: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    icon: '🏰',
    boss: {
      id: 'boss_eng_2',
      name: 'Past-Tense Sphinx',
      avatar: '🦁',
      title: 'Guardian of the Ancient Timeline',
      maxHp: 120,
      story: 'Nhân Sư Quá Khứ canh giữ Kim Tự Tháp Thời Gian! Để vượt qua, con phải sử dụng chính xác các động từ bất quy tắc và câu hỏi thì Quá Khứ Đơn!',
      rewardBadgeId: 'badge_eng_past_master',
      questions: [
        {
          id: 'eng_b2_q1',
          question: 'Complete the sentence: "Last weekend, we ________ to Cuc Phuong National Park and saw many colorful butterflies."',
          options: ['went', 'go', 'goes', 'going'],
          correctAnswer: 'went',
          explanation: 'Dấu hiệu "Last weekend" (cuối tuần trước) yêu cầu chia động từ ở thì Quá Khứ Đơn: go ➡️ went.'
        },
        {
          id: 'eng_b2_q2',
          question: 'Find the mistake in this sentence: "Where did you went on your summer holiday?"',
          options: ['went ➡️ go', 'Where ➡️ What', 'did ➡️ do', 'on ➡️ at'],
          correctAnswer: 'went ➡️ go',
          explanation: 'Trong câu hỏi có trợ động từ "did", động từ chính phải đưa về dạng nguyên mẫu không "to": "Where did you go...?"'
        },
        {
          id: 'eng_b2_q3',
          question: 'Which of the following is an irregular past tense verb pair?',
          options: ['buy ➡️ bought', 'play ➡️ played', 'visit ➡️ visited', 'watch ➡️ watched'],
          correctAnswer: 'buy ➡️ bought',
          explanation: '"buy ➡️ bought" là động từ bất quy tắc, các từ còn lại thêm đuôi "-ed".'
        }
      ]
    },
    lessons: [
      {
        id: 'eng_c2_l1',
        chapterId: 'ch_eng_2',
        title: 'School Facilities & Rules',
        subtitle: 'Where is the computer room? What are school rules?',
        levelNumber: 1,
        icon: '🏫',
        theory: {
          title: 'School Rooms & Prepositions of Place',
          keyPoints: [
            'Phòng học chức năng: science lab (phòng thí nghiệm), computer room (phòng tin học), music room (phòng âm nhạc), library (thư viện), gym (phòng thể chất).',
            'Vị trí: on the first floor (ở tầng 1), on the second floor (ở tầng 2), next to (bên cạnh), opposite (đối diện).',
            'Nội quy trường học: "Don\'t run in the corridors", "Keep quiet in the library", "Raise your hand to speak".'
          ]
        },
        questions: [
          {
            id: 'eng_c2_l1_q1',
            question: 'Where do students read books and borrow stories?',
            options: ['In the school library', 'In the gym', 'In the canteen', 'In the garden'],
            correctAnswer: 'In the school library',
            explanation: 'Học sinh đọc và mượn sách ở thư viện (library).'
          },
          {
            id: 'eng_c2_l1_q2',
            question: 'Which sentence is a correct school rule?',
            options: [
              'Always listen to the teacher attentively.',
              'Make loud noise in class.',
              'Litter trash on the classroom floor.',
              'Run fast down the stairs.'
            ],
            correctAnswer: 'Always listen to the teacher attentively.',
            explanation: 'Luôn chú ý lắng nghe thầy cô giảng bài là nội quy tích cực.'
          }
        ],
        xpReward: 160,
        coinReward: 45
      },
      {
        id: 'eng_c2_l2',
        chapterId: 'ch_eng_2',
        title: 'Past Simple Tense (Thì Quá Khứ Đơn)',
        subtitle: 'Regular verbs (-ed) & Irregular verbs (went, saw, took, had, ate...)',
        levelNumber: 2,
        icon: '📜',
        theory: {
          title: 'Bí Kíp Thì Quá Khứ Đơn (Past Simple)',
          keyPoints: [
            'Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ.',
            'Dấu hiệu nhận biết: yesterday, last week/month/year, ago (2 days ago), in 2023.',
            'Động từ có quy tắc: thêm "-ed" (played, watched, visited, listened).',
            'Động từ bất quy tắc thông dụng: go ➡️ went, have ➡️ had, see ➡️ saw, take ➡️ took, eat ➡️ ate, buy ➡️ bought, do ➡️ did.'
          ],
          formula: 'Khẳng định: S + V2/V-ed | Phủ định: S + did not + V-inf | Nghi vấn: Did + S + V-inf?',
          examples: [
            {
              problem: 'Ví dụ chuyến đi dã ngoại:',
              solution: 'We had a wonderful picnic by the lake yesterday. We played badminton and took lots of photos.'
            }
          ]
        },
        questions: [
          {
            id: 'eng_c2_l2_q1',
            question: 'Complete the sentence: "Yesterday afternoon, Peter ________ a delicious ice cream."',
            options: ['ate', 'eats', 'eating', 'eat'],
            correctAnswer: 'ate',
            explanation: 'Dấu hiệu "Yesterday afternoon" yêu cầu dùng quá khứ của "eat" là "ate".'
          },
          {
            id: 'eng_c2_l2_q2',
            question: 'Choose the correct negative sentence in the past simple:',
            options: [
              'We didn\'t go to school last Sunday.',
              'We didn\'t went to school last Sunday.',
              'We don\'t went to school last Sunday.',
              'We not went to school last Sunday.'
            ],
            correctAnswer: 'We didn\'t go to school last Sunday.',
            explanation: 'Cấu trúc phủ định thì quá khứ đơn: S + didn\'t + V nguyên mẫu (go).'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'eng_c2_l3',
        chapterId: 'ch_eng_2',
        title: 'Exciting Trips & Outdoor Activities',
        subtitle: 'How was the trip? What did you do there? Camping, hiking & taking photos',
        levelNumber: 3,
        icon: '🏕️',
        theory: {
          title: 'Hỏi & Kể Về Chuyến Đi Dã Ngoại',
          keyPoints: [
            'Hỏi cảm nhận: "How was the trip?" ➡️ "It was fantastic / amazing / great!"',
            'Hỏi hành động: "What did you do there?" ➡️ "We set up a campfire, sang songs and swam in the sea."',
            'Từ vựng dã ngoại: take photos (chụp ảnh), build a sandcastle (xây lâu đài cát), go camping (đi cắm trại), explore the cave (thám hiểm hang động).'
          ]
        },
        questions: [
          {
            id: 'eng_c2_l3_q1',
            question: 'How do you answer: "What was the trip like?"',
            options: [
              'It was wonderful and we had a lot of fun.',
              'I went there by bus.',
              'I am in grade 5.',
              'My friend is Tom.'
            ],
            correctAnswer: 'It was wonderful and we had a lot of fun.',
            explanation: 'Câu hỏi "What was ... like?" hỏi về cảm nhận chuyến đi.'
          },
          {
            id: 'eng_c2_l3_q2',
            question: 'Reorder the words: "did / Where / on / go / you / your / holiday / ?"',
            options: [
              'Where did you go on your holiday?',
              'Where you did go on your holiday?',
              'Where did go you on your holiday?',
              'Did where you go on your holiday?'
            ],
            correctAnswer: 'Where did you go on your holiday?',
            explanation: 'Cấu trúc câu hỏi: Wh-word + did + S + V-inf + prepositional phrase?'
          }
        ],
        xpReward: 190,
        coinReward: 55
      }
    ]
  },
  {
    id: 'ch_eng_3',
    subjectId: 'english',
    title: 'Chương 3',
    vietnameseTitle: 'Units 11-15: Health, Safety, Stories & Transport',
    description: 'Chăm sóc sức khỏe, đưa ra lời khuyên với Should / Shouldn’t, phòng tránh tai nạn, truyện ngụ ngôn và hỏi đường giao thông.',
    semester: 2,
    color: 'from-teal-500 to-emerald-600',
    bgGradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    icon: '🛡️',
    boss: {
      id: 'boss_eng_3',
      name: 'Grammar Wizard',
      avatar: '🧙‍♂️',
      title: 'Master of Health, Advice & Storytelling',
      maxHp: 130,
      story: 'Pháp Sư Ngữ Pháp kiểm tra khả năng đưa lời khuyên y tế chuẩn xác, phân tích các bài học trong truyện ngụ ngôn và chỉ đường thông thái!',
      rewardBadgeId: 'badge_eng_wizard',
      questions: [
        {
          id: 'eng_b3_q1',
          question: 'Tony has a bad toothache. What SHOULDN\'T he do?',
          options: [
            'He shouldn\'t eat lots of sweet candies.',
            'He should go to the dentist.',
            'He should brush his teeth twice a day.',
            'He should drink warm water.'
          ],
          correctAnswer: 'He shouldn\'t eat lots of sweet candies.',
          explanation: 'Khi bị đau răng, không nên ăn nhiều kẹo ngọt (shouldn\'t eat sweet candies).'
        },
        {
          id: 'eng_b3_q2',
          question: 'In the story "The Fox and the Crow", what is the Crow like?',
          options: ['Foolish / Vain', 'Clever', 'Brave', 'Kind'],
          correctAnswer: 'Foolish / Vain',
          explanation: 'Con quạ trong truyện ngụ ngôn cả tin, thích nghe nịnh nên bị cáo lừa lấy mất miếng phô mai (foolish).'
        },
        {
          id: 'eng_b3_q3',
          question: 'Complete the direction: "Excuse me, how can I get to the post office? - ________ down this street and turn left at the corner."',
          options: ['Go straight', 'Fly', 'Drive fast', 'Swim'],
          correctAnswer: 'Go straight',
          explanation: '"Go straight down this street" là mẫu câu chỉ đường quen thuộc (Đi thẳng theo con đường này).'
        }
      ]
    },
    lessons: [
      {
        id: 'eng_c3_l1',
        chapterId: 'ch_eng_3',
        title: 'Health Problems & Advice',
        subtitle: 'What is the matter with you? Giving advice with Should / Shouldn’t',
        levelNumber: 1,
        icon: '🩺',
        theory: {
          title: 'Vấn Đề Sức Khỏe & Lời Khuyên Y Tế',
          keyPoints: [
            'Hỏi bệnh: "What\'s the matter with you / him / her?"',
            'Trả lời triệu chứng: "I have a headache (đau đầu) / a fever (sốt) / a sore throat (đau họng) / a stomach ache (đau bụng) / a toothache (đau răng)."',
            'Đưa lời khuyên: "You should go to the doctor / take some rest / drink warm water." hoặc "You shouldn\'t carry heavy things / eat ice cream."'
          ],
          formula: 'S + should / shouldn\'t + V-infinitive',
          examples: [
            {
              problem: 'Mẫu hội thoại hỏi thăm sức khỏe:',
              solution: 'Q: What\'s the matter with Linda? - A: She has a bad cold. She should stay in bed and keep warm.'
            }
          ]
        },
        questions: [
          {
            id: 'eng_c3_l1_q1',
            question: 'Fill in the blank: "Quan has a fever. He ________ go to school today."',
            options: ['shouldn\'t', 'should', 'can', 'must'],
            correctAnswer: 'shouldn\'t',
            explanation: 'Khi bị sốt (fever), không nên đi học (shouldn\'t go to school).'
          },
          {
            id: 'eng_c3_l1_q2',
            question: 'What should you do when you have a toothache?',
            options: [
              'You should go to see the dentist.',
              'You should eat cold ice cream.',
              'You shouldn\'t clean your teeth.',
              'You should drink sugary soda.'
            ],
            correctAnswer: 'You should go to see the dentist.',
            explanation: 'Đau răng cần đến khám bác sĩ nha khoa (dentist).'
          }
        ],
        xpReward: 170,
        coinReward: 50
      },
      {
        id: 'eng_c3_l2',
        chapterId: 'ch_eng_3',
        title: 'Preventing Accidents at Home',
        subtitle: 'Don’t play with matches! You may get a burn. Why shouldn’t I...?',
        levelNumber: 2,
        icon: '⚠️',
        theory: {
          title: 'Cảnh Báo Tai Nạn & An Toàn Gia Đình',
          keyPoints: [
            'Cảnh báo an toàn: "Don\'t + V!" (Don\'t ride your bike too fast / Don\'t play with matches / Don\'t touch the stove).',
            'Hỏi lý do: "Why shouldn\'t I play with the knife?"',
            'Giải thích nguy hiểm: "Because you may cut yourself (đứt tay) / get a burn (bỏng) / fall off your bike (ngã xe) / get an electric shock (bị giật điện)."'
          ]
        },
        questions: [
          {
            id: 'eng_c3_l2_q1',
            question: 'Complete the warning: "Don\'t play with the stove! Because you may ________."',
            options: ['get a burn', 'cut yourself', 'fall down', 'break your leg'],
            correctAnswer: 'get a burn',
            explanation: 'Chơi với bếp lửa (stove) có nguy cơ bị bỏng (get a burn).'
          },
          {
            id: 'eng_c3_l2_q2',
            question: 'Why shouldn\'t children climb the tall tree?',
            options: [
              'Because they may fall and break their arm.',
              'Because they may get a burn.',
              'Because they can fly.',
              'Because it is delicious.'
            ],
            correctAnswer: 'Because they may fall and break their arm.',
            explanation: 'Trèo cây cao có thể bị ngã gãy tay (fall and break their arm).'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'eng_c3_l3',
        chapterId: 'ch_eng_3',
        title: 'Folk Tales & Transport Directions',
        subtitle: 'Character traits in stories & How can I get to the museum / zoo?',
        levelNumber: 3,
        icon: '🗺️',
        theory: {
          title: 'Nhân Vật Truyện Cổ Tích & Phương Tiện Giao Thông',
          keyPoints: [
            'Nhân vật truyện cổ: Tam (gentle, kind), Cam (greedy, cruel), Mai An Tiem (hardworking, clever), Aladdin (brave).',
            'Hỏi đường: "How can I get to + Place?"',
            'Chỉ đường: "Turn right at the traffic lights (Rẽ phải ở đèn đỏ) / Go straight ahead (Đi thẳng) / Take bus number 05 (Bắt xe buýt số 05)."'
          ]
        },
        questions: [
          {
            id: 'eng_c3_l3_q1',
            question: 'In the story of Mai An Tiem, what is Mai An Tiem like?',
            options: ['Hardworking and clever', 'Greedy and selfish', 'Lazy', 'Foolish'],
            correctAnswer: 'Hardworking and clever',
            explanation: 'Mai An Tiêm là người chăm chỉ và thông minh (hardworking and clever).'
          },
          {
            id: 'eng_c3_l3_q2',
            question: 'Choose the correct preposition: "The bookstore is ________ the post office and the cinema."',
            options: ['between', 'opposite', 'on', 'at'],
            correctAnswer: 'between',
            explanation: 'Cấu trúc "between A and B" (ở giữa A và B).'
          }
        ],
        xpReward: 190,
        coinReward: 55
      }
    ]
  },
  {
    id: 'ch_eng_4',
    subjectId: 'english',
    title: 'Chương 4',
    vietnameseTitle: 'Units 16-20: Weather, Nature & Summer Holidays',
    description: 'Dự báo thời tiết 4 mùa, so sánh các danh lam thắng cảnh, thế giới động vật hoang dã và kế hoạch kỳ nghỉ hè sôi động.',
    semester: 2,
    color: 'from-amber-500 via-orange-500 to-rose-600',
    bgGradient: 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600',
    icon: '🏖️',
    boss: {
      id: 'boss_eng_4',
      name: 'Master Titan of Fluency',
      avatar: '⚡',
      title: 'Ultimate Guardian of English Championship',
      maxHp: 150,
      story: 'Titan Tối Cao thử thách toàn diện kiến thức cả năm: So sánh tính từ hơn / nhất, dự báo thời tiết và thì Tương Lai Đơn chuẩn bị bước vào Lớp 6!',
      rewardBadgeId: 'badge_eng_champion',
      questions: [
        {
          id: 'eng_b4_q1',
          question: 'Which is the correct comparative sentence?',
          options: [
            'Da Nang is more modern than my hometown.',
            'Da Nang is modern than my hometown.',
            'Da Nang is most modern than my hometown.',
            'Da Nang is moderner than my hometown.'
          ],
          correctAnswer: 'Da Nang is more modern than my hometown.',
          explanation: '"Modern" là tính từ dài 2 âm tiết, dạng so sánh hơn là "more modern than".'
        },
        {
          id: 'eng_b4_q2',
          question: 'What will the weather be like tomorrow in Ha Noi? - "It ________ cool and foggy in the early morning."',
          options: ['will be', 'is being', 'was', 'were'],
          correctAnswer: 'will be',
          explanation: 'Dự báo thời tiết cho ngày mai (tomorrow) sử dụng thì tương lai đơn "will be".'
        },
        {
          id: 'eng_b4_q3',
          question: 'Where are you going to spend your summer vacation? - "We are going to ________."'
        ,
          options: [
            'visit Phu Quoc Island and swim in the blue sea',
            'visiting Phu Quoc Island',
            'visited Phu Quoc Island',
            'visit to Phu Quoc Island'
          ],
          correctAnswer: 'visit Phu Quoc Island and swim in the blue sea',
          explanation: 'Cấu trúc "be going to + V nguyên mẫu": "going to visit".'
        }
      ]
    },
    lessons: [
      {
        id: 'eng_c4_l1',
        chapterId: 'ch_eng_4',
        title: 'Seasons & Weather Forecast',
        subtitle: 'What will the weather be like tomorrow? Four seasons in North & South Vietnam',
        levelNumber: 1,
        icon: '⛅',
        theory: {
          title: 'Thời Tiết 4 Mùa & Dự Báo Tương Lai',
          keyPoints: [
            '4 Mùa: spring (mùa xuân - warm), summer (mùa hè - hot & sunny), autumn / fall (mùa thu - cool & windy), winter (mùa đông - cold & dry).',
            'Miền Nam có 2 mùa: dry season (mùa khô) và rainy season (mùa mưa).',
            'Hỏi dự báo: "What will the weather be like tomorrow?" ➡️ "It will be sunny and hot / stormy / cloudy."'
          ]
        },
        questions: [
          {
            id: 'eng_c4_l1_q1',
            question: 'What is spring like in the North of Vietnam?',
            options: [
              'It is usually warm and wet with light rain.',
              'It is snowy and freezing.',
              'It is burning hot.',
              'It has heavy typhoons.'
            ],
            correctAnswer: 'It is usually warm and wet with light rain.',
            explanation: 'Mùa xuân miền Bắc thường ấm áp và có mưa xuân lất phất (warm and wet with light rain).'
          },
          {
            id: 'eng_c4_l1_q2',
            question: 'Fill in the blank: "Take an umbrella with you because it ________ rain this afternoon."',
            options: ['may / will', 'yesterday', 'was', 'did'],
            correctAnswer: 'may / will',
            explanation: 'Diễn tả khả năng xảy ra trong tương lai: "it may rain / will rain".'
          }
        ],
        xpReward: 180,
        coinReward: 50
      },
      {
        id: 'eng_c4_l2',
        chapterId: 'ch_eng_4',
        title: 'Comparatives & Places of Interest',
        subtitle: 'Comparing places: Which one is bigger / more exciting / more attractive?',
        levelNumber: 2,
        icon: '🏙️',
        theory: {
          title: 'So Sánh Hơn (Comparatives) & Danh Lam Thắng Cảnh',
          keyPoints: [
            'Tính từ ngắn (1 âm tiết): adj + -er + than (taller, bigger, noisier, larger).',
            'Tính từ dài (2 âm tiết trở lên): more + adj + than (more beautiful, more modern, more exciting, more peaceful).',
            'Bất quy tắc: good ➡️ better than, bad ➡️ worse than, far ➡️ farther / further than.'
          ],
          formula: 'Short adj: S1 + is/are + Adj-er + than + S2 | Long adj: S1 + is/are + more + Adj + than + S2'
        },
        questions: [
          {
            id: 'eng_c4_l2_q1',
            question: 'Which one is ________, Ho Chi Minh City or Da Lat City? - Ho Chi Minh City is.',
            options: ['busier and more crowded', 'more busy', 'busyer', 'busyest'],
            correctAnswer: 'busier and more crowded',
            explanation: '"busy" đổi "y" thành "i" rồi thêm "-er" (busier), còn "crowded" dùng "more crowded".'
          },
          {
            id: 'eng_c4_l2_q2',
            question: 'Complete the sentence: "Life in the countryside is ________ than life in big cities."',
            options: ['more peaceful', 'peacefuler', 'most peaceful', 'as peaceful'],
            correctAnswer: 'more peaceful',
            explanation: '"Peaceful" là tính từ dài 2 âm tiết, so sánh hơn là "more peaceful than".'
          }
        ],
        xpReward: 200,
        coinReward: 60
      },
      {
        id: 'eng_c4_l3',
        chapterId: 'ch_eng_4',
        title: 'Dream Summer Holidays & Future Plans',
        subtitle: 'Where are you going this summer? Expressing future plans with be going to',
        levelNumber: 3,
        icon: '🌴',
        theory: {
          title: 'Kế Hoạch Nghỉ Hè Với "Be Going To"',
          keyPoints: [
            'Dùng "be going to + V" để nói về kế hoạch, dự định chắc chắn trong tương lai.',
            'Cấu trúc câu hỏi: "Where are you going this summer?" ➡️ "I am going to visit Ha Long Bay with my family."',
            'Hành động tại điểm đến: "What are you going to do there?" ➡️ "We are going to swim in the sea, eat delicious seafood and build sandcastles."'
          ]
        },
        questions: [
          {
            id: 'eng_c4_l3_q1',
            question: 'Reorder the sentence: "going / this / are / to / Where / summer / you / ?"',
            options: [
              'Where are you going this summer?',
              'Where you are going this summer?',
              'Where this summer are you going to?',
              'Are you going where this summer?'
            ],
            correctAnswer: 'Where are you going this summer?',
            explanation: 'Cấu trúc câu hỏi tương lai chuẩn: Where + are + you + going + time phrase?'
          },
          {
            id: 'eng_c4_l3_q2',
            question: 'Complete the dialogue: "What are they going to do on Nha Trang beach? - They are going to ________."',
            options: [
              'take a boat trip to the islands',
              'taking a boat trip',
              'took a boat trip',
              'takes a boat trip'
            ],
            correctAnswer: 'take a boat trip to the islands',
            explanation: 'Sau "going to" là động từ nguyên thể "take a boat trip".'
          }
        ],
        xpReward: 220,
        coinReward: 70
      }
    ]
  }
];
