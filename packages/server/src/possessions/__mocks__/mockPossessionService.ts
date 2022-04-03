import { injectable } from "tsyringe";
import { IPossessionService, Possession } from "../../types/possessions";
import { mockPossessions } from "./mockPossessions";

/**
 * Mock implementation of `PossessionService`
 */
@injectable()
export class MockPossessionService implements IPossessionService {
  getPossessions(): Possession[] {
    return mockPossessions;
  }
}
