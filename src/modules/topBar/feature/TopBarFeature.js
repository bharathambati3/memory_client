import React from 'react';
import { connect } from 'react-redux';
import {setData} from "../../../lib/redux/actions/manageData";
import {extractor} from "../../../lib/utils/util";
import {KEY_SHOW_SIDEBAR} from "../../../lib/constants/keys";

class TopBarFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            onMenuClick: this.onMenuClick
        }
    }

    onMenuClick = () => {
        const obj  = {
            key: KEY_SHOW_SIDEBAR,
            value: !this.props.showSideBar
        };
        this.props.setData(obj);
    }
}

const mapStateToProps = (state) => ({
    showSideBar: extractor(state, KEY_SHOW_SIDEBAR)
});

export default connect(mapStateToProps, {setData})(TopBarFeature);
