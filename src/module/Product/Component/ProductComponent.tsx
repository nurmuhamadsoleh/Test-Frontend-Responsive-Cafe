import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

import React from "react";

interface IProps {
  dataImage: any;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
interface ProductItem {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}
export default function ProductComponent(props: IProps) {
  const { dataImage, activeIndex, setActiveIndex, handleNext, handlePrev } =
    props;
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
    <div className="flex flex-col lg:w-full md:w-1/2 sm:w-1/3 mx-auto relative">
      <div className="flex lg:w-full w-screen mx-auto h-14 fixed">
        {/* Tab Header */}
        <button
          className=" text-black bg-yellow-500 font-medium rounded-s-full shadow-2xl"
          onClick={handlePrev}
        >
          <LeftCircleOutlined className="font-bold text-xl" />
        </button>
        <button
          className={`flex-grow border-r border-gray-300 focus:outline-none ${
            activeIndex === 1
              ? "bg-white border-b-4 border-l-0 border-t-0 border-r-0 border-black text-lg"
              : ""
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <span
            className={`${
              activeIndex === 1
                ? "font-bold lg:text-lg text-sm lg:leading-none leading-normal pb-0"
                : "font-normal"
            }`}
          >
            Seasonal Product
          </span>
        </button>
        <button
          className={`flex-grow border-r border-gray-300 focus:outline-none ${
            activeIndex === 2
              ? "bg-white border-b-4 border-l-0 border-t-0 border-r-0 border-black text-lg"
              : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          <span
            className={`${
              activeIndex === 2
                ? "font-bold lg:text-lg text-sm lg:leading-none leading-normal pb-0"
                : "font-normal"
            }`}
          >
            Best Seller
          </span>
        </button>
        <button
          className={`flex-grow py-2 border-r border-gray-300 focus:outline-none ${
            activeIndex === 3
              ? "bg-white border-b-4 border-l-0 border-t-0 border-r-0 border-black text-lg"
              : ""
          }`}
          onClick={() => setActiveIndex(3)}
        >
          <span
            className={`${
              activeIndex === 3
                ? "font-bold lg:text-lg text-sm lg:leading-none leading-normal pb-0"
                : "font-normal"
            }`}
          >
            Coffee
          </span>
        </button>
        <button
          className={`flex-grow border-r border-gray-300 focus:outline-none ${
            activeIndex === 4
              ? "bg-white border-b-4 border-l-0 border-t-0 border-r-0 border-black text-lg"
              : ""
          }`}
          onClick={() => setActiveIndex(4)}
        >
          <span
            className={`${
              activeIndex === 4
                ? "font-bold lg:text-lg text-sm lg:leading-none leading-normal pb-0"
                : "font-normal"
            }`}
          >
            Tea
          </span>
        </button>
        {/* Add more buttons for additional tabs */}
        <button
          className=" text-black bg-yellow-500 font-medium rounded-e-full shadow-2xl"
          onClick={handleNext}
        >
          <RightCircleOutlined className="font-bold text-xl" />
        </button>
      </div>

      {/* Tab Content 1*/}
      <div className="">
        {activeIndex === 1 && (
          <div className="h-fit mt-16">
            <div className="h-1/3 ">
              <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                Seasonal Product
              </h1>
              {Object.keys(productData)
                .filter((tabKey) => tabKey.toLowerCase() === "seasonal")
                .map((filteredTabKey) => {
                  const products = productData[filteredTabKey];

                  return products.content?.map(
                    (product: any, productIndex: any) => (
                      <>
                        <div
                          key={productIndex}
                          className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                        >
                          <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                            <img
                              src={product.imageUrl}
                              alt={product.title}
                              className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                            />
                          </div>
                          <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                            <span className="lg:text-lg text-sm font-bold">
                              {product.title}
                            </span>
                            <span className="text-left lg:text-base text-sm">
                              {product.description}
                            </span>
                          </div>
                          <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                            <span className="text-xs font-medium">
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </>
                    )
                  );
                })}
            </div>
            <div className="h-1/3">
              <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                Best Seller
              </h1>
              {Object.keys(productData)
                .filter((tabKey) => tabKey.toLowerCase() === "best-seller")
                .map((filteredTabKey) => {
                  const products = productData[filteredTabKey];

                  return products.content?.map(
                    (product: any, productIndex: any) => (
                      <>
                        <div
                          key={productIndex}
                          className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                        >
                          <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                            <img
                              src={product.imageUrl}
                              alt={product.title}
                              className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                            />
                          </div>
                          <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                            <span className="lg:text-lg text-sm font-bold">
                              {product.title}
                            </span>
                            <span className="text-left lg:text-base text-sm">
                              {product.description}
                            </span>
                          </div>
                          <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                            <span className="text-xs font-medium">
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </>
                    )
                  );
                })}
            </div>
          </div>
        )}
        {activeIndex === 2 && (
          <div>
            <div className="h-fit mt-16">
              <div className="h-1/3 ">
                <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                  Best Seller
                </h1>
                {Object.keys(productData)
                  .filter((tabKey) => tabKey.toLowerCase() === "best-seller")
                  .map((filteredTabKey) => {
                    const products = productData[filteredTabKey];

                    return products.content?.map(
                      (product: any, productIndex: any) => (
                        <>
                          <div
                            key={productIndex}
                            className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                          >
                            <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                              <span className="lg:text-lg text-sm font-bold">
                                {product.title}
                              </span>
                              <span className="text-left lg:text-base text-sm">
                                {product.description}
                              </span>
                            </div>
                            <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                              <span className="text-xs font-medium">
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
              <div className="h-1/3">
                <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                  Coffe
                </h1>
                {Object.keys(productData)
                  .filter((tabKey) => tabKey.toLowerCase() === "coffee")
                  .map((filteredTabKey) => {
                    const products = productData[filteredTabKey];

                    return products.content?.map(
                      (product: any, productIndex: any) => (
                        <>
                          <div
                            key={productIndex}
                            className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                          >
                            <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                              <span className="lg:text-lg text-sm font-bold">
                                {product.title}
                              </span>
                              <span className="text-left lg:text-base text-sm">
                                {product.description}
                              </span>
                            </div>
                            <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                              <span className="text-xs font-medium">
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        {activeIndex === 3 && (
          <div>
            <div className="h-fit mt-16">
              <div className="h-1/3 ">
                <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                  Coffee
                </h1>
                {Object.keys(productData)
                  .filter((tabKey) => tabKey.toLowerCase() === "coffee")
                  .map((filteredTabKey) => {
                    const products = productData[filteredTabKey];

                    return products.content?.map(
                      (product: any, productIndex: any) => (
                        <>
                          <div
                            key={productIndex}
                            className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                          >
                            <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                              <span className="lg:text-lg text-sm font-bold">
                                {product.title}
                              </span>
                              <span className="text-left lg:text-base text-sm">
                                {product.description}
                              </span>
                            </div>
                            <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                              <span className="text-xs font-medium">
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
              <div className="h-1/3">
                <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                  Tea
                </h1>
                {Object.keys(productData)
                  .filter((tabKey) => tabKey.toLowerCase() === "most-popular")
                  .map((filteredTabKey) => {
                    const products = productData[filteredTabKey];

                    return products.content?.map(
                      (product: any, productIndex: any) => (
                        <>
                          <div
                            key={productIndex}
                            className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                          >
                            <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                              <span className="lg:text-lg text-sm font-bold">
                                {product.title}
                              </span>
                              <span className="text-left lg:text-base text-sm">
                                {product.description}
                              </span>
                            </div>
                            <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                              <span className="text-xs font-medium">
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        {activeIndex === 4 && (
          <div>
            <div className="h-fit mt-16">
              <div className="h-1/3">
                <h1 className="font-bold text-black capitalize text-lg lg:ml-32 text-center lg:text-left">
                  Tea
                </h1>
                {Object.keys(productData)
                  .filter((tabKey) => tabKey.toLowerCase() === "most-popular")
                  .map((filteredTabKey) => {
                    const products = productData[filteredTabKey];

                    return products.content?.map(
                      (product: any, productIndex: any) => (
                        <>
                          <div
                            key={productIndex}
                            className="flex mx-auto w-[80vw] mb-4 shadow-lg bg-white border-gray-200 rounded-lg text-black items-center border-b"
                          >
                            <div className="lg:w-3/12 flex justify-start items-center lg:my-3 lg:ml-2 ml-2">
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-16 w-12 md:w-10 md:h-32 xl:w-36 xl:h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className=" lg:w-full w-1/2 flex flex-col lg:justify-start lg:items-start lg:ml-0 ml-2">
                              <span className="lg:text-lg text-sm font-bold">
                                {product.title}
                              </span>
                              <span className="text-left lg:text-base text-sm">
                                {product.description}
                              </span>
                            </div>
                            <div className="w-3/12 flex items-start lg:pl-0 pl-1 lg:-mt-24 -mt-14">
                              <span className="text-xs font-medium">
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        {/* Add more content for additional tabs */}
      </div>
    </div>
  );
}
