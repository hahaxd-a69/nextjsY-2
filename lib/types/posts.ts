export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostCreateRequest = {
  userId: number;
  title: string;
  body: string;
};

export type PostUpdateRequest = Partial<PostCreateRequest>;
