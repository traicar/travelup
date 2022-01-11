import React, { useState } from 'react';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'

const Form = () => {
  const classes = useStyles()
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })

  const handleSubmit = () => {

  }
  return (
    <Paper className={classes.paper}>
      <Form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Create a Post
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
      </Form>
    </Paper>
  );
}

export default Form;