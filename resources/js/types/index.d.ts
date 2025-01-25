export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    password?: string;
    avatar?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface children {
    children: React.ReactNode;
}