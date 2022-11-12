import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CarItem from '../../components/CarItem';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { useGetVehicles } from '../../hooks/useGetVehicles';
import { flexBox } from '../../styles/mixin';
import { getSegment } from '../../utils/convertValue';

export default function Home() {
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
  const [searchParams, setSearchParams] = useSearchParams();

  const segment = useMemo(() => getSegment(searchParams), [searchParams]);

  useEffect(() => {
    getVehicles({ segment });
  }, [segment]);

  return (
    <>
      <Header title="전체차량" />
      <Category segment={segment} setSearchParams={setSearchParams} />
      {isLoading && <StyledNotice>불러오는 중</StyledNotice>}

      {!isLoading && vehicles?.map((vehicle) => <CarItem key={vehicle.id} car={vehicle} />)}

      {!isLoading && !vehicles?.length && <StyledNotice>차량이 없습니다.</StyledNotice>}
    </>
  );
}

const StyledNotice = styled.div`
  ${flexBox()};
  width: 100%;
  height: calc(100% - 100px);
  font-size: 17px;
  font-weight: 700;
`;
