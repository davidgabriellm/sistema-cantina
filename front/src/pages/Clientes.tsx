import { IoAddOutline } from 'react-icons/io5';
import { IoIosSearch } from "react-icons/io";
import { FaBox } from "react-icons/fa6";
import ToggleSwitch from '../components/toggleSwitch/ToggleSwitch';

const Clientes = () => {
  return (
    <div className="px-7 py-3 flex flex-col relative w-full">
          <button className="absolute right-6 top-4 cursor-pointer flex gap-3 bg-blue-600 p-3 rounded-2xl items-center text-white">
            <span>
              <IoAddOutline/>
            </span>
            <span className="text-[14px]">Novo Cliente</span>
          </button>
          <h1 className="font-bold text-2xl">Clientes</h1>
          <p className="text-gray-400 text-[13px]">
            Gerencie os clientes da cantina
          </p>
    
          <div className='mt-5 relative w-1/3'>
            <input
              type="search"
              className="rounded border border-gray-300 py-0.5 px-7 outline-none placeholder:text-sm w-full"
              placeholder="Buscar produto..."
            />
            <IoIosSearch className='absolute left-1 top-2'/>
          </div>
    
          <div className='mt-20 mb-15 border border-gray-200 rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className=''>
                <tr>
                    <th className='p-3 text-left bg-gray-100'>Nome</th>
                    <th className='p-3 text-left bg-gray-100'>Email</th>
                    <th className='p-3 text-left bg-gray-100'>Saldo</th>
                    <th className='p-3 text-left bg-gray-100'>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
                <tr className='border-t border-gray-200'>
                    <td className='py-6 px-3 flex items-center gap-2'>
                        <FaBox size={15}/>
                       <span className='text-[15px]'>Café Expresso</span> 
                    </td>
                    <td className='py-6 px-3 text-[15px]'>R$ 5,00</td>
                    <td className='py-6 px-3 text-[15px]'>Ativo</td>
                    <td className='py-6 px-3 text-[15px]'><ToggleSwitch initial={true}/></td>
                </tr>
               
            </tbody>
          </table>
          </div>
        </div>
  )
}

export default Clientes