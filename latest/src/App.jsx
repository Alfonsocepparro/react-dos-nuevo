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
        <Route path='/' element={ <ItemListContainer greeting="Bienvenido a la tienda de automoviles de alta gama" />} />
        <Route path='/categoria/:categoryId' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} /> 
        <Route path='/categoria/:categoryId/Item/:id' element={ <ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
  )
}
export default App
