
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
    created_at: string;
    author: IAuthor;
    author_avatar: string;
    technologies: string[];
    read_time: number;
}

