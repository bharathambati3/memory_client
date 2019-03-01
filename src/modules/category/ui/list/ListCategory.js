import React from 'react';
import {createTable} from "../../../../lib/table/index";
import ListCategoryFeature from "../../feature/ListCategoryFeature";

const ListCategory = props => {

    return (
        <ListCategoryFeature>
            {
                (props) =>  createTable(props.tblMetaData, props.tblData)
            }
        </ListCategoryFeature>
    );
};

export default ListCategory;
