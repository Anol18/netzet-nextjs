import React from "react";
import { Text } from "./Text";

const PromoBanner = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] h-[4.75em] md:h-[2.875em] md:flex items-center justify-center md:pt-[5px] md:pr-[3px]  md:pl-0 pl-[15px] pt-[5px] hidden">
        <div className="text-center max-sm:leading-[100%] ">
          <Text
            variant={"promoText"}
            as="span"
            weight={"promoText"}
            className="text-secondary "
          >
            🚀FRESH BEGINNINGS SALE:{" "}
          </Text>
          <Text variant={"promoText"} as="span" weight={"promoText"}>
            Extra 25% OFF, Limited Spots - start your journey today!
          </Text>
        </div>
      </div>
      {/* mobile */}

      <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] h-[4.75em]  md:hidden flex justify-center p-5">
        <div className="flex  items-center">
          <div className="text-center leading-[100%] ">
            <Text
              variant={"promoText"}
              as="span"
              weight={"promoText"}
              className="text-secondary "
            >
              🚀FRESH BEGINNINGS SALE:{" "}
            </Text>
            <Text
              variant={"promoText"}
              as="span"
              weight={"promoText"}
              className="font-semibold text-[14.2px]"
            >
              Extra 25% OFF, Limited Spots - start your journey today!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBanner;
