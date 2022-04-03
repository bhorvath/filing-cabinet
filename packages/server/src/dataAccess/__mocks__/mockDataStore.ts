import { injectable } from "tsyringe";
import { DataStore } from "../../types/dataAccess";
import { Possession } from "../../types/possessions";

/**
 * Mock implementation of `DataStore`
 */
@injectable()
export class MockDataStore implements DataStore {
  constructor(public possessions: Possession[] = []) {}

  getPossessions(): Possession[] {
    return this.possessions;
  }
}
