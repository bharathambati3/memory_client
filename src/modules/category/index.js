import React, {Component} from 'react';
import CategoryFeature from "./feature/CategoryFeature";
import Category from "./ui/Category";


class CategoryUI extends Component {
    render() {
        return (
            <CategoryFeature>
                {
                    (props) => {
                        return (<Category {...props}/>);
                    }
                }
            </CategoryFeature>
        );
    }
}

export default CategoryUI;
