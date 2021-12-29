import {
    AppBar,
    Toolbar,
    IconButton,
    Paper,
    Grid,
    CssBaseline,
    Box,
    Typography,
  } from '@material-ui/core';
  
  import { Fragment } from 'react';
  import Todoasli from './Layout';
  
  const Todolist2 = () => {
    return (
      
      <Fragment>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            {/*<IconButton edge="start" aria-label="menu">
              <MenuIcon />
    </IconButton>*/}
            <Typography variant="h6">Todo List</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box></Box>
        <Box m={2}>
          <Grid container>
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3}>
                <Todoasli/>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
     
    );
  };
  
  export default Todolist2;