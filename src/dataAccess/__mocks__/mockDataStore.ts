import { v4 as uuidv4 } from "uuid";
import { injectable } from "tsyringe";
import { DataStore } from "../../types/dataAccess";
import { CreatePossessionRequest, Possession } from "../../types/possessions";

/**
 * Mock implementation of `DataStore`
 */
@injectable()
export class MockDataStore implements DataStore {
  possessions: Map<string, Possession> = new Map();
  createPossessionRequests: CreatePossessionRequest[] = [];
  updatePossessionRequests: Possession[] = [];

  getPossessions(): Possession[] {
    return Array.from(this.possessions.values());
  }

  createPossession(possessionRequest: CreatePossessionRequest): string {
    this.createPossessionRequests.push(possessionRequest);
    const possession = { id: uuidv4(), ...possessionRequest };
    this.possessions.set(possession.id, possession);

    return possession.id;
  }

  updatePossession(possession: Possession): void {
    this.updatePossessionRequests.push(possession);
    this.possessions.set(possession.id, possession);
  }
}
