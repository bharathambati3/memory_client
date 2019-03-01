import React from 'react';
import { connect } from 'react-redux';
import {createTopic} from "./duck/actions";

class CreateTopicsFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            onSubmit: this.props.createTopic
        };
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {createTopic})(CreateTopicsFeature);
