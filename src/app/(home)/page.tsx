import CallToActionButton from "./_components/CallToActionButton";
import Footer from "./_components/Footer";

import HeroTitleContent from "./_components/HeroTitleContent";
import ListContent from "./_components/ListContent";
import SubTitleContent from "./_components/SubTitleContent";

export default function Home() {
  return (
    <div className="relative pt-[220px] md:pt-0 ">
      <div className="md:w-[520px] z-10 p-5 md:p-0 ">
        <HeroTitleContent />
        <SubTitleContent />
        <ListContent />
        <CallToActionButton className="pt-[8px] pl-[4px] md:block hidden" />
        <Footer />
        <CallToActionButton className="flex flex-col justify-center items-center  md:hidden  pt-[10px]" />
      </div>
    </div>
  );
}
