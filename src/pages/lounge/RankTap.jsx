export default function LoungeRankTap() {
  return (
    <div className="p-5 pt-10 w-80">
      <div className="rounded-md w-full bg-neutral-100 p-5">
        {Array(10)
          .fill({})
          .map((e, i) => {
            return (
              <div key={e} className="flex items-center gap-4 h-20">
                <div className="w-4">{i + 1}</div>
                <div className="w-12 aspect-square rounded-full bg-neutral-300 flex justify-center items-center">
                  img
                </div>
                <div className="text-sm">내용</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
