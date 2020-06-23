import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  gridCard: {
    padding: '1em'
  },
  iconSend: {
    '-moz-transform': 'scale(-1, 1)',
    '-webkit-transform': 'scale(-1, 1)',
    '-o-transform': 'scale(-1, 1)',
    '-ms-transform': 'scale(-1, 1)',
    transform:' scale(-1, 1)'
  }
}));

export { useStyles };
