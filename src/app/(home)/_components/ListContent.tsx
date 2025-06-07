import { Text } from "@/_components/ui/Text";
import React from "react";
import star from "@/assets/img/star.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    label: "Start growing your influence right away—no waiting required!",
  },
  {
    id: 2,
    label:
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  },
  {
    id: 3,
    label: "Use a Personal AI Worker to boost your content",
  },
  {
    id: 4,
    label: "Learn from expert-led courses designed for aspiring influencers",
  },
];

const ListContent = () => {
  return (
    <div className="md:pt-[15px] pt-[21px] md:space-y-[12px] space-y-[10px] md:pl-[4px] pl-[1px]">
      {data.map(({ id, label }) => {
        return (
          <div
            key={id}
            className={`flex md:gap-[10px] gap-[8px] items-center ${
              id == 4 && "pt-[2px]"
            }`}
          >
            <div className="w-[22px] h-[22px] relative flex-shrink-0">
              <Image
                src={star}
                alt="star icon"
                fill
                sizes="22px"
                className="object-contain"
                priority={id === 1}
              />
            </div>
            <Text variant={"body"} weight={"body"}>
              {label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default ListContent;
