import validator from 'validator';
import { methodMap } from './FormMethods';

export const validate = (props, state) => {
  const response = {
    hasError: false,
    state: { ...state }
  };

  for (const datum of props.data) {

    const errorMsg = getErrorMessage(
      datum.validations,
      state[datum.name].value,
      props,
      state
    );
    if (errorMsg) {
      const elemState = { ...response.state[datum.name] };
      elemState['isError'] = true;
      elemState['errorMsg'] = errorMsg;
      // copy existing state and modify element state with error
      response.state = { ...response.state, [datum.name]: elemState };
      response.hasError = true;
    }
  }

  return response;
};

/**
 * Multiple validations for a single form element.
 * single element can have multiple validations.
 */
const getErrorMessage = (
  validations,
  value,
  props,
  state
) => {
  if (!validations) {
    return null;
  }

  for (const validation of validations) {
    if (!isValid(validation, value, props, state)) {
      return validation.errorMsg;
    }
  }

  return null;
};

/**
 * Each, Single validation rule.
 */
const isValid = (
  rule,
  value,
  props,
  state
) => {
  const args = rule.args || [];
  const validationMethod =
    typeof rule.method === 'string'
      ? validator[rule.method] || methodMap[rule.method]
      : rule.method;
  const validationResp = validationMethod(value, args, props, state);
  return validationResp === rule.validWhen;
};
