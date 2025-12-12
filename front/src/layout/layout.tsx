import type { ReactNode } from "react";
import Nav from "../components/nav/Nav";
import Header from "../components/header/Header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen bg-[#F7F5F0]">
      {/* Sidebar */}
      <Nav />

      {/* Conteúdo principal */}
      <div className="flex flex-col w-full">
        <Header />

        <div className="p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
