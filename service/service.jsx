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

const getDataByPage = (page, data) => {
  const FILTER_PAGE = 4;
  const start = (page - 1) * FILTER_PAGE;
  const finish = page * FILTER_PAGE;
  const aa = data.filter((elem, index) => {
    return index >= start && index < finish;
  });

  return aa
};

const getPagination = (data) => {
  const len = Math.floor(data.length / 4) + 1;
  const pageNumber = [];

  for (let i = 1; i <= len; i++) {
    pageNumber.push({
      num: i,
    });
  }
  return pageNumber;
};

export {
  checkCart,
  getProductPrice,
  changeStateCart,
  getPageNumber,
  getDataByPage,
  getPagination,
};
