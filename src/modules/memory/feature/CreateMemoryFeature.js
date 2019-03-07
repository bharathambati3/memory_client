import React from 'react';
import { connect } from 'react-redux';
import {KEY_HEADER, KEY_LIST_TOPICS} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";
import {createMemoryApi} from "./duck/action";
import {extractor} from "../../../lib/utils/util";
import {listTopicsApi} from "../../topics/feature/duck/actions";

class CreateMemoryFeature extends React.Component {

    componentDidMount() {
        if (! this.props.topics) {
            this.props.listTopicsApi();
        }
        this.props.setData({
            key: KEY_HEADER,
            value: "Create Memory"
        })
    }


    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            formData: {
                dataId:"addMemory",
                onSubmit: this.props.createMemoryApi,
                dropDownData: {
                    topics: this.props.topics
                },
                values: {
                    topic: (this.props.topics) ? this.props.topics[0].id : 0
                }
            },
        };
    }
}

const mapStateToProps = (state) => ({
    topics: extractor(state, KEY_LIST_TOPICS)
});

export default connect(mapStateToProps, {listTopicsApi, createMemoryApi, setData})(CreateMemoryFeature);
