import React, { useEffect, useRef, useState } from "react";

import ProductComponent from "../Component/ProductComponent";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

export default function ProductContainer() {
  const supabaseUrl: any = "https://nhlaxvquhtucrcblxlej.supabase.co";
  const supabaseKey: any =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obGF4dnF1aHR1Y3JjYmx4bGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MDA5ODEsImV4cCI6MjAxOTQ3Njk4MX0.64la-3VsYfWV8Pn8D9PPyCINpjiCUIBNTui_4ssE0HA";
  console.log("supabesurl", supabaseUrl);
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [activeTab, setActiveTab] = useState<string>("seasonal");
  const productListRef = useRef(null);
  const [dataImage, setDataImage] = useState<any>();
  useEffect(() => {
    if (activeTab && productListRef.current) {
      const targetElement = productListRef.current.querySelector(
        `#tab-${activeTab}`
      );
      if (targetElement) {
        const yOffset = -75;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [activeTab]);
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
    setActiveTab(key);
  };
  return (
    <ProductComponent
      dataImage={dataImage}
      activeTab={activeTab}
      handleMenuClick={handleMenuClick}
      productListRef={productListRef}
    />
  );
}
