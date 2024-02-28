import type { GQLSubscription } from "@alexfigliolia/graphql-client";
import type { IOptions, Pull } from "Pull";
import type { BaseSubscription } from "./BaseSubscription";

export type Activity = "stream" | "poll";

export interface IBaseSubscription<P extends IOptions, T extends Pull<P>> {
  closed: boolean;
  activity: Activity;
  stream: GQLSubscription<any, any>;
  initialize: () => BaseSubscription<P, T>;
  poll: () => Promise<void>;
  createPull: (job: P) => T;
  destroy: () => void;
  onPoll: (job?: P | null) => void;
  onStream: (job?: P) => void;
  enqueue: (pull: T) => Promise<void>;
}

export type ISubscription<
  T extends IBaseSubscription<any, any> = IBaseSubscription<any, any>,
> = new () => T;
