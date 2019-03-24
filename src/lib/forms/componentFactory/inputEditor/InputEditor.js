import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {convertToRaw, EditorState, convertFromRaw} from 'draft-js';

class InputEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log("Created input editor");
        let val;

        try {
            let pval = props.value;
            if (typeof pval === 'string' || pval instanceof String) {
                pval = JSON.parse(pval);
            }
            val = EditorState.createWithContent(convertFromRaw(pval));
        } catch (e) {
            val = EditorState.createEmpty()
        }
        this.state = {editorState: val};
        this.onChange = (editorState) => {
            const content = editorState.getCurrentContent();
            const dataToSaveBackend = convertToRaw(content);

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