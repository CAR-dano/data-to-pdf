import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Penilaian from "./PenilaianHasil";
import PenilaianContoh from "./PenilaianContoh";

function Halaman2() {
  return (
    <div className="px-[30px] ">
      <Header />

      <div className="w-full border-2 border-black mt-12">
        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-2 px-3 font-semibold border-b-2  border-black">
              Ringkasan Pengecekan
            </p>
          </div>
        </div>

        <div className="w-full flex border-b-2  border-black">
          <div className="w-1/4 ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold border-r-2  border-black">
              Mesin
            </p>
          </div>
          <div className="w-1/4 ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold border-r-2  border-black">
              Kaki-kaki
            </p>
          </div>
          <div className="w-1/4 ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold border-r-2  border-black">
              Interior
            </p>
          </div>
          <div className="w-1/4 ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold  ">
              Eksterior
            </p>
          </div>
        </div>

        <div className="w-full flex border-b-2 border-black">
          <div className="w-1/4 h-50 border-black border-r-2  ">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium ">
              -
            </p>
          </div>
          <div className="w-1/4 h-50 border-black border-r-2">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium">
              -
            </p>
          </div>
          <div className="w-1/4 h-50 border-black border-r-2">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium">
              -
            </p>
          </div>
          <div className="w-1/4 h-50 ">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium">
              -
            </p>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-2 px-3 font-semibold border-b-2  border-black">
              Estimasi Perbaikan
            </p>
          </div>
        </div>

        <div className="w-full flex ">
          <div className="w-[45%] ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold border-r-2  border-b-2 border-black">
              Part
            </p>
          </div>
          <div className="w-[35%] ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-semibold border-r-2 border-b-2 border-black">
              Harga
            </p>
          </div>

          <div className="w-[20%] ">
            <p className="text-center text-[13px] text-black py-2 px-3 font-medium "></p>
          </div>
        </div>

        <div className="w-full flex border-b-2 border-black">
          <div className="w-[45%] h-50 border-black border-r-2  ">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium ">
              -
            </p>
          </div>
          <div className="w-[35%] h-50 border-black border-r-2">
            <p className="text-left text-[13px] text-black py-2 px-3 font-medium">
              -
            </p>
          </div>
          <div className="w-[20%] h-50 flex justify-center items-center">
            <p className="text-center text-[10px] text-black px-3 font-light -mt-10">
              *Biaya estimasi dapat lebih murah atau mahal tergantung bengkel
            </p>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-left text-white py-2 px-3 font-semibold border-b-2  border-black">
              Keterangan
            </p>
          </div>
        </div>

        <div className="w-full flex border-b-2 border-black py-8 items-center justify-between px-2">
          <PenilaianContoh warna="#FFFFFF" nilai="" namaPart="" beban="" />

          <div className="mx-2 text-[14px] font-bold">
            <p className="underline">Beban Part</p>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full bg-[#A1AEB1] aspect-square flex justify-center items-center ">
                1
              </div>
              <p>Penting</p>
            </div>

            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full bg-[#A1AEB1] aspect-square flex justify-center items-center ">
                2
              </div>
              <p>Sangat Penting</p>
            </div>

            <div className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full bg-[#A1AEB1] aspect-square flex justify-center items-center ">
                3
              </div>
              <p>Krusial/Vital</p>
            </div>
          </div>

          <div className="flex flex-col justify-start text-[14px] font-bold">
            <p className="underline">Nilai</p>
            <div className="border border-black w-fit">
              {/* Baris Nilai */}
              <div className="flex">
                {[
                  { val: 0, color: "#000000", textColor: "#ffffff" },
                  { val: 1, color: "#e60000", textColor: "#ffffff" },
                  { val: 2, color: "#f44336", textColor: "#ffffff" },
                  { val: 3, color: "#ff5252", textColor: "#ffffff" },
                  { val: 4, color: "#fff176", textColor: "#000000" },
                  { val: 5, color: "#ffee58", textColor: "#000000" },
                  { val: 6, color: "#fdd835", textColor: "#000000" },
                  { val: 7, color: "#66bb6a", textColor: "#ffffff" },
                  { val: 8, color: "#4caf50", textColor: "#ffffff" },
                  { val: 9, color: "#388e3c", textColor: "#ffffff" },
                  { val: 10, color: "#2e7d32", textColor: "#ffffff" },
                ].map(({ val, color, textColor }) => (
                  <div
                    key={val}
                    className="w-6 h-6 flex items-center justify-center border border-black"
                    style={{ backgroundColor: color, color: textColor }}
                  >
                    {val}
                  </div>
                ))}
              </div>

              {/* Baris Huruf */}
              <div className="flex">
                {[
                  "E",
                  "D-",
                  "D",
                  "C-",
                  "C",
                  "B-",
                  "B",
                  "B+",
                  "A-",
                  "A-",
                  "A",
                ].map((grade, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 flex items-center justify-center border border-black"
                  >
                    {grade}
                  </div>
                ))}
              </div>

              {/* Baris Keterangan */}
              <div className="flex">
                <div className="w-[35%] flex items-center justify-center border border-black text-center text-[10px] px-1 py-1">
                  0: Part tidak ada
                </div>
                <div className="w-[65%] flex items-center justify-center border border-black text-center text-[10px] px-1 py-1">
                  10: Kondisi baru
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-1/5 bg-[#F4622F] border-r-2 border-black flex items-center">
            <p className="text-left text-white py-2 px-3 font-semibold ">
              Data Ban
            </p>
          </div>
          <div className="w-1/5 border-r-2  border-black">
            <p className="text-[12px] text-center text-black py-1 px-3 font-semibold border-b-2 border-black">
              Posisi Ban
            </p>
            <p className="h-10 text-left text-black py-2 px-3 font-semibold "></p>
          </div>
          <div className="w-1/5 border-r-2  border-black">
            <p className="text-[12px] text-center text-black py-1 px-3 font-semibold border-b-2 border-black">
              Merk
            </p>
            <p className="h-10 text-left text-black py-2 px-3 font-semibold "></p>
          </div>
          <div className="w-1/5 border-r-2  border-black">
            <p className="text-[12px] text-center text-black py-1 px-3 font-semibold border-b-2 border-black">
              Tipe velg
            </p>
            <p className="h-10 text-left text-black py-2 px-3 font-semibold "></p>
          </div>

          <div className="w-1/5">
            <p className="text-[12px] text-center text-black py-1 px-3 font-semibold border-b-2 border-black">
              Ketebalan
            </p>
            <p className="h-10 text-left text-black py-2 px-3 font-semibold "></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman2;
