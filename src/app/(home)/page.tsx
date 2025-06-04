import HeroTitleContent from "./_components/HeroTitleContent";
import ListContent from "./_components/ListContent";
import SubTitleContent from "./_components/SubTitleContent";

export default function Home() {
	return (
		<>
			<div className="w-[520px]">
				<HeroTitleContent />
				<SubTitleContent />
				<ListContent />
			</div>
		</>
	);
}
