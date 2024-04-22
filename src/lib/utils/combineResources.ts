import { GeneralNewsPost, GNewsPost, NYTimesNewsPost, TheNewsPost } from "src/models/article";
import { NY_TIMES_BASE_URL } from "../constants";

const combineResources = ({
    nyTimesData,
    gNewsData,
    theNewsData,
}: {
    nyTimesData: NYTimesNewsPost[];
    gNewsData: GNewsPost[];
    theNewsData: TheNewsPost[];
}) => {
    const mergedNews: GeneralNewsPost[] = [];
    nyTimesData?.forEach((obj: NYTimesNewsPost) => {
        mergedNews.push({
            title: obj.headline.main,
            image: `${NY_TIMES_BASE_URL}/${obj.multimedia[0]?.url}`,
            description: obj.snippet,
            source: obj.source,
            author: obj.byline.original ? obj.byline.original : "",
            link: obj.web_url,
            publishedAt: obj.pub_date,
        });
    });

    theNewsData?.forEach((obj: TheNewsPost) => {
        mergedNews.push({
            title: obj.title,
            image: obj.image_url,
            description: obj.snippet,
            source: obj.source,
            author: obj.source,
            link: obj.url,
            publishedAt: obj.published_at,
        });
    });

    gNewsData?.forEach((obj: GNewsPost) => {
        mergedNews.push({
            title: obj.title,
            image: obj.image,
            description: obj.description,
            source: obj.source.name,
            author: obj.source.name,
            link: obj.url ? obj.url : "",
            publishedAt: obj.publishedAt,
        });
    });

    return mergedNews;
};

export default combineResources;
