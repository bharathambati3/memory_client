import React from 'react';
import CreateTopicsFeature from '../../feature/create/CreateTopicsFeature';
import {createForm} from "../../../../lib/forms/index";

const Topics = props => {
    return (
        <CreateTopicsFeature>
            {
                (props) => <div>{createForm("addTopic", props.onSubmit)}</div>
            }
        </CreateTopicsFeature>
    );
};

export default Topics;
