import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import summariesReducer from "./summaries/reducer";
import selectedReducer from "./selected/reducer";
import countryReducer from "./country/reducer";

const store = configureStore({
  reducer: {
    country: countryReducer,
    selected: selectedReducer,
    summaries: summariesReducer,
    loadingBar: loadingBarReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
