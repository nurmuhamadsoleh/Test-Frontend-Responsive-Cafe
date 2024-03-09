import React, { useState } from "react";

import DashboardComponent from "../Component/DashboardComponent";
import ModalViewQrCodeContainer from "./ModalViewQrCodeContainer";

function DashboardContainer() {
  const [Qrcode, setQrcode] = useState<string>("https://equalsystem.io/");
  const [viewQrcode, setViewQrcode] = useState<boolean>(false);
  const handleViewQrcode = () => {
    setViewQrcode(true);
  };
  console.log("view qrcode", viewQrcode);
  return (
    <>
      <DashboardComponent qrcode={Qrcode} handleViewQrcode={handleViewQrcode} />
      {viewQrcode && (
        <ModalViewQrCodeContainer
          onClose={() => {
            setViewQrcode(false);
            // setQrcode("");
          }}
          qrCode={Qrcode}
        />
      )}
    </>
  );
}

export default DashboardContainer;
