import { Body, Controller, Delete, Get, Path, Post, Put, Route, SuccessResponse } from "tsoa";
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
   * Retrieves all possessions.
   *
   * @returns all possessions
   */
  @Get()
  public getPossessions(): ApiResponseBody<Possession[]> {
    const possessions = this.service.getPossessions();

    return { data: possessions };
  }

  /**
   * Creates a new possession.
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

  /**
   * Updates an existing possession.
   *
   * @param possession the possession to update
   */
  @Put()
  @SuccessResponse("204", "No Content")
  public updatePossession(@Body() possession: Possession): void {
    this.setStatus(204);
    this.service.updatePossession(possession);
  }

  /**
   * Deletes an existing possession.
   *
   * @param id the ID of the possession to delete
   */
  @Delete("{id}")
  @SuccessResponse("204", "No Content")
  public deletePossession(@Path() id: string): void {
    this.setStatus(204);
    this.service.deletePossession(id);
  }
}
