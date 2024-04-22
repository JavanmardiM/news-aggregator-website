import Filter from "src/components/filter/Filter";
import Layout from "src/components/layout/Layout";
import List from "src/components/list/List";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="font-roboto flex justify-center">
                    <div className="container mx-auto my-6 md:px-6">
                        <div className="px-6 sm:py-8">
                            <div className="flex justify-between container mx-auto">
                                <div className="w-full">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
                                        <h1 className="text-xl font-bold text-gray-700 md:text-2xl py-2">News Articles</h1>
                                        <Filter />
                                    </div>
                                    <List />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
