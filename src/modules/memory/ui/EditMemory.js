import React from "react";
import EditMemoryFeature from "../feature/EditMemoryFeature";
import InputEditor from "../../../lib/forms/componentFactory/inputEditor/InputEditor";
import {Button} from "@material-ui/core";

class EditMemory extends React.Component {

    render() {
        return (
            <EditMemoryFeature>
                {
                    (props) => {
                        return (props.loaded) ? <div>
                            <Button
                                style={{
                                    margin: 10
                                }}
                                color='primary'
                                size='large'
                                variant='contained'
                                onClick={props.onSubmit}
                            >
                                Save
                            </Button>
                            <InputEditor
                                key={props.id}
                                value={props.content}
                                onChange={props.onChange}
                            />
                        </div> : `Loading Memory!!`
                    }
                }
            </EditMemoryFeature>
        )
    }
}

export default EditMemory;
