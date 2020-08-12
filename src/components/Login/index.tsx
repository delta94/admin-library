import React from 'react';
import { IconDummy } from 'assets/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BLACK_900, PurpleButton } from 'styles';

interface Props {
  onLogin: () => void;
}

const Login = (props: Props) => {
  const { onLogin } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <IconDummy />
        <Title>{t('login_page.title')}</Title>
        <Text>{t('login_page.description')}</Text>
        <PurpleButton onClick={onLogin}>
          {t('login_page.buttonText')}
        </PurpleButton>
      </Content>
    </Wrapper>
  );
};

export default React.memo(Login);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${BLACK_900};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 32px 32px 40px;
  color: #b1b1b1;
`;

const Title = styled.span`
  display: block;
  margin: 12px 0 0;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.span`
display: block;
margin: 8px 0 16px;
font-size: 12px;
text-align: center;
`;
