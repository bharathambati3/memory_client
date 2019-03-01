import React from 'react';
import { connect } from 'react-redux';
import {deleteCategoryApi, listCategoryApi} from "./duck/actions";
import {dateFormatter, extractor} from "../../../lib/utils/util";
import {KEY_LIST_CATEGORIES} from "../../../lib/constants/keys";
import {createTableActions} from "../../../lib/table/index";
import {MENU_DELETE, MENU_FISH_EYE, MENU_VIEW} from "../../../lib/constants/iconConstants";
import {routeAction} from "../../../lib/redux/actions/historyAction";
import {ROUTE_CATEGORIES_CREATE} from "../../../lib/constants/RouteConstants";

class ListCategoryFeature extends React.Component {


    componentDidMount() {
        console.log('list category component mounted')
        this.props.listCategoryApi();
    }


    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            tblMetaData: this.getListMetaInfo(),
            tblData: this.props.list,
            refresh: this.props.listCategoryApi,
            navToCreateNew: () => this.props.routeAction({
                url: ROUTE_CATEGORIES_CREATE
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
                        cb: () => this.props.deleteCategoryApi(item.id)
                    }
                ])
            }
        ]
    }
}

const mapStateToProps = (state) => ({
    list: extractor(state, KEY_LIST_CATEGORIES)
});

export default connect(mapStateToProps, {routeAction, listCategoryApi, deleteCategoryApi})(ListCategoryFeature);
