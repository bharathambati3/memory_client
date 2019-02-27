import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SideBarUI from "../../sideBar/index";
import {getIcon} from "../../../lib/icons/factory";
import {MENU_ICON} from "../../../lib/constants/iconConstants";

const styles = {
    list: {
        width: 250,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function TopBar(props) {
    const { classes, onMenuClick } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <SideBarUI {...props} />

                    <IconButton className={classes.menuButton}
                                color="inherit"
                                onClick={onMenuClick}
                                aria-label="Menu">
                        {getIcon(MENU_ICON)}
                    </IconButton>

                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Memories
                    </Typography>

                    <Button color="inherit">Profile</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    onMenuClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(TopBar);
