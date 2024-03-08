import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import "./App.css"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes , Route } from "react-router-dom"


const App = () => {
  return (

  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenido a tu tienda de autos de lujo" />} />
        <Route path='/categoria/:categoryId' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} /> 
        <Route path='/categoria/:categoryId/Item/:id' element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
