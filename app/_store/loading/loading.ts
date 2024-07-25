import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingSetting: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loadingSetting } = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading.isLoading;
export default loadingSlice.reducer;
