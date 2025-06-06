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
    label: "Use a Personal AI Worker to boost your content ",
  },
  {
    id: 4,
    label: "Learn from expert-led courses designed for aspiring influencers",
  },
];

const ListContent = () => {
  return (
    <div className="pt-[15px] space-y-[12px] pl-[4px] ">
      {data.map(({ id, label }) => {
        return (
          <div key={id} className={`flex gap-[10px]  items-center `}>
            <Image src={star} alt="" />
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
