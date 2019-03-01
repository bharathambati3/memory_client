import React from 'react';
import {createForm} from "../../../../lib/forms/index";

const CreateCategory = props => {
    return (
        <div>
            {createForm('addCategory', props.onAddCategory)}
        </div>
    );
};

export default CreateCategory;
