export default function Dropdown({ options, value, onChange }) {
  return (
    <div className="w-full flex p-2">
      <select
        className="w-full p-2 border rounded-md bg-gray-50"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
