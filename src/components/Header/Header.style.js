import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  gridStyle: {
    padding: '0.5em'
  },
  gridOne: {
    flexGrow: 1,
    padding: '0.5em',
    alignItems: 'center',
    justifyItems: 'flex-end'
  }
}));

export { useStyles };

