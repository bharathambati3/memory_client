import React from 'react';
import EditMemoryFeature from "../feature/EditMemoryFeature";

class EditMemory extends React.Component {

    render() {
        return (
            <EditMemoryFeature>
                {
                    (props) => (<div>
                        "Edit memory"
                    </div>)
                }
            </EditMemoryFeature>
        )
    }
}

export default EditMemory;
