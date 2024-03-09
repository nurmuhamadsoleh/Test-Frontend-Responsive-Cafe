import { Menu } from "antd";
import React from "react";

interface IProps {
  handleMenuClick: (_vals: any) => void;
  activeTab: string;
  productListRef: React.MutableRefObject<any>;
  dataImage: any;
}
interface ProductItem {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
export default function ProductComponent(props: IProps) {
  const { handleMenuClick, activeTab, productListRef, dataImage } = props;
  const productData: any = {
    seasonal: {
      head: "Seasonal Products",
      content: [],
    },
    "best-seller": {
      head: "Best Seller Products",
      content: [],
    },
    coffee: {
      head: "Coffee Products",
      content: [],
    },
    "most-popular": {
      head: "Most Popular Products",
      content: [],
    },
  };

  dataImage &&
    dataImage?.forEach((data: any, index: any) => {
      const productItem: ProductItem = {
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        price: "Rp. 50,000",
        imageUrl: `${process.env.NEXT_PUBLIC_CDN_UPLOAD_IMAGE}${data.name}`,
      };
      if (index < 3) {
        productData.seasonal.content.push({
          ...productItem,
          title: `Seasonal Product ${index + 1}`,
        });
      } else if (index < 6) {
        productData["best-seller"].content.push({
          ...productItem,
          title: `Best Seller Product ${index + 1}`,
        });
      } else if (index < 9) {
        productData.coffee.content.push({
          ...productItem,
          title: `Coffee Product ${index + 1}`,
        });
      } else if (index < 12) {
        productData["most-popular"].content.push({
          ...productItem,
          title: `Most Popular Product ${index + 1}`,
        });
      }
    });
  return (
    <div className="bg-white w-full md:max-w-2xl mx-auto">
      <div className="flex bg-white flex-col justify-center items-center mx-auto sticky top-0">
        <h3 className="uppercase text-black font-semibold">Menu</h3>
        <div className="w-full mx-10 overflow-x-auto">
          <Menu
            mode={"horizontal"}
            selectedKeys={[activeTab]}
            onClick={handleMenuClick}
            style={{ whiteSpace: "nowrap", overflowX: "scroll" }}
            className="w-full bg-red-600"
          >
            {Object.keys(productData).map((tabKey: any) => (
              <Menu.Item key={tabKey}>{productData[tabKey].head}</Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
      <div className="w-full mx-auto" ref={productListRef}>
        {Object.keys(productData).map((tabKey) => (
          <div
            key={tabKey}
            id={`tab-${tabKey}`}
            className="text-center flex flex-col gap-4 px-4 xl:px-8"
          >
            <h3 className="text-black text-start semi-bold">
              {productData[tabKey].head}
            </h3>
            {productData[tabKey].content.map((product: any, index: any) => (
              <div
                key={index}
                className="flex justify-center gap-8 pb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center p-2 md:p-4 border-b"
              >
                <div className="w-3/12 flex justify-start items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-14 h-14 md:w-32 md:h-32 xl:w-36 xl:h-36 object-cover"
                  />
                </div>
                <div className="w-7/12 flex flex-col justify-start items-start text-left">
                  <span className="text-lg font-semibold">{product.title}</span>
                  <span className="justify">{product.description}</span>
                </div>
                <div className="w-3/12 flex items-start -mt-20">
                  <span className="text-xs">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
