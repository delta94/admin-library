import React, { useState } from 'react';
import styled from 'styled-components';
import { Caption14, BLACK_650, BLACK_800 } from 'styles';
import { ArrowDownIcon } from 'assets/icons';
import { SelectOption } from 'types';

import Option from './Option';

interface Props {
  name: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (name: string, value: SelectOption) => void;
  className?: string;
}

const Select = (props: Props) => {
  const { options, onChange, name, value, className } = props;
  const [open, setOpen] = useState(false);

  const handleSelect = (option: SelectOption) => {
    onChange(name, option);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleBlur = () => setOpen(false);

  return (
    <Wrapper className={className}>
      <OptionWrapper onBlur={handleBlur} tabIndex={1}>
        <SelectedOption onClick={toggleOpen}>
          <Caption14>{value.title}</Caption14>
          <IconWrapper>
            <StyledIcon open={open} />
          </IconWrapper>
        </SelectedOption>
        <Options open={open}>
          {options.map(option => (
            <Option
              key={option.value}
              isSelected={value.value === option.value}
              option={option}
              onSelect={handleSelect}
            />
          ))}
        </Options>
      </OptionWrapper>
    </Wrapper>
  );
};

export default React.memo(Select);

const Wrapper = styled.div``;

const OptionWrapper = styled.div`
  position: relative;
  outline: none;
`;

const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 2px;
  background-color: ${BLACK_650};
`;

const StyledIcon = styled(ArrowDownIcon) <{ open: boolean }>`
  transition: all 0.3s ease-in-out;

  ${({ open }) => open && `
    transform: rotate(180deg);
  `}
`;

const Options = styled.div<{ open: boolean }>`
  position: absolute;
  display: ${({ open }) => open ? 'flex' : 'none'};
  margin-top: 4px;
  z-index: 2;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  border-radius: 4px;
  max-height: 216px;
  overflow-y: auto;
  padding: 15px 12px;
  background-color: ${BLACK_800};
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
