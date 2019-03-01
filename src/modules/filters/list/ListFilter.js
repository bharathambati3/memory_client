import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {getIcon} from "../../../lib/icons/factory";
import {MENU_CREATE, MENU_REFRESH} from "../../../lib/constants/iconConstants";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
});

const ListFilter = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div>
                Create <IconButton onClick={props.navToCreateNew}>{getIcon(MENU_CREATE)}</IconButton>
            </div>
            <div>
                Refresh <IconButton onClick={props.refresh}>{getIcon(MENU_REFRESH)}</IconButton>
            </div>
        </div>
    );
};

export default withStyles(styles)(ListFilter);
