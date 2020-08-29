import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Caption12, GRAY_200, RED_500, WHITE, PURPLE_500 } from 'styles';
import { Tag } from 'types';
import { CloseIcon } from 'assets/icons';

interface Props {
  className?: string;
  chip: Tag;
  active?: boolean;
  onDelete?: (chip: Tag) => void;
  onClick?: (chip: Tag) => void;
}

const Chip = (props: Props) => {
  const { className, chip, onDelete, active = false, onClick } = props;
  const [focus, setFocus] = useState(false);

  const handleMouseEnter = () => setFocus(true);

  const handleMouseLeave = () => setFocus(false);

  const handleDelete = (e: SyntheticEvent) => {
    e.stopPropagation();

    if (onDelete) {
      onDelete(chip);
    }
  };

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();

    if (onClick) {
      onClick(chip);
    }
  };

  return (
    <Wrapper active={active} className={className} focus={focus} onClick={handleClick}>
      {chip.name}
      {!!onDelete && (
        <StyledCloseIcon
          onClick={handleDelete}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Chip, areEqual);

const getBackgroundColor = (focus: boolean, active: boolean) => {
  if (focus) return RED_500;

  return active ? PURPLE_500 : GRAY_200;
};

const Wrapper = styled(Caption12) <{ focus: boolean; active: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${({ focus, active }) => getBackgroundColor(focus, active)};
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 3px 8px;
  border-radius: 2px;
  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
  transform: scale(0.5);
  margin-left: 5px;

  path {
    fill: ${WHITE};
  }
`;
