import { IPossessionService } from "../types/possessions";
import { PossessionController } from "./possessionController";
import {
  mockCreatePossessionRequest,
  mockPossession,
  mockPossessions,
} from "./__mocks__/mockPossessions";
import { MockPossessionService } from "./__mocks__/mockPossessionService";

describe("PossessionController", () => {
  let service: MockPossessionService;
  let controller: PossessionController;
  beforeEach(() => {
    service = new MockPossessionService();
    controller = new PossessionController(service);
  });

  describe("getPossessions()", () => {
    it("returns all possessions", () => {
      service.possessions = mockPossessions;
      const result = controller.getPossessions();

      expect(result).toEqual({ data: mockPossessions });
    });
  });

  describe("createPossession()", () => {
    it("creates a new possession", () => {
      controller.createPossession(mockCreatePossessionRequest);

      expect(service.createPossessionRequests).toEqual([mockCreatePossessionRequest]);
    });

    it("returns the location of the new possession", () => {
      const result = controller.createPossession(mockCreatePossessionRequest);

      expect(result).toEqual({
        data: { location: `api/v1/possessions/${service.possessions[0].id}` },
      });
    });
  });
});
