import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { COLOR, FONT_SIZE } from '../../styles/constants';
import { Car } from '../../types';
import { convertMoneyString } from '../../utils/convertValue';

export default function CarItem({ car }: { car: Car }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${car.id}`);
  };

  return (
    <StyledCarItem onClick={handleNavigate}>
      <StyeldCarInfo>
        <StyledCarInfoTitle>
          <h3>{car.attribute.brand}</h3>
          <h4>{car.attribute.name}</h4>
        </StyledCarInfoTitle>
        <StyledText>
          {car.attribute.segment} / {car.attribute.fuelType}
        </StyledText>
        <StyledText>월 {convertMoneyString(car.amount)} 원 부터</StyledText>
      </StyeldCarInfo>
      <img width="30%" src={car.attribute.imageUrl} alt={car.attribute.name} />
    </StyledCarItem>
  );
}

const StyledCarItem = styled.li`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.BACKGROUND_HOVER};
  }
`;

const StyledTagSmall = css`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyeldCarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCarInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;
`;

const StyledText = styled.span`
  font-size: ${FONT_SIZE.SMALL};
`;
