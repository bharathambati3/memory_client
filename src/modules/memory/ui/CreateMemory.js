import React from 'react';
import CreateMemoryFeature from "../feature/CreateMemoryFeature";
import {createReduxForm} from "../../../lib/forms/index";

const CreateMemory = props => {
    return (
        <CreateMemoryFeature>
            {
                (props) => <div>{
                    (props.renderMemoryForm) ?
                    createReduxForm({...props.formData}) : null
                }</div>
            }
        </CreateMemoryFeature>
    );
};

export default CreateMemory;
