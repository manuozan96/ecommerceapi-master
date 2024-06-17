import React from "react";

export const Table = () => {
  return (
   <div>
     <div className="my-7 -ml-4 -px-[40px] py-2 " >
      <div className="bg-[#EDEDED] w-[430px] pr-7 -mr-4 ">
        <div className="w-full -mr-4 mt-4 h-full flex-col justify-start items-start gap-[115px] inline-flex ">
          <div className="flex-col justify-start items-start gap-2 flex -ml-4 px-[12px] p-12 ">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[430px] px-7 py-[2px] border-b border-neutral-950 justify-between items-start inline-flex">
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  AÑO
                </div>
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  2023
                </div>
              </div>
              <hr className="w-full border-neutral-950" />
              <div className="w-[430px] px-7 py-[2px] border-b border-neutral-950 justify-between items-start inline-flex">
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  LOCACIÓN
                </div>
                <div>
                  <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                    BOGOTÁ,
                  </span>
                  <span className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                    COLOMBIA
                  </span>
                </div>
              </div>
              <hr className="w-full border-neutral-950" />
              <div className="w-[430px] px-7 py-[2px] border-b border-neutral-950 justify-between items-start inline-flex">
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  TAMAÑO
                </div>
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                  340 M2
                </div>
              </div>
              <hr className="w-full border-neutral-950" />
              <div className="w-[430px] px-7 py-[2px] justify-between items-center inline-flex">
                <div className="text-neutral-950 text-lg font-normal font-instrument-serif align-items uppercase">
                  ENTREGABLE
                </div>
                <div className="flex-col justify-center items-end inline-flex">
                  <div className="justify-end items-center inline-flex">
                    <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                      DISEÑO INTERIOR / Arquitectura
                    </div>
                  </div>
                  <div className="justify-end items-center inline-flex">
                    <div className="text-neutral-950 text-lg font-normal font-instrument-serif uppercase">
                      CONSTRUCCIÓN / MOBILIARIO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[324px] px-7 flex-col justify-start items-center gap-10 flex">
            <div className="self-stretch text-center">
              <span className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                Aquí una descripción del proyecto
              </span>
              <span className="text-neutral-950 text-lg font-semibold font-sans leading-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </span>
              <span className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </span>
              <span className="text-neutral-950 text-lg font-semibold font-sans leading-[27px]">
                ex ea commodo consequat.
              </span>
              <span className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                <br />
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </span>
              <span className="text-neutral-950 text-lg font-semibold font-sans leading-[27px]">
                nisi ut aliquip
              </span>
              <span className="text-neutral-950 text-lg font-normal font-sans leading-[27px]">
                ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};
