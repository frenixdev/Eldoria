import { RiMenuLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import "./header.css"

export default function(){
  return(
    <header>
      <nav>
        <RiMenuLine className="icon"/>
        <h1>Eldoria</h1>
        <BsHandbag className="icon"/>
      </nav>
    </header>
  )
}
