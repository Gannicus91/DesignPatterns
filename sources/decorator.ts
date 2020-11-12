const fs = require('fs');

interface DataSource {
  writeData(data: string)
  readData(): string
}

class FileDataSource implements DataSource {
  readonly filename: string

  constructor(filename) {
    this.filename = filename;
  }

  writeData(data: string) {
    fs.writeFileSync(this.filename, data);
  }

  readData(): string {
    return  fs.readFileSync(this.filename, 'utf-8');
  }
}

class DataSourceDecorator implements DataSource {
  protected wrapper: DataSource

  constructor(source: DataSource) {
    this.wrapper = source;
  }

  writeData(data: string) {
    this.wrapper.writeData(data);
  }

  readData(): string {
    return this.wrapper.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  constructor(props) {
    super(props);
  }


  writeData(data: string) {
    super.writeData(`!${data}!`);
  }

  readData(): string {
    return super.readData();
  }
}

class CompressionDecorator extends DataSourceDecorator {
  constructor(props) {
    super(props);
  }

  writeData(data: string) {
    super.writeData(`$${data}$`);
  }

  readData(): string {
    return super.readData();
  }
}

function decorator(): void {
  const data = 'data 1337 my date 1488';
  const source = new FileDataSource('file.txt');
  source.writeData(data);

  const compressionDecorator = new CompressionDecorator(source);
  compressionDecorator.writeData(data);

  const encryptionDecorator = new EncryptionDecorator(compressionDecorator);
  encryptionDecorator.writeData(data);
  console.log(encryptionDecorator.readData());
}

decorator();


