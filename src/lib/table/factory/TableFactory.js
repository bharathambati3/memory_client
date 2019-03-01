import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import THead from "./THead";
import TBody from "./TBody";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <THead meta={props.meta}/>
                <TBody {...props}/>
            </Table>
        </Paper>
    );
}

export default withStyles(styles)(SimpleTable);
