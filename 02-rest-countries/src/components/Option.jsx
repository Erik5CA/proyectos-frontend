export function Option({ name, selected, id, setFilter }) {
  return (
    <div
      onClick={() => {
        setFilter(id);
        selected(name);
      }}
      className="option"
    >
      <p>{name}</p>
    </div>
  );
}
