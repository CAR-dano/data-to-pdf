import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Halaman6() {
  const fotoKendaraan = [
    "https://via.placeholder.com/200x150?text=Foto+1",
    "https://via.placeholder.com/200x150?text=Foto+2",
    "https://via.placeholder.com/200x150?text=Foto+3",
    "https://via.placeholder.com/200x150?text=Foto+4",
    "https://via.placeholder.com/200x150?text=Foto+5",
    "https://via.placeholder.com/200x150?text=Foto+6",
    "https://via.placeholder.com/200x150?text=Foto+7",
    "https://via.placeholder.com/200x150?text=Foto+8",
    "https://via.placeholder.com/200x150?text=Foto+9",
    "https://via.placeholder.com/200x150?text=Foto+10",
    "https://via.placeholder.com/200x150?text=Foto+11",
    "https://via.placeholder.com/200x150?text=Foto+12",
    "https://via.placeholder.com/200x150?text=Foto+13",
    "https://via.placeholder.com/200x150?text=Foto+14",
    "https://via.placeholder.com/200x150?text=Foto+15",
  ];

  return (
    <div className="px-[30px]">
      <Header />
      <div className="w-full border-2 border-black mt-4">
        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2 border-black">
              Hasil Inspeksi
            </p>
          </div>
        </div>

        <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold mt-2">
          <p className="">Foto Kendaraan</p>
        </div>

        <div className="flex flex-wrap gap-3 px-4 pb-4 justify-around">
          {fotoKendaraan.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Foto ${index + 1}`}
              className="w-[210px] h-[140px] object-cover border border-gray-300"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman6;
