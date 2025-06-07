import Image from "next/image";
import { Text } from "../ui/Text";
import { MenuIcon } from "@/icons";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <div className="md:pt-[35.1px] pt-0 mt-4 md:mt-0 pl-[142px] md:pl-0">
          <div className="md:w-[173.12px] md:h-[74px] w-[105.38px] h-[45px] relative pl-5">
            <Image src={"/logo.png"} alt="logo" fill />
          </div>
        </div>
        <div className="flex   pb-[16px] max-md:hidden gap-[46px]">
          <Text
            variant={"navText"}
            color={"secondary"}
            weight={"navText"}
            className="whitespace-nowrap"
          >
            About us
          </Text>
          <Text
            variant={"navText"}
            color={"secondary"}
            weight={"navText"}
            className="pr-[4px]"
          >
            Contact
          </Text>
        </div>
        <div className="md:hidden mt-[15px] pr-5">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
