import type { BaseSubscription } from "./BaseSubscription";
import type { ISubscription } from "./types";

export class Subscriptions {
  private initialized = false;
  public readonly Streams: ISubscription[];
  public instances: BaseSubscription<any, any>[] = [];
  constructor(...Streams: ISubscription[]) {
    this.Streams = Streams;
  }

  public initialize() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    for (const Stream of this.Streams) {
      this.instances.push(new Stream().initialize());
    }
  }

  public destroy() {
    if (!this.initialized) {
      return;
    }
    this.instances.forEach(instance => {
      instance.destroy();
    });
    this.instances = [];
  }
}
