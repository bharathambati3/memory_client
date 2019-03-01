import React from "react";
import {createTable} from "../../../../lib/table/index";
import ListCategoryFeature from "../../feature/ListCategoryFeature";
import ListFilter from "../../../filters/list/ListFilter";

const ListCategory = () => {
    return (
        <ListCategoryFeature>
            {
                (props) =>  {
                    return <div >
                        <ListFilter {...props} />
                        {(props.show) ? createTable(props.tblMetaData, props.tblData) : null}
                    </div>
                }
            }
        </ListCategoryFeature>
    );
};

export default ListCategory;
