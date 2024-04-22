import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FilterParameters, GeneralNewsPost, GNewsPost, NYTimesNewsPost, TheNewsPost } from "src/models/article";
import { createNYTimesAPIParams, createGNewsAPIParams, createTheNewsAPIParams } from "src/lib/utils/createAPIParams";
import { G_NEWS_API_URL, NY_TIMES_API_URL, THE_NEWS_API_URL } from "src/lib/constants";
import combineResources from "src/lib/utils/combineResources";

export const getNewsArticles = createAsyncThunk("get/news", async ({ search, category, source, date }: FilterParameters) => {
    const [nyTimesResponse, gNewsResponse, theNewsResponse] = await Promise.all([
        axios.get(NY_TIMES_API_URL + createNYTimesAPIParams({ search, category, source, date })),
        axios.get(G_NEWS_API_URL + createGNewsAPIParams({ search, category, source, date })),
        axios.get(THE_NEWS_API_URL + createTheNewsAPIParams({ search, category, source, date })),
    ]);
    const nyTimesData: NYTimesNewsPost[] = await nyTimesResponse.data.response.docs;

    const gNewsData: GNewsPost[] = await gNewsResponse.data.articles;

    const theNewsData: TheNewsPost[] = await theNewsResponse.data.data;

    const articles: GeneralNewsPost[] = combineResources({
        nyTimesData,
        gNewsData,
        theNewsData,
    });

    return articles;
});
