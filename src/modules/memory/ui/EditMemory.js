import React from "react";
import EditMemoryFeature from "../feature/EditMemoryFeature";
import InputEditor from "../../../lib/forms/componentFactory/inputEditor/InputEditor";

class EditMemory extends React.Component {

    render() {
        return (
            <EditMemoryFeature>
                {
                    (props) => {
                        return (props.loaded) ? <InputEditor
                            key={props.id}
                            value={props.content}
                            onChange={props.onChange}
                        /> : `Loading Memory!!`
                    }
                }
            </EditMemoryFeature>
        )
    }
}

export default EditMemory;
