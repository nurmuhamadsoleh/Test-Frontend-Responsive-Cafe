import React, { useEffect, useRef, useState } from "react";

import ProductComponent from "../Component/ProductComponent";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

export default function ProductContainer() {
  const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  console.log("supabesurl", supabaseUrl);
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [activeTab, setActiveTab] = useState<string>("seasonal");
  const productListRef = useRef(null);
  const [dataImage, setDataImage] = useState<any>();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("jajanian")
          .list("testProduct", {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
          });
        setDataImage(data);
        if (error) {
          throw error;
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchImage();
  }, []);
  const handleMenuClick = (key: any) => {
    // console.log("productListRef.current", productListRef.current);
    setActiveTab(key);
  };
  console.log("activeTab", activeTab);
  // useEffect(() => {
  //   if (activeTab && productListRef.current) {
  //     .querySelector(
  //       `#tab-${activeTab}`
  //     );
  //     mengambil id menggunakan useRef
  //     const targetElement = productListRef.current.id(`#tab-${activeTab}`);
  //     console.log("target", targetElement);
  //     if (targetElement) {
  //       const yOffset = -75;
  //       const y =
  //         targetElement.getBoundingClientRect().top +
  //         window.pageYOffset +
  //         yOffset;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   }
  // }, [activeTab]);
  return (
    <ProductComponent
      dataImage={dataImage}
      activeTab={activeTab}
      handleMenuClick={handleMenuClick}
      productListRef={productListRef}
    />
  );
}
