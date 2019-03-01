import React from 'react';
import CreateTopicsFeature from '../../feature/create/CreateTopicsFeature';

const Topics = props => {
    return (
        <CreateTopicsFeature>
            {
                (props) => <div>inside topics ui</div>
            }
        </CreateTopicsFeature>
    );
};

export default Topics;
