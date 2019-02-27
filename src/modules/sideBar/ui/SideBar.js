import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {withStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {getIcon} from "../../../lib/icons/factory";


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

const SideBar = props => {

    const { items, classes, onMenuClick, showSideBar, onItemClick } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                {items.map((item, index) => (
                    <ListItem button key={item.name} onClick={() => onItemClick(item)}>
                        <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Drawer open={showSideBar} onClose={onMenuClick}>
            <div
                tabIndex={0}
                role="button"
                onClick={onMenuClick}
                onKeyDown={onMenuClick}
            >
                {sideList}
            </div>
        </Drawer>
    );
};

export default withStyles(styles)(SideBar);
