import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import "./main.css"
import ItemDetailContainer from "./Componentes/ItemListContainer/ItemDetailContainer"
import { BrowserRouter, Routes , Route } from "react-router-dom"


const App = () => {
  return (

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} /> 
        <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
  )
}
export default App
