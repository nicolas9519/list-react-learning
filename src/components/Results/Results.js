import { Button, Card, CardMedia, Chip, Grid, Typography } from '@material-ui/core';
import { ReplyRounded } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './Results.styles';

const Results = (props) => {
  const { featureList, listCourses, pageIndex, setPageIndex } = props;
  const { root, media, gridCard, iconSend } = useStyles();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const featuredList = (data) => {
    const elements = (data.items || []).map((value) => {
      const { featuredBanner, name, provider, deliveryMethod } = value.course;
      const { isFree, price } = value;
      const imageUrl = `https://test.storage.cebroker.com/cebroker/${featuredBanner}`;
      return (
        <Card key={value.id}>
          <Grid container className={root}>
            <Grid item xs={4} className={gridCard}>
              <CardMedia image={imageUrl} title={name} className={media} />
            </Grid>
            <Grid item xs={6} className={gridCard}>
              <Typography variant="h6">{name}</Typography>
              <Chip label="FEATURED" variant="outlined" color="secondary" />
              <Typography variant="subtitle2">{provider.name}</Typography>
              <Typography>{deliveryMethod.description}</Typography>
            </Grid>
            <Grid item xs={2} className={gridCard}>
              <Typography variant="h6">{isFree ? 'Free' : formatter.format(price)}</Typography>
              <Button variant="contained">
                <ReplyRounded className={iconSend} />
              </Button>
            </Grid>
          </Grid>
        </Card>
      );
    });
    return elements;
  };
  const createList = (data) => {
    const elements = (data.items || []).map((value) => {
      const { name, provider, deliveryMethod } = value.course;
      const { isFree, price } = value;
      return (
        <Card key={value.id} className={root}>
          <Grid container className={root}>
            <Grid item xs={10} className={gridCard}>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="subtitle2">{provider.name}</Typography>
              <Typography>{deliveryMethod.description}</Typography>
            </Grid>
            <Grid item xs={2} className={gridCard}>
              <Typography variant="h6">{isFree ? 'Free' : formatter.format(price)}</Typography>
              <Button variant="contained">
                <ReplyRounded className={iconSend} />
              </Button>
            </Grid>
          </Grid>
        </Card>
      );
    });
    return elements;
  }
  return (
    <Grid container className={root} spacing={2}>
      <Grid item xs={4}>FILTERS</Grid>
      <Grid item xs={8}>
        {featureList.loading || listCourses.loading ? <Typography variant="h3">loading...</Typography> : ''}
        {featureList.loading || listCourses.loading ? '' : featuredList(featureList.data)}
        {featureList.loading || listCourses.loading ? '' : createList(listCourses.data)}
      </Grid>
    </Grid>
  );
}

export default Results;
