import { createStore, Store } from "redux";
import { incrementAction } from "./counter/counter.action";
import { counterReducer } from "./counter/counter.reducer";

const store: Store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction);
