import React from 'react';
import PropTypes from 'prop-types';
import {createForm} from "../../../lib/forms/index";

const Category = props => {
    return (
        <div>
            {createForm('addCategory', props.onAddCategory)}
        </div>
    );
};

Category.propTypes = {

};

export default Category;
