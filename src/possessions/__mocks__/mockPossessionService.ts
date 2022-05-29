import { v4 as uuidv4 } from "uuid";
import { injectable } from "tsyringe";
import { CreatePossessionRequest, IPossessionService, Possession } from "../../types/possessions";

/**
 * Mock implementation of `PossessionService`
 */
@injectable()
export class MockPossessionService implements IPossessionService {
  possessions: Map<string, Possession> = new Map();
  public createPossessionRequests: CreatePossessionRequest[] = [];
  public updatePossessionRequests: Possession[] = [];
  public deletePossessionRequests: string[] = [];

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

  deletePossession(id: string): void {
    this.deletePossessionRequests.push(id);
    this.possessions.delete(id);
  }
}
