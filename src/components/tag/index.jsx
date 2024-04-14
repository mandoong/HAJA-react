export default function BasicTag({ content, type }) {
  const colors = {
    primary: "#ea6560",
    black: "black",
  };
  return (
    <div
      className="rounded-full"
      style={{
        backgroundColor: `${colors[type]}`,
      }}
    >
      {content}
    </div>
  );
}
