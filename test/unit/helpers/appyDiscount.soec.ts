import { applyDiscount } from '../../../src/helpers/applyDiscount';
import { IDiscount } from '../../../src/interfaces/IDiscount';
//o padrao aaa serve para organizar os testes em três etapas: Arrange, Act e Assert. O objetivo é tornar os testes mais legíveis e fáceis de entender, seguindo uma estrutura clara e consistente.
// Arrange: nessa etapa, a gente prepara os dados de entrada para o teste. Isso pode incluir a criação de objetos, definição de variáveis, configuração de mocks, etc. O objetivo é garantir que a função que estamos testando receba os dados corretos para o cenário que queremos testar.
// Act: nessa etapa, a gente chama a função que queremos testar, passando os dados de entrada necessários para o teste. O resultado da função é armazenado em uma variável para que possamos fazer asserções posteriormente.
// Assert: nessa etapa, a gente verifica se o resultado da função é o que a gente espera. A asserção é feita usando uma função de teste, como expect, que compara o resultado obtido com o resultado esperado. Se a asserção for verdadeira, o teste passa; caso contrário, ele falha.
describe('applyDiscount', () => {
  it('should return R$ 100,00 when price = 200 and percentage = 50', () => {
    // Arrange //aqui a gente prepara os dados de entrada para o teste. Isso pode incluir a criação de objetos, definição de variáveis, configuração de mocks, etc. O objetivo é garantir que a função que estamos testando receba os dados corretos para o cenário que queremos testar.
    const data: IDiscount = {
      price: 200,
      percentage: 50
    };

    // Act //aqui a gente chama a função que queremos testar, passando os dados de entrada necessários para o teste. O resultado da função é armazenado em uma variável para que possamos fazer asserções posteriormente.
    const result = applyDiscount(data);

    // Assert //aqui a gente verifica se o resultado da função é o que a gente espera. A asserção é feita usando uma função de teste, como expect, que compara o resultado obtido com o resultado esperado. Se a asserção for verdadeira, o teste passa; caso contrário, ele falha.
    expect(result).toEqual('R$ 100,00');
  });
  it('should return R$ 90,00 when price = 100 and porcentage = 10', () => {
        // AAA - Arrange, Act, Assert
        // Arrange
        const data: IDiscount = {
            price: 100,
            percentage: 10
        };

        // Act
        const result = applyDiscount(data);

        // Assert
        expect(result).toEqual('R$ 90,00');
    });
});

describe('applyDiscount', () => {
    it('should return R$ 90,00 when price = 100 and porcentage = 10', () => {
        // AAA - Arrange, Act, Assert
        // Arrange
        const data = {
            price: 100,
            porcentage: 10
        };

        // Act
        const result = applyDiscount(data);

        // Assert
        expect(result).toEqual('R$ 90,00');
    });
});