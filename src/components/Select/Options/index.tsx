import React from 'react';
import styled from 'styled-components';

import { BLACK_600 } from 'styles';
import Option from '../Option';
import { SelectOption } from 'types';

interface Props {
  options: SelectOption[];
  selectedOption: SelectOption;
  onSelect: (option: SelectOption) => void;
}

const Options = (props: Props) => {
  const { options, onSelect, selectedOption } = props;

  return (
    <Wrapper>
      <OptionsInner>
        {options.map(({ value, title }) => (
          <Option
            key={value}
            isSelected={selectedOption.value === value}
            value={value}
            title={title}
            onSelect={() => onSelect({ value, title })}
          />
        ))}
      </OptionsInner>
    </Wrapper>
  );
};

export default React.memo(Options);

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: 0px 6px 12px rgba(31, 33, 35, 0.16), 0px 1px 2px rgba(31, 33, 35, 0.16);
`;

const OptionsInner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background: ${BLACK_600};
`;
