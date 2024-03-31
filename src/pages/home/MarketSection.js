import ImgCardList from "../../components/page/home/ImgCardList";

export default function HomeMarketSection() {
  return (
    <div className="w-full p-10 mb-20">
      <div className="text-xl mb-4">Market</div>
      <div className="flex justify-between items-end mb-12">
        <div className="text-[30px] font-over_b">
          A curated marketplace <br /> for digital & physical products
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <ImgCardList
          img=""
          tag="Digital Product"
          title="Icarus - Premium Photography Webflow Template"
          seller="Supernowa"
          price="49"
        />
        <ImgCardList
          img=""
          tag="Digital Product"
          title="Flowboard - Framer Template"
          seller="Dmytri Ivanov"
          price="69"
        />
      </div>
    </div>
  );
}
