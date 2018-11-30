// https://www.w3.org/TR/service-workers-1/#extendable-event
class ExtendableEvent {
  constructor() {
    this.promise = null;
    this.response = null;
  }

  waitUntil(promise) {
    this.promise = promise;
  }

  passThroughOnException() {}
}

module.exports = ExtendableEvent;
