import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Caption12, GRAY_200, RED_500 } from 'styles';
import { Tag } from 'types';

interface Props {
  className?: string;
  chip: Tag;
  onDelete: (chip: Tag) => void;
}

const Chip = (props: Props) => {
  const { className, chip, onDelete } = props;

  const handleDelete = (e: SyntheticEvent) => {
    e.stopPropagation();

    onDelete(chip);
  };

  return (
    <Wrapper className={className} onClick={handleDelete}>
      {chip.name}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Chip, areEqual);

const Wrapper = styled(Caption12)`
  display: inline-block;
  background-color: ${GRAY_200};
  margin-left: 4px;
  padding: 3px 8px;
  border-radius: 2px;

  :hover {
    background-color: ${RED_500};
  }
`;
