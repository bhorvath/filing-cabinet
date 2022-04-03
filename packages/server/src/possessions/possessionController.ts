import { Controller, Get, Route } from "tsoa";
import { inject, singleton } from "tsyringe";
import { Dependency } from "../dependency";
import { ApiResponseBody } from "../types/api";
import { IPossessionService, Possession } from "../types/possessions";

@Route("api/v1/possessions")
@singleton()
export class PossessionController extends Controller {
  constructor(@inject(Dependency.PossessionService) private service: IPossessionService) {
    super();
  }

  /**
   * Retrieves all possessions
   */
  @Get()
  public getPossessions(): ApiResponseBody<Possession[]> {
    const possessions = this.service.getPossessions();

    return { data: possessions };
  }
}
