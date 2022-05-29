import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../types/dataAccess";
import { CreatePossessionRequest, Possession } from "../types/possessions";

export class InMemoryDataStore implements DataStore {
  private possessions: Map<string, Possession>;

  constructor(possessions: Possession[] = []) {
    this.possessions = new Map(possessions.map((possession) => [possession.id, possession]));
  }

  /**
   * Retrieves all possessions from an in-memory map.
   *
   * @returns all possessions
   */
  getPossessions(): Possession[] {
    return Array.from(this.possessions.values());
  }

  /**
   * Creates a new possession in the in-memory map.
   *
   * @param possessionRequest the possession to create
   * @returns the ID of the new possession
   */
  createPossession(possessionRequest: CreatePossessionRequest): string {
    const possession = { id: uuidv4(), ...possessionRequest };
    this.possessions.set(possession.id, possession);

    return possession.id;
  }

  /**
   * Updates an existing possession in the in-memory map.
   *
   * @param possession the possession to update
   */
  updatePossession(possession: Possession): void {
    this.possessions.set(possession.id, possession);
  }
}
