import React from "react";
import {connect} from "react-redux";
import {KEY_HEADER, KEY_LIST_MEMORIES, KEY_LIST_REMEMBER_MEMORIES} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";
import {dateFormatter, extractor} from "../../../lib/utils/util";
import {listMemoryApi, listRememberMemoryApi} from "./duck/action";
import {createTableActions} from "../../../lib/table/index";
import {MENU_FISH_EYE} from "../../../lib/constants/iconConstants";
import {ROUTE_MEMORY_CREATE, ROUTE_MEMORY_VIEW} from "../../../lib/constants/RouteConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";

class ListRememberMemoryFeature extends React.Component {


    componentDidMount() {
        this.props.listRememberMemoryApi();
        this.props.setData({
            key: KEY_HEADER,
            value: "Remember memories"
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
            refresh: this.props.listRememberMemoryApi,
            navToCreateNew: () => this.props.routeAction({
                url: ROUTE_MEMORY_CREATE
            })
        };
    }

    getListMetaInfo = () => {
        return [
            {
                displayName: 'Title',
                key: 'memoRecord.title'
            },
            {
                displayName: 'Next revision on',
                key: 'nextRevisionOn',
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
                            const url = ROUTE_MEMORY_VIEW.replace(idPlaceholder, `/${item.memoRecord.id}/`);
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
    list: extractor(state, KEY_LIST_REMEMBER_MEMORIES)
});

export default connect(mapStateToProps, {setData, listRememberMemoryApi, routeAction})(ListRememberMemoryFeature);
