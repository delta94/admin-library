import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Caption12, GRAY_200, RED_500, WHITE } from 'styles';
import { Tag } from 'types';
import { CloseIcon } from 'assets/icons';

interface Props {
  className?: string;
  chip: Tag;
  onDelete: (chip: Tag) => void;
}

const Chip = (props: Props) => {
  const { className, chip, onDelete } = props;
  const [focus, setFocus] = useState(false);

  const handleMouseEnter = () => setFocus(true);

  const handleMouseLeave = () => setFocus(false);

  const handleDelete = (e: SyntheticEvent) => {
    e.stopPropagation();

    onDelete(chip);
  };

  return (
    <Wrapper className={className} focus={focus}>
      {chip.name}
      <StyledCloseIcon 
        onClick={handleDelete}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Chip, areEqual);

const Wrapper = styled(Caption12)<{ focus: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${({ focus }) => focus ? RED_500 : GRAY_200};
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 3px 8px;
  border-radius: 2px;

  :first-child {
    margin-right: 0;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  transform: scale(0.5);
  margin-left: 5px;
  cursor: pointer;

  path {
    fill: ${WHITE};
  }
`;
