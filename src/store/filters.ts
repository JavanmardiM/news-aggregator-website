import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { storage } from "src/lib/utils/storage";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        category: "",
        source: "",
        date: "",
        searchedValue: "",
    },
    reducers: {
        setSearchedText(state, action: PayloadAction<string>) {
            state.searchedValue = action.payload;
            storage.setParams("search", action.payload);
        },
        setCategory(state, action) {
            state.category = action.payload;
            storage.setParams("category", action.payload);
        },
        setSource(state, action) {
            state.source = action.payload;
            storage.setParams("source", action.payload);
        },
        setDate(state, action) {
            state.date = action.payload;
            storage.setParams("date", action.payload);
        },
    },
});

export const filterAction = filterSlice.actions;
export default filterSlice;
