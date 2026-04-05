export interface IDiscount {
    price: number;
    percentage: number;
}

//a interface serve para definir a estrutura de um objeto, ou seja, quais propriedades ele deve ter e quais tipos de dados essas propriedades devem conter. No caso da interface IDiscount, ela define que um objeto do tipo IDiscount deve ter uma propriedade price do tipo number e uma propriedade percentage do tipo number. Isso ajuda a garantir que os objetos usados em nosso código tenham a estrutura correta e facilita o desenvolvimento, pois o TypeScript pode fornecer autocompletar e verificar erros de tipoe

export interface IOrder {
    id: number;
    product: string;
    qyuantity: number;
    observation?: string;
}