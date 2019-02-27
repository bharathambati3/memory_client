import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import Category from "@material-ui/icons/Category";
import Topic from "@material-ui/icons/Book";
import Memory from "@material-ui/icons/Memory";
import * as ic from "../constants/iconConstants";

export const getIcon = (name) => {
    switch (name) {
        case ic.MENU_ICON:
            return (<MenuIcon />);
        case ic.MENU_CATEGORY:
            return (<Category/>);
        case ic.MENU_TOPIC:
            return (<Topic/>);
        case ic.MENU_MEMORY:
            return (<Memory/>);
        default:
            return (<MenuIcon />)
    }
};
