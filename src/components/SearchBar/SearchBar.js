import { Grid, TextField } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons'
import React from 'react';
import { SelectBar } from './components/SelectBar';
import { useStyles } from './SearchBar.styles';
import CenteredTabs from '../../commons/CenteredTabs/CenteredTabs';

const SearchBar = (props) => {
  const { search } = props;
  const { root, searchInput } = useStyles();
  const tabs = ['COURSES', 'PROVIDERS'];
  return (
    <Grid container direction='column' alignItems='center' justify='center' className={root}>
      <SelectBar search={search} />
      <Grid item xs={12}>
        <Grid container spacing={1} alignItems="flex-end" className={searchInput}>
          <Grid item>
            <SearchRounded />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search courses and providers" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CenteredTabs tabs={tabs} />
      </Grid>
    </Grid>
  );
}

export default SearchBar;
