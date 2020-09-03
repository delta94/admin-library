import React from 'react';
import styled from 'styled-components';
import { BLACK_800 } from 'styles';
import { Tag as TagType } from 'types';

import Tag from './components/Tag';

interface Props {
  className?: string;
  tags: TagType[];
  selected: number[];
  onChange: (newSelected: number[]) => void;
  limit?: number;
}

const TagList = (props: Props) => {
  const { className, tags, selected, onChange, limit = Infinity } = props;

  const handleClick = (tag: TagType) => {
    const newSelected = selected.includes(tag.id)
      ? selected.filter(id => id !== tag.id)
      : [...selected, tag.id];

    onChange(newSelected);
  };

  return (
    <Wrapper className={className}>
      {tags.map(tag => {
        const isSelected = !!selected.find(id => tag.id === id);
        const disabled = !isSelected && selected.length >= limit; 
        return (
          <Tag
            key={tag.id}
            tag={tag}
            selected={isSelected}
            disabled={disabled}
            onClick={handleClick}
          />
        );
      })}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TagList, areEqual);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: default;
  width: 200px;
  max-height: 216px;
  background: ${BLACK_800};
  border-radius: 2px;
  padding: 15px 10px;
`;
