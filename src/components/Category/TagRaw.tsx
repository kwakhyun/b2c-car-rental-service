import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

import { flexBox } from '../../styles/mixin';

type TagRawProps = {
  content: string;
  customStyle: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
};

export default function TagRaw({ content, customStyle, onClick }: TagRawProps) {
  return (
    <StyeldTagRaw customStyle={customStyle} onClick={onClick}>
      {content}
    </StyeldTagRaw>
  );
}

const StyeldTagRaw = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> }>`
  ${flexBox()};
  border-radius: 50px;
  font-weight: 700;
  ${({ customStyle }) => customStyle};
`;
