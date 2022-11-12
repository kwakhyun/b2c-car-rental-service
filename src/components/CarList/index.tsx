import { useQuery } from 'react-query';
import styled from 'styled-components';
import { carAPI } from '../../api';
import { Car } from '../../types';
import CarItem from '../CarItem';

export default function CarList({ type }: { type: string }) {
  const {
    data: carList,
    isLoading,
    isError,
  } = useQuery('getCarList', () => carAPI.getCarList(type), {
    staleTime: 1000 * 60,
  });

  isLoading && <StyeldText>로딩중..</StyeldText>;
  isError && <StyeldText>Error!</StyeldText>;

  return (
    <div>
      {carList?.map((car: Car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

const StyeldText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
