import React, { Fragment, useContext } from "react";
import HeaderBasket from "../components/cart/HeaderBasket";
import CardBasket from "../components/cart/CardBasket";
import BasketFooter from "../components/cart/BasketFooter";
import Navbar from "../components/catalog/Navbar";
import { BasketContext } from "../context/BasketContext";
import { changeStateCart } from "../service/service";
import NotFound from "../components/cart/NotFound";

const BasketPage = () => {
  const { dataCart, sumQuantity, sumPrice, setSumQuantity, setSumPrice } =
    useContext(BasketContext);

  const handleDicAndInc = () => {
    const basketList = [...dataCart];

    const { sumPriceInBasket, sumQuantityInBasket } =
      changeStateCart(basketList);

    setSumQuantity(sumQuantityInBasket);
    setSumPrice(sumPriceInBasket);
  };

  return (
    <Fragment>
       <Navbar />
      {dataCart.length ? (
        <Fragment>
          <HeaderBasket />
          <div className="mt-[100px]">
            {dataCart.map((elem, index) => {
              return (
                <CardBasket
                  handleDicInc={handleDicAndInc}
                  key={elem.title}
                  cart={elem}
                  title={elem.title}
                  price={elem.price}
                  quantity={elem.quantity}
                  image={elem.image}
                  type={elem.type}
                  size={elem.size}
                  index={index}
                />
              );
            })}
          </div>
          <BasketFooter sumQuantity={sumQuantity} sumPrice={sumPrice} />
        </Fragment>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};

export default BasketPage;
