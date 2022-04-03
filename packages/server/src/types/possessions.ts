export type Possession = {
  name: string;
  description: string;
  purchaseDate: number;
  price: number;
  store: string;
};

export interface IPossessionService {
  getPossessions(): Possession[];
}
