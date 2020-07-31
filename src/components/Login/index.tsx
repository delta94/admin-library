import React from 'react';
import { Button } from '@material-ui/core';
import { IconDummy } from 'assets/icons';

import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
  onLogin: () => void;
}

const Login = (props: Props) => {
  const { onLogin } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.authBoard}>
      <div className={classes.container}>
        <IconDummy />
        <span className={classes.title}>{t('login_page.title')}</span>
        <span className={classes.text}>{t('login_page.description')}</span>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onLogin}
        >
          {t('login_page.buttonText')}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Login);
