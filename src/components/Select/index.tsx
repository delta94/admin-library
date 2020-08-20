import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { WHITE, Caption13, GRAY_100, Caps10, BLACK_600 } from 'styles';
import { ArrowDownIcon } from 'assets/icons';

import Options from './Options';
import { optionStyles, IconWrapper } from './styles';

interface Option {
  value: string;
  title: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  value: Option;
  onChange: (name: string, value: Option) => void;
  className?: string;
}

const Select = (props: Props) => {
  const { options, onChange, label, name, value: selectedOption, className } = props;
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const { title } = selectedOption;

  const handleSelect = (option: Option) => {
    onChange(name, option);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <OptionWrapper onBlur={() => setOpen(false)} tabIndex={1}>
        <SelectedOption onClick={toggleOpen}>
          <Caption13>{t(title)}</Caption13>
          <IconWrapper>
            <StyledIcon open={isOpen} />
          </IconWrapper>
        </SelectedOption>
        {isOpen && <Options options={options} selectedOption={selectedOption} onSelect={handleSelect} />}
      </OptionWrapper>
    </Wrapper>
  );
};

export default React.memo(Select);

const Wrapper = styled.div``;

const OptionWrapper = styled.div`
  margin-top: 4px;
  position: relative;
  outline: none;
`;

const Label = styled(Caps10)`
  color: ${GRAY_100};
`;

const SelectedOption = styled.div`
  ${optionStyles}
  border: 1px solid ${BLACK_600};
  background: transparent;
  border-radius: 4px;

  ::before {
    display: none;
  }
`;

const StyledIcon = styled(ArrowDownIcon) <{ open: boolean }>`
  ${({ open }) => open && `
    transform: rotateX(180deg);
    fill: ${WHITE};
  `}
`;
