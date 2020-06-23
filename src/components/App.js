import { ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import LoadData from '../hooks/LoadData';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import theme from './theme';

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [searched, setSearched] = useState(false);
  const [stateCode, setStateCode] = useState('');
  const [professionId, setProfessionId] = useState('');
  const defaultData = {
    items: [],
    totalItems: 0
  };
  let [featureList, setUrlFeatureList] = LoadData('', defaultData);
  let [listCourses, setUrlListCourses] = LoadData('', defaultData);
  const search = (state, profession) => {
    setStateCode(state);
    setProfessionId(profession);
    setPageIndex(1);
    setUrlFeatureList(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=3&sortField=RELEVANCE&profession=${profession}&courseType=CD_ANYTIME&isFeatured=true`);
    setUrlListCourses(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=${state}&profession=${profession}&courseType=CD_ANYTIME`);
    setSearched(true);
  };
  const changePage = (pag) => {
    setPageIndex(pag);
    setUrlFeatureList(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pag}&pageSize=3&sortField=RELEVANCE&profession=${professionId}&courseType=CD_ANYTIME&isFeatured=true`)
    setUrlListCourses(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pag}&pageSize=10&sortField=RELEVANCE&state=${stateCode}&profession=${professionId}&courseType=CD_ANYTIME`)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchBar search={search} />
      {searched ? <Results featureList={featureList} listCourses={listCourses} pageIndex={pageIndex} changePage={changePage} /> : ''}
    </ThemeProvider>
  );
};

export default App;
