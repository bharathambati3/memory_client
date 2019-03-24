import React from "react";
import CreateTopicsFeature from "../../feature/create/CreateTopicsFeature";
import {createForm} from "../../../../lib/forms/index";

const Topics = props => {
    return (
        <CreateTopicsFeature>
            {
                (props) => <div>{createForm({...props.formData})}</div>
            }
        </CreateTopicsFeature>
    );
};

export default Topics;
