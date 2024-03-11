import type { IOptions, Pull } from "Pull";
import type { BaseSubscription } from "./BaseSubscription";

export interface IBaseSubscription<P extends IOptions, T extends Pull<P>> {
  closed: boolean;
  initialize: () => BaseSubscription<P, T>;
  poll: () => Promise<void>;
  createPull: (job: P) => T;
  destroy: () => void;
  onPoll: (job?: P | null) => void;
  enqueue: (pull: T) => Promise<void>;
}

export type ISubscription<
  T extends IBaseSubscription<any, any> = IBaseSubscription<any, any>,
> = new () => T;
