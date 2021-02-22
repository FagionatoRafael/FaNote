import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import useStyles from './style'

function AddNote(props) {
  const classes = useStyles();
  return (

      <Dialog disableBackdropClick disableEscapeKeyDown open={props.open} onClose={props.close}>
        <DialogTitle>Add Nota</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl} error={props.boolErrTitle}>
              <InputLabel htmlFor="demo-dialog-native">Titulo</InputLabel>
              <Input onChange={props.setTitle} autoFocus={true} value={props.valueTitle} />
              <FormHelperText id="component-error-text">{props.titleErr}</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} error={props.boolErrText}>
              <InputLabel id="demo-dialog-select-label">Texto</InputLabel>
              <Input onChange={props.setText} value={props.valueText}/>
              <FormHelperText id="component-error-text">{props.textErr}</FormHelperText>
            </FormControl>
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Cor</InputLabel>
              <Input type="color"/>
            </FormControl> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.envia} color="primary">
            Ok
          </Button>
        </DialogActions>
    </Dialog>

  );
}

export default AddNote;
