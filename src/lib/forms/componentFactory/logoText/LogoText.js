import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import {getIcon} from "../../../icons/factory";

const logoText = (props) => {
  const { name, rest, className, id, value, error, errorText } = props;
  const { fullWidth, icon, ...rootPropsRest } = props.rootProps;

  return (
    <Grid
      container={true}
      spacing={8}
      alignItems={error ? 'center' : 'flex-end'}
    >
      <Grid item={true}>
          {getIcon(icon)}
      </Grid>
      <Grid item={true} sm={10} xs={10} md={10} lg={10}>
        <TextField
          error={error}
          fullWidth={fullWidth}
          name={name}
          helperText={errorText}
          className={className}
          {...rest}
          {...props.function}
          value={value}
          FormHelperTextProps={{
            error,
            variant: 'standard'
          }}
          inputProps={{
            'data-testid': `${id}`,
            ...rootPropsRest
          }}
        />
      </Grid>
    </Grid>
  );
};

export default logoText;
