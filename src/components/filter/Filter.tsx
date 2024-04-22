import { useCallback, useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useDevDispatch } from "src/hooks/store";
import { storage } from "src/lib/utils/storage";
import { FilterParameters } from "src/models/article";
import { getNewsArticles } from "src/store/articleAction";
import { filterAction } from "src/store/filters";

const categoryOptions = [
    { label: "All", value: "" },
    { label: "Politics", value: "politics" },
    { label: "Business", value: "business" },
    { label: "Sports", value: "sports" },
    { label: "Science", value: "science" },
];

const sourcesOptions = [
    { label: "All", value: "" },
    { label: "The New York Times", value: "The New York Times" },
    { label: "ABC News", value: "abcnews.go.com-1" },
    { label: "USA Today", value: "usatoday.com-2" },
    { label: "The Atlantic", value: "theatlantic.com-1" },
];

const dateOptions = [
    { label: "All", value: "" },
    { label: "Most Recent", value: "newest" },
    { label: "Old", value: "relevance" },
];

export default function Filter() {
    const dispatch = useDevDispatch();
    const [filter, setFilter] = useState<FilterParameters>();

    const searchArticle = useCallback(() => {
        const { search } = storage.getParams();
        dispatch(
            getNewsArticles({
                search,
                category: filter?.category as string,
                source: filter?.source as string,
                date: filter?.date as string,
            }),
        );
    }, [dispatch, filter?.category, filter?.date, filter?.source]);

    const handleCategoryChange = useCallback(
        (event: any) => {
            dispatch(filterAction.setCategory(event.value));
            setFilter((prevState) => ({
                ...(prevState as FilterParameters),
                category: event.value,
            }));
            searchArticle();
        },
        [dispatch, searchArticle],
    );

    const handleSourceChange = useCallback(
        (event: any) => {
            dispatch(filterAction.setSource(event.value));
            setFilter((prevState) => ({
                ...(prevState as FilterParameters),
                source: event.value,
            }));
            searchArticle();
        },
        [dispatch, searchArticle],
    );

    const handleDateChange = useCallback(
        (event: any) => {
            dispatch(filterAction.setDate(event.value));
            setFilter((prevState) => ({
                ...(prevState as FilterParameters),
                date: event.value,
            }));
            searchArticle();
        },
        [dispatch, searchArticle],
    );

    useEffect(() => {
        const { category, source, date } = storage.getParams();
        setFilter((prevState) => ({
            ...(prevState as FilterParameters),
            category,
            source,
            date,
        }));
    }, [handleDateChange, handleSourceChange, handleCategoryChange]);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-2 ">
                <ReactSelect
                    className="min-w-40"
                    placeholder="Category"
                    options={categoryOptions}
                    onChange={handleCategoryChange}
                    value={categoryOptions.find((item) => item.value === filter?.category)}
                />
                <ReactSelect
                    className="min-w-60"
                    placeholder="Source"
                    options={sourcesOptions}
                    onChange={handleSourceChange}
                    value={sourcesOptions.find((item) => item.value === filter?.source)}
                />
                <ReactSelect
                    className="min-w-32"
                    placeholder="Date"
                    options={dateOptions}
                    onChange={handleDateChange}
                    value={dateOptions.find((item) => item.value === filter?.date)}
                />
            </div>
        </>
    );
}
