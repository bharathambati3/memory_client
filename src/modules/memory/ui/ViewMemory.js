import React from "react";
import ViewMemoryFeature from "../feature/ViewMemoryFeature";
import ViewMemoryWrapper from "./ViewMemoryWrapper";

class ViewMemory extends React.Component {

    render() {
        return (
            <ViewMemoryFeature>
                {
                    (props) => (<div>
                        {
                            (props.memory) ? <ViewMemoryWrapper {...props} /> : null
                        }
                    </div>)
                }
            </ViewMemoryFeature>
        )
    }
}

export default ViewMemory;
