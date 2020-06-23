import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Header.style';
import CenteredTabs from '../../commons/CenteredTabs/CenteredTabs';

const Header = () => {
  const { root, gridStyle, gridOne } = useStyles();
  const tabs = [
    'Features',
    'Plans',
    'Organizations',
    'Browse courses',
    'Support',
  ];

  return (
    <Grid container className={root}>
      <Grid item xs={3} className={gridOne}><Typography variant='h4'>cebroker</Typography></Grid>
      <Grid item xs={6} className={gridStyle}>
        <CenteredTabs tabs={tabs} />
      </Grid>
      <Grid item xs={3} className={gridStyle}>
        <Button variant="contained" color="default">Sign In</Button>
        <Button variant="contained" color="secondary">7 day trial</Button>
      </Grid>
    </Grid>
  );

}

export default Header;
