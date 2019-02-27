import {NOTIFY, REMOVE_NOTIFICATION} from "../../../constants/actionConstants";

const notifyReducer = (state = [], action) => {
  switch (action.type) {
    case NOTIFY:
      return [...state, { ...action.payload }];
    case REMOVE_NOTIFICATION:
      return state.filter((error) => error.id !== action.payload);
    default:
      return state;
  }
};

export default notifyReducer;
