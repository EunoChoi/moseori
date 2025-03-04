interface Option {
  label: string;
  value: number;
}

//all item selected -> value : -1
export const CAT_OPTIONS: Option[] = [
  { label: '역사', value: 0 },
  { label: '소설', value: 1 },
  { label: '인문', value: 2 },
  { label: '과학', value: 3 },
  { label: '에세이', value: 4 },
  { label: '시', value: 5 },
  { label: '참고서', value: 6 },
  { label: '기타', value: 7 },
  { label: '취미', value: 8 },
];
export const SORT_OPTIONS: Option[] = [
  { label: '최근 등록순 정렬', value: 0 },
  { label: '마감 임박순 정렬', value: 1 },
]