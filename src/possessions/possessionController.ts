import { Body, Controller, Get, Path, Post, Route, SuccessResponse } from "tsoa";
import { inject, singleton } from "tsyringe";
import { Dependency } from "../dependency";
import { ApiCreateResponseBody, ApiResponseBody } from "../types/api";
import { CreatePossessionRequest, IPossessionService, Possession } from "../types/possessions";

@Route("api/v1/possessions")
@singleton()
export class PossessionController extends Controller {
  constructor(@inject(Dependency.PossessionService) private service: IPossessionService) {
    super();
  }

  /**
   * Retrieves all possessions
   *
   * @returns all possessions
   */
  @Get()
  public getPossessions(): ApiResponseBody<Possession[]> {
    const possessions = this.service.getPossessions();

    return { data: possessions };
  }

  /**
   * Creates a new possession
   *
   * @param possessionRequest the possession to create
   * @returns the location of the new request
   */
  @Post()
  @SuccessResponse("201", "Created")
  public createPossession(
    @Body() possessionRequest: CreatePossessionRequest
  ): ApiCreateResponseBody {
    this.setStatus(201);
    const id = this.service.createPossession(possessionRequest);
    const location = `api/v1/possessions/${id}`;

    return { data: { location } };
  }
}
