import { Link } from 'react-router-dom';
import { IoPersonSharp } from 'react-icons/io5';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { AiFillFund } from 'react-icons/ai';
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoLogoDropbox } from "react-icons/io5";
import profile from '../../assets/img.png';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


const Nav = () => {
  return (
    <>
      <div className="mt-5 ml-1 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <RiMenuUnfoldFill size={25} />
          </SheetTrigger>
          <SheetContent side="left" className="w-2/4 flex flex-col gap-7">
            <SheetClose asChild>
                <Link to="/" className='flex items-center  gap-3 mt-10 justify-start'>
                  <AiFillFund className='w-[15px] h-[15px] flex items-center justify-center'/>
                  <span className="text-[15px] font-light">Dashboard</span>
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link to="/produtos" className='flex items-center gap-3 justify-start'>
                  <MdShoppingCart className='w-[15px] h-[15px] flex items-center justify-center'/>
                  <span className="text-[15px] font-light">Produtos</span>
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link to="/clientes" className='flex items-center gap-3 justify-start'>
                  <IoPersonSharp className='w-[15px] h-[15px] flex items-center justify-center'/>
                  <span className="text-[15px] font-light">Clientes</span>
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link to="/pedidos" className='flex items-center gap-3 justify-start'>
                  <BsBriefcaseFill className='w-[15px] h-[15px] flex items-center justify-center'/>
                  <span className="text-[15px] font-light">Pedidos</span>
                </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div className=" hidden w-[5%] px-2 py-5 bg-gray-50 border border-gray-200 lg:flex items-center justify-start flex-col gap-4 h-screen sticky top-0 left-0 z-50">
          <TooltipProvider>
            <Link to="#" className='flex h-8 w-8 shrink-0 items-center justify-center bg-black/80 rounded-full'>
            <img src={profile} alt="" className='h-6 w-6 text-white'/>
              <span className='sr-only'>Menu/Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                  <Link to="/" className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:text-foreground'>
                    <AiFillFund className='h-5 w-5'/>
                    <span className='sr-only'>Dashboard</span>
                  </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Link to="/produtos" className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:text-foreground'>
                    <MdShoppingCart className='h-5 w-5'/>
                    <span className='sr-only'>Produtos</span>
                  </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Produtos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Link to="/clientes" className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:text-foreground'>
                    <IoPersonSharp className='h-5 w-5'/>
                    <span className='sr-only'>Clientes</span>
                  </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Clientes</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Link to="/pedidos" className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:text-foreground'>
                    <BsBriefcaseFill className='h-5 w-5'/>
                    <span className='sr-only'>Pedidos</span>
                  </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Pedido</TooltipContent>
            </Tooltip>
          </TooltipProvider>
      </div>
    </>
  );
};

export default Nav;
