import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

import { positionCenter, responsive } from '../../styles/mixin';

type ContainerProps = {
  children: React.ReactNode;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

export default function Container({ children, customStyle }: ContainerProps) {
  return <StyledContainer customStyle={customStyle}>{children}</StyledContainer>;
}

const StyledContainer = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  ${responsive('desktop')} {
    ${positionCenter()};
    width: 390px;
    height: 750px;
    box-shadow: 0 0 8px ${({ theme }) => theme.gray};
  }

  ${({ customStyle }) => customStyle}
`;
