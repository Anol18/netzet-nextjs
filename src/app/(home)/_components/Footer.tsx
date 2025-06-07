import React from "react";

const Footer = () => {
  return (
    <div className="md:pl-[4px] pt-[22px]  px-[12px] md:pt-[28px]   space-y-[13px] text-text-secondary text-center md:text-left ">
      <p className="text-[12px]  font-medium leading-[1.19]">
        {`By clicking "Get Started", you agree with Terms and Conditions, Privacy
        Policy, Subscription Terms`}
      </p>
      <p
        className={`text-[10px] font-medium leading-[100%] font-nunito md:font-figtree pt-[7px] md:pt-0 `}
      >
        Fametonic 2025 ©All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
