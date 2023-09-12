const getProductPrice = (product_id, products) => {
  return products.filter((elem) => {
    elem.id === product_id;
  });
};

const checkCart = (title, cart) => {
  for (let elem of cart) {
    if (elem.title === title) {
      return true;
    }
  }
  return false;
};

const changeStateCart = (basketList) => {
  const sumPriceInBasket = basketList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  const sumQuantityInBasket = basketList.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  return {
    sumPriceInBasket,
    sumQuantityInBasket,
  };
};

const getPageNumber = (param) => {
  let page = "";
  for (let num of param.split("=")[1]) {
    if (num == parseInt(num)) {
      page = page + num;
    } else {
      break;
    }
  }
  return parseInt(page);
};

export { checkCart, getProductPrice, changeStateCart, getPageNumber };
