import {
  BarChartOutlined,
  BellOutlined,
  DollarCircleOutlined,
  DownOutlined,
  FileTextOutlined,
  LogoutOutlined,
  PieChartOutlined,
  ProfileOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import React, { useState } from "react";

import IconPOS from "assets/images/pos-icon.svg";
import Image from "next/image";
import { MenuProps } from "antd/lib";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

require("dayjs/locale/id");

interface IProps {
  children: any;
}

export default function Template(props: IProps) {
  const { children } = props;
  const router = useRouter();
  const [changePasswordIsShow, setChangePasswordIsShow] =
    useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between bg-pinkBrand px-3 py-3 rounded-b-xl text-white">
        <div className="flex items-center gap-5 ">
          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            <Image src={IconPOS} width={30} height={25} alt="" color="white" />
            <div>POS</div>
          </div>

          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={() => router.push("/daftartransaksi")}
          >
            <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            <div>Transaksi</div>
          </div>
        </div>
      </div>
    </>
  );
}
