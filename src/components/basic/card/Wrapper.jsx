export default function BasicWrapper({ title, desc }) {
  return (
    <div className="w-full flex flex-col px-20 justify-center h-[20vh] bg-[#594bba]">
      <div className="text-4xl mt-12 mb-2 text-[white]">{title}</div>
      <div className="text-ms text-[white] line-clamp-2">{desc}</div>
    </div>
  );
}
