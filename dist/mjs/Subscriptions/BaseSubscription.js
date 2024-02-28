import { JobStatus } from "../GQL/Types/index.js";
export class BaseSubscription {
    closed = false;
    activity = "poll";
    destroy() {
        this.stream.closeAll();
        this.closed = true;
    }
    onPoll(job) {
        if (!job) {
            this.activity = "stream";
        }
        else {
            this.activity = "poll";
            const pull = this.createPull(job);
            void this.enqueue(pull);
        }
    }
    onStream(job) {
        if (this.activity !== "stream" || !job) {
            return;
        }
        const pull = this.createPull(job);
        void pull.setJobStatus(job.id, JobStatus.Inprogress);
        void this.enqueue(pull);
    }
    async enqueue(pull) {
        const puller = await pull.pull();
        await puller.onComplete();
        if (!this.closed) {
            return this.poll();
        }
    }
}
