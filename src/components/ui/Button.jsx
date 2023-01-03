export default function Button({ children }) {
  return (
    <button className="px-2 border rounded-full border-primary_light text-primary_light leading-[1] py-[5px]">
      {children}
    </button>
  );
}
