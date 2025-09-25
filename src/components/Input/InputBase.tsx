const InputBase = () => {
  return (
    <div className="flex items-center h-fit min-w-2xs bg-white shadow-sm rounded-full px-6 py-3 w-full max-w-xl">
      <input
        type="text"
        placeholder="Search Class"
        className="flex-grow bg-transparent placeholder-blue-light outline-none"
      />
    </div>
  )
}

export default InputBase;