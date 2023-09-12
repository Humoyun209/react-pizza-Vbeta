import React, { useContext, useState } from "react";
import {
  nativeSizes,
  buttonsCardStyles,
  nativeTypes,
} from "../data-components/cardData";
import CardButton from "../UI/CardButton";
import { BasketContext } from "../../context/BasketContext";
import { checkCart } from "../../service/service";
import { changeStateCart } from "../../service/service";

const Card = ({ image, title, price, sizes, types, prBask}) => {

  const {
    dataCart,
    setDataCart,
    setSumQuantity,
    setSumPrice,
  } = useContext(BasketContext);

  const [type, setType] = useState(0);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(prBask);

  const handleSetQuantity = () => {
    const basketList = [...dataCart]
    
    if (checkCart(title, basketList)) {
      const elem = basketList.find(elem => elem.title === title)
      elem.quantity++
      setQuantity(elem.quantity)
    } else {
      setQuantity(1)
      basketList.push({
        title: title,
        price: price,
        image: image,
        type: nativeTypes[type].type,
        size: nativeSizes[size],
        quantity: 1
      })
    }
    const { sumPriceInBasket, sumQuantityInBasket} = changeStateCart(basketList)

    setDataCart(basketList)
    setSumPrice(sumPriceInBasket)
    setSumQuantity(sumQuantityInBasket)
  };
  return (
    <div className=" max-w-[260px] mt-[65px]">
      <img src={image} alt="" />
      <h3 className="h-[49px] text-[20px] leading-[24.36px] font-extrabold text-[#000000] text-center mt-[11px] mb-[22px]">
        {title}
      </h3>
      <div className="flex flex-col rounded-[10px] py-[7px] px-[5.73px] bg-[#F3F3F3]">
        <div className="grid grid-cols-2 gap-[5.73px]">
          {nativeTypes.map((elem, index) => {
            if (types.includes(elem.id)) {
              return (
                <button
                  key={index}
                  onClick={() => setType(index)}
                  className={`${buttonsCardStyles} ${
                    type === index ? "bg-white" : ""
                  }`}
                >
                  {elem.type}
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  disabled
                  className={` disabled:bg-[#f3f3f3] disabled:text-[#cbcbcb] ${buttonsCardStyles}`}
                >
                  {elem.type}
                </button>
              );
            }
          })}
        </div>
        <div className="grid grid-cols-3 gap-[5.73px] pt-1">
          {nativeSizes.map((elem, index) => {
            if (sizes.includes(elem)) {
              return (
                <button
                  key={index}
                  onClick={() => setSize(index)}
                  className={`${buttonsCardStyles} ${
                    size === index ? "bg-white" : ""
                  }`}
                >
                  {elem} см.
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  disabled
                  className={`disabled:bg-[#f3f3f3] disabled:text-[#cbcbcb] ${buttonsCardStyles}`}
                >
                  {elem} см.
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-between mt-[17px] items-center">
        <h2 className="text-[22px] leading-[26.8px] font-bold text-[#000000] tracking-[0.015rem]">
          от {price} ₽
        </h2>
        <CardButton quantity={quantity} handleSetQuantity={handleSetQuantity}/>
      </div>
    </div>
  );
};

export default Card;
