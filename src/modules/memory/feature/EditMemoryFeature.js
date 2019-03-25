import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {editMemoryApi, initializeEditMemory} from "./duck/action";
import {extractor} from "../../../lib/utils/util";
import {KEY_CURRENT_EDIT_MEMORY, KEY_CURRENT_EDIT_MEMORY_ID} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";

class EditMemoryFeature extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.initializeEditMemory(id);
    }

    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            id: this.id,
            loaded: this.props.id === this.props.match.params.id,
            onSubmit: () => this.props.editMemoryApi(this.props.id, this.props.content),
            content: this.props.content,
            onChange: (data) => this.props.setData({
                key: KEY_CURRENT_EDIT_MEMORY,
                value: data.target.value
            })
        };
    }
}

const mapStateToProps = (state) => ({
    content: extractor(state, KEY_CURRENT_EDIT_MEMORY),
    id: extractor(state, KEY_CURRENT_EDIT_MEMORY_ID),

});

export default connect(mapStateToProps, {initializeEditMemory, setData, editMemoryApi})(withRouter(EditMemoryFeature));
