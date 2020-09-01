import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BLACK_600 } from 'styles';
import { Dropdown, TagList } from 'components';
import { Tag } from 'types';

import Chip from '../Chip';

interface Props {
  className?: string;
  tags: Tag[];
  onChange: (newValue: number[]) => void;
  selected: number[];
}

const TagsSelector = (props: Props) => {
  const { className, tags, selected, onChange } = props;
  const { t } = useTranslation();

  const selectedTags = tags.filter(tag => selected.includes(tag.id));

  const handleDelete = (chip: Tag) => {
    const newSelected = selected.filter(id => id !== chip.id);

    onChange(newSelected);
  };

  return (
    <Wrapper className={className}>
      <StyledDropdown variant="contained" title={t('add')}>
        <TagList
          onChange={onChange}
          selected={selected}
          tags={tags}
        />
      </StyledDropdown>
      {selectedTags.map(chip => (
        <Chip
          key={chip.id}
          chip={chip}
          onDelete={handleDelete}
        />
      ))}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TagsSelector, areEqual);

const Wrapper = styled.div`
  min-height: 122px;
  background: ${BLACK_600};
  border-radius: 2px;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledDropdown = styled(Dropdown)`
  margin-right: 4px;
`;
