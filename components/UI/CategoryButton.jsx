import './../../styles.css'

const CategoryButton = ({children, handleClick, cat, ind}) => {
  
  return (
    <button onClick={handleClick} className={`${cat === ind ? "bg-[#282828] text-white" : "bg-[#F9F9F9] text-[#2C2C2C]"} rounded-[30px] py-[11px] px-[22px] hover:text-white hover:bg-[#282828]`}>
        {children}
    </button>
  )
}

export default CategoryButton