import React from 'react';
import { connect } from 'react-redux';
import {addCategoryApi} from "./duck/actions";
import {KEY_HEADER} from "../../../lib/constants/keys";
import {setData} from "../../../lib/redux/actions/manageData";

class CategoryFeature extends React.Component {


    componentDidMount() {
        this.props.setData({
            key: KEY_HEADER,
            value: "Create Category"
        })
    }


    render() {
        return this.props.children(this.getChildrenProps());
    }

    getChildrenProps = () => {
        return {
            formData: {
                dataId: 'addCategory',
                onSubmit: this.props.addCategoryApi
            }
        };
    }
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setData, addCategoryApi})(CategoryFeature);
