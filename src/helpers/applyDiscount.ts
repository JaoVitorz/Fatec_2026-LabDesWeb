    import {formatCurrency} from "./formatCurrency";
import { IDiscount } from "../interfaces/IDiscount";

export const applyDiscount = (data: IDiscount): string => { //data significa dados e usamos porque é um objeto que tem as informações necessárias para calcular o desconto
    const discountValue = data.price * (data.percentage / 100) //calcula o valor do desconto multiplicando o preço pelo percentual dividido por 100
const finalPrice = data.price - discountValue //calcula o preço final subtraindo o valor do desconto do preço original
// Formata e retorna como string usando o helper que já existe
  // ex: 90 → 'R$ 90,00'
return formatCurrency(finalPrice) //formata o preço final para o formato de moeda brasileira
    }


    //eu to usando data porque é um objeto que 
    // tem as informações necessárias para calcular o desconto, ou seja, o preço e o percentual de desconto. O nome "data" é genérico, mas é comum usar esse nome para representar um objeto que contém informações
    // . Se preferir, pode usar outro nome mais específico, como "discountData" ou "discountInfo".
    //eu uso (data: IDiscount) para indicar que a função applyDiscount recebe um parâmetro chamado data, que é do tipo IDiscount. O tipo IDiscount é uma interface que define a estrutura do objeto que deve ser passado para a função, ou seja, ele deve conter as propriedades price (número) e porcentage (número). Isso ajuda a garantir que a função receba os dados corretos e facilita o desenvolvimento, pois o TypeScript pode fornecer autocompletar e verificar erros de tipo.


    