export interface IBlog {
    id?: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    image?: string;
    date_of_publish: string;
    author: string;
    author_avatar: string;
    technologies: string[];
    read_time: number;
}

