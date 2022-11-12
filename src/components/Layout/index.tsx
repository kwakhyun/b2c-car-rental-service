import React from 'react';
import styled from 'styled-components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  max-width: 450px;
  min-width: 360px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;
