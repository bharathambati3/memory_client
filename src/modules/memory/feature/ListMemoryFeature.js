import React from "react";
import {connect} from "react-redux";
import {KEY_HEADER, KEY_LIST_MEMORIES} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";
import {dateFormatter, extractor} from "../../../lib/utils/util";
import {listMemoryApi} from "./duck/action";
import {createTableActions} from "../../../lib/table/index";
import {MENU_FISH_EYE} from "../../../lib/constants/iconConstants";
import {ROUTE_MEMORY_CREATE, ROUTE_MEMORY_VIEW} from "../../../lib/constants/RouteConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";

class ListMemoryFeature extends React.Component {


    componentDidMount() {
        this.props.listMemoryApi();
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
            show: (this.props.list),
            tblMetaData: this.getListMetaInfo(),
            tblData: this.props.list,
            refresh: this.props.listMemoryApi,
            navToCreateNew: () => this.props.routeAction({
                url: ROUTE_MEMORY_CREATE
            })
        };
    }

    getListMetaInfo = () => {
        return [
            {
                displayName: 'category name',
                key: 'topic.category.name'
            },
            {
                displayName: 'topic name',
                key: 'topic.name'
            },
            {
                displayName: 'title'
            },
            {
                displayName: 'created on',
                key: 'createdOn',
                exec: dateFormatter
            },
            {
                displayName: 'learnt on',
                key: 'learntOn',
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
                        cb: () => {
                            let idPlaceholder = /\/:id\//g;
                            const url = ROUTE_MEMORY_VIEW.replace(idPlaceholder, `/${item.id}/`);
                            this.props.routeAction({
                                url
                            })
                        }
                    }
                ])
            }
        ]
    }

}

const mapStateToProps = (state) => ({
    list: extractor(state, KEY_LIST_MEMORIES)
});

export default connect(mapStateToProps, {setData, listMemoryApi, routeAction})(ListMemoryFeature);
