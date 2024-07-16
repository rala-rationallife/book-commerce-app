export interface BookType {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export interface Purchase {
  id: string;
  userId: string;
  bookId: string;
  createdAt: string;
  user: User;
}
