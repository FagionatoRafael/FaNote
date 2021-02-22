import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

function Block(props) {

  return (
    <Paper elevation={3} style={{padding: 20, maxWidth: 300, margin: 10}}>
      <Typography variant="h5" noWrap>
        {props.title}
      </Typography>
      <Typography paragraph>
        {props.paragraph}
      </Typography>
      <Typography paragraph>
        {props.date}
      </Typography>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Tooltip title="Editar" onClick={props.update}>
          <Button>
            <CreateIcon/>
          </Button>
        </Tooltip>
        <Tooltip title="Deletar" onClick={props.delete}>
          <Button style={{color: 'tomato'}}>
            <DeleteIcon/>
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Paper>
  );
}

export default Block;
