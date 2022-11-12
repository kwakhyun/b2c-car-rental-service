import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { carAPI } from '../../api';
import Header from '../../components/Header';
import { COLOR } from '../../styles/constants';
import { AdditionalProducts, Car, Insurance } from '../../types';
import { convertDate, convertFuel, convertMoneyString, convertName } from '../../utils/convertValue';

interface CarThumbnailProps {
  image: string;
}

export default function Detail() {
  const { id } = useParams();
  const {
    data: carDetail,
    isLoading,
    isError,
  } = useQuery('getCarDetail', () => carAPI.getCarDetail(Number(id)), {
    staleTime: 1000 * 60,
  });

  const { attribute, amount, startDate } = carDetail || {};

  if (isLoading) return <div>로딩중..</div>;
  if (isError) return <div>Error!</div>;

  return (
    <StyledCarDetail>
      <Header title="차량상세" isBack />
      <StyledCarThumbnail image={attribute.imageUrl} />
      <StyledCarHeader>
        <p>{attribute.brand}</p>
        <p>{attribute.name}</p>
        <p>월 {convertMoneyString(amount)} 원</p>
      </StyledCarHeader>
      <StyledCarTitle>차량 정보</StyledCarTitle>
      <StyledCarContent>
        <div>
          <p>차종</p>
          <p>{convertName(attribute.segment)}</p>
        </div>
        <div>
          <p>연료</p>
          <p>{convertFuel(attribute.fuelType)}</p>
        </div>
        <div>
          <p>이용 가능일</p>
          <p>{convertDate(startDate)}</p>
        </div>
      </StyledCarContent>
      <StyledCarTitle>보험</StyledCarTitle>
      <StyledCarContent>
        {carDetail.insurance.map((item: Insurance) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </StyledCarContent>
      <StyledCarTitle>추가상품</StyledCarTitle>
      <StyledCarContent>
        {carDetail.additionalProducts.map((item: AdditionalProducts) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>월 {convertMoneyString(item.amount)} 원</p>
          </div>
        ))}
      </StyledCarContent>
    </StyledCarDetail>
  );
}

export const StyledCarDetail = styled.div``;

export const StyledCarThumbnail = styled.div<CarThumbnailProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 205px;
`;

export const StyledCarHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  > p:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  > p:nth-child(2) {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 20px;
  }
  > p:last-child {
    align-self: flex-end;
    height: 48px;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    padding: 14px 0;
  }
`;

export const StyledCarTitle = styled.div`
  background: ${COLOR.BLUE};
  height: 48px;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #fff;
  padding: 14px 20px;
`;

export const StyledCarContent = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    & > p {
      height: 48px;
      padding: 14px 20px;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
    }
    & > p:first-child {
      font-weight: 700;
      font-size: 17px;
      line-height: 21px;
    }
  }
  &:last-child {
    margin-bottom: 80px;
  }
`;
