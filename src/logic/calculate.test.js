import calculate from './calculate.js'

describe('Calculate file tests', ()=> {
  test('AC button test', () => {
    const obj = {total: '123', next: '456', operation: '+'};
    const buttonName = 'AC';
    
    const nulles = calculate(obj, buttonName)
    expect(nulles).toStrictEqual({total: null, next: null, operation: null})
  })

  describe('ButtonName is Number', () => {
    test('next is 0 and buttonName is 0', () => {
      const buttonName = '0';
      const obj = {total: '123', next: '0', operation: '+'};

      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({})
    })

    test('There is an operation', () => {
      const buttonName = '4';
      const obj = {total: '123', next: '45', operation: '+'};

      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total:'123', next:'454', operation: '+'})
    })

    test('There is an operation BUT there is NOT a next value', () => {
      const buttonName = '9';
      const obj = {total: '123', next: null, operation: '+'};

      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total:'123', next:'9', operation: '+'})
    })
  })

  describe('ButtonName is .', () => {

    test('Obj.next includes .', () => {
      const buttonName = '.';
      const obj = {total: '123', next: '899.0', operation: '-'};

      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '123', next: '899.0', operation: '-'})
    })
    
    test('Obj.next DOESN\'T include .', () => {
      const buttonName = '.';
      const obj = {total: '123', next: '8990', operation: '-'};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '123', next: '8990.', operation: '-'})
    })
    
    test('Obj.operation exists and Obj.next DOESN\'T', () => {
      const buttonName = '.';
      const obj = {total: '123', next:null, operation: '-'};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({next: '0.'})
    })
    
    test('Only Obj.total exists AND inlcudes .', () => {
      const buttonName = '.';
      const obj = {total: '12.3', next:null, operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({})
    })
    
    test('Only Obj.total exists and DOESN\'T include .', () => {
      const buttonName = '.';
      const obj = {total: '123', next:null, operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '123.'})
    })
    
    test('Obj is empty', () => {
      const buttonName = '.';
      const obj = {};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '0.'})
    })
  })

  describe('ButtonName is =', () => {
    test('There is Obj.next AND Obj.operation', () => {
      const buttonName = '=';
      const obj = {total: '123', next:'56', operation: '+'};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '179', next: null, operation: null})
    })
    
    test('There is NO Obj.operation', () => {
      const buttonName = '=';
      const obj = {total: '123', next:'56', operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({})
    })
  })

  describe('ButtonName is +/-', () => {
    test('There is Obj.next', () => {
      const buttonName = '+/-';
      const obj = {total: '123', next:'56', operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '123', next:'-56', operation: null})
    })
    
    test('There is Obj.total BUT NOT Obj.next', () => {
      const buttonName = '+/-';
      const obj = {total: '123', next:null, operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '-123', next:null, operation: null})
    })
    
    test('There AREN\'T Obj.total & Obj.next', () => {
      const buttonName = '+/-';
      const obj = {total: null, next:null, operation: null};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({})
    })
  })

  describe('Extra cases', () => {
    test('User pressed an operation button and there is an existing operation', () => {
      const buttonName = '-';
      const obj = {total: '123', next:null, operation: '+'};
  
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '123', next:null, operation: '-'})
    })
    
    test('User pressed an operation button and there is an existing operation AND a next value', () => {
      const buttonName = '-';
      const obj = {total: '123', next:'123', operation: '+'};
      
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '246', next:null, operation: '-'})
    })
    
    test('no operation yet, but the user typed one & The user hasn\'t typed a number yet, just save the operation', () => {
      const buttonName = '-';
      const obj = {total: null, next:null, operation: null};
      
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({operation: '-'})
    })

    test('save the operation and shift \'next\' into \'total\'', () => {
      const buttonName = '-';
      const obj = {total: null, next:'12', operation: null};
      
      const result = calculate(obj, buttonName);
      expect(result).toStrictEqual({total: '12', next:null, operation: '-'})
    })

  })
})