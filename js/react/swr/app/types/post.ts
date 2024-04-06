export interface Post {
  id: string;
  title: string;
}

export interface PostsResponse {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Post[];
}
