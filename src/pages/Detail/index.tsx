import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../../components/Container';
import Header from '../../components/Header';
import SectionList from '../../components/DetailSection/SectionList';
import SectionHeader from '../../components/DetailSection/SectionHeader';
import SectionItem from '../../components/DetailSection/SectionItem';

import { useGetVehicles } from '../../hooks/useGetVehicles';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

import { flexBox } from '../../styles/mixin';
import { SectionsValues, VehicleBasic } from '../../types';
import { getVehicleDetailSections } from '../../utils';

export default function Detail() {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { state }: { state: { vehicle: VehicleBasic } } = useLocation();
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
  const [vehicle, setVehicle] = useState<VehicleBasic>(state?.vehicle);
  const [sections, setSections] = useState<SectionsValues[]>([]);

  const renderSectionHeader = (section: { title: string }) => <SectionHeader section={section} />;
  const renderSectionItem = (item: { item?: string; content: string }) => <SectionItem item={item} />;

  useEffect(() => {
    if (!state?.vehicle) {
      getVehicles();
    } else {
      setSections(getVehicleDetailSections(vehicle));
    }
  }, []);

  // useUpdateEffect(() => {
  //   const filtered = vehicles.filter((vehicle) => vehicle.id === parseInt(id, 10))[0];

  //   if (!filtered) navigate('/detail');

  //   setVehicle(filtered);
  // }, [vehicles]);

  useUpdateEffect(() => {
    setSections(getVehicleDetailSections(vehicle));
  }, [vehicle]);

  if (isLoading)
    return (
      <Container>
        <StyledNotice>불러오는 중</StyledNotice>
      </Container>
    );

  return (
    <Container>
      <Header title="차량상세" hasBackButton />
      <StyledImage alt={vehicle?.attribute?.name} src={vehicle?.attribute?.imageUrl} />
      <StyledTitle>
        <div>{vehicle?.attribute?.brand}</div>
        <div>{vehicle?.attribute?.name}</div>
      </StyledTitle>
      <SectionItem item={{ content: `월 ${vehicle?.amount?.toLocaleString()} 원` }} />
      <SectionList sections={sections} renderSectionHeader={renderSectionHeader} renderItem={renderSectionItem} />
    </Container>
  );
}

const StyledImage = styled.img`
  width: 100%;
  height: 205px;
  object-fit: contain;
`;

const StyledTitle = styled.div`
  ${flexBox('column', 'center', 'flex-start')};
  width: 100%;
  height: 92px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal};
  font-weight: 700;

  > div:first-child {
    font-size: 20px;
    line-height: 24px;
  }
  > div:last-child {
    font-size: 24px;
    line-height: 29px;
  }
`;

const StyledNotice = styled.div`
  ${flexBox()};
  width: 100%;
  height: 100vh;
  font-size: 18px;
  font-weight: 600;
`;
