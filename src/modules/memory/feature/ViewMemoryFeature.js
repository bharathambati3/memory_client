import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {getMemory, memoryRevised, onMemoryEdit} from "./duck/action";
import {KEY_HEADER, KEY_SELECTED_MEMORIES} from "../../../lib/constants/keys";
import {extractor} from "../../../lib/utils/util";
import {setData} from "../../../lib/redux/actions/manageData";

class ViewMemoryFeature extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(`cdm ${id}`)
        this.props.getMemory(id);
    }

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            memory: this.props.memory,
            onEdit: () => this.props.onMemoryEdit(this.props.memory.id),
            onMarkAsRead: () => this.props.memoryRevised({id: this.props.memory.id})
        };
    }
}

const mapStateToProps = (state) => ({
    memory: extractor(state, KEY_SELECTED_MEMORIES)
});

export default connect(mapStateToProps,
    {getMemory, onMemoryEdit, memoryRevised, setData})(withRouter(ViewMemoryFeature));
