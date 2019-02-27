import * as React from "react";
import {Grid, withStyles} from "@material-ui/core";
import ComponentFactory from "../componentFactory/ComponentFactory";

const style = {
    form: {
        padding: 20
    },
    grid: {
        paddingTop: 30,
        textAlign: 'center'
    },

    inputGrid: {
        marginBottom: 10
    }
}

const form = (props) => {
  const { data, classes } = props;
  const container = data.map((element, index) => {
    return (
      <Grid
        className={classes.inputGrid}
        lg={12}
        item={true}
        key={element['data-test-id']}
      >
        <ComponentFactory
          disabled={element.disabled}
          type={element.type}
          name={element.name}
          rest={element.props}
          id={element['data-test-id']}
          function={props.function[index]}
          rootProps={element.props}
          dropDownData={
            element.dropDownId && props.dropDownData
              ? props.dropDownData[element.dropDownId]
              : undefined
          }
        />
      </Grid>
    );
  });
  return (
    <form
      className={classes.form}
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid container={true} direction='column' alignItems='stretch'>
        {container}
        <Grid xs={12} sm={12} className={classes.grid} item={true}>
          {props.children}
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(style)(form);
