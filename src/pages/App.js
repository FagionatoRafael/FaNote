import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Moment from "moment";
import Alert from '@material-ui/lab/Alert';

import './App.css'
import useStyles from './style'
import Block from "../components/block";
import AddNote from '../components/addNote'

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState(Moment().format('DD/MM/YYYY'));
  const [idB, setIdB] = useState(undefined);
  const [alert, setAlert] = useState({display: 'none', type: '', message: ''})
  const [err, setErr] = useState({titleErr: '', textErr: '', boolErrTitle: false, boolErrText: false})
  
  useEffect(() => {
    if(localStorage.length === 0) {
      console.log('aa')
      setContent([])
    } else {
      setContent(JSON.parse(localStorage.getItem('content')))
    }
  }, [])

  const handleClickOpen = () => {
    setTitle('')
    setText('')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle = (text) => {
    const value = text.target.value;
    setTitle(value)
  };

  const handleText = (text) => {
    const value = text.target.value;
    setText(value)
  };

  const handleAlert = (value) => {
    setAlert({display: value.display, type: value.type, message: value.message})
    setTimeout(() => {
      setAlert({display: 'none', type: '', message: ''})
    }, 3000)
  }

  const handleContent = () => {
    
    if(idB) {
      content[idB].title = title
      content[idB].text = text  
      handleAlert({display: 'block', type: 'info', message: `Anotação com titulo: ${title} foi alterada`})
      saveData(content)
    } else if(idB === 0) {
      content[idB].title = title
      content[idB].text = text  
      setIdB(undefined)
      handleAlert({display: 'block', type: 'info', message: `Anotação com titulo: ${title} foi alterada`})
      saveData(content)
    } else {
      if(text == '' && title == '') {
        setErr({titleErr: 'O campo titulo nao pode ser vazio!', textErr: 'O campo texto não pode ser vazio!', boolErrTitle: true, boolErrText: true})
        return;
      } else if(title == '') {
        setErr({titleErr: 'O campo titulo nao pode ser vazio!', textErr: '', boolErrTitle: true, boolErrText: false})
        return;
      } else if(text == '') {
        setErr({titleErr: '', textErr: 'O campo texto não pode ser vazio!', boolErrTitle: false, boolErrText: true})
        return;
      } else {
        const values = [...content, {
          text: text,
          title: title,
          date: date
        }]

        setIdB(undefined)
        setContent(values)
        saveData(values)
        handleAlert({display: 'block', type: 'success', message: `Anotação com titulo: ${title} registrada`})
      }
    }
    setOpen(false);
  }

  const saveData = (values) => {
    localStorage.setItem('content', JSON.stringify(values))
  }

  const handleDelete = (id) => {
    const idx = content.indexOf(id);
    if(idx === -1) {
      content.splice(id, 1);
      handleAlert({display: 'block', type: 'error', message: `Anotação com titulo: ${title} foi deletada`})
      saveData(content)
    }
  }

  const handleUpdate = (id, value) => {
    setOpen(true);
    setText(value.text);
    setTitle(value.title);
    setIdB(id)
  }
  
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
        <Alert style={{display: alert.display}} severity={alert.type}>{alert.message}</Alert>
          <div style={{display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'flex-end', padding: 10}}>
            
            {content.length === 0 ? 
              <Typography variant="h6" noWrap>Adicione suas anotações.</Typography> :
              content.map((value, index) => {
                return <Block title={value.title} paragraph={value.text} date={value.date} delete={() => handleDelete(index)} update={() => handleUpdate(index, value)}/>
              })
            }
          </div>
          <Tooltip title="Adicionar">
            <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
          </Tooltip>
      </main>

      <AddNote 
        close={handleClose} 
        open={open} 
        setTitle={handleTitle} 
        setText={handleText} 
        envia={handleContent} 
        valueTitle={title} 
        valueText={text}
        boolErrTitle={err.boolErrTitle}
        boolErrText={err.boolErrText}
        titleErr={err.titleErr}
        textErr={err.textErr}
      />

    </div>
  );
}

export default App;
