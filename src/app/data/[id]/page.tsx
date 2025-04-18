import React from "react";
import "./style.css";
import Halaman1 from "@/app/components/Halaman1";
import Halaman2 from "@/app/components/Halaman2";
import Halaman3 from "@/app/components/Halaman3";
import Halaman4 from "@/app/components/Halaman4";
import Halaman5 from "@/app/components/Halaman5";
import Halaman6 from "@/app/components/Halaman6";

function DataPage() {
  const page = [
    {
      id: 1,
      title: "Halaman 1",
      component: <Halaman1 />,
    },
    {
      id: 2,
      title: "Halaman 2",
      component: <Halaman2 />,
    },
    {
      id: 3,
      title: "Halaman 3",
      component: <Halaman3 />,
    },
    {
      id: 4,
      title: "Halaman 4",
      component: <Halaman4 />,
    },
    {
      id: 5,
      title: "Halaman 5",
      component: <Halaman5 />,
    },
    {
      id: 6,
      title: "Halaman 6",
      component: <Halaman6 />,
    },
  ];

  return (
    <>
      <div className="sheet-outer A4">
        {page.map((item, index) => (
          <div key={index} className="sheet padding-5mm">
            {item.component}
          </div>
        ))}
      </div>
    </>
  );
}

export default DataPage;
