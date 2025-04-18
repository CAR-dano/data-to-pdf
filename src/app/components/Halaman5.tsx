import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PenilaianHasil from "./PenilaianHasil";

function Halaman5() {
  return (
    <div className="px-[30px] ">
      <Header />
      <div className="w-full border-2 border-black mt-4">
        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2  border-black">
              Hasil Inspeksi
            </p>
          </div>
        </div>

        <div className="w-full border-b-2 border-black py-2">
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

          <p className="text-[12px] px-2 mt-1 font-semibold">*Catatan:</p>
          <p className="text-[12px] px-1 py-3 mt-1 font-semibold"></p>
        </div>

        <div className="w-full border-b-2 border-black py-2">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              4
            </p>
            <p className="">Ban dan Kaki-Kaki</p>
          </div>
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {banDanKakiKaki.map((item, index) => (
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

        <div className="w-full  py-2 mb-2 border-b-2 border-black">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              5
            </p>
            <p className="">Test Drive</p>
          </div>
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {testDrive.map((item, index) => (
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
          <p className="text-[12px] px-1 py-2 mt-1 font-semibold"></p>
        </div>

        <div className="w-full  py-2 mb-2">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              5
            </p>
            <p className="">Tools Test</p>
          </div>
          <div className="pl-2 w-full flex flex-wrap gap-x-3 gap-y-2 items-center justify-start">
            {toolsTest.map((item, index) => (
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
          <p className="text-[12px] px-1 py-2 mt-1 font-semibold"></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman5;

const eksteriorKendaraan = [
  { namaPart: "Fender kiri", beban: 1 },
  { namaPart: "Pintu Belakang Kiri", beban: 1 },
  { namaPart: "Lisplang Kiri", beban: 1 },
  { namaPart: "Quarter Panel Kiri", beban: 1 },
  { namaPart: "Spion Kiri", beban: 2 },
  { namaPart: "Side Skirt Kiri", beban: 1 },
];

const banDanKakiKaki = [
  { namaPart: "Ban Depan", beban: 2 },
  { namaPart: "Ban Belakang", beban: 2 },
  { namaPart: "Racksteer", beban: 3 },
  { namaPart: "Velg Depan", beban: 2 },
  { namaPart: "Velg Belakang", beban: 2 },
  { namaPart: "Karet Boot", beban: 2 },
  { namaPart: "Disc Brake", beban: 3 },
  { namaPart: "Brake Pad", beban: 3 },
  { namaPart: "Upper-Lower Arm", beban: 3 },
  { namaPart: "Master Rem", beban: 3 },
  { namaPart: "Crossmember", beban: 2 },
  { namaPart: "Shock Breaker", beban: 3 },
  { namaPart: "Tie Rod", beban: 3 },
  { namaPart: "Knalpot", beban: 1 },
  { namaPart: "Link Stabilizer", beban: 3 },
  { namaPart: "Gardan", beban: 3 },
  { namaPart: "Balljoint", beban: 3 },
];

const testDrive = [
  { namaPart: "Bunyi/Getaran", beban: 3 },
  { namaPart: "Stir Balance", beban: 2 },
  { namaPart: "Performa Kopling", beban: 3 },
  { namaPart: "Performa Stir", beban: 2 },
  { namaPart: "Performa Suspensi", beban: 3 },
  { namaPart: "RPM", beban: 3 },
  { namaPart: "Perpindahan Transmisi", beban: 3 },
];

const toolsTest = [
  { namaPart: "Tebal Cat Body Depan", beban: 2 },
  { namaPart: "Tebal Cat Body Kanan", beban: 2 },
  { namaPart: "Tebal Cat Body Atap", beban: 2 },
  { namaPart: "Tebal Cat Body Kiri", beban: 2 },
  { namaPart: "Tebal Cat Body Belakang", beban: 2 },
  { namaPart: "Test ACCU ( ON & OFF )", beban: 3 },
  { namaPart: "Temperatur AC Mobil", beban: 2 },
  { namaPart: "OBD Scanner", beban: 3 },
];
