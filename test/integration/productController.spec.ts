import request from 'supertest';
import {app} from '../../src/app';
import * as productController from '../../src/controller/productController';

describe('Product Controller', () => {
  it('should return a product list, when all succeeds', async () => {
    // Arrange

    // Act
    const response = await request(app).get('/product').send();

    // Assert
    expect(response.status).toBe(200);   
    expect(response.body).toEqual([
      {brand: 'Trakinas', name: 'Bolacha', price: 'R$ 2,99'},
    ]);
  });
  it('should not return error, when empty list is returned', async () => {
    // Arrange
    jest.spyOn(productController, 'listProduct').mockResolvedValueOnce([]);

    // Act
    const response = await request(app).get('/product').send();

    // Assert
    expect(response.body).toEqual([]);
  });
});

//usamos o jestspy para criar um mock da função listProduct do productController, fazendo com que ela retorne uma lista vazia apenas para esse teste específico. Dessa forma, podemos testar o comportamento do endpoint /product quando a lista de produtos estiver vazia, sem afetar os outros testes que dependem do comportamento original da função listProduct.
//e quando usamos o jest.spyOn, estamos criando um mock da função listProduct do productController, ou seja, estamos substituindo a implementação original da função por uma nova implementação que retorna uma lista vazia apenas para esse teste específico. Isso nos permite testar o comportamento do endpoint /product quando a lista de produtos estiver vazia, sem afetar os outros testes que dependem do comportamento original da função listProduct.