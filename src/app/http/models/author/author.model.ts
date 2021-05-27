export interface Author {
  id: number;
  name: string;
  email: string;
}

export function createAuthor(params: Partial<Author>) {
  return {} as Author;
}
