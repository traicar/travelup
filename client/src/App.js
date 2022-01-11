import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from 'react-redux'

import travelup from './images/travelup.png'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useDispatch(() => {
    dispatch(getPosts)
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">TravelUp</Typography>
        <img className={classes.image} src={travelup} alt="travelup" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7} >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow >
    </Container >

  );
}

export default App
