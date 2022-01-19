import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30 px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  heading: {
    color: 'white',
    fontWeight: '400',
    textTransform: 'lowercase',
  },
  image: {
    marginLeft: '5px'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));