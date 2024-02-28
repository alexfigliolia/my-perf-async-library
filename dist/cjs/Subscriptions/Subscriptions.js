"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
class Subscriptions {
    constructor(...Streams) {
        this.initialized = false;
        this.instances = [];
        this.Streams = Streams;
    }
    initialize() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        for (const Stream of this.Streams) {
            this.instances.push(new Stream().initialize());
        }
    }
    destroy() {
        if (!this.initialized) {
            return;
        }
        this.instances.forEach(instance => {
            instance.destroy();
        });
        this.instances = [];
    }
}
exports.Subscriptions = Subscriptions;
