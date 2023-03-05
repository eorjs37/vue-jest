import * as util from '../utils';
describe('utils tests.js ', () => {
  test('func testing', () => {
    const mockFn = jest.fn();
    const returnValue = mockFn.mockReturnValue('I am a mock!');

    expect(returnValue()).toBe('I am a mock!');
  });

  test('should ', async () => {
    const mockFn = jest.fn().mockResolvedValue(43);
    const result = await mockFn(); // 43
    expect(result).toBe(43);
  });

  test('calculator add spyOn', async () => {
    const calculator = {
      add: (a, b) => a + b,
    };

    const spyFn = jest.spyOn(calculator, 'add');
    const result = calculator.add(2, 3);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2, 3);
    expect(result).toBe(5);
  });

  test('calc testing', async () => {
    const spyFn = jest.spyOn(util, 'calc');
    const result = util.calc(2, 3);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2, 3);
    expect(result).toBe(5);
  });

  test('객체 비교하기', async () => {
    expect({ id: 1 }).toEqual({ id: 1 });
  });
});
