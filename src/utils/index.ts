import { VehicleBasic } from '../types';
import { day, fuelType, segment } from './const';

export const parseDate = (date: Date) => {
  const newDate = new Date(date);
  return `${newDate.getMonth() + 1}월 ${newDate.getDate()}일 (${day[newDate.getDay()]})`;
};

export const getSegment = (searchParams: URLSearchParams) => {
  switch (searchParams.get('segment')) {
    case 'SUV':
      return 'SUV';
    case 'E':
      return 'E';
    case 'D':
      return 'D';
    case 'C':
      return 'C';
    default:
      return '';
  }
};

export const getVehicleDetailSections = (vehicle: VehicleBasic) => [
  {
    title: '차량정보',
    data: [
      {
        item: '차종',
        key: '차종',
        content: segment[vehicle?.attribute?.segment],
      },
      {
        item: '연료',
        key: '연료',
        content: fuelType[vehicle?.attribute?.fuelType],
      },
      {
        item: '이용 가능일',
        key: '이용 가능일',
        content: `${parseDate(vehicle?.startDate)} 부터`,
      },
    ],
  },
  {
    title: '보험',
    data: vehicle?.insurance?.map((i) => ({
      item: i.name,
      key: i.name,
      content: i.description,
    })),
  },
  {
    title: '추가상품',
    data: vehicle?.additionalProducts?.map((p) => ({
      item: p.name,
      key: p.name,
      content: `월 ${p.amount.toLocaleString()} 원`,
    })),
  },
];

export const convertSegment = (name: string) => {
  switch (name) {
    case '전체':
      return 'All';
    case '대형':
      return 'E';
    case '중형':
      return 'D';
    case '소형':
      return 'C';
    case 'SUV':
      return 'SUV';
    default:
      return '';
  }
};

export const convertName = (name: string) => {
  switch (name) {
    case 'E':
      return '대형';
    case 'D':
      return '중형';
    case 'C':
      return '소형';
    case 'SUV':
      return 'SUV';
    default:
      return '';
  }
};

export const convertFuel = (name: string) => {
  switch (name) {
    case 'gasoline':
      return '가솔린';
    case 'ev':
      return '전기';
    default:
      return '';
  }
};

export const convertDate = (date: Date) => {
  const newDate = new Date(date);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const day = week[newDate.getDay()];
  const temp = newDate.toLocaleDateString().split('.');
  const result = `${temp[1]}월 ${temp[2]}일 (${day}) 부터`;

  return result;
};

export const convertMoneyString = (target: number) => {
  const result = target.toLocaleString('ko-KR');

  return result;
};
