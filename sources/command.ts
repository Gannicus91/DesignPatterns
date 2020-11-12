interface Command {
  execute()
}

class Light {
  on() {
    console.log('light is on');
  }

  off() {
    console.log('light is off');
  }
}

class LightOnCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }
}

class SimpleRemoteControl {
  private slot: Command

  setCommand(command: Command) {
    this.slot = command;
  }

  pressButton(){
    this.slot.execute();
  }
}

function command(): void {
  const remote: SimpleRemoteControl = new SimpleRemoteControl();

  const light: Light = new Light();
  const lightOn: LightOnCommand = new LightOnCommand(light);
  const lightOff: LightOffCommand = new LightOffCommand(light);

  remote.setCommand(lightOn);
  remote.pressButton();
  remote.setCommand(lightOff);
  remote.pressButton();
}

command();
