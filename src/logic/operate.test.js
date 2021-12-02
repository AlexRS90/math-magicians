import operate from './operate.js';

describe('Operate file tests', () => {
  test('Operation +', () => {
    const numberOne = '420';
    const numberTwo = '20';
    const operation = '+';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('440');
  })
  test('Operation -', () => {
    const numberOne = '420';
    const numberTwo = '20';
    const operation = '-';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('400');
  })
  test('Operation x', () => {
    const numberOne = '420';
    const numberTwo = '20';
    const operation = 'x';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('8400');
  })
  test('Operation ÷', () => {
    const numberOne = '420';
    const numberTwo = '20';
    const operation = '÷';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('21');
  })
  
  test('Operation ÷ with Error', () => {
    const numberOne = '420';
    const numberTwo = '0';
    const operation = '÷';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('Can\'t divide by 0.');
  })

  test('Operation %', () => {
    const numberOne = '420';
    const numberTwo = '20';
    const operation = '%';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('0');
  })
  
  test('Operation % with Error', () => {
    const numberOne = '420';
    const numberTwo = '0';
    const operation = '%';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('Can\'t divide by 0.');
  })
})