import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PhotoItemGeneral from "./PhotoItemGeneral";

interface HalamanFotoDokumenProps {
  data: any;
  editable: boolean;
  onClick?: (data: any) => void;
}

const HalamanFotoDokumen: React.FC<HalamanFotoDokumenProps> = ({
  data,
  editable,
  onClick = () => {},
}) => {
  if (data == undefined || data == null) {
    return <div>Loading...</div>; // atau bisa return null
  }

  const PHOTO_URL = process.env.NEXT_PUBLIC_PDF_URL;

  const formatPath = (path: string) => {
    if (!path) return "/assets/placeholder-photo.png";

    return PHOTO_URL + "/uploads/inspection-photos/" + path;
  };

  return (
    <div className="text-black px-[30px] font-poppins">
      <Header />
      <div className="w-full border-2 border-black mt-5 mb-5 min-h-[830px]">
        <div className="w-full flex">
          <div className="w-full bg-[#E95F37]">
            <p className="text-left text-white py-3 px-3 font-semibold border-b-2 border-black">
              Foto Dokumen
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 gap-y-5 px-1 py-5 justify-around">
          {data.photos.slice(0, 2).map((item: any, index: any) => (
            <PhotoItemGeneral
              key={index}
              item={item}
              formatPath={formatPath}
              isLandscape={true}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HalamanFotoDokumen;
