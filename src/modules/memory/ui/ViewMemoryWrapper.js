import React from 'react';
import InputEditorView from "../../../lib/forms/componentFactory/inputEditor/InputEditorView";
import { Button } from '@material-ui/core';

const ViewMemoryWrapper = props => {
    const {memory, onMarkAsRead, onEdit} = props;
    return (
        <div>
            <Button
                style={{
                    margin: 10
                }}
                onClick={props.onEdit}
                color='primary'
                variant='contained'
            >
                Edit
            </Button>
            <InputEditorView memory={memory} onMarkAsRead={onMarkAsRead}/>
            <Button
                style={{
                    margin: 10
                }}
                color='primary'
                size='large'
                variant='contained'
                onClick={props.onMarkAsRead}
            >
                Mark as read
            </Button>
        </div>
    );
};

export default ViewMemoryWrapper;