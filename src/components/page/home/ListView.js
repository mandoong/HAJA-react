export default function HomeListView({ title, data = [] }) {
  return (
    <div className="w-full">
      <div className="mb-6 font-over_b">{title}</div>
      <div>
        {data.map((e, i) => {
          return (
            <div
              className="flex gap-4 items-center border-t border-[#e9e9e9] px-2 py-5"
              key={e.name}
            >
              <div className="rounded-full bg-black w-10 aspect-square overflow-hidden">
                {e?.img ? (
                  <img src={e?.img} alt="profile_img" />
                ) : (
                  <div className="w-full h-full bg-gray-700" />
                )}
              </div>
              <div className="flex justify-between w-full items-center">
                <div className="text-lg">
                  <div className="text-sm">{e?.desc}</div>
                  <div className="font-over_b">{e?.name}</div>
                </div>
                {e?.tag && (
                  <div className="text-xs h-12">
                    <div className="uppercase px-1 pt-1 pb-[2px] bg-[#222222] text-white rounded-[4px]">
                      <div>{e?.tag}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
