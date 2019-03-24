import * as React from "react";
import {validate} from "../validator/FormValidator";
import {connect} from "react-redux";
import Form from "../form/Form";
import {Button} from "@material-ui/core";

class FormHandler extends React.Component {
  constructor(props) {
    super(props);
    const { data, values } = props;
    this.state = this.getInitialState(data, values);
  }

  getInitialState = (array, values) => {
    const object = {};
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
    this.setState(
      this.getInitialState(this.props.data.filter((i) => !i.keepValue), values)
    );

  onChangeHandler = (event) => {
    const {target: { name, value }} = event;

    const elem = this.state[name];
    elem.isError = false;
    this.setState({ [name]: { ...elem, value } });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const response = validate(this.props, this.state);

    if (response.hasError) {
      this.setState({ ...response.state });
    } else {
      const payload = {
        formContent: { ...this.state },
        onReset: this.onReset
      };
      this.props.onSubmit(payload, this.props.id);
    }
  };

  getStateAndProps = () => {
    const renderArray = Object.keys(this.state).map((key) => {
      return { onChange: this.onChangeHandler, data: this.state[key] };
    });

    return {
      dropDownData: this.props.dropDownData,
      onClick: this.onSubmitHandler,
      onReset: this.onReset,
      renderArray
    };
  };

  render() {
    const { renderArray, onClick, onReset, dropDownData } = this.getStateAndProps();
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

const mapStateToProps = (state) => {

};

export default connect(
  mapStateToProps,
  {  }
)(FormHandler);
