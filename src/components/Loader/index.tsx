import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components';

interface Props {
  className?: string;
}

const Loader = (props: Props) => (
  <Wrapper className={props.className}>
    <Spinner />
  </Wrapper>
);

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Loader, areEqual);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
