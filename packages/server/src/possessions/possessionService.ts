import { inject, injectable } from "tsyringe";
import { Dependency } from "../dependency";
import { DataStore } from "../types/dataAccess";
import { IPossessionService, Possession } from "../types/possessions";

@injectable()
export class PossessionService implements IPossessionService {
  constructor(@inject(Dependency.DataStore) private dataStore: DataStore) {}

  getPossessions(): Possession[] {
    return this.dataStore.getPossessions();
  }
}
