export interface QuickIngredientChip {
  id: string;
  name: string;
}

export interface StagedIngredientItem {
  id: string;
  name: string;
  quantityText: string;
  expirationDate: string;
  storageLabel: '실온' | '냉장' | '냉동';
}

export interface MyFridgeSummaryItem {
  id: string;
  name: string;
  daysLeft: number;
  dDayLabel: string;
}

export const MOCK_QUICK_CHIPS: QuickIngredientChip[] = [
  { id: 'chip-1', name: '참치캔' },
  { id: 'chip-2', name: '두부' },
  { id: 'chip-3', name: '계란' },
  { id: 'chip-4', name: '대파' },
];

export const MOCK_STAGED_INGREDIENTS: StagedIngredientItem[] = [
  {
    id: 'staged-1',
    name: '참치캔',
    quantityText: '1캔',
    expirationDate: '2026.10.13',
    storageLabel: '실온',
  },
  {
    id: 'staged-2',
    name: '두부',
    quantityText: '1모',
    expirationDate: '2026.10.14',
    storageLabel: '냉장',
  },
];

export const MOCK_MY_FRIDGE_SUMMARY = {
  totalCount: 5,
  imminentCount: 3,
  items: [
    { id: 'fridge-1', name: '우유', daysLeft: 0, dDayLabel: 'D-Day' },
    { id: 'fridge-2', name: '참치캔', daysLeft: 0, dDayLabel: 'D-Day' },
    { id: 'fridge-3', name: '두부', daysLeft: 1, dDayLabel: 'D-1' },
    { id: 'fridge-4', name: '계란', daysLeft: 5, dDayLabel: 'D-5' },
    { id: 'fridge-5', name: '대파', daysLeft: 7, dDayLabel: 'D-7' },
  ] satisfies MyFridgeSummaryItem[],
};
