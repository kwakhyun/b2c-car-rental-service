import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import TagRaw from './TagRaw';

type TagLargeProps = {
  content: string;
  isActive?: boolean;
  onClick: () => void;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

export default function TagLarge({ content, isActive = false, onClick, customStyle }: TagLargeProps) {
  return <TagRaw content={content} customStyle={StyledTagLarge(isActive, customStyle)} onClick={onClick} />;
}

const StyledTagLarge = (isActive: boolean, customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined) => css`
  color: blue;
  width: 62px;
  height: 27px;
  padding-top: 1px;
  background-color: ${({ theme }) => (isActive ? theme.black : theme.gray)};
  font-size: 14px;
  color: ${({ theme }) => (isActive ? theme.white : theme.black)};
  ${customStyle && customStyle};
`;
