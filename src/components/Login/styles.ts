import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  authBoard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '32px',
    color: '#b1b1b1',
  },
  title: {
    display: 'block',
    margin: '12px 0 0',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  text: {
    display: 'block',
    margin: '8px 0 16px',
    fontSize: '12px',
    textAlign: 'center',
  },
  button: {
    marginBottom: '8px',
  },
  locales: {
    position: 'fixed',
    top: '24px',
    right: '24px',
  },
});
