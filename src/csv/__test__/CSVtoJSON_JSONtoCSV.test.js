import CSVtoJSON from '../CSVtoJSON';
import JSONtoCSV from '../JSONtoCSV';

const delimiter = ',';

const json = [
  {
    name: 'jack',
    age: '18',
    home: 'shanghai'
  },
  {
    name: 'mark',
    age: '19',
    home: 'beijing'
  }
];

const csv = 'name,age,home\njack,18,shanghai\nmark,19,beijing';

describe('test CSVtoJSON', () => {

  test('01 测试 CSVtoJSON = JSONtoCSV', () => {
    expect(CSVtoJSON(csv, delimiter)).toEqual(json);
    expect(JSONtoCSV(json, ['name','age', 'home'], delimiter)).toEqual(csv);
    expect(JSONtoCSV(json, ['name','age', 'home'], delimiter)).toEqual(csv);
    expect(CSVtoJSON(csv, delimiter)).toEqual(json);
  });

  test('02 测试不同的 delimiter', () => {
    const delimiter = ':';
    const csv = 'name:age:home\njack:18:shanghai\nmark:19:beijing';

    expect(JSONtoCSV(json, ['name', 'age', 'home'], delimiter)).toEqual(csv);
    expect(CSVtoJSON(csv, delimiter)).toEqual(json);
  });

  test('03 测试 CSVtoJSON 非数组', () => {
    const emptyJSON = {};

    expect(CSVtoJSON(1, delimiter)).toEqual(emptyJSON);
    expect(CSVtoJSON('', delimiter)).toEqual(emptyJSON);
    expect(CSVtoJSON({}, delimiter)).toEqual(emptyJSON);
    expect(CSVtoJSON(new Date(), delimiter)).toEqual(emptyJSON);
  });

  test('04 测试 CSVtoJSON 参数', () => {
    expect(CSVtoJSON()).toEqual({});
  });

  test('05 测试 JSONtoCSV 参数', () => {
    const t = () => {
      JSONtoCSV([1, 2, 3]);
    };
    expect(t).toThrow(Error);
    expect(JSONtoCSV(json, [], delimiter)).toEqual('');
    expect(JSONtoCSV()).toEqual('');
  });
});
