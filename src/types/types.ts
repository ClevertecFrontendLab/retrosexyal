export interface IBook {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: { url: string };
  categories: string[];
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories: Array<{ id: number; userId: number }>;
}

export interface Error {
  status: number;
  name: string;
  message: string;
  details: any;
}

export enum Status {
  LOADING = "loading",
  COMLETED = "completed",
  ERROR = "error",
}

export interface BooksState {
  books: IBook[];
  loading: boolean;
  status: Status;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  status: Status.LOADING,
};
