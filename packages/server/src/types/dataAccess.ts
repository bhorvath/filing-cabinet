import { Possession } from "./possessions";

export interface DataStore {
  getPossessions(): Possession[];
}
