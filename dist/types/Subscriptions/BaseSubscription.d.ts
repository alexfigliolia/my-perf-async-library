import type { GQLSubscription } from "@alexfigliolia/graphql-client";
import type { IOptions, Pull } from "../Pull";
import type { Activity, IBaseSubscription } from "./types";
export declare abstract class BaseSubscription<P extends IOptions, T extends Pull<P>> implements IBaseSubscription<P, T> {
    closed: boolean;
    activity: Activity;
    abstract stream: GQLSubscription<any, any>;
    abstract initialize(): BaseSubscription<P, T>;
    abstract poll(): Promise<void>;
    abstract createPull(job: P): T;
    destroy(): void;
    onPoll(job?: P | null): void;
    onStream(job?: P): void;
    enqueue(pull: T): Promise<void>;
}
