import { PossessionController } from "./possessionController";
import { mockPossessions } from "./__mocks__/mockPossessions";
import { MockPossessionService } from "./__mocks__/mockPossessionService";

describe("PossessionController", () => {
  let controller: PossessionController;
  beforeEach(() => {
    const mockService = new MockPossessionService();
    controller = new PossessionController(mockService);
  });

  describe("getPossessions()", () => {
    it("returns all possessions", () => {
      const result = controller.getPossessions();

      expect(result).toEqual({ data: mockPossessions });
    });
  });
});
