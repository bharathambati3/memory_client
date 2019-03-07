import React from 'react';
import CreateMemoryFeature from "../feature/CreateMemoryFeature";
import {createForm} from "../../../lib/forms/index";

const CreateMemory = props => {
    return (
        <CreateMemoryFeature>
            {
                (props) => <div>{createForm({...props.formData})}</div>
            }
        </CreateMemoryFeature>
    );
};

export default CreateMemory;
