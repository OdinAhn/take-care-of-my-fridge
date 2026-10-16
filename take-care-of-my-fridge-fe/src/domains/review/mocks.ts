export interface RecentReviewMockItem {
  id: string;
  recipeName: string;
  rating: number;
  comment: string;
}

export const MOCK_RECENT_REVIEWS: RecentReviewMockItem[] = [
  {
    id: 'review-1',
    recipeName: '불닭 참치 두부조림',
    rating: 5,
    comment: '설탕 빼고 간장 넣으니 진짜 안 망하고 맛있음!',
  },
  {
    id: 'review-2',
    recipeName: '참치 두부 덮밥',
    rating: 5,
    comment: '대파 1개 특가로 사서 비벼먹으니 완전 든든함',
  },
];
