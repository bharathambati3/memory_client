import React from "react";
import {connect} from "react-redux";
import {extractor} from "../../../lib/utils/util";
import {KEY_BOTTON_NAV_SELECTED} from "../../../lib/constants/keys";
import {MENU_CATEGORY, MENU_MEMORY, MENU_TOPIC} from "../../../lib/constants/iconConstants";
import {onBottomNavChange} from "./duck/action";
import {
    ROUTE_CATEGORIES_LIST,
    ROUTE_MEMORY_REMEMBER_LIST,
    ROUTE_TOPICS_LIST
} from "../../../lib/constants/RouteConstants";

class BottomBarFeature extends React.Component {

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getItems = () => {
        return [
            {
                id: 0,
                name: "Categories",
                icon: MENU_CATEGORY,
                url: ROUTE_CATEGORIES_LIST
            }, {
                id: 1,
                name: "Topics",
                icon: MENU_TOPIC,
                url: ROUTE_TOPICS_LIST
            }, {
                id: 2,
                name: "Memories",
                icon: MENU_MEMORY,
                url: ROUTE_MEMORY_REMEMBER_LIST
            }
        ]
    }

    getChildrenProps = () => {
        return {
            items: this.getItems(),
            selected: (this.props.selected) ? this.props.selected : 0,
            onClick: (e, val) => this.props.onBottomNavChange(val, this.getItems()[val].url)
        };
    }
}

const mapStateToProps = (state) => ({
    selected: extractor(state, KEY_BOTTON_NAV_SELECTED)
});

export default connect(mapStateToProps, {onBottomNavChange})(BottomBarFeature);
