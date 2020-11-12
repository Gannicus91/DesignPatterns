class Singleton {
  private static instance: Singleton

  private constructor() {
    console.log('Create instance.');
  }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  importantMethod(text){
    console.log(text);
  }
}

function singleton() {
  const singleton1 = Singleton.getInstance();
  singleton1.importantMethod('bla-bla-bla');
  singleton1.importantMethod('alarm');
  const singleton2 = Singleton.getInstance();
  singleton2.importantMethod('important text');
}

singleton();
