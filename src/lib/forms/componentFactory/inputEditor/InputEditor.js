import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {convertToRaw, EditorState, convertFromRaw} from 'draft-js';

class InputEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log("Created input editor");
        let val;

        try {

            console.log("Created input editor json "+props.value);
            val = EditorState.createWithContent(convertFromRaw(props.value));
        } catch (e) {
            console.log("creating new editor "+JSON.stringify(props.value));
            val = EditorState.createEmpty()
        }
        this.state = {editorState: val};
        this.onChange = (editorState) => {
            const content = editorState.getCurrentContent();
            console.log(content);
            const dataToSaveBackend = convertToRaw(content);
            console.log(dataToSaveBackend);

            const data = {
                target: {
                    name: props.name,
                    value: dataToSaveBackend
                }
            }
            props.onChange(data);
            this.setState({editorState});
        }
    }
    render() {
        return (
            <Editor editorState={this.state.editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onChange} />
        );
    }
}

export default InputEditor;