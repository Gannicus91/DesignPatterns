interface Listener {
  update(message: string)
}

class LoggingListener implements Listener {
  readonly name: string

  constructor(name: string) {
    this.name = name;
  }

  update(message: string) {
    console.log(`${this.name}: ${message}`);
  }
}

class EmailAlertsListener implements Listener {
  update(message: string) {
    console.log(`!!!${message}!!!`);
  }
}

class EventManager {
  readonly listeners: Record<string, Array<Listener>>

  constructor() {
    this.listeners = {};
  }

  subscribe(eventType: string, listener: Listener) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].push(listener);
    } else {
      this.listeners[eventType] = [listener];
    }
  }

  unsubscribe(eventType: string, listener: Listener) {
    if (!this.listeners[eventType]){
      return;
    }
    const index = this.listeners[eventType].indexOf(listener);
    if (~index) {
      this.listeners[eventType].splice(1, index);
    }
  }

  notify(eventType: string, data: string){
    this.listeners[eventType]?.forEach(item => item.update(data));
  }
}

class EventPublisher {
  public events: EventManager

  constructor() {
    this.events = new EventManager();
  }

  open() {
    this.events.notify('open', 'Im opened');
  }

  suspend() {
    this.events.notify('suspend', 'Im suspended');
  }

  close() {
    this.events.notify('close', 'Im closed');
  }
}

function observerTest(): void {
  const eventPublisher = new EventPublisher();
  const loggingListener = new LoggingListener('Pheodosy II');
  const emailListener = new EmailAlertsListener();
  eventPublisher.events.subscribe('open', loggingListener);
  eventPublisher.events.subscribe('open', emailListener);
  eventPublisher.events.subscribe('suspend', emailListener);
  eventPublisher.events.subscribe('close', loggingListener);
  eventPublisher.events.subscribe('close', emailListener);
  console.log(eventPublisher.events.listeners);
  eventPublisher.open();
  eventPublisher.suspend();
  eventPublisher.close();
  eventPublisher.events.unsubscribe('close', emailListener);
  console.log(eventPublisher.events.listeners);
  eventPublisher.close();
}

observerTest();
