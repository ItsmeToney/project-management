export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 border-stone-300 rounded bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm text-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props}></textarea>
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
