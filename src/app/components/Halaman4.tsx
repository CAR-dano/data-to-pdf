import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PenilaianHasil from "./PenilaianHasil";

function Halaman4() {
  return (
    <div className="px-[30px] ">
      <Header />
      <div className="w-full border-2 border-black mt-5">
        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2  border-black">
              Hasil Inspeksi
            </p>
          </div>
        </div>

        <div className="w-full border-b-2 border-black py-2">
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {mesinKendaraan.map((item, index) => (
              <PenilaianHasil
                key={index}
                warna="#FFFFFF"
                namaPart={item.namaPart}
                beban={item.beban.toString()}
                nilai=""
              />
            ))}
          </div>

          <p className="text-[12px] px-2 mt-1 font-semibold">*Catatan:</p>
          <p className="text-[12px] px-1 py-4 mt-1 font-semibold"></p>
        </div>

        <div className="w-full border-b-2 border-black py-2">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              2
            </p>
            <p className="">
              Interior Kendaraan (Dashboard, Kelistrikan, Instrumen, Jok & Trim)
            </p>
          </div>
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {interiorKendaraan.map((item, index) => (
              <PenilaianHasil
                key={index}
                warna="#FFFFFF"
                namaPart={item.namaPart}
                beban={item.beban.toString()}
                nilai=""
              />
            ))}
          </div>

          <p className="text-[12px] px-2  mt-1 font-semibold">*Catatan:</p>
          <p className="text-[12px] px-1 py-3 mt-1 font-semibold"></p>
        </div>

        <div className="w-full  py-2 mb-2">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              2
            </p>
            <p className="">Eksterior Kendaraan</p>
          </div>
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {eksteriorKendaraan.map((item, index) => (
              <PenilaianHasil
                key={index}
                warna="#FFFFFF"
                namaPart={item.namaPart}
                beban={item.beban.toString()}
                nilai=""
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman4;

const mesinKendaraan = [
  { namaPart: "Bushing Besar", beban: 3 },
  { namaPart: "Bushing Besar", beban: 3 },
  { namaPart: "Tutup Radiator", beban: 1 },
];

const interiorKendaraan = [
  { namaPart: "Stir", beban: 1 },
  { namaPart: "Rem Tangan", beban: 1 },
  { namaPart: "Pedal", beban: 1 },
  { namaPart: "Switch Wiper", beban: 1 },
  { namaPart: "Lampu Hazard", beban: 1 },
  { namaPart: "Panel Dashboard", beban: 1 },
  { namaPart: "Pembuka Kap Mesin", beban: 1 },
  { namaPart: "Pembuka Bagasi", beban: 1 },
  { namaPart: "Jok Depan", beban: 1 },
  { namaPart: "Aroma Interior", beban: 2 },
  { namaPart: "Handle Pintu", beban: 2 },
  { namaPart: "Console Box", beban: 1 },
  { namaPart: "Spion Tengah", beban: 1 },
  { namaPart: "Tuas Persneling", beban: 1 },
  { namaPart: "Jok Belakang", beban: 1 },
  { namaPart: "Panel Indikator", beban: 2 },
  { namaPart: "Switch Lampu", beban: 1 },
  { namaPart: "Karpet Dasar", beban: 1 },
  { namaPart: "Klakson", beban: 1 },
  { namaPart: "Sun Visor", beban: 1 },
  { namaPart: "Tuas Tangki Bensin", beban: 1 },
  { namaPart: "Sabuk Pengaman", beban: 3 },
  { namaPart: "Trim Interior", beban: 1 },
  { namaPart: "Plafon", beban: 2 },
];

const eksteriorKendaraan = [
  { namaPart: "Bumper Depan", beban: 1 },
  { namaPart: "Kap Mesin", beban: 2 },
  { namaPart: "Lampu Utama", beban: 3 },
  { namaPart: "Panel Atap", beban: 1 },
  { namaPart: "Grill", beban: 1 },
  { namaPart: "Lampu Foglamp", beban: 2 },
  { namaPart: "Kaca Belakang", beban: 2 },
  { namaPart: "Wiper Belakang", beban: 1 },
  { namaPart: "Bumper Belakang", beban: 1 },
  { namaPart: "Lampu Belakang", beban: 3 },
  { namaPart: "Trunklid", beban: 1 },
  { namaPart: "Kaca Depan", beban: 2 },
  { namaPart: "Fender Kanan", beban: 1 },
  { namaPart: "Quarter Panel Kanan", beban: 1 },
  { namaPart: "Pintu Belakang Kanan", beban: 2 },
  { namaPart: "Spion Kanan", beban: 2 },
  { namaPart: "Lisplang Kanan", beban: 1 },
  { namaPart: "Side Skirt Kanan", beban: 1 },
  { namaPart: "Daun Wiper", beban: 1 },
  { namaPart: "Pintu Depan Kanan", beban: 2 },
  { namaPart: "Pintu Depan Kiri", beban: 2 },
  { namaPart: "Pintu Belakang", beban: 2 },
  { namaPart: "Kaca Jendela Kanan", beban: 1 },
  { namaPart: "Kaca Jendela Kiri", beban: 1 },
];
