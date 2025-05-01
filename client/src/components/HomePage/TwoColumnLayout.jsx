import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TwoColumnLayout = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllProducts");
      setData(response.data);
    } catch (error) {
      console.log(`error message:${error.message}`);
    } finally {
      console.log(data);
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
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 30%",
        end: "bottom bottom",
        pin: left.current, // Pin only the left/orange box
        pinSpacing: false,
      },
      // Avoid creating extra space
    });
  }, []);

  const createCards = (obj) => {
    return (
      <Card key={obj.id} src={obj.image} title={obj.title} price={obj.price} />
    );
  };

  return (
    <div className="px-20 mb-10 overflow-hidden">
      <div ref={wrapper} className="grid grid-cols-[2fr_7fr] gap-5 h-auto">
        <div ref={left}>
          <div className="flex flex-col gap-5 h-[350vh]">
            <div className="bg-[url('https://img.freepik.com/premium-psd/social-media-ads-mobile-phone-ads-super-sale-discount-offer-instagram-post-design_534178-189.jpg')] bg-cover bg-center h-[20em]"></div>
            <div className="bg-[url('https://img.freepik.com/premium-psd/smart-mobile-phone-sale-ads-design-template_987701-1628.jpg')] bg-cover bg-center h-[20em]"></div>
          </div>
        </div>
        <div ref={right} className="h-auto">
          <div className="flex shrink-[1_0_auto] mb-2">
            <div className="flex flex-col w-[35%]">
              <h1 className="text-lg font-semibold">POPULAR PRODUCTS</h1>
              <p className="text-sm text-gray-500">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div>h</div>
          </div>
          <div className="flex flex-wrap gap-5">
            {data.length > 0 && data.map(createCards)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
