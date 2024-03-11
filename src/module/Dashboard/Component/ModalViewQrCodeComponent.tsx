import Modal from "component/Modal";
import { QRCode } from "antd";
import React from "react";

interface IProps {
  onClose: () => void;
  qrcode: string;
}
function ModalViewQrCodeComponent(props: IProps) {
  const { onClose, qrcode } = props;
  return (
    <Modal
      footer={null}
      open
      onCancel={onClose}
      width={300}
      className="flex justify-center items-center"
    >
      <div className="mt-5">
        <span className="font-semibold text-xs capitalize">
          Show the QR Code below to the cashier
        </span>
        <div className="flex justify-center mt-3">
          <QRCode value={qrcode || ""} />
        </div>
      </div>
    </Modal>
  );
}

export default ModalViewQrCodeComponent;
