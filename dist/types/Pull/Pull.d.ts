import { JobStatus } from "../GQL";
import type { IOptions } from "./types";
export declare abstract class Pull<O extends IOptions> {
    options: O;
    status: JobStatus;
    static activePull: null | Pull<any>;
    constructor(options: O);
    abstract pull(): Promise<Pull<O>>;
    abstract pushResultsToCore(): Promise<void>;
    onComplete(): Promise<void>;
    setJobStatus(id?: number, status?: JobStatus): Promise<void>;
}
