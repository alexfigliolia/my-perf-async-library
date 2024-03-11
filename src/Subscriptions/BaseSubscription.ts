import type { IOptions, Pull } from "Pull";
import type { IBaseSubscription } from "./types";

export abstract class BaseSubscription<P extends IOptions, T extends Pull<P>>
  implements IBaseSubscription<P, T>
{
  public closed = false;

  abstract initialize(): BaseSubscription<P, T>;

  abstract poll(): Promise<void>;

  abstract createPull(job: P): T;

  public destroy() {
    this.closed = true;
  }

  public onPoll(job?: P | null) {
    if (job) {
      const pull = this.createPull(job);
      void this.enqueue(pull);
    }
  }

  public async enqueue(pull: T) {
    const puller = await pull.pull();
    await puller.onComplete();
    if (!this.closed) {
      return this.poll();
    }
  }
}
