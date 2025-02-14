import { JSX } from "react/jsx-runtime";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    password?: string;
    avatar?: string;
}

export interface Webs {
    map(arg0: (web: Webs) => JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    slug: string;
    url: string;
    description: string;
    image: string;
    price: number;
}

export interface Order {
    user(user: any): unknown;
    webs: any;
    id: number;
    user_id: number;
    webs_id: number;
    domain_name: string;
    status: 'pending' | 'waiting_payment' | 'paid' | 'admin_approved' | 'in_progress' | 'completed' | 'cancelled';
    price: number;
    created_at: string;
    updated_at: string;
}

export interface PaginatedData<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
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