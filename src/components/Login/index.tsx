import React from 'react';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  onLogin: () => void;
}

const Login = (props: Props) => {
  const { title, description, buttonText, onLogin } = props;
  const classes = useStyles();

  return (
    <div className={classes.authBoard}>
      <div className={classes.container}>
        <span className={classes.title}>{title}</span>
        <span className={classes.text}>{description}</span>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onLogin}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Login);
