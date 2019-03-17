import React from 'react';
import CreateMemoryFeature from "../feature/CreateMemoryFeature";
import {createReduxForm} from "../../../lib/forms/index";

const CreateMemory = props => {
    return (
        <CreateMemoryFeature>
            {
                (props) => <div>{createReduxForm({...props.formData})}</div>
            }
        </CreateMemoryFeature>
    );
};

export default CreateMemory;
