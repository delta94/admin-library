import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caption13, GRAY_100, WHITE } from 'styles';
import { SelectOption } from 'types';

import { optionStyles } from '../styles';

interface Props extends SelectOption {
  isSelected: boolean;
  onSelect: () => void;
}

const Option = (props: Props) => {
  const { onSelect, value, title, isSelected } = props;
  const { t } = useTranslation();

  return (
    <Wrapper key={value} onClick={onSelect}>
      <Caption13 color={isSelected ? WHITE : GRAY_100}>{t(title)}</Caption13>
    </Wrapper>
  );
};

export default React.memo(Option);

const Wrapper = styled.div`
  ${optionStyles}
`;
