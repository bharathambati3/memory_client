import React from 'react';
import PropTypes from 'prop-types';
import {createForm} from "../../../lib/forms/index";

const Category = props => {
    return (
        <div>
            {createForm('addCategory')}
        </div>
    );
};

Category.propTypes = {

};

export default Category;
