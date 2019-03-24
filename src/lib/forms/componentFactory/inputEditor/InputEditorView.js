import React from "react";
import {Editor} from "react-draft-wysiwyg";
import {convertFromRaw, EditorState} from "draft-js";
import {Paper} from "@material-ui/core";

const InputEditorView = (props) => {
    let val;

    let showEditor = true;
    try {
        const json  = JSON.parse(props.memory.content);
        val = EditorState.createWithContent(convertFromRaw(json));
    } catch (e) {
        showEditor = false;
        val = props.memory.content
    }

    console.log(`Created input editor view memory: ${JSON.stringify(props.memory)}`);
    return (
        <div>
            <div>
                {
                    (showEditor) ?
                        <Editor readOnly={true}
                                toolbarHidden={true}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                editorState={val} /> :
                        <Paper > {val} </Paper>
                }
            </div>
        </div>
    );
}

export default InputEditorView;