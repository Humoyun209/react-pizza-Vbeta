import PaginationButton from "../UI/PaginationButton";

const Pagination = ({ numbers, indexPage, setPage }) => {
  return (
    <div className="flex gap-[5px] mt-[70px] ml-[50px]">
      <PaginationButton 
       name="lt"
       currentPage={indexPage} 
       setPage={setPage}
       >
        &lt;
      </PaginationButton>
      {numbers.map((elem) => {
        if (elem.num == indexPage) {
          return (
            <PaginationButton
              key={elem.num}
              indexPage={indexPage}
              page={elem.num}
              setPage={setPage}
            >
              {elem.num}
            </PaginationButton>
          );
        } else {
          return (
            <PaginationButton
              key={elem.num}
              indexPage={null}
              page={elem.num}
              setPage={setPage}
            >
              {elem.num}
            </PaginationButton>
          );
        }
      })}
      <PaginationButton
        name="gt"
        currentPage={indexPage}
        setPage={setPage}
        length={numbers.length}
      >
        &gt;
      </PaginationButton>
    </div>
  );
};

export default Pagination;
