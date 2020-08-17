import React, { ReactNode } from 'react';
import { CssBaseline } from '@material-ui/core';
import styled from 'styled-components';
import { BLACK_900, WHITE, BLACK_800 } from 'styles';

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
}

const Layout = (props: Props) => {
  const { children, sidebar } = props;

  return (
    <Wrapper>
      <CssBaseline />
      <Sidebar>
        {sidebar}
      </Sidebar>
      <ContentWrapper>
        <Main>
          {children}
        </Main>
      </ContentWrapper>
    </Wrapper>
  );
};

export default React.memo(Layout);

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${BLACK_900};
  color: ${WHITE};
`;

const Sidebar = styled.aside`
  width: 260px;
  height: 900px;
  background-color: ${BLACK_800};
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  padding: 8px;
  background-color: ${BLACK_900};
  flex-grow: 1;
`;

const Main = styled.main`
  background-color: ${BLACK_800};
  min-height: 884px;
`;
