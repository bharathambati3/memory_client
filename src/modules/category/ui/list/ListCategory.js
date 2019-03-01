import React from "react";
import {createTable} from "../../../../lib/table/index";
import ListCategoryFeature from "../../feature/ListCategoryFeature";
import IconButton from "@material-ui/core/IconButton";
import {getIcon} from "../../../../lib/icons/factory";
import {MENU_CREATE, MENU_REFRESH} from "../../../../lib/constants/iconConstants";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    },
});

const ListCategory = (props) => {
    const {classes} = props;
    return (
        <ListCategoryFeature>
            {
                (props) =>  {
                    return <div >
                        <div className={classes.root}>
                            <IconButton onClick={props.navToCreateNew}>Create {getIcon(MENU_CREATE)}</IconButton>
                            <IconButton onClick={props.refresh}>Refresh {getIcon(MENU_REFRESH)}</IconButton>
                        </div>
                        {createTable(props.tblMetaData, props.tblData)}
                    </div>
                }
            }
        </ListCategoryFeature>
    );
};

export default withStyles(styles)(ListCategory);
