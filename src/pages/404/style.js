import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  buttonText: {
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10%'
  },
}));

export default useStyles