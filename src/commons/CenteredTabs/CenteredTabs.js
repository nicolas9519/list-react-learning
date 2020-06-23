import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './CenteredTabs.styles';

export default function CenteredTabs(props) {
  const { root, section, gridStyle } = useStyles();
  const [value, setValue] = React.useState(0);
  const { tabs } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateTabs = () => {
    const newTabs = tabs.map((value, i) => (
      <Grid item key={i} className={gridStyle}>
        <div className={section} onClick={handleChange} index={i}><Typography variant='subtitle2'>{value}</Typography></div>
      </Grid>
    ));
    return newTabs;
  };

  return (
    <Grid container className={root}>
      {generateTabs()}
    </Grid>
  );
}
