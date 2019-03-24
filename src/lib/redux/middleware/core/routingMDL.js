// import { ROUTE } from '../../../constants/ActionConstants';
import {history} from "../../../router";
import {ROUTE} from "../../../constants/actionConstants";

export const routingMDL = () => (next) => (action) => {
  next(action);
  if (action.type === ROUTE) {
    const { url, data } = action.payload;
    history.push(url, data);
  }
};
