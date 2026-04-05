import {formatCurrency} from '../../../src/helpers/formatCurrency';

/**
 * describe: suites de testes => agrupamentos
 */
describe('formatCurrency', () => {
  beforeAll(() => {
    // instruções a serem executadas antes de todos os testes da suite
  });
  afterAll(() => {
    // instruções a serem executadas após todos os testes da suite
  });
  beforeEach(() => {
    // instruções a serem executadas antes de cada teste da suite
  });
  //afterEach ...

  /**
   * test / it: testes individuais
   * - teste de cada possivel cenário de sucesso/erro
   */

  // test('formatCurrency(5.31) => R$ 5,31', () => {});
  it('should return R$ 5,31 when value = 5.31', () => {
    // AAA - Arrange, Act, Assert
    // Arrange
    const value = 5.31;

    // Act
    const formattedValue = formatCurrency(value);

    
    // Assert
    expect(formattedValue).toEqual('R$ 5,31');
  });
});
