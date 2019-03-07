import React from 'react';
import { connect } from 'react-redux';
import {KEY_HEADER} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";

class ListMemoryFeature extends React.Component {


    componentDidMount() {
        this.props.setData({
            key: KEY_HEADER,
            value: "List memories"
        })
    }

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            data: [{
                img:'https://material-ui.com/static/images/grid-list/burgers.jpg',
                title: 'host',
                author: 'author1',
            },
                {
                img:'https://material-ui.com/static/images/grid-list/camera.jpg',
                title: 'host1',
                author: 'author2',
            },
                {
                img:'https://material-ui.com/static/images/grid-list/morning.jpg',
                title: 'host3',
                author: 'author3',
            }]
        };
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setData})(ListMemoryFeature);
