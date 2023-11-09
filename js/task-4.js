const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const lamaicaPrice = 120;

function getShippingCost(country) {
  switch (country) {
    case country:
      `Shipping to ${country} will cost ${chinaPrice} credits`;
      break;
    default:
      'Sorry, there is no delivery to your country';
  }
  return;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('Ukraine')); // "Sorry, there is no delivery to your country"
