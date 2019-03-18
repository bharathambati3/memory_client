import React from 'react';
import ViewMemoryFeature from "../feature/ViewMemoryFeature";
import InputEditorView from "../../../lib/forms/componentFactory/inputEditor/InputEditorView";

class ViewMemory extends React.Component {

    render() {
        return (
            <ViewMemoryFeature>
                {
                    ({memory}) => (<div>
                        {
                            (memory) ? <InputEditorView memory={memory}/> : null
                        }
                    </div>)
                }
            </ViewMemoryFeature>
        )
    }
}

export default ViewMemory;
