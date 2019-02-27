import React, {Component} from 'react';
import MemoryFeature from "./feature/MemoryFeature";
import Memory from "./ui/Memory";


class MemoryUI extends Component {
    render() {
        return (
            <MemoryFeature>
                {
                    (props) => {
                        return (<Memory {...props}/>);
                    }
                }
            </MemoryFeature>
        );
    }
}

export default MemoryUI;
