export const actionSplitterMiddleware = () => (next) => (action) => {
  if (Array.isArray(action)) {
    action.forEach((singleAction) => next(singleAction));
  } else {
    next(action);
  }
};
