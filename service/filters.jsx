const filterByCategory = (data, category, pizza_json) => {
  data = data.filter((elem) => elem.category === category);

  if (category === 6) {
    data = [...pizza_json];
  }
  return data;
};

const filterByParams = (data, sortId) => {
  if (sortId === 0) {
    data.sort((a, b) => b.rating - a.rating);
  } else if (sortId === 1) {
    data.sort((a, b) => a.price - b.price);
  } else if (sortId === 2) {
    data.sort((a, b) => a.title.localeCompare(b.title));
  }
  return data;
};

export { filterByCategory, filterByParams };
