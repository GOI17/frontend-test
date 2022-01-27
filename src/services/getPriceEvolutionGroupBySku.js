import getPriceEvolution from "./getPriceEvolution";

/**
 * getPriceEvolutionGroupBySku
 * @returns {Promise<object>}
 */
export default function getPriceEvolutionGroupBySku() {
  return getPriceEvolution().then((data) => {
    if (data.length === 0) return data;
    const formattedData = data.reduce((previousValue, currentValue) => {
      const currentSku = currentValue.sku;
      const previousValueItems = previousValue[currentSku] || [];
      const updatedItems = [...previousValueItems, currentValue];
      return { ...previousValue, [currentSku]: updatedItems };
    }, {});
    return formattedData;
  });
}
