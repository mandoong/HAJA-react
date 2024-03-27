export default function BasicSvg({ src, width, height, color }) {
  return (
    <div
      style={{
        maskImage: src,
        width,
        height,
        color,
      }}
    />
  );
}
