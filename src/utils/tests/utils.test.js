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

  test('객체 비교하기', async () => {
    expect({ id: 1 }).toEqual({ id: 1 });
  });
});
