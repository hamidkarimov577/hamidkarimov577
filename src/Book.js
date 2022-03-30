export default function Book(props) {
  return (
    <div>
      <h2>{props.name ? <span>{props.name}</span> : "default books"}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <b>{props.children}</b>
    </div>
  )
}
