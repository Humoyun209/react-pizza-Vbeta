import NavbarButton from "../UI/NavbarButton";
import "../../styles.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <section className="flex justify-between">
      <Link to="/">
        <div className="flex gap-[17px] items-center">
          <img src={logo} className="w-[42px] h-[42px] md:w-[50px]" alt="" />
          <div className="flex-col hidden sm:flex">
            <h2 className="font-extrabold text-[24px] text-[#181818] leading-[29.23px] tracking-[0.01rem]">
              REACT PIZZA
            </h2>
            <p className="text-[#7B7B7B] text-[16px] leading-[19.49px]">
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
      </Link>
      {location.pathname !== "/basket" ? <NavbarButton /> : ""}
    </section>
  );
};

export default Navbar;
