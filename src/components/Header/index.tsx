import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { COLOR, FONT_SIZE } from '../../styles/constants';

export default function Header({ title, isBack = false }: { title: string; isBack?: boolean }) {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <StyledHeader>
      {isBack && (
        <StyledBackButton onClick={handleClickBack}>
          <BiArrowBack />
        </StyledBackButton>
      )}
      {title}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${COLOR.BLACK};
  padding: 16px;
  font-size: ${FONT_SIZE.LARGE};
  font-weight: 600;
  text-align: center;
`;

const StyledBackButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 54px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
