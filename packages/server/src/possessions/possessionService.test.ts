import { MockDataStore } from "../dataAccess/__mocks__/mockDataStore";
import { PossessionService } from "./possessionService";
import { mockPossessions } from "./__mocks__/mockPossessions";

describe("PossessionService", () => {
  let service: PossessionService;

  beforeEach(() => {
    const dataStore = new MockDataStore(mockPossessions);
    service = new PossessionService(dataStore);
  });

  describe("getPossessions()", () => {
    it("returns all possessions", async () => {
      const result = await service.getPossessions();

      expect(result).toEqual(mockPossessions);
    });
  });
});
