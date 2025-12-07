import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";


const Nav = () => {
  return <div className="w-2/12 p-4 bg-gray-50">
    <ul className="flex flex-col gap-3">
        <li>
            <Link to="/cliente" className="flex justify-start items-center gap-2">
            <IoPersonSharp size={14}/>
            <span className="text-[14px]">Cliente</span>
            </Link>
        </li>
        <li>
            <Link to="/cliente" className="flex justify-start items-center gap-2">
            <BsBriefcaseFill size={14}/>
            <span className="text-[14px]">Produtos</span>
            </Link>
        </li>
        <li>
            <Link to="/cliente" className="flex justify-start items-center gap-2">
            <MdShoppingCart size={14}/>
            <span className="text-[14px]">Vendas</span>
            </Link>
        </li>
        <li>
            <Link to="/cliente" className="flex justify-start items-center gap-2">
            <AiFillFund size={14}/>
            <span className="text-[14px]">Relatórios</span>
            </Link>
        </li>
    </ul>
  </div>;
};

export default Nav;
