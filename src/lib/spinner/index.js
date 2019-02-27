import React from 'react';
import { Dialog, CircularProgress, withStyles } from '@material-ui/core';

const initialProps = {
  open: false
};

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Spinner = (props = initialProps) => (
  <Dialog
    open={props.open}
    style={{ background: 'transparent' }}
    PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }}
  >
    <CircularProgress className={props.classes.progress} color='secondary' />
  </Dialog>
);

export default withStyles(styles)(Spinner);
