import { inject, injectable } from "tsyringe";
import { Dependency } from "../dependency";
import { DataStore } from "../types/dataAccess";
import { CreatePossessionRequest, IPossessionService, Possession } from "../types/possessions";

@injectable()
export class PossessionService implements IPossessionService {
  constructor(@inject(Dependency.DataStore) private dataStore: DataStore) {}

  /**
   * Retrieves all possessions from the data store.
   *
   * @returns all possessions
   */
  getPossessions(): Possession[] {
    return this.dataStore.getPossessions();
  }

  /**
   * Creates a new possession in the data store.
   *
   * @param possessionRequest the possession to create
   * @returns the ID of the new request
   */
  createPossession(possessionRequest: CreatePossessionRequest): string {
    const id = this.dataStore.createPossession(possessionRequest);

    return id;
  }

  /**
   * Updates an existing possession in the data store.
   *
   * @param possession the possession to update
   */
  updatePossession(possession: Possession): void {
    this.dataStore.updatePossession(possession);
  }

  /**
   * Deletes an existing possession from the data store.
   *
   * @param id the ID of the possession to delete
   */
  deletePossession(id: string): void {
    this.dataStore.deletePossession(id);
  }
}
