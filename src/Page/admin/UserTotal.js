import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  userContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Jumlah User</Title>
      <Typography component="p" variant="h4">
        30
      </Typography>
      <Typography color="textSecondary" className={classes.userContext}>
        Bidan
      </Typography>
      <Typography component="p" variant="h4">
        20
      </Typography>
      <Typography color="textSecondary" className={classes.userContext}>
        Pasien
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Selengkapnya
        </Link>
      </div>
    </React.Fragment>
  );
}