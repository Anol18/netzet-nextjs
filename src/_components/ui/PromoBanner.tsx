import React from "react";
import { Text } from "./Text";

const PromoBanner = () => {
	return (
		<div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] h-[4.75em] md:h-[2.875em] flex items-center justify-center pt-[5px] pr-[3px]">
			<div className="text-center ">
				<Text
					variant={"promoText"}
					as="span"
					weight={"promoText"}
					className="text-secondary"
				>
					🚀FRESH BEGINNINGS SALE:{" "}
				</Text>

				<Text variant={"promoText"} as="span" weight={"promoText"}>
					Extra 25% OFF, Limited Spots - start your journey today!
				</Text>
			</div>
		</div>
	);
};

export default PromoBanner;
