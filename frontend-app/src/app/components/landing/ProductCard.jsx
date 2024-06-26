import React from "react";
import Link from "next/link";

const ProductCard = ({ producto }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${producto.imagen})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="group w-full h-[350px] relative border-[1px] border-gray-700 rounded-[6px] transition hover:border-opacity-100 hover:border-orange-500 hover:border-[3px]"
      style={backgroundImageStyle}
    >
      <Link
        href={producto.enlace}
        className="hidden group-hover:flex transition flex-col items-start justify-start w-full h-full bg-black opacity-0 hover:opacity-80 py-8 px-10"
      >
        {producto.subtitulo.map((subtitulo, index) => (
          <h3 key={index} className="text-gray-400 text-[17px] md:text-[17px]">
            {subtitulo}
          </h3>
        ))}
        <h3 className="text-white text-[15px] md:text-[15px] mt-6">{producto.descripcion}</h3>
      </Link>
    </div>
  );
};

export default ProductCard;
