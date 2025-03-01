import { configureStore } from '@reduxjs/toolkit';

// Reducer function (handles actions)
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "MYCASE":
        return {count:state.count *5 };
    default:
      return state;
  }
};

// Create store
const store = configureStore({
    reducer: counterReducer
});

export default store;
