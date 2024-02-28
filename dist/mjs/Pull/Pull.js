import { AsyncServiceRequest } from "@alexfigliolia/my-performance-clients";
import { JobStatus, setJobStatus } from "../GQL/index.js";
export class Pull {
    options;
    status = JobStatus.Pending;
    static activePull = null;
    constructor(options) {
        this.options = options;
    }
    async onComplete() {
        if (this.status !== JobStatus.Failed) {
            await this.pushResultsToCore();
        }
        await this.setJobStatus();
    }
    async setJobStatus(id = this.options.id, status = this.status) {
        try {
            await AsyncServiceRequest({
                query: setJobStatus,
                variables: {
                    id,
                    status,
                },
            });
        }
        catch (error) {
            // TODO - handle status update errors
        }
    }
}
