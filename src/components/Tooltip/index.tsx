import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Micro10, BLACK_800, WHITE } from 'styles';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

const Tooltip = (props: Props) => {
  const { className, title, children } = props;

  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Tooltip, areEqual);

const Title = styled(Micro10)`
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  visibility: hidden;
  max-width: 120px;
  background-color: ${BLACK_800};
  color: ${WHITE};
  padding: 8px 12px;
  border-radius: 2px;
  transform: translate(-50%, 0);
  margin-bottom: 8px;
  white-space: nowrap;
  
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -4px;
    border-width: 4px;
    border-style: solid;
    border-color: ${BLACK_800} transparent transparent transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  :hover {
    ${Title} {
      visibility: visible;
    }
  }
`;
