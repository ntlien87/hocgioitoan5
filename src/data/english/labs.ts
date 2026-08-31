export interface SentenceItem {
  id: string;
  vietnamese: string;
  words: string[];
  correctOrder: string;
}

export interface VerbItem {
  base: string;
  past: string;
  meaning: string;
  example: string;
}

export const SENTENCE_TASKS: SentenceItem[] = [
  {
    id: 's1',
    vietnamese: 'Tôi thường đạp xe đến trường hai lần một tuần.',
    words: ['usually', 'I', 'ride', 'my', 'bike', 'to', 'school', 'twice', 'a', 'week'],
    correctOrder: 'I usually ride my bike to school twice a week',
  },
  {
    id: 's2',
    vietnamese: 'Bạn muốn làm nghề gì trong tương lai?',
    words: ['What', 'would', 'you', 'like', 'to', 'be', 'in', 'the', 'future', '?'],
    correctOrder: 'What would you like to be in the future ?',
  },
  {
    id: 's3',
    vietnamese: 'Cuối tuần trước chúng tôi đã đi cắm trại ở công viên quốc gia.',
    words: ['Last', 'weekend', 'we', 'went', 'camping', 'in', 'the', 'national', 'park'],
    correctOrder: 'Last weekend we went camping in the national park',
  },
  {
    id: 's4',
    vietnamese: 'Đừng chơi với dao vì bạn có thể bị đứt tay.',
    words: ["Don't", 'play', 'with', 'the', 'knife', 'because', 'you', 'may', 'cut', 'yourself'],
    correctOrder: "Don't play with the knife because you may cut yourself",
  },
];

export const IRREGULAR_VERBS: VerbItem[] = [
  { base: 'go', past: 'went', meaning: 'đi', example: 'We went to the beach yesterday.' },
  { base: 'see', past: 'saw', meaning: 'nhìn thấy', example: 'I saw many wild animals at the zoo.' },
  { base: 'buy', past: 'bought', meaning: 'mua', example: 'She bought a new English dictionary.' },
  { base: 'take', past: 'took', meaning: 'cầm, chụp ảnh', example: 'They took lots of beautiful photos.' },
  { base: 'eat', past: 'ate', meaning: 'ăn', example: 'He ate a large pizza for lunch.' },
  { base: 'have', past: 'had', meaning: 'có, trải qua', example: 'We had a wonderful school trip.' },
  { base: 'swim', past: 'swam', meaning: 'bơi', example: 'Tom swam in the warm sea.' },
  { base: 'write', past: 'wrote', meaning: 'viết', example: 'Mai wrote a letter to her penfriend.' },
  { base: 'fly', past: 'flew', meaning: 'bay', example: 'The pilot flew the airplane safely.' },
  { base: 'give', past: 'gave', meaning: 'cho, tặng', example: 'Teacher gave us interesting books.' },
];
