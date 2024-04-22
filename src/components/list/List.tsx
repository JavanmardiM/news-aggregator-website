import Card from "../card/Card";
import { useEffect } from "react";
import { getNewsArticles } from "src/store/articleAction";
import { IRootState } from "src/store";
import { useDevDispatch, useDevSelector } from "src/hooks/store";
import { GeneralNewsPost } from "src/models/article";
import Loading from "../loading/Loading";
import { storage } from "src/lib/utils/storage";

export default function List() {
    const articleList = useDevSelector((state: IRootState) => state.article.articleList);
    const isLoading = useDevSelector((state: IRootState) => state.article.isLoading);
    const { search, category, source, date } = storage.getParams();
    const dispatch = useDevDispatch();

    useEffect(() => {
        dispatch(getNewsArticles({ search, category, source, date }));
    }, [category, date, dispatch, search, source]);

    return (
        <>
            <div className="my-5">
                <section className="mb-2 text-center">
                    {isLoading && <Loading />}
                    {!isLoading && articleList.length === 0 && (
                        <div className="mt-36 flex justify-center items-center">No Articles Available! </div>
                    )}
                    {articleList.length > 0 && (
                        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 xl:gap-x-12">
                            {articleList.map((article: GeneralNewsPost) => (
                                <Card key={article.link} article={article} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
