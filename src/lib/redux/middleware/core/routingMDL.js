// import { ROUTE } from '../../../constants/ActionConstants';
import { history } from '../../../router';

export const ROUTE = 'ROUTE';

const routingMiddleware = () => (next) => (action) => {
  next(action);
  if (action.type === ROUTE) {
    const { url, data } = action.payload;
    history.push(url, data);
  }
};

export default routingMiddleware;
