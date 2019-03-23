import React from 'react';
import EditMemoryFeature from "../feature/EditMemoryFeature";
import InputEditor from "../../../lib/forms/componentFactory/inputEditor/InputEditor";

class EditMemory extends React.Component {

    render() {
        return (
            <EditMemoryFeature>
                {
                    (props) => (
                        <InputEditor
                            key={props.id}
                            value={props.content}
                            onChange={props.onChange}
                        />
                    )
                }
            </EditMemoryFeature>
        )
    }
}

export default EditMemory;
