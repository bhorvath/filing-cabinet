import { DataStore } from "../types/dataAccess";
import { Possession } from "../types/possessions";

export class InMemoryDataStore implements DataStore {
  getPossessions(): Possession[] {
    return [];
  }
}
