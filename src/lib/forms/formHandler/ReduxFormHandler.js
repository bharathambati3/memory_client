import * as React from 'react';
import {validate} from '../validator/FormValidator';
import {connect} from 'react-redux';
import Form from "../form/Form";
import {Button} from '@material-ui/core';
import {setData} from "../../redux/actions/manageData";
import {KEY_FORMS_PREFIX} from "../../constants/keys";
import {extractor} from "../../utils/util";

class ReduxFormHandler extends React.Component {
    constructor(props) {
        super(props);
        if (! this.getState() ) {
            const {data, values} = this.props;
            const state = this.getInitialState(data, values);
            this.updateState(state)
        }
    }

    updateState = (newState) => {
        console.log(`state updated ${newState}`)
        this.props.setData({
            key: this.getFormKey(),
            value: newState
        })
    }

    getState = () => {
        if (this.props.formsData) {
            return this.props.formsData[this.props.dataId]
        }
    }

    getFormKey = () => {
        const {dataId} = this.props;
        return `${KEY_FORMS_PREFIX}.${dataId}`
    }


    getInitialState = (array, values) => {
        const object = {...this.getState()};
        return array.reduce((acc, curr) => {
            let val;
            if (values && values[curr.name]) {
                val = values[curr.name];
            }
            acc[curr.name] = this.getSingleFormObj(curr, val);
            return acc;
        }, object);
    };

    getSingleFormObj = (singleFormObj, val) => {
        return {
            errorMsg: '',
            isError: false,
            value: val ? val : singleFormObj.value
        };
    };

    onReset = (values = null) =>
        this.updateState(
            this.getInitialState(this.props.data.filter((i) => !i.keepValue), values)
        );

    onChangeHandler = (event) => {
        const {target: {name, value}} = event;

        const elem = this.getState()[name];
        elem.isError = false;
        this.updateState({...this.getState(), [name]: {...elem, value}});
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const response = validate(this.props, this.getState());

        if (response.hasError) {
            this.updateState({...response.state});
        } else {
            const payload = {
                formContent: {...this.getState()},
                onReset: this.onReset
            };
            this.props.onSubmit(payload, this.props.id);
        }
    };

    getStateAndProps = () => {
        const renderArray = Object.keys(this.getState()).map((key) => {
            return {onChange: this.onChangeHandler, data: this.getState()[key]};
        });

        return {
            dropDownData: this.props.dropDownData,
            onClick: this.onSubmitHandler,
            onReset: this.onReset,
            renderArray
        };
    };

    render() {
        if (! this.getState()) {
            return <div>Form loading...</div>
        }
        const {renderArray, onClick, onReset, dropDownData} = this.getStateAndProps();
        return (
            <Form dropDownData={dropDownData} data={this.props.data} function={renderArray}>
                <Button
                    style={{
                        margin: 10
                    }}
                    size='large'
                    variant='contained'
                    onClick={onReset}
                >
                    Reset
                </Button>
                <Button
                    style={{
                        margin: 10
                    }}
                    color='primary'
                    size='large'
                    variant='contained'
                    onClick={onClick}
                >
                    Save
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    formsData: extractor(state, KEY_FORMS_PREFIX)
});

export default connect(
    mapStateToProps,
    {setData}
)(ReduxFormHandler);
