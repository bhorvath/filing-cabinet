import { v4 as uuidv4 } from "uuid";
import { injectable } from "tsyringe";
import { CreatePossessionRequest, IPossessionService, Possession } from "../../types/possessions";
import { mockPossessions } from "./mockPossessions";

/**
 * Mock implementation of `PossessionService`
 */
@injectable()
export class MockPossessionService implements IPossessionService {
  public possessions: Possession[] = [];
  public createPossessionRequests: CreatePossessionRequest[] = [];

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
