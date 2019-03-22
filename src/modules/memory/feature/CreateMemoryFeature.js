import React from 'react';
import { connect } from 'react-redux';
import {KEY_HEADER, KEY_LIST_REVISION_TYPES, KEY_LIST_TOPICS} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";
import {createMemoryApi} from "./duck/action";
import {extractor} from "../../../lib/utils/util";
import {listRevisionTypesApi, listTopicsApi} from "../../topics/feature/duck/actions";

class CreateMemoryFeature extends React.Component {

    componentDidMount() {
        this.props.listTopicsApi();
        this.props.listRevisionTypesApi();
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
            renderMemoryForm: ((this.props.revisionTypes) && (this.props.topics)) ,
            formData: {
                dataId:"addMemory",
                onSubmit: this.props.createMemoryApi,
                dropDownData: {
                    topics: this.props.topics,
                    revisionTypes: this.props.revisionTypes,
                },
                values: {
                    topic: (this.props.topics) ? this.props.topics[0].id : 0,
                    revisionType: (this.props.revisionTypes) ? this.props.revisionTypes[0].id : 0,
                }
            },
        };
    }
}

const mapStateToProps = (state) => ({
    topics: extractor(state, KEY_LIST_TOPICS),
    revisionTypes: extractor(state, KEY_LIST_REVISION_TYPES)
});

export default connect(mapStateToProps, {listRevisionTypesApi, listTopicsApi, createMemoryApi, setData})(CreateMemoryFeature);
