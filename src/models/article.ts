export type FilterParameters = {
    search: string;
    category: string;
    source: string;
    date: string;
};
export interface GeneralNewsPost {
    title: string;
    image: string;
    description: string;
    source: string;
    author: string;
    link: string;
    publishedAt: string;
}

export interface GNewsPost {
    title: string;
    description: string;
    source: { name: string };
    publishedAt: string;
    url: string;
    image: string;
}

type NYMedia = {
    url: string;
};

type NYAuthor = {
    original: string;
};

export interface NYTimesNewsPost {
    headline: { main: string };
    multimedia: NYMedia[];
    snippet: string;
    source: string;
    byline: NYAuthor;
    web_url: string;
    pub_date: string;
}

export interface TheNewsPost {
    title: string;
    image_url: string;
    snippet: string;
    source: string;
    url: string;
    published_at: string;
}
