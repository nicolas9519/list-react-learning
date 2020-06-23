import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: '0.6em'
  },
  searchInput: {
    background: '#fff'
  }
}));

export { useStyles };
