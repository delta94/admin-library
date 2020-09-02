import React from 'react';
import styled from 'styled-components';
import { Caption12, GRAY_100, WHITE, PURPLE_400 } from 'styles';
import { SelectOption } from 'types';

interface Props {
  option: SelectOption;
  isSelected: boolean;
  onSelect: (option: SelectOption) => void;
}

const Option = (props: Props) => {
  const { onSelect, option, isSelected } = props;

  const handleSelect = () => {
    onSelect(option);
  };

  return (
    <Wrapper 
      onClick={handleSelect}
      color={isSelected ? GRAY_100 : WHITE}
    >
      {option.title || '-'}
    </Wrapper>
  );
};

export default React.memo(Option);

const Wrapper = styled(Caption12)`
  margin-bottom: 10px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    color: ${PURPLE_400};
  }
`;
