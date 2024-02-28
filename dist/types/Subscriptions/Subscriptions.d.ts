import type { BaseSubscription } from "./BaseSubscription";
import type { ISubscription } from "./types";
export declare class Subscriptions {
    private initialized;
    readonly Streams: ISubscription[];
    instances: BaseSubscription<any, any>[];
    constructor(...Streams: ISubscription[]);
    initialize(): void;
    destroy(): void;
}
