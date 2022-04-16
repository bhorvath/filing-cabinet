import { v4 as uuidv4 } from "uuid";
import { injectable } from "tsyringe";
import { DataStore } from "../../types/dataAccess";
import { CreatePossessionRequest, Possession } from "../../types/possessions";

/**
 * Mock implementation of `DataStore`
 */
@injectable()
export class MockDataStore implements DataStore {
  possessions: Possession[] = [];
  createPossessionRequests: CreatePossessionRequest[] = [];

  getPossessions(): Possession[] {
    return this.possessions;
  }

  createPossession(possessionRequest: CreatePossessionRequest): string {
    this.createPossessionRequests.push(possessionRequest);
    const possession = { id: uuidv4(), ...possessionRequest };
    this.possessions.push(possession);

    return possession.id;
  }
}
