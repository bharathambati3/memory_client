import React from "react";
import {withStyles} from "@material-ui/core/styles";
import ListMemoryFeature from "../../feature/ListMemoryFeature";
import ListFilter from "../../../filters/list/ListFilter";
import {createTable} from "../../../../lib/table/index";

const style = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)',
    },
});

const ListMemory = () => {
    return (
        <ListMemoryFeature>
            {
                (props) =>  {
                    return <div >
                        <ListFilter {...props} />
                        {(props.show) ? createTable(props.tblMetaData, props.tblData) : null}
                    </div>
                }
            }
        </ListMemoryFeature>
    );
};

export default withStyles(style)(ListMemory);
