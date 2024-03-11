import React, { useEffect, useRef, useState } from "react";

import ProductComponent from "../Component/ProductComponent";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

export default function ProductContainer() {
  const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [dataImage, setDataImage] = useState<any>();
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const handlePrev = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    } else if (activeIndex === 1) {
      setActiveIndex(1);
    }
    // activeIndex - 1;
  };
  const handleNext = () => {
    if (activeIndex < 4) {
      setActiveIndex(activeIndex + 1);
    }
  };
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
  return (
    <ProductComponent
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      handleNext={handleNext}
      handlePrev={handlePrev}
      dataImage={dataImage}
    />
  );
}
