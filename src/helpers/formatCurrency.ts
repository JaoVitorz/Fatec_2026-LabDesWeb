export const formatCurrency = (value: number): string => {
  const formattedCurrency = value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace(/\u00A0/g, ' ');
  return formattedCurrency;
};
