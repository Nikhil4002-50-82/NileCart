import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TwoColumnLayout = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log(`error message:${error.message}`);
    }
  };

  const wrapper = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => {
    getAllData();
  }, []);

  useGSAP(() => {
    gsap.to(wrapper.current, {
      duration: 0.001,
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 25%",
        end: "bottom bottom",
        pin: left.current,
        pinSpacing: false,
      },
    });
  }, []);

  const createCards = (obj) => {
    return (
      <Card
        key={obj.id}
        src={obj.image}
        title={obj.title}
        price={obj.price}
        onClick={() => {
          navigate(`/productDetails/${obj.id}`);
        }}
      />
    );
  };

  return (
    <div className="px-6 md:px-20 mb-10 overflow-hidden">
      <div
        ref={wrapper}
        className="md:grid md:grid-cols-[2fr_7fr] md:gap-5 h-auto"
      >
        <div ref={left} className="hidden md:block">
          <div className="flex flex-col gap-5 h-[350vh] xl:h-[250vh]">
            <div className="bg-[url('https://m.media-amazon.com/images/G/31/img23/Wireless/Priya/A55/coop_freebie_SamsungA55.gif')] bg-cover bg-center h-[25em]"></div>
            <div className="bg-[url('https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/MayART25/Event/header/PC_Event_MayArt-header-with-navigator_03.jpg')] bg-cover bg-center h-[20em]"></div>
          </div>
        </div>
        <div ref={right} className="h-auto w-full">
          <div className="hidden md:flex md:shrink-[1_0_auto] md:mb-2">
            <div className="flex flex-col w-[35%]">
              <h1 className="text-lg font-semibold">POPULAR PRODUCTS</h1>
              <p className="text-sm text-gray-500">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div>h</div>
          </div>
          <div className="md:hidden">
              <h1 className="font-semibold text-base sm:text-lg mb-2">POPULAR PRODUCTS</h1>
              <p className="text-sm text-gray-500 mb-4">
                Do not miss the current offers until the end of March.
              </p>
            </div>
          <div className="flex gap-8 lg:flex-wrap w-full overflow-x-auto scrollbar-hide lg:gap-5">
            {data.length > 0 && data.map(createCards)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
