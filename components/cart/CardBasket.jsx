import React, { useContext, useState } from "react";
import { BasketContext } from "../../context/BasketContext";
import { changeStateCart } from "../../service/service";

const CardBasket = ({
  title,
  quantity,
  price,
  image,
  type,
  size,
  cart,
  handleDicInc,
  index,
}) => {
  const [amount, setAmount] = useState(quantity);
  const { dataCart, setDataCart, setSumQuantity, setSumPrice } =
    useContext(BasketContext);

  const handleChange = (event) => {
    if (event.target.dataset.ind === "plus") {
      cart.quantity++;
      setAmount(cart.quantity);
    }
    if (event.target.dataset.ind === "minus") {
      cart.quantity--;
      setAmount(cart.quantity);
    }

    handleDicInc();
  };

  const handleDelete = (event) => {
    const index = event.target.dataset.index;
    const basketList = [...dataCart];
    basketList.splice(index, 1);
    const { sumPriceInBasket, sumQuantityInBasket } =
      changeStateCart(basketList);

    setDataCart(basketList);
    setSumPrice(sumPriceInBasket);
    setSumQuantity(sumQuantityInBasket);
  };

  return (
    <div className="flex justify-between items-center mt-[50px] max-w-[820px] mx-auto">
      <div className="w-[280px] flex gap-[15px] items-center">
        <img className=" w-[80px]" src={image} alt="" />
        <div className="flex flex-col items-start gap-[5px]">
          <h1 className="text-[22px] leading-[26.8px] font-bold text-[#000000] tracking-[0.01rem]">
            {title}
          </h1>
          <p className="text-[18px] leading-[21.92px] text-[#8D8D8D] tracking-[0.01rem]">
            {type}, {size} см.
          </p>
        </div>
      </div>

      <div className="flex gap-[12px] items-center">
        <button
          disabled={amount > 1 ? false : true}
          onClick={handleChange}
          data-ind="minus"
          className={`${
            amount > 1
              ? "border-[#FE5F1E] text-[#FE5F1E] hover:bg-[#fe5f1e] hover:text-white"
              : "border-[#948f8f] text-[#948f8f]"
          } text-[12px] leading-[12px] px-[12px] py-[12px]  border-[2px] rounded-full font-bold'`}
        >
          {" "}
          &mdash;{" "}
        </button>
        <h3 className="w-[30px] text-center text-[22px] leading-[26.8px] font-bold">
          {amount}
        </h3>
        <button
          onClick={handleChange}
          data-ind="plus"
          className="text-[20px] leading-[16px] px-[13px] py-[11px] border-[#FE5F1E] border-[2px] rounded-full font-bold text-[#FE5F1E] hover:bg-[#fe5f1e] hover:text-white"
        >
          {" "}
          +{" "}
        </button>
      </div>
      <h2 className="w-[85px] text-[22px] leading-[26.8px] font-bold">
        {price * amount} ₽{" "}
      </h2>
      <button
        onClick={handleDelete}
        data-index={index}
        className="px-[15px] py-[11px] border-[#D0D0D0] text-[#D0D0D0] border-[2px] rounded-full text-[16px] leading-[16px] hover:border-[#948f8f] hover:text-[#948f8f]"
      >
        &times;
      </button>
    </div>
  );
};

export default CardBasket;
