import React from 'react';
import { connect } from 'react-redux';
import {addCategoryApi} from "./duck/actions";

class CategoryFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            onAddCategory: this.props.addCategoryApi
        };
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {addCategoryApi})(CategoryFeature);
