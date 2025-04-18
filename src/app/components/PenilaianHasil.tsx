import React from "react";

type PenilaianHasilProps = {
  warna: string;
  nilai: string;
  namaPart: string;
  beban: string;
};

const PenilaianHasil: React.FC<PenilaianHasilProps> = ({
  warna,
  nilai,
  namaPart,
  beban,
}) => {
  return (
    <div className="flex mx-1">
      <div className="flex flex-col items-center">
        <div
          className="w-7 h-7 border-[1.5px] border-black"
          style={{ backgroundColor: warna }}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 border-y-[1.5px] border-black flex items-center justify-center">
          {nilai}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[125px] h-7 border-l-[1.5px] border-y-[1.5px] border-black flex items-center justify-start text-[10px] font-bold px-1.5">
          {namaPart}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 border-[1.5px] border-black flex items-center justify-center">
          {beban}
        </div>
      </div>
    </div>
  );
};

export default PenilaianHasil;
