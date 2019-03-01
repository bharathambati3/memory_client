import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import Category from "@material-ui/icons/Category";
import Topic from "@material-ui/icons/Book";
import Memory from "@material-ui/icons/Memory";
import Create from "@material-ui/icons/Create";
import List from "@material-ui/icons/List";
import Update from "@material-ui/icons/Update";
import View from "@material-ui/icons/ViewModule";
import Delete from "@material-ui/icons/Delete";
import Refresh from "@material-ui/icons/Refresh";
import FishEye from "@material-ui/icons/RemoveRedEyeSharp";
import * as ic from "../constants/iconConstants";

const map = {
    [ic.MENU_ICON]     :     <MenuIcon/>,
    [ic.MENU_CATEGORY]     :     <Category/>,
    [ic.MENU_TOPIC]     :     <Topic/>,
    [ic.MENU_MEMORY]     :     <Memory/>,
    [ic.MENU_CREATE]     :     <Create/>,
    [ic.MENU_LIST]     :     <List/>,
    [ic.MENU_UPDATE]     :     <Update/>,
    [ic.MENU_DELETE]     :     <Delete/>,
    [ic.MENU_VIEW]     :     <View/>,
    [ic.MENU_REFRESH]     :     <Refresh/>,
    [ic.MENU_FISH_EYE]     :     <FishEye/>,
}
export const getIcon = (name, iconProps = null) => {
    if (! name) {
        return;
    }
    return map[name];
};
