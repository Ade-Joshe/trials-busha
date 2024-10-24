export function formatCurrency(amount: number | string, locale = 'en-US'): string {
  const formattedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(formattedAmount)) {
    throw new Error('Invalid amount provided');
  };

  return new Intl.NumberFormat(locale).format(formattedAmount);
}