import React from 'react';
import ListTopicsFeature from '../../feature/list/ListTopicsFeature';

const ListTopics = props => {
    return (
        <ListTopicsFeature>
            {
                (props) => <div>inside list topics ui</div>
            }
        </ListTopicsFeature>
    );
};

export default ListTopics;
