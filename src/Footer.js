import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: 'black',
    paddingRight: '10%',
    paddingLeft: '10%'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function Footer() {
  const { footer, toolbar } = useStyles();

  return (
    <AppBar position="static" className={footer}>
      <Container maxWidth="md">
        <Toolbar className={toolbar}>
          <Typography variant="body1" color="inherit">
            © 2022 CircleCI Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
