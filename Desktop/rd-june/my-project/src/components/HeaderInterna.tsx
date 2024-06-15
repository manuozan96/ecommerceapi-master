import React from "react";

const HeaderInterna = () => {
  return (
    <div className="bg-[url('/HeaderInterna.png')] bg-cover bg-no-repeat w-[430px] h-[932px] overflow-y-auto no-scrollbar">
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-60 z-30">
        <p className="text-[#EDEDED] text-lg font-sans px-4 uppercase lettering-spacing">
          · Restaurantes / Cafés ·
        </p>
      </div>
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-80 z-30">
        <p className="w[435] h-[65] text-[#EDEDED] text-xl font-instrument-serif px-4 uppercase lettering-spacing">
          <p>KOD</p>
        <p className="w[435] h-[65] -ml-4 -mt-4 text-white text-lg font-instrument-serif px-4 uppercase lettering-spacing">
          <i>BURGUER</i>
        </p>
        </p>
      </div>
    </div>
  );
};

export default HeaderInterna;
