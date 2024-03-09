import BgCover from "../../../assets/images/motif.png";
import { Carousel } from "antd";
import Home from "../../../assets/images/home1.png";
import HomeHover from "../../../assets/images/home2.png";
import Image from "next/image";
import LogoHeader from "../../../assets/images/logo technopartner.png";
import Menu from "../../../assets/images/menu1.png";
import MenuHover from "../../../assets/images/menu2.png";
import { QRCode } from "antd";
import React from "react";
import { useRouter } from "next/router";

interface IProps {
  qrcode?: string;
  handleViewQrcode: () => void;
}
function DashboardComponent(props: IProps) {
  const { qrcode, handleViewQrcode } = props;
  const router = useRouter();
  const divContainerStyle: object = {
    position: "relative",
    height: "160px",
    width: "100%",
    background: `url(${BgCover}) no-repeat center center fixed`,
    backgroundSize: "cover",
    zIndex: 0,
  };

  const contentStyle: object = {
    height: "200px",
    width: "100%",
    background: "#0a0a0a",
    objectFit: "contain",
  };

  const menuStyle: object = {
    height: "40px",
    width: "100%",
    objectFit: "contain",
  };

  return (
    <>
      <div className="flex items-center justify-between bg-yellow-400 px-3 text-white">
        <div className="flex items-center">
          <div className="flex flex-col items-center hover:cursor-pointer">
            <Image
              src={LogoHeader}
              width={80}
              alt="Logo"
              color="white"
              className="object-contain"
            />
          </div>
        </div>
        {/* <div style={{backgroundImage: "url("paper.gif")"}}></div> */}
        {/* <div className="flex flex-col items-center hover:cursor-pointer">
          <div>Transaksi</div>
        </div> */}
      </div>
      <div
        className="flex justify-center mt-5 shadow-md"
        style={divContainerStyle}
      >
        <div className="w-4/5 flex flex-col bg-gray-100 rounded-lg py-1 px-6 drop-shadow-xl">
          <div>
            <span className="font-normal">Good Afternoon,</span>
          </div>
          <span className="font-bold">Guntur Sa putro</span>
          <div className="flex flex-row justify-between mt-6">
            <div className="hover:cursor-pointer" onClick={handleViewQrcode}>
              <QRCode
                value={qrcode || "-"}
                className="rounded-full shadow-2xl"
                // iconSize={500 / 4}
                size={70}
              />
            </div>
            <div className="border-l border-dashed mr-4 md:-mr-96 h-16 font-normal text-black "></div>
            <div className="flex flex-col">
              <span className="font-normal">Saldo</span>
              <span className="font-bold">Points</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-normal">Rp.279.000</span>
              <span className="font-medium">2.500</span>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        autoplay
        autoplaySpeed={3000}
        effect="scrollx"
        dotPosition="bottom"
        // easing="linear"
      >
        <div>
          <Image src={LogoHeader} alt="Image 1" style={contentStyle} />
        </div>
        <div>
          <Image src={LogoHeader} alt="Image 2" style={contentStyle} />
        </div>
        <div>
          <Image src={LogoHeader} alt="Image 3" style={contentStyle} />
        </div>
        <div>
          <Image src={LogoHeader} alt="Image 4" style={contentStyle} />
        </div>
      </Carousel>
      <div className="h-14 fixed bottom-0 bg-white shadow-lg w-full flex justify-evenly">
        <div className="w-10 h-10">
          <Image
            src={Home}
            alt="Image 3"
            style={menuStyle}
            className="hover:cursor-pointer"
            onClick={() => router.push("/dashboard")}
          />
        </div>
        <div className="w-10 h-10">
          <Image
            src={MenuHover}
            alt="Image 3"
            style={menuStyle}
            className="hover:cursor-pointer"
            onClick={() => router.push("/product")}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardComponent;
