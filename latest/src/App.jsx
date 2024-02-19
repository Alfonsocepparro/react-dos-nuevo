import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import "./main.css"
import ItemDetailContainer from "./Componentes/ItemListContainer/ItemDetailContainer"


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer itemId={2} />
    </div>
  )
}
export default App
