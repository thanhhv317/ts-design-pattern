// giam gia 20% khi nguoi dung dat truoc
function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

// giam gia promotion neu gia goc < 200 thi giam 10% con khong thi giam max 50;
function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 50;
}

// gia mac dinh
function defaultPrice(originalPrice) {
  return originalPrice;
}

// giam 50% blackFriday
function blackFridayPrice(originalPrice) {
  return originalPrice * 0.5;
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  default: defaultPrice,
  blackFriday: blackFridayPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

// test
console.log("Price: ", getPrice(200, "promotion"));
console.log("Price: ", getPrice(200, "preOrder"));
