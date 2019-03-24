import * as React from "react";
import {FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import LogoText from "./logoText/LogoText";
import InputEditor from "./inputEditor/InputEditor";

const componentFactory = (props) => {
  const { type, name, rest, className, id, disabled} = props;
  const { fullWidth, icon, ...restRootProps } = props.rootProps;
  const { isError, errorMsg } = props.function.data;
  const value = props.function.data.value;

  let errorMessage = '';
  if (isError) {
    errorMessage = errorMsg;
  }

  switch (type) {
    case 'Input':
      return (
        <div>
          <Input
            error={isError}
            name={name}
            className={className}
            {...rest}
            {...props.function}
            value={value}
            inputProps={{
              'data-testid': `${id}`,
              ...restRootProps
            }}
          />
          {errorMsg}
        </div>
      );
    case 'Text':
      return (
        <TextField
          disabled={disabled}
          error={isError}
          helperText={errorMessage}
          FormHelperTextProps={{
            error: isError,
            variant: 'standard'
          }}
          name={name}
          className={className}
          {...rest}
          {...props.function}
          value={value}
          inputProps={{
            'data-testid': `${id}`,
            ...restRootProps
          }}
        />
      );
    case 'TextLogo':
      return (
        <LogoText
          error={isError}
          errorText={errorMessage}
          name={name}
          className={className}
          rest={rest}
          function={props.function}
          value={value}
          rootProps={props.rootProps}
          id={id}
        />
      );
    case 'Date':
      const { label, ...restRootPropsDate } = restRootProps;
      return (
        <TextField
          error={isError}
          helperText={errorMessage}
          FormHelperTextProps={{
            error: isError,
            variant: 'standard'
          }}
          label={label}
          type='date'
          name={name}
          className={className}
          {...rest}
          {...props.function}
          value={value}
          inputProps={{
            'data-testid': `${id}`,
            ...restRootPropsDate
          }}
        />
      );
    case 'Select':
      return (
        <FormControl fullWidth={fullWidth}>
          <InputLabel> {restRootProps.label} </InputLabel>
          <Select
            error={isError}
            helperText={errorMessage}
            name={name}
            autoWidth={true}
            value={value}
            {...props.function}
          >
            {props.dropDownData ? (
              props.dropDownData.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
            )}
          </Select>
        </FormControl>
      );
    case 'Editor':
        return (
            <InputEditor
                value={value}
                name={name}
                {...props.function}
            />
        )

    default:
      return <Input className={className} {...rest} {...props.function} />;
  }
};

export default componentFactory;
