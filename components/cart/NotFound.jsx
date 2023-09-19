import React from "react";
import notfound from "../../assets/basket404.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[205px] max-w-[547px] flex flex-col items-center mx-auto">
      <h2 className=" font-bold text-[33px] leading-[39px] tracking-[0.01rem] text-center">
        Корзина пустая 😕
      </h2>
      <p className="text-[#777777] text-[18px] leading-[26.17px] tracking-[0.01rem] text-center mt-[10px]">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img className="mt-[47px]" src={notfound} alt="" />
      <button
        onClick={() => navigate(-1)}
        className="py-[16px] px-[25px] my-[74px] text-[#D3D3D3] text-[16px] leading-[19.49px] font-bold border-[1px] border-[#D3D3D3] rounded-[30px] hover:border-[#948f8f] hover:text-[#948f8f]"
      >
        &lt;&nbsp;&nbsp;Вернуться назад
      </button>
    </div>
  );
};

export default NotFound;
