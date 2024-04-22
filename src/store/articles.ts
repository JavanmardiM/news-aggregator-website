import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNewsArticles } from "./articleAction";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        articleList: [],
        isLoading: false,
    },
    reducers: {
        setArticleList(state, action) {
            state.articleList = action.payload.articleList;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewsArticles.fulfilled.type, (state, action: PayloadAction<any>) => {
                state.articleList = action.payload;
                state.isLoading = false;
            })
            .addCase(getNewsArticles.pending.type, (state) => {
                state.isLoading = true;
            });
    },
});

export const articleAction = articleSlice.actions;
export default articleSlice;
