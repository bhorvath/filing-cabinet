import { container } from "tsyringe";
import type { IocContainer } from "tsoa";

export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => {
    return container.resolve<T>(controller as never);
  },
};
