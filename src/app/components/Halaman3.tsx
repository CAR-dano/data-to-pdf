import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PenilaianContoh from "./PenilaianContoh";
import PenilaianHasil from "./PenilaianHasil";

function Halaman3() {
  return (
    <div className="px-[30px] ">
      <Header />

      <div className="w-full border-2 border-black mt-8">
        <div className="w-full flex">
          <div className="w-full bg-[#1e1240]">
            <p className="text-left text-white py-2 px-3 font-semibold border-b-2  border-black">
              CONTOH PENILAIAN
            </p>
          </div>
        </div>

        <div className="w-full flex py-2 border-b-2 border-black ">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex">
              <PenilaianContoh
                warna="#f5e72f"
                nilai="5"
                namaPart="Shock Breaker"
                beban="3"
              />
              <div className="flex flex-col text-[11px] font-medium pr-5">
                <p>Arti Penilaian :</p>
                <p>
                  Shock breaker memiliki{" "}
                  <span className="font-bold">beban 3</span> karena merupakan
                  yang{" "}
                  <span className="font-bold">krusial /vital. Nilai 5</span>{" "}
                  berarti komponen tersebut{" "}
                  <span className="font-bold">PERLU PERHATIAN</span>
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <PenilaianContoh
                warna="#fe0000"
                nilai="1"
                namaPart="Shock Breaker"
                beban="3"
              />
              <div className="flex flex-col text-[11px] font-medium pr-5">
                <p>Arti Penilaian :</p>
                <p>
                  Shock breaker memiliki{" "}
                  <span className="font-bold">beban 3</span> karena merupakan
                  yang{" "}
                  <span className="font-bold">krusial /vital. Nilai 1</span>{" "}
                  berarti komponen tersebut{" "}
                  <span className="font-bold">RUSAK/BURUK</span>
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <PenilaianContoh
                warna="#15924e"
                nilai="9"
                namaPart="Shock Breaker"
                beban="3"
              />
              <div className="flex flex-col text-[11px] font-medium pr-5">
                <p>Arti Penilaian :</p>
                <p>
                  Shock breaker memiliki{" "}
                  <span className="font-bold">beban 3</span> karena merupakan
                  yang{" "}
                  <span className="font-bold">krusial /vital. Nilai 9</span>{" "}
                  berarti komponen tersebut{" "}
                  <span className="font-bold">BAIK</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2  border-black">
              Fitur
            </p>
          </div>
        </div>

        <div className="w-full border-b-2 border-black py-2">
          <div className="w-full flex flex-wrap gap-2 items-center mx-auto">
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Airbag"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Sistem AC"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Electric Mirror"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Sistem Audio"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Central Lock"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Rem ABS"
              beban=""
              nilai=""
            />
            <PenilaianHasil
              warna="#FFFFFF"
              namaPart="Power Window"
              beban=""
              nilai=""
            />
          </div>

          <p className="text-[12px] px-1 mt-1 font-semibold">*Catatan:</p>
          <p className="text-[12px] px-1 py-4 mt-1 font-semibold"></p>
        </div>

        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2  border-black">
              Hasil Inspeksi
            </p>
          </div>
        </div>

        <div className="w-full  py-2 mb-5">
          <div className="flex gap-1 text-[14px] px-2 mb-2 font-semibold">
            <p className="border-[1px] border-black rounded-full aspect-square w-5 h-5 flex items-center justify-center font-bold">
              1
            </p>
            <p className="">Mesin Kendaraan</p>
          </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman3;

const mesinKendaraan = [
  { namaPart: "Getaran Mesin", beban: 3 },
  { namaPart: "Suara Mesin", beban: 3 },
  { namaPart: "Transmisi", beban: 3 },
  { namaPart: "Pompa Power Steering", beban: 2 },
  { namaPart: "Cover Timming Chain", beban: 1 },
  { namaPart: "Oli Power Steering", beban: 2 },
  { namaPart: "Accu", beban: 3 },
  { namaPart: "Kompressor AC", beban: 3 },

  { namaPart: "Fan", beban: 2 },
  { namaPart: "Selang", beban: 3 },
  { namaPart: "Karter Oli", beban: 2 },
  { namaPart: "Oli Rem", beban: 2 },
  { namaPart: "Kabel", beban: 3 },
  { namaPart: "Kondensor", beban: 3 },
  { namaPart: "Radiator", beban: 3 },
  { namaPart: "Cylinder Head", beban: 3 },

  { namaPart: "Oli Mesin", beban: 2 },
  { namaPart: "Air Radiator", beban: 1 },
  { namaPart: "Cover Klep", beban: 1 },
  { namaPart: "Alternator", beban: 3 },
  { namaPart: "Water Pump", beban: 3 },
  { namaPart: "Belt", beban: 3 },
  { namaPart: "Oli Transmisi", beban: 2 },
  { namaPart: "Cylinder Block", beban: 3 },
];
