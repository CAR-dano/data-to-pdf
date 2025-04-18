import React from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

function Halaman1() {
  const data = [
    "Merek Kendaraan",
    "Tipe Kendaraan",
    "Tahun",
    "Pajak Kendaraan",
    "Transmisi",
    "Warna Kendaraan",
    "Odo Meter",
    "Kepemilikan",
    "Pajak 1 Tahun s.d.",
    "Pajak 5 Tahun s.d.",
    "Biaya Pajak",
  ];

  const kelengkapan = [
    "Buku Service",
    "Kunci Serep",
    "Buku Manual",
    "Ban",
    "Serep",
    "BPKB",
    "Dongkrak",
    "Toolkit",
    "No Rangka",
    "No Mesin",
  ];

  const check = ["Interior", "Eksterior", "Mesin", "Kaki-Kaki"];

  return (
    <div className="px-[30px] ">
      <Header />

      <div className="flex justify-between items-end">
        <p className="ml-[50px] text-[14px] font-semibold  leading-none">
          Tanggal:{" "}
        </p>
        <div className="flex flex-col items-end ">
          <h1 className="text-[16px] font-semibold text-[#F4622F] leading-none">
            VEHICLE INSPECTION
          </h1>
          <p className="text-[16px] font-semibold">Yogyakarta</p>
        </div>
      </div>

      <div className="w-full bg-[#F4622F] mt-[10px] px-[50px] py-1 text-white rounded-lg font-medium text-[16px]">
        <p>Nama Customer :</p>
        <p>Nama Inspektor :</p>
        <p></p>
      </div>

      <div className="w-full border-2 border-black mt-2">
        <div className="w-full flex">
          <div className="w-1/2 bg-[#F4622F]">
            <p className="text-center text-white py-2 font-semibold border-r-2  border-black">
              Data Kendaraan
            </p>
          </div>
          <div className="w-1/2 bg-[#F4622F]">
            <p className="text-center text-white py-2 font-semibold">
              Kelengkapan Kendaraan
            </p>
          </div>
        </div>
        <div className="w-full flex border-t-2 border-black">
          <div className="w-1/2 flex flex-row gap-0 py-3 border-r-2 border-black">
            <div className="flex flex-col gap-0 px-5">
              {data.map((item, index) => (
                <div key={index} className="">
                  <p className="text-[14px] text-start text-black font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {Array.from({ length: 11 }, (_, index) => (
                <div key={index} className="">
                  <p className="text-[14px]  text-center text-black font-semibold">
                    :
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex flex-row gap-0 py-3 ">
            <div className="flex flex-col gap-0 px-5">
              {kelengkapan.map((item, index) => (
                <div key={index} className="">
                  <p className="text-[14px] text-start text-black font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {Array.from({ length: kelengkapan.length }, (_, index) => (
                <div key={index} className="">
                  <p className="text-[14px]  text-center text-black font-semibold">
                    :
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex">
          <div className="w-full bg-[#F4622F]">
            <p className="text-center text-white py-2 font-semibold border-t-2  border-black">
              Hasil Inspeksi Kendaraan
            </p>
          </div>
        </div>

        <div className="w-full flex border-t-2 border-black">
          <div className="w-1/2 bg-[#B2BEB5] border-r-2 border-black h-48"></div>
          <div className="w-1/2 ">
            <p className="text-[12px] text-left text-black py-2 px-2 font-bold">
              Deskripsi:
            </p>
          </div>
        </div>

        <div className="w-full flex border-t-2 border-black">
          <div className="w-1/2  border-r-2 border-black">
            <div className="flex justify-center items-center gap-4">
              {check.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="text-[12px] mb-1">{item}</p>
                  <div className="w-12 h-12 bg-[#B2BEB5] rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center mt-2">
              <p className="text-[12px] mb-2">Penilaian Keseluruhan</p>
              <div className="w-25 h-25 bg-[#B2BEB5] rounded-full"></div>
            </div>

            <p className="text-center text-[10px] my-2">
              *A = Sangat Baik, B = Baik, C = Sedang, D = Buruk
            </p>
          </div>
          <div className="w-1/2 flex">
            <div>
              <div className="w-25 h-10"></div>
              <div className="w-25 h-10"></div>
              <div className="w-25 h-10"></div>
            </div>
            <div className="flex flex-col justify-start text-[20px] font-bold text-left mt-2 gap-5  ">
              <p>TIDAK INDIKASI BEKAS TABRAKAN</p>
              <p>TIDAK BEKAS BANJIR</p>
              <p>TIDAK INDIKASI ODOMETER RESET</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Halaman1;
