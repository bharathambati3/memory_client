import React from 'react';
import {createForm} from "../../../../lib/forms/index";

const CreateCategory = props => {
    return (
        <div>
            {createForm({...props.formData})}
        </div>
    );
};

export default CreateCategory;
