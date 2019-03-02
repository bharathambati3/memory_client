import React from 'react';
import { connect } from 'react-redux';

class ListMemoryFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {

        };
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(ListMemoryFeature);
