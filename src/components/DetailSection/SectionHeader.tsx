import styled from 'styled-components';

import { flexBox } from '../../styles/mixin';

type SectionHeaderProps = {
  section: { title: string };
};

export default function SectionHeader({ section: { title } }: SectionHeaderProps) {
  return <StyledSectionHeader>{title}</StyledSectionHeader>;
}

const StyledSectionHeader = styled.div`
  ${flexBox('row', 'flex-start')}
  width: 100%;
  height: 48px;
  padding: 0 ${({ theme }) => theme.paddingHorizontal};
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
`;
