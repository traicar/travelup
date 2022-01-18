import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30 px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  heading: {
    color: 'teal',
    fontWeight: '400',
    textTransform: 'lowercase',

  },
  image: {
    marginLeft: '5px'
  },
}));