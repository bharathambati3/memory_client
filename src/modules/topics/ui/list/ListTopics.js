import React from "react";
import ListTopicsFeature from "../../feature/list/ListTopicsFeature";
import {createTable} from "../../../../lib/table/index";
import ListFilter from "../../../filters/list/ListFilter";

const ListTopics = () => {
    return (
        <ListTopicsFeature>
            {
                (props) =>  {
                    return <div >
                        <ListFilter {...props} />
                        {(props.show) ? createTable(props.tblMetaData, props.tblData) : null}
                    </div>
                }
            }
        </ListTopicsFeature>
    );
};

export default ListTopics;
