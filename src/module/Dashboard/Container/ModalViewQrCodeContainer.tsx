import ModalViewQrCodeComponent from "../Component/ModalViewQrCodeComponent";
import React from "react";

interface IProps {
  onClose: () => void;
  qrCode: string;
}
export default function ModalViewQrCodeContainer(props: IProps) {
  const { onClose, qrCode } = props;
  return (
    <>
      <ModalViewQrCodeComponent onClose={onClose} qrcode={qrCode} />
    </>
  );
}
