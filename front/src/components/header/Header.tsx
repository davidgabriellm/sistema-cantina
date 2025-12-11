import { IoFastFoodOutline } from "react-icons/io5";
import profile from "../../assets/img.png"

const Header = () => {
  return (
    <div className="flex w-full bg-gray-50 justify-between border-b-2 border-gray-100 shadow">
        <div className="p-4 flex gap-2 justify-center items-center">
            <IoFastFoodOutline size={18} className="" 
            />
            <h1 className="text-[16px]">Cantina Escolar</h1>
        </div>
        <div className="p-4 flex gap-2 justify-center items-center">
            <button className="text-[15px] font-light">David</button>
            <img src={profile} alt="" className="text-[16px]"/>
        </div>
    </div>
  )
}

export default Header