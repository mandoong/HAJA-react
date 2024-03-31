export default function BasicUserProfile({ img, name, tag }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full bg-black w-10 aspect-square overflow-hidden">
        {img ? (
          <img src={img} alt="profile_img" />
        ) : (
          <div className="w-full h-full bg-gray-700" />
        )}
      </div>
      <div className="border-b border-gray-400 font-over_b">{name}</div>
      {tag && (
        <div className="text-xs h-6">
          <div className="h-2">
            <div>{tag}</div>
          </div>
        </div>
      )}
    </div>
  );
}
