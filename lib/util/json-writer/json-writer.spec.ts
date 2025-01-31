import { IndentationType } from './indentation-type';
import { JSONWriter } from './json-writer';

describe('util/json-writer/json-writer', () => {
  const DATA = {
    value: 1,
  };

  it('should apply 2 spaces indentation by default', () => {
    const jsonWriter = new JSONWriter();

    expect(jsonWriter.write(DATA)).toStrictEqual('{\n  "value": 1\n}\n');
  });

  it('should apply indentation size', () => {
    const jsonWriter = new JSONWriter({
      indentationType: IndentationType.Space,
      indentationSize: 10,
    });

    expect(jsonWriter.write(DATA)).toStrictEqual(
      '{\n          "value": 1\n}\n'
    );
  });

  it('should apply indentation type', () => {
    const jsonWriter = new JSONWriter({
      indentationType: IndentationType.Tab,
    });

    expect(jsonWriter.write(DATA)).toStrictEqual('{\n\t"value": 1\n}\n');
  });

  it('new line at the end should be optional', () => {
    const jsonWriter = new JSONWriter({
      indentationType: IndentationType.Space,
      indentationSize: 10,
    });

    expect(jsonWriter.write(DATA, false)).toStrictEqual(
      '{\n          "value": 1\n}'
    );
  });
});
