import { CategoryValues } from '../types';

export const segment = {
  SUV: 'SUV',
  E: '대형',
  D: '중형',
  C: '소형',
};

export const segmentCategory: CategoryValues[] = [
  { id: 1, segment: '', content: '전체' },
  { id: 2, segment: 'SUV', content: 'SUV' },
  { id: 3, segment: 'E', content: '대형' },
  { id: 4, segment: 'D', content: '중형' },
  { id: 5, segment: 'C', content: '소형' },
];

export const fuelType = {
  gasoline: '가솔린',
  ev: '전기',
  hybrid: '하이브리드',
};

export const day: { [key: number]: string } = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};