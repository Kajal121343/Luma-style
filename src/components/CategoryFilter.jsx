function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-3 p-4 flex-wrap">
      <button
        className={`px-3 py-1 rounded ${
          selected === "all" ? "bg-orange-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => onSelect("all")}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded ${
            selected === cat ? "bg-orange-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat
            .split(" ")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ")}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
