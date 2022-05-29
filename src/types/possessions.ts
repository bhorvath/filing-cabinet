export type Possession = {
  id: string;
  name: string;
  description: string;
  purchaseDate: number;
  price: number;
  store: string;
};

export type CreatePossessionRequest = Omit<Possession, "id">;

export interface IPossessionService {
  getPossessions(): Possession[];
  createPossession(possessionRequest: CreatePossessionRequest): string;
  updatePossession(possession: Possession): void;
  deletePossession(id: string): void;
}
