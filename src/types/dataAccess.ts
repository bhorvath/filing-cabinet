import { CreatePossessionRequest, Possession } from "./possessions";

export interface DataStore {
  getPossessions(): Possession[];
  createPossession(possessionRequest: CreatePossessionRequest): string;
}
