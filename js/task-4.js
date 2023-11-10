function getShippingCost(country) {
  const chinaPrice = 100;
  const chilePrice = 250;
  const australiaPrice = 170;
  const lamaicaPrice = 120;

  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${chinaPrice} credits`;
      break;
    case 'Chile':
      return `Shipping to ${country} will cost ${chilePrice} credits`;
      break;
    case 'Australia':
      return `Shipping to ${country} will cost ${australiaPrice} credits`;
      break;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${lamaicaPrice} credits`;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('Ukraine')); // "Sorry, there is no delivery to your country"
