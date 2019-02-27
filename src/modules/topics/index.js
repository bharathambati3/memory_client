import React, {Component} from 'react';
import TopicsFeature from "./feature/TopicsFeature";
import Topics from "./ui/Topics";


class TopicsUI extends Component {
    render() {
        return (
            <TopicsFeature>
                {
                    (props) => {
                        return (<Topics {...props}/>);
                    }
                }
            </TopicsFeature>
        );
    }
}

export default TopicsUI;
