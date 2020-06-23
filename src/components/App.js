import { ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import LoadData from '../hooks/LoadData';
import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import theme from './theme';

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const defaultData = {
    items: [],
    totalItems: 0
  };
  let [featureList, setUrlFeatureList] = LoadData('', defaultData);
  let [listCourses, setUrlListCourses] = LoadData('', defaultData);
  const search = (stateCode, professionId) => {
    setUrlFeatureList(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=3&sortField=RELEVANCE&profession=${professionId}&courseType=CD_ANYTIME&isFeatured=true`)
    setUrlListCourses(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=10&sortField=RELEVANCE&state=${stateCode}&profession=${professionId}&courseType=CD_ANYTIME`)
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchBar search={search} />
      <Results featureList={featureList} listCourses={listCourses} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
    </ThemeProvider>
  );
};

export default App;
