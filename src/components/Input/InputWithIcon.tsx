import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="flex items-center h-fit min-w-2xs bg-white shadow-sm rounded-full px-6 py-3 w-full max-w-xl">
      <input
        type="text"
        placeholder="Search Class"
        className="flex-grow bg-transparent placeholder-blue-light outline-none"
      />
      <Search size={16} />
    </div>
  );
}

export default Input