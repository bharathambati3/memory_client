import React from "react";
import {connect} from "react-redux";
import {deleteTopicsApi, listTopicsApi} from "../duck/actions";
import {KEY_LIST_TOPICS} from "../../../../lib/constants/keys";
import {dateFormatter, extractor} from "../../../../lib/utils/util";
import {createTableActions} from "../../../../lib/table/index";
import {MENU_DELETE, MENU_FISH_EYE} from "../../../../lib/constants/iconConstants";
import {ROUTE_TOPICS_CREATE} from "../../../../lib/constants/RouteConstants";
import {routeAction} from "../../../../lib/redux/actions/historyAction";

class ListTopicsFeature extends React.Component {


    componentDidMount() {
        this.props.listTopicsApi();
    }


    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            show: (this.props.topics),
            tblMetaData: this.getListMetaInfo(),
            tblData: this.props.topics,
            refresh: this.props.listTopicsApi,
            navToCreateNew: () => this.props.routeAction({
                url: ROUTE_TOPICS_CREATE
            })
        };
    }

    getListMetaInfo = () => {
        return [
            {
                displayName: 'name'
            },
            {
                displayName: 'description'
            },
            {
                displayName: 'created on',
                key: 'createdOn',
                exec: dateFormatter
            },
            {
                displayName: 'last updated on',
                key: 'lastUpdated',
                exec: dateFormatter
            },
            {
                displayName: 'actions',
                headerProps: {
                    style: {
                        paddingLeft: "50px"
                    }
                },
                exec: (val, item) => createTableActions([
                    {
                        icon: MENU_FISH_EYE,
                        cb: () => console.log(item)
                    },
                    {
                        icon: MENU_DELETE,
                        cb: () => this.props.deleteTopicsApi(item.id)
                    }
                ])
            }
        ]
    }
}

const mapStateToProps = (state) => ({
    topics: extractor(state, KEY_LIST_TOPICS)
});

export default connect(mapStateToProps, {routeAction, listTopicsApi, deleteTopicsApi})(ListTopicsFeature);
