import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListMemoryFeature from "../../feature/ListMemoryFeature";
import MemoryCard from "./MemoryCard";
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

const ListMemory = props => {
    const {classes} = props;
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