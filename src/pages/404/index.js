import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Link} from 'react-router-dom';

import './style.css'
import useStyles from './style'

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} color="secondary">
            <Toolbar>
            <Typography variant="h6" noWrap>
                FaNote
            </Typography>
            </Toolbar>
        </AppBar>
      
        <main className={classes.content}>
            <div className={classes.toolbar} />
                <div className={classes.container}>
                    <Typography variant="h1" noWrap>
                        Erro 404
                    </Typography>
                    <Typography variant="h6" noWrap>
                        Página não encontrada
                    </Typography>
                    <Link to="/" className={classes.buttonText}>
                        <Fab variant="extended" >
                            <ListAltIcon className={classes.extendedIcon} />
                            Add nova anotação
                        </Fab>
                    </Link>
                </div>
        </main>

    </div>
  );
}

export default App;
