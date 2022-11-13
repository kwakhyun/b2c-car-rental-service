import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import TagSmall from '../Category/TagSmall';

import { flexBox } from '../../styles/mixin';
import { VehicleBasic } from '../../types';
import { segment } from '../../utils/const';

type VehicleItemProps = {
  vehicle: VehicleBasic;
};

const MS_PER_DAY = 86400000;

export default function VehicleItem({ vehicle }: VehicleItemProps) {
  const navigate = useNavigate();
  const isWithinADay = (date: Date) => Date.now() - Date.parse(date.toString()) <= MS_PER_DAY;

  const handleClick = () => {
    navigate(`/detail/${vehicle.id}`, { state: { vehicle } });
  };
  
  return (
    <StyledVehicleItem onClick={handleClick}>
      {isWithinADay(vehicle.createdAt) && <TagSmall content="신규" customStyle={StyledTagSmall} />}

      <StyledInfo>
        <StyledTextBold>
          {vehicle.attribute.brand}
          <br />
          {vehicle.attribute.name}
        </StyledTextBold>
        <StyledTextRegular>
          {segment[vehicle.attribute.segment]} / {vehicle.attribute.fuelType}
          <br />월 {vehicle.amount.toLocaleString()} 원 부터
        </StyledTextRegular>
      </StyledInfo>
      <StyledImage alt={vehicle.attribute.name} src={vehicle.attribute.imageUrl} />
    </StyledVehicleItem>
  );
}

const StyledVehicleItem = styled.div`
  position: relative;
  ${flexBox('row', 'space-between')};
  width: 100%;
  padding: 20px ${({ theme }) => theme.paddingHorizontal};
  border-bottom: 1px solid ${({ theme }) => theme.black};
  cursor: pointer;
`;

const StyledTagSmall = css`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledInfo = styled.div`
  ${flexBox('column', 'space-between', 'flex-start')};
  height: 72px;
`;

const StyledTextBold = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const StyledTextRegular = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

const StyledImage = styled.img`
  height: 80px;
`;
