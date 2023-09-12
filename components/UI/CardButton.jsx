const CardButton = ({quantity, handleSetQuantity}) => {

  return (
    <button onClick={handleSetQuantity} className="flex gap-[5px] items-center py-[11px] px-[12px] text-[#EB5A1E] text-[16px] leading-[19.49px] font-bold border-[1px] border-[#EB5A1E] rounded-[30px] hover:bg-[#EB5A1E] hover:text-white">
        <span className="text-[20px]">+</span>
        <span className="text-[16px] leading-[19.49px] font-bold text-center">Добавить</span>
        <span className= {`${quantity ? "" : "hidden"} bg-[#EB5A1E] px-[7px] py-[3px] text-white text-[13px] leading-[15.83px] font-bold rounded-[100px]`}>{quantity}</span>
    </button>
  )
}

export default CardButton