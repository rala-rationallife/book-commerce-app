export interface BookType {
  id: number;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
}
