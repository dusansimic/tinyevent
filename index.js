class TinyEvent {
	constructor() {
		this._events = new Map();
	}

	_getListeners(eventName) {
		if (!this._events.has(eventName)) {
			this._events.set(eventName, new Set());
		}

		return this._events.get(eventName);
	}

	on(eventName, listener) {
		this._getListeners(eventName).add(listener);
		return this.off.bind(this, eventName, listener);
	}

	off(eventName, listener) {
		if (!listener) {
			this._getListeners(eventName).clear();
			return;
		}

		this._getListeners(eventName).delete(listener);
	}

	async emit(eventName, eventData) {
		const listeners = [...this._getListeners(eventName)].map(listener => listener(eventData));
		return Promise.all([...listeners]);
	}

	clear() {
		this._events.clear();
	}
}

module.exports = new TinyEvent();
