import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/mixin';
import { VehicleSegment } from '../../types';
import { segmentCategory } from '../../utils/const';
import TagLarge from './TagLarge';

type CategoryProps = {
  setSearchParams: (nextInit?: Record<string, string | string[]>) => void;
  segment: VehicleSegment | '';
};

export default function Category({ setSearchParams, segment }: CategoryProps) {
  const [activeTag, setActiveTag] = useState(segment);

  const handleClick = (tag: VehicleSegment | '') => () => {
    setActiveTag(tag);
    if (!tag.length) {
      setSearchParams({});
      return;
    }
    setSearchParams({ segment: tag });
  };

  return (
    <StyeldContainer>
      {segmentCategory.map((tag) => (
        <TagLarge
          key={tag.id}
          content={tag.content}
          isActive={activeTag === tag.segment}
          onClick={handleClick(tag.segment)}
          customStyle={StyledTagLarge}
        />
      ))}
    </StyeldContainer>
  );
}

const StyeldContainer = styled.nav`
  ${flexBox('row', 'flex-start')};
  flex-wrap: nowrap;
  width: 100%;
  height: 40px;
  padding: 5px ${({ theme }) => theme.paddingHorizontal};
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTagLarge = css`
  flex: 0 0 auto;
  margin-right: 8px;
  cursor: pointer;
`;
