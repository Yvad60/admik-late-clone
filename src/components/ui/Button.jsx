export default function Button({ children, dashedBorder }) {
  return (
    <button
      className={`px-2 border rounded-full leading-[1] py-[5px] border-current ${
        dashedBorder && "border-dashed"
      }`}
    >
      {children}
    </button>
  );
}
