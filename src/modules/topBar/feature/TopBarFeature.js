import React from "react";
import {connect} from "react-redux";
import {setData} from "../../../lib/redux/actions/manageData";
import {extractor} from "../../../lib/utils/util";
import {KEY_HEADER, KEY_SHOW_SIDEBAR} from "../../../lib/constants/keys";
import {SIDEBAR_TOGGLE_ACTION} from "../../../lib/constants/actionIds";

class TopBarFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            header: this.props.header,
            onMenuClick: this.onMenuClick,
            showSideBar: this.props.showSideBar
        }
    }

    onMenuClick = () => {
        const obj  = {
            key: KEY_SHOW_SIDEBAR,
            value: !this.props.showSideBar,
            feature: SIDEBAR_TOGGLE_ACTION
        };
        this.props.setData(obj);
    }
}

const mapStateToProps = (state) => ({
    header: extractor(state, KEY_HEADER),
    showSideBar: extractor(state, KEY_SHOW_SIDEBAR)
});

export default connect(mapStateToProps, {setData})(TopBarFeature);
