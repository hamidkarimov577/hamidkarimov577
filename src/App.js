import { Book } from "./Book"
import "./App.css"

export default function App() {
  return (
    <div>
      <Book name="JS for beginners" year="2022" price="50"></Book>
      Extra inform
      <Book name="React for beginners" year="2021" price="60" />
      <Book name="Vue for beginners" year="2024" price="70" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}
