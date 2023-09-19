import React from "react";
import { useNavigate } from "react-router-dom";

const BasketFooter = ({ sumPrice, sumQuantity }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center max-w-[820px] mx-auto mt-[100px]">
      <div className="flex flex-col gap-[40px]">
        <div className=" flex gap-[10px] text-[22px] leading-[26.8px] font-bold tracking-[0.01rem]">
          <p className="font-normal">Всего пицц:</p> <h3>{sumQuantity} шт.</h3>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="py-[16px] px-[25px] text-[#D3D3D3] text-[16px] leading-[19.49px] font-bold border-[1px] border-[#D3D3D3] rounded-[30px] hover:border-[#948f8f] hover:text-[#948f8f]"
        >
          &lt;&nbsp;&nbsp;Вернуться назад
        </button>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className=" flex gap-[10px] text-[22px] leading-[26.8px] font-bold tracking-[0.01rem]">
          <p className="font-normal">Сумма заказа:</p>{" "}
          <h3 className="text-[#FE5F1E]">{sumPrice} ₽</h3>
        </div>
        <button className="py-[16px] px-[25px] text-[#ffffff] text-[16px] leading-[19.49px] font-bold border-[1px] border-[#EB5A1E] rounded-[30px] bg-[#EB5A1E] hover:bg-white hover:text-[#EB5A1E]">
          Оплатить сейчас
        </button>
      </div>
    </div>
  );
};

export default BasketFooter;
