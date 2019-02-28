import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {withStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {getIcon} from "../../../lib/icons/factory";


const styles = theme => ({
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
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

const SideBar = props => {

    const { items, classes, onMenuClick, showSideBar, onItemClick } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                {items.map((item, index) => (
                    <div>
                        <ListItem button key={item.name} onClick={() => onItemClick(item)}>
                            <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                        <Collapse in={item.show}>
                            <List component="div" disablePadding>
                                {item.subItems.map((subI, index) => (
                                    <ListItem selected={subI.selected} button key={subI.name}
                                              onClick={() => subI.click(subI)} className={classes.nested}>
                                        <ListItemIcon>{getIcon(subI.icon)}</ListItemIcon>
                                        <ListItemText primary={subI.name} />
                                    </ListItem>

                                ))}
                            </List>
                        </Collapse>

                    </div>
                ))}
            </List>
        </div>
    );

    return (
        <Drawer open={showSideBar} onClose={onMenuClick}>
            <div
                tabIndex={0}
                role="button"
            >
                {sideList}
            </div>
        </Drawer>
    );
};

export default withStyles(styles)(SideBar);
