import React from 'react';
import { connect } from 'react-redux';
import {listCategoryApi} from "./duck/actions";
import {dateFormatter, extractor} from "../../../lib/utils/util";
import {KEY_LIST_CATEGORIES} from "../../../lib/constants/keys";
import {createTableActions} from "../../../lib/table/index";
import {MENU_DELETE, MENU_FISH_EYE, MENU_VIEW} from "../../../lib/constants/iconConstants";

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
            tblData: this.props.list
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
                        cb: () => console.log(item)
                    }
                ])
            }
        ]
    }
}

const mapStateToProps = (state) => ({
    list: extractor(state, KEY_LIST_CATEGORIES)
});

export default connect(mapStateToProps, {listCategoryApi})(ListCategoryFeature);
