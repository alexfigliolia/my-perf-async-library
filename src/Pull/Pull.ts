import { AsyncServiceRequest } from "@alexfigliolia/my-performance-clients";
import type { SetJobStatusMutation, SetJobStatusMutationVariables } from "GQL";
import { JobStatus, setJobStatus } from "GQL";
import type { IOptions } from "./types";

export abstract class Pull<O extends IOptions> {
  options: O;
  status: JobStatus = JobStatus.Pending;
  public static activePull: null | Pull<any> = null;
  constructor(options: O) {
    this.options = options;
  }

  abstract pull(): Promise<Pull<O>>;

  abstract pushResultsToCore(): Promise<void>;

  public async onComplete() {
    if (this.status !== JobStatus.Failed) {
      await this.pushResultsToCore();
    }
    await this.setJobStatus();
  }

  public async setJobStatus(id = this.options.id, status = this.status) {
    try {
      await AsyncServiceRequest<
        SetJobStatusMutation,
        SetJobStatusMutationVariables
      >({
        query: setJobStatus,
        variables: {
          id,
          status,
        },
      });
    } catch (error) {
      // TODO - handle status update errors
    }
  }
}
