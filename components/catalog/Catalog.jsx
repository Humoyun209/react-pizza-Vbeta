import React, { useContext } from "react";
import Card from "./Card";
import { BasketContext } from "../../context/BasketContext";

const Catalog = ({ pizzas }) => {
  const { dataCart } = useContext(BasketContext);

  return (
    <section className="mt-[32px]">
      <h1 className="text-[32px] leading-[33px] font-bold text-[#000000] tracking-[0.01rem]">
        Все пиццы
      </h1>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pizzas.map((elem) => {
          const bask = dataCart.find((pr) => pr.title === elem.title);
          console.log(bask);
          return (
            <Card
              image={elem.imageUrl}
              prBask={bask?.quantity || 0}
              price={elem.price}
              title={elem.title}
              sizes={elem.sizes}
              types={elem.types}
              key={elem.id}
              product_id={elem.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
