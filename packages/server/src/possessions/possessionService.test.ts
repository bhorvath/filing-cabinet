import { MockDataStore } from "../dataAccess/__mocks__/mockDataStore";
import { PossessionService } from "./possessionService";
import {
  mockCreatePossessionRequest,
  mockPossession,
  mockPossessions,
} from "./__mocks__/mockPossessions";

describe("PossessionService", () => {
  let service: PossessionService;
  let dataStore: MockDataStore;

  beforeEach(() => {
    dataStore = new MockDataStore();
    service = new PossessionService(dataStore);
  });

  describe("getPossessions()", () => {
    it("returns all possessions", () => {
      dataStore.possessions = mockPossessions;
      const result = service.getPossessions();

      expect(result).toEqual(mockPossessions);
    });
  });

  describe("createPossession()", () => {
    it("creates a new possession", () => {
      service.createPossession(mockCreatePossessionRequest);

      expect(dataStore.createPossessionRequests).toEqual([mockCreatePossessionRequest]);
    });

    it("returns the ID of the new possession", () => {
      const result = service.createPossession(mockCreatePossessionRequest);

      expect(result).toEqual(dataStore.possessions[0].id);
    });
  });
});
