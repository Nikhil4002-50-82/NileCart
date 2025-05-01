import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductDetails from "../IndividualProduct/ProductDetails";

gsap.registerPlugin(ScrollTrigger);

const TwoColumnLayout = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
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
  const createProductDetails = (obj) => {
    return (
      <ProductDetails
        key={obj.id}
        src={obj.image}
        title={obj.title}
        price={obj.price}
        count={obj.count}
        rate={obj.rate}
        description={obj.description}
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
          <div className="flex flex-col gap-5 h-[350vh]">
            <div className="bg-[url('https://img.freepik.com/premium-psd/social-media-ads-mobile-phone-ads-super-sale-discount-offer-instagram-post-design_534178-189.jpg')] bg-cover bg-center h-[20em]"></div>
            <div className="bg-[url('https://img.freepik.com/premium-psd/smart-mobile-phone-sale-ads-design-template_987701-1628.jpg')] bg-cover bg-center h-[20em]"></div>
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
          <div className="grid grid-cols-2 w-full md:flex md:flex-wrap gap-5">
            {data.length > 0 && data.map(createCards)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
