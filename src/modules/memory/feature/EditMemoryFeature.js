import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {getMemory} from "./duck/action";
import {extractor} from "../../../lib/utils/util";
import {KEY_HEADER, KEY_SELECTED_MEMORIES} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";

class EditMemoryFeature extends React.Component {

    componentDidMount() {
        this.props.setData({
            key: KEY_HEADER,
            value: `Edit ${this.props.memory.topic.name} - ${this.props.memory.title}`
        })
    }

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            memory: this.props.memory,
        };
    }
}

const mapStateToProps = (state) => ({
    memory: extractor(state, KEY_SELECTED_MEMORIES)
});

export default connect(mapStateToProps, {getMemory, setData})(withRouter(EditMemoryFeature));
