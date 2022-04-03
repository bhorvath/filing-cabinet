import { inject, injectable } from "tsyringe";
import { Dependency } from "../dependency";
import { DataStore } from "../types/dataAccess";
import { CreatePossessionRequest, IPossessionService, Possession } from "../types/possessions";

@injectable()
export class PossessionService implements IPossessionService {
  constructor(@inject(Dependency.DataStore) private dataStore: DataStore) {}

  /**
   * Retrieves all possessions from the data store
   *
   * @returns all possessions
   */
  getPossessions(): Possession[] {
    return this.dataStore.getPossessions();
  }

  /**
   * Creates a new possession in the data store
   *
   * @param possessionRequest the possession to create
   * @returns the ID of the new request
   */
  createPossession(possessionRequest: CreatePossessionRequest): string {
    const id = this.dataStore.createPossession(possessionRequest);

    return id;
  }
}
