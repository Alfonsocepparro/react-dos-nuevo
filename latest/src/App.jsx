import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import "./App.css"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Carrito from "./Componentes/Carrito/Carrito"
import Checkout from "./Componentes/Checkout/Checkout"
import { CartProvider } from "./Componentes/Context/CartContext"

const App = () => {
  return (
  <CartProvider>
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenido a tu tienda de autos de lujo" />} />
        <Route path='/categoria/:categoryId' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} /> 
        <Route path='/categoria/:categoryId/Item/:id' element={ <ItemDetailContainer />} />
        <Route path='/cart/' element={ <Carrito />} />
        <Route path='/cart/checkout/' element={ <Checkout />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
  )
}
export default App
