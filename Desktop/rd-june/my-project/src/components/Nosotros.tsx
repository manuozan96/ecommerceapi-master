import React from "react";

const NosotrosCompo = () => {
  const images = [
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
    "/imagen.png",
  ];

  return (
    <div className="px-7">
      <div className="grid grid-cols-2 gap-[28px]">
        <div className="flex flex-col gap-[28px]">
          {images.slice(0, 4).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Nosotros ${index + 1}`}
              className="w-full"
            />
          ))}
        </div>
        <div className="flex flex-col gap-[28px]">
          {images.slice(4).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Nosotros ${index + 5}`}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosotrosCompo;
