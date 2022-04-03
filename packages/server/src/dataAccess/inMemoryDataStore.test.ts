import {
  mockCreatePossessionRequest,
  mockPossession,
  mockPossessions,
} from "../possessions/__mocks__/mockPossessions";
import { InMemoryDataStore } from "./inMemoryDataStore";
import { MockDataStore } from "./__mocks__/mockDataStore";

describe("InMemoryDataStore", () => {
  describe("getPossessions()", () => {
    it("returns all possessions", () => {
      const dataStore = new InMemoryDataStore(mockPossessions);
      const result = dataStore.getPossessions();

      expect(result).toEqual(mockPossessions);
    });
  });

  describe("createPossession()", () => {
    it("creates a new possession", () => {
      const dataStore = new InMemoryDataStore();
      dataStore.createPossession(mockCreatePossessionRequest);

      expect(dataStore.getPossessions()).toEqual([
        expect.objectContaining({
          ...mockCreatePossessionRequest,
          id: expect.stringMatching(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/),
        }),
      ]);
    });

    it("returns the ID of the new possession", () => {
      const dataStore = new InMemoryDataStore();
      const result = dataStore.createPossession(mockCreatePossessionRequest);

      expect(result).toEqual(dataStore.getPossessions()[0].id);
      expect(result).toEqual(
        expect.stringMatching(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
      );
    });
  });
});
