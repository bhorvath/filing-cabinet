import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../types/dataAccess";
import { CreatePossessionRequest, Possession } from "../types/possessions";

export class InMemoryDataStore implements DataStore {
  constructor(private possessions: Possession[] = []) {}

  /**
   * Retrieves all possessions from an in-memory array
   *
   * @returns all possessions
   */
  getPossessions(): Possession[] {
    return this.possessions;
  }

  /**
   * Creates a new possession in the in-memory array
   *
   * @param possessionRequest the possession to create
   * @returns the ID of the new possession
   */
  createPossession(possessionRequest: CreatePossessionRequest): string {
    const possession = { id: uuidv4(), ...possessionRequest };
    this.possessions.push(possession);

    return possession.id;
  }
}
