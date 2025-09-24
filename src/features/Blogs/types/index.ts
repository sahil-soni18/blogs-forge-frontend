
export interface IAuthor {
    id: number;
    name: string;
    email?: string;
}

export interface IBlog {
    id?: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    imageUrl?: string;
    date_of_publish: string;
    author: IAuthor;
    author_avatar: string;
    technologies: string[];
    read_time: number;
}

