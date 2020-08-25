import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Tag as TagType } from 'types';
import { RoundedCheckIcon, RoundedMinusIcon, RoundedPlusIcon } from 'assets/icons';
import { GRAY_100, WHITE, RED_500, PURPLE_400 } from 'styles';

interface Props {
  className?: string;
  tag: TagType;
  selected: boolean;
  onClick: (tag: TagType) => void;
}

const Tag = (props: Props) => {
  const { className, selected, tag, onClick } = props;

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClick(tag);
  };

  return (
    <Wrapper selected={selected} className={className} onClick={handleClick}>
      <StyledPlusIcon />
      <StyledCheckIcon />
      <StyledMinusIcon />
      {tag.name}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Tag, areEqual);

const StyledCheckIcon = styled(RoundedCheckIcon)``;

const StyledPlusIcon = styled(RoundedPlusIcon)``;

const StyledMinusIcon = styled(RoundedMinusIcon)``;

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: ${({ selected }) => selected ? GRAY_100 : WHITE};
  cursor: pointer;

  ${StyledCheckIcon}, ${StyledPlusIcon}, ${StyledMinusIcon} {
    margin-right: 9px;
  }

  ${StyledCheckIcon} {
    display: ${({ selected }) => selected ? 'block' : 'none'}
  }

  ${StyledPlusIcon} {
    display: ${({ selected }) => !selected ? 'block' : 'none'}
  }

  ${StyledMinusIcon} {
    display: none;
  }

  :hover {
    color: ${({ selected }) => selected ? RED_500 : PURPLE_400};

    ${StyledCheckIcon} {
      display: none;
    }
  
    ${StyledMinusIcon} {
      display: ${({ selected }) => selected ? 'block' : 'none'}
    }
  }
`;
