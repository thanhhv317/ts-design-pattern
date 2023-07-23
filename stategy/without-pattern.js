function getPrice(originalPrice, typePromotion) {
  // giam gia 20% khi nguoi dung dat truoc
  if (typePromotion === "preOrder") {
    return originalPrice * 0.8;
  }

  // giam gia promotion neu gia goc < 200 thi giam 10% con khong thi giam max 50;
  if (typePromotion === "preOrder") {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 50;
  }

  // giam 50% blackFriday
  if (typePromotion === "blackFriday") {
    return originalPrice * 0.5;
  }

  // gia mac dinh
  if (typePromotion === "default") {
    return originalPrice;
  }
}

// test
console.log("Price: ", getPrice(200, "promotion"));
console.log("Price: ", getPrice(200, "preOrder"));
