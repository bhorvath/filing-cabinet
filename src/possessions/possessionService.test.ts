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
      dataStore.possessions = new Map([[mockPossession.id, mockPossession]]);
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

      expect(result).toEqual(Array.from(dataStore.possessions.values())[0].id);
    });
  });

  describe("updatePossession()", () => {
    it("updates an existing possession", () => {
      dataStore.possessions = new Map([[mockPossession.id, mockPossession]]);
      const updatedPossession = { ...mockPossession, description: "Updated description" };
      service.updatePossession(updatedPossession);

      expect(dataStore.updatePossessionRequests).toEqual([updatedPossession]);
    });
  });
});
