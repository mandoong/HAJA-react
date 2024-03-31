import HomeListView from "../../components/page/home/ListView";

export default function HomeNewsSection() {
  const data1 = [
    { name: "Work view modes", desc: "Element of the Day", tag: "fresh" },
    { name: "The fabulous Cartier Journey", desc: "News - March 20, 2024" },
    { name: "AIM – AI Modernism of Kharkiv", desc: "News - March 13, 2024" },
    { name: "Energy Park - “Behind the scenes", desc: "News - March 6, 2024" },
  ];
  const data2 = [
    { name: "Avex", desc: "Studio", tag: "INTERNATIONAL" },
    { name: "Cuberto", desc: "Agency", tag: "INTERNATIONAL" },
    { name: "FAVE®", desc: "Agency - South Korea" },
    { name: "STUDIO-JT", desc: "Agency - South Korea" },
  ];

  return (
    <div className="w-full px-10 pt-20">
      <div className="text-xl mb-4">News and Updates</div>
      <div className="flex justify-between items-end mb-12">
        <div className="text-[30px] font-over_b">
          Follow what&apos;s brand <br /> new in digital design.
        </div>
        <div>
          Don&apos;t miss the <strong>latest</strong> happenings on{" "}
          <strong>awwwards.</strong>
        </div>
      </div>
      <div className="flex w-full justify-between gap-10">
        <HomeListView title="w.news" data={data1} />
        <HomeListView title="w.creators - close to you" data={data2} />
      </div>

      <div className="mt-10 text-md font-over_b pb-12 mb-4 border-b border-[#e9e9e9]">
        Featured
      </div>
    </div>
  );
}
