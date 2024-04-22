import { FilterParameters } from "src/models/article";
import { G_NEWS_API_KEY, NY_TIMES_API_KEY, THE_NEWS_API_KEY } from "../constants";

const createNYTimesAPIParams = ({ search, category, source, date }: FilterParameters) => {
    let result: string = "";

    result += `?api-key=${NY_TIMES_API_KEY}`;

    result += `&q=${search ? search : " "}`;

    if (category || source) result += "&fq=";

    if (category) result += `news_desk:("${category}")`;

    if (source) result += `${category ? " AND " : ""}source:("${source}")`;

    if (date) result += `&sort=${date}`;

    return result;
};

const createGNewsAPIParams = ({ search, category, source, date }: FilterParameters) => {
    let result: string = "";

    result += `?apikey=${G_NEWS_API_KEY}&lang=en`;

    result += `&q=${search ? search : "a"}`;

    if (category) result += `&category=${category}`;

    if (source) result += `&from=2027-03-28T13:44:50Z`;

    return result;
};

const createTheNewsAPIParams = ({ search, category, source, date }: FilterParameters) => {
    let result: string = "";

    result += `?api_token=${THE_NEWS_API_KEY}&language=en`;

    if (search) result += `&search=${search}`;

    if (category) result += `&categories=${category}`;

    if (source) result += `&source_ids=${source}`;

    return result;
};

export { createNYTimesAPIParams, createGNewsAPIParams, createTheNewsAPIParams };
