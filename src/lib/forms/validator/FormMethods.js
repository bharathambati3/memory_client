const equalsCompareWithField = (value, args, props, state) => {
  return !!(state[args] && state[args].value === value);
};


const valueCheckInProps = (value, args, props) => {
  return value === props[args];
};

export const methodMap = {
  confirmField: equalsCompareWithField,
  valueCheckInProps
};
