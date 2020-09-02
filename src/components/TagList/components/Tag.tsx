import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Tag as TagType } from 'types';
import { RoundedCheckIcon, RoundedMinusIcon, RoundedPlusIcon } from 'assets/icons';
import { GRAY_100, WHITE, RED_500, PURPLE_400, GREEN_500, PURPLE_500 } from 'styles';

interface Props {
  className?: string;
  tag: TagType;
  selected: boolean;
  disabled?: boolean;
  onClick: (tag: TagType) => void;
}

const Tag = (props: Props) => {
  const { className, selected, tag, onClick, disabled = false } = props;

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();

    if (disabled) return;

    onClick(tag);
  };

  return (
    <Wrapper
      selected={selected}
      disabled={disabled}
      className={className}
      onClick={handleClick}
    >
      <StyledPlusIcon />
      <StyledCheckIcon />
      <StyledMinusIcon />
      {tag.name}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Tag, areEqual);

const StyledCheckIcon = styled(RoundedCheckIcon)`
  path {
    fill: ${GREEN_500};
  }
`;

const StyledPlusIcon = styled(RoundedPlusIcon)``;

const StyledMinusIcon = styled(RoundedMinusIcon)``;

const getHoverColor = (selected: boolean, disabled: boolean) => {
  if (disabled) return GRAY_100;

  return selected ? RED_500 : PURPLE_400;
};

const Wrapper = styled.div<{ selected: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: ${({ disabled }) => disabled ? GRAY_100 : WHITE};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

  ${StyledCheckIcon}, ${StyledPlusIcon}, ${StyledMinusIcon} {
    margin-right: 9px;
  }

  ${StyledCheckIcon} {
    display: ${({ selected }) => selected ? 'block' : 'none'};
  }

  ${StyledPlusIcon} {
    display: ${({ selected }) => !selected ? 'block' : 'none'};

    path {
      fill: ${({ disabled }) => disabled ? GRAY_100 : PURPLE_500};
    }
  }

  ${StyledMinusIcon} {
    display: none;
  }

  :hover {
    color: ${({ selected, disabled }) => getHoverColor(selected, disabled)};

    ${StyledCheckIcon} {
      display: none;
    }
  
    ${StyledMinusIcon} {
      display: ${({ selected }) => selected ? 'block' : 'none'}
    }
  }
`;
