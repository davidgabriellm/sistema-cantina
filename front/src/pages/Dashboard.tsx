import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { LuUsers } from 'react-icons/lu';
import { AiOutlinePercentage } from 'react-icons/ai';
import { CiBadgeDollar } from 'react-icons/ci';
import Profile from '../assets/img.png';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { LuPanelTopOpen } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="px-7 py-3 flex flex-col relative w-full ">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <p className="text-gray-400 text-[13px] mb-8">
        gerencie os resultados das vendas
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md: gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle>Total Vendas</CardTitle>
              <FaHandHoldingDollar className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total vendas em 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <span className="text-base sm:text-lg font-bold">R$ 40.000</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle>Novos Clientes</CardTitle>
              <LuUsers className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de Clientes Durante 30 Dias</CardDescription>
          </CardHeader>

          <CardContent>
            <span className="text-base sm:text-lg font-bold">R$ 40.000</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle>Pedidos Hoje</CardTitle>
              <AiOutlinePercentage className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de Pedidos Hoje</CardDescription>
          </CardHeader>

          <CardContent>
            <span className="text-base sm:text-lg font-bold">R$ 40.000</span>
          </CardContent>
        </Card>
        <Card className='flex flex-col justify-between'>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle>Total Pedidos</CardTitle>
              <CiBadgeDollar className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de Pedidos em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <span className="text-base sm:text-lg font-bold">R$ 40.000</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle>Ultimos Clientes</CardTitle>
              <LuPanelTopOpen className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>
              Novos Clientes Nas últimas 24 Horas
            </CardDescription>
          </CardHeader>

          <ScrollArea className="w-full h-16 rounded-md border-none">
            <div className="p-2">
              <React.Fragment>
                <div className='flex justify-start items-center gap-3'>
                <div className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9">
                  <img
                    src={Profile}
                    alt="avatar"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>david gabriel lima martins</h1>
                  <h2 className='font-light text-muted-foreground'>david@gmail.com</h2>
                </div>
                </div>
                <Separator className="my-1" />
              </React.Fragment>
              <React.Fragment>
                <div className='flex justify-start items-center gap-3'>
                <div className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9">
                  <img
                    src={Profile}
                    alt="avatar"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>david gabriel lima martins</h1>
                  <h2 className='font-light text-muted-foreground'>david@gmail.com</h2>
                </div>
                </div>
                <Separator className="my-1" />
              </React.Fragment>
              <React.Fragment>
                <div className='flex justify-start items-center gap-3'>
                <div className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9">
                  <img
                    src={Profile}
                    alt="avatar"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>david gabriel lima martins</h1>
                  <h2 className='font-light text-muted-foreground'>david@gmail.com</h2>
                </div>
                </div>
                <Separator className="my-1" />
              </React.Fragment>
            
            </div>
          </ScrollArea>

          
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
