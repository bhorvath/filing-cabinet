import { container } from "tsyringe";
import type { IocContainer } from "tsoa";
import { IPossessionService } from "./types/possessions";
import { Dependency } from "./dependency";
import { PossessionService } from "./possessions/possessionService";
import { InMemoryDataStore } from "./dataAccess/inMemoryDataStore";
import { DataStore } from "./types/dataAccess";

export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => {
    container.register<IPossessionService>(Dependency.PossessionService, {
      useClass: PossessionService,
    });
    container.register<DataStore>(Dependency.DataStore, { useClass: InMemoryDataStore });

    return container.resolve<T>(controller as never);
  },
};
