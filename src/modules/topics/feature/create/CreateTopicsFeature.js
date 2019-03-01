import React from 'react';
import { connect } from 'react-redux';
import {createTopicApi} from "../duck/actions";
import {extractor} from "../../../../lib/utils/util";
import {KEY_HEADER, KEY_LIST_CATEGORIES} from "../../../../lib/constants/keys";
import {listCategoryApi} from "../../../category/feature/duck/actions";
import {setData} from "../../../../lib/redux/actions/manageData";

class CreateTopicsFeature extends React.Component {

    componentDidMount() {
        if (! this.props.categories) {
            this.props.listCategoryApi();
        }
        this.props.setData({
            key: KEY_HEADER,
            value: "Create Topic"
        })
    }


    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            formData: {
                dataId:"addTopic",
                onSubmit: this.props.createTopicApi,
                dropDownData: {
                    categories: this.props.categories
                },
                values: {
                    category: (this.props.categories) ? this.props.categories[0].id: 0
                }
            },
        };
    }
}

const mapStateToProps = (state) => ({
    categories: extractor(state, KEY_LIST_CATEGORIES)
});

export default connect(mapStateToProps, {setData, createTopicApi, listCategoryApi})(CreateTopicsFeature);
