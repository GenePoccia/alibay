import { createStore } from "redux";
let reducer = (state, action) => {
  return state; // 5
};

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
