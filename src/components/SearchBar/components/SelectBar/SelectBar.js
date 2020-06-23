import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Select from '../../../../commons/Select';
import LoadData from '../../../../hooks/LoadData';
import {useStyles} from './SelectBar.styles';

const SelectBar = (props) => {
  const { root, objects} = useStyles();
  const { search } = props;
  const [selectedState, setState] = useState('');
  const [selectedProfession, setProfession] = useState('');
  const defaultData = {
    items: [],
    totalItems: 0
  };
  let [states] = LoadData('https://api.courses.test.cebroker.com/states', defaultData);
  let [professions, setUrlProfessions] = LoadData('', defaultData);

  const loadProfessions = async (stateCode) => {
    setProfession('');
    setUrlProfessions(`https://api.courses.test.cebroker.com/professions?stateCode=${stateCode}`);
  }

  const handleSelectState = (event) => {
    const indexState = event.target.value;
    setState(indexState);
    const state = states.data.items[indexState];
    loadProfessions(state.code);
  }

  const handleSelectProfession = (event) => {
    const indexProfession = event.target.value;
    setProfession(indexProfession);
    const profession = professions.data.items[indexProfession];
    const state = states.data.items[selectedState];
    search(state.code, profession.id);
  }
  return (
    <Grid container direction='row' alignItems='center' justify='center' className={root}>
      <Typography variant="h6" className={objects}>Find CE for a</Typography>
      <Select
        name="states"
        value={selectedState}
        onChange={handleSelectState}
        info={states} 
        className={objects}/>
      <Select
        name="professions"
        value={selectedProfession}
        onChange={handleSelectProfession}
        info={professions} 
        className={objects}/>
    </Grid>
  );
};

export default SelectBar;
