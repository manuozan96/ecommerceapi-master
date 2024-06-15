// components/ProyectsGallery.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Imagen from "../../public/imagen.png";

const ProyectsInterna = () => {
  return (
    <div className="ml-7 y-7 gap-y-7 mt-14">
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Imagen} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30">
          <p className="text-white text-lg font-sans px-4 uppercase lettering-spacing">
            N I M I ´ S
            <br />S H A W A R M A
          </p>
        </div>
      </div>

      {/* Segunda imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Imagen} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30">
          <p className="text-white text-lg font-sans px-4 uppercase lettering-spacing">
            N I M I ´ S
            <br />S H A W A R M A
          </p>
        </div>
      </div>

      {/* Tercera imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Imagen} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30">
          <p className="text-white text-lg font-sans px-4 uppercase lettering-spacing">
            N I M I ´ S
            <br />S H A W A R M A
          </p>
        </div>
      </div>

      {/* Cuarta imagen */}
      <div className="my-7 relative">
        <Link href="/interna">
          <div className="relative z-20">
            <Image src={Imagen} alt="Imagen" width={374} height={450} />
          </div>
        </Link>
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-start mt-40 z-30">
          <p className="text-white text-lg font-sans px-4 uppercase lettering-spacing">
            N I M I ´ S
            <br />S H A W A R M A
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProyectsInterna;
