import React from "react";
import {convertFromRaw, Editor, EditorState} from "draft-js";
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
                {`Topic: ${props.memory.topic.name}`}
            </div>
            <div>
                {`Title: ${props.memory.title}`}
            </div>
            <div>
                {
                    (showEditor) ?
                        <Editor editorState={val} /> :
                        <Paper > {val} </Paper>
                }
            </div>
        </div>
    );
}

export default InputEditorView;