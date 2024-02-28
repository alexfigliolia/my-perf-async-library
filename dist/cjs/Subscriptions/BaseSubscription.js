"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSubscription = void 0;
const Types_1 = require("../GQL/Types");
class BaseSubscription {
    constructor() {
        this.closed = false;
        this.activity = "poll";
    }
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
        void pull.setJobStatus(job.id, Types_1.JobStatus.Inprogress);
        void this.enqueue(pull);
    }
    enqueue(pull) {
        return __awaiter(this, void 0, void 0, function* () {
            const puller = yield pull.pull();
            yield puller.onComplete();
            if (!this.closed) {
                return this.poll();
            }
        });
    }
}
exports.BaseSubscription = BaseSubscription;
