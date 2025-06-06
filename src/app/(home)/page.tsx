import CallToActionButton from "./_components/CallToActionButton";
import Footer from "./_components/Footer";

import HeroTitleContent from "./_components/HeroTitleContent";
import ListContent from "./_components/ListContent";
import SubTitleContent from "./_components/SubTitleContent";

export default function Home() {
  return (
    <div>
      <div className="w-[520px] z-10 ">
        <HeroTitleContent />
        <SubTitleContent />
        <ListContent />
        <CallToActionButton />
        <Footer />
      </div>
    </div>
  );
}
