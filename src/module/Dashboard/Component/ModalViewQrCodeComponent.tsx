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
      width={200}
      className="flex justify-center"
    >
      <QRCode value={qrcode || ""} />
    </Modal>
  );
}

export default ModalViewQrCodeComponent;
