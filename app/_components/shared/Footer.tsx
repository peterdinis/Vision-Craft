"use client"

import { Label } from "@/components/ui/label";
import { FC } from "react";

const Footer: FC = () => {
  const servicesScroll = () => {
    const servicesSection = document.querySelector("#services") as unknown as HTMLElement;
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const pricingScroll = () => {
    const pricingSection = document.querySelector(
      "#pricing"
    ) as unknown as HTMLElement;
    pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <Label className="text-3xl font-bold">Vision-Craft</Label>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <p onClick={servicesScroll} className="hover:text-gray-500 dark:text-white text-base cursor-pointer leading-4 text-gray-800">
            Services
          </p>
          <p onClick={pricingScroll} className="hover:text-gray-500 dark:text-white text-base cursor-pointer leading-4 text-gray-800">
            Pricing
          </p>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4 text-gray-800 dark:text-white">
            2024 <span className="font-semibold">Vision Craft</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4 text-gray-800 dark:text-white">
              Inc. All righys reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
