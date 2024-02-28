export class Subscriptions {
    initialized = false;
    Streams;
    instances = [];
    constructor(...Streams) {
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
