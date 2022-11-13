import React from 'react';

type SectionsValues = {
  title: string;
  data: { key: string; [key: string]: unknown }[];
};

type SectionListProps = {
  sections: SectionsValues[];
  renderSectionHeader: (section: any) => JSX.Element;
  renderItem: (item: any) => JSX.Element;
};

function SectionList({ sections, renderSectionHeader, renderItem }: SectionListProps) {
  return (
    <>
      {sections?.map((section) => (
        <React.Fragment key={section.title}>
          {renderSectionHeader(section)}
          {section.data?.map((item) => (
            <React.Fragment key={item.key}>{renderItem(item)}</React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default SectionList;
