interface Button {
  render()
  onClick(func, args)
}

class WindowsButton implements Button {
  render() {
    console.log('create windows button');
  }

  onClick(func, args) {
    func(args);
  }
}

class HTMLButton implements Button {
  render() {
    console.log('create html button');
  }

  onClick(func, args) {
    console.log('html button clicked');
    func(args);
  }
}

abstract class Dialog {
  render(){
    const okButton: Button = this.createButton();
    okButton.onClick((val) => console.log(`click: ${val}`), 5);
    okButton.render();
  }

  abstract createButton(): Button
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}

class Application {
  dialog: Dialog

  initialize() {
    const config = this.readConfig();
    if (config.OS === 'Windows') {
      this.dialog = new WindowsDialog();
    } else if (config.OS === 'Web') {
      this.dialog = new WebDialog();
    } else {
      throw new Error('Unlnown OS');
    }
  }

  readConfig() {
    const num = Math.random();
    return {
      OS: num > 0.5 ? 'Windows' : 'Web',
    };
  }

  main(){
    this.initialize();
    this.dialog.render();
  }
}

const app = new Application();

app.main();



