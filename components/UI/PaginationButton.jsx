import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaginationButton = ({
  children,
  indexPage,
  currentPage,
  page,
  setPage,
  name,
  length,
}) => {

  const handleSetPage = () => {
    if (name == "gt" && currentPage !== length) {
      setPage(currentPage + 1);
    } else if (name == "lt" && currentPage !== 1) {
      setPage(currentPage - 1);
    } else if (page !== indexPage) {
      setPage(page);
    }
  };

  return (
    <button
      onClick={handleSetPage}
      disabled={indexPage ? true : false}
      className={`text-[16px] leading-[12px] px-[16px] py-[13.5px] border-[#FE5F1E] border-[2px] rounded-full font-bold ${
        !indexPage
          ? "text-[#FE5F1E] hover:bg-[#fe5f1e] hover:text-white"
          : "bg-[#FE5F1E] text-white"
      }`}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default PaginationButton;
