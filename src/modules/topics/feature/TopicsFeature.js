import React from 'react';
import { connect } from 'react-redux';

class TopicsFeature extends React.Component {

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

export default connect(mapStateToProps, {})(TopicsFeature);
