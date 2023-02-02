export interface RepositoriesTypes {
    id: number;
    owner: {
        avatar_url: string;
        login: string;
    },
    name: string;
    stargazers_count: number;
    watchers: number;
    html_url: string;
}