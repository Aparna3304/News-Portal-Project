export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-4">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles..."
        className="w-full md:w-1/2 px-4 py-2 rounded border bg-black/30 text-white placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}
