import { v4 as uuidv4 } from "uuid";
import { CreatePossessionRequest, Possession } from "../../types/possessions";

const possession = {
  name: "Mock Possession",
  description: "This is a mock possession.",
  purchaseDate: Date.now(),
  price: 10,
  store: "Mock Store",
};

export const mockCreatePossessionRequest: CreatePossessionRequest = possession;

export const mockPossession: Possession = {
  ...possession,
  id: uuidv4(),
};

export const mockPossessions: Possession[] = [mockPossession];
