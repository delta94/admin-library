import React, { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import styled from 'styled-components';
import { BLACK_900, WHITE, BLACK_800 } from 'styles';

import theme from './theme';

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
}

const Layout = (props: Props) => {
  const { children, sidebar } = props;

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default React.memo(Layout);

const Wrapper = styled.div`
  display: flex;
  height: 100%;
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
  flex-grow: 1;
  padding: 8px;
`;

const Main = styled.main`
  background-color: ${BLACK_800};
`;
