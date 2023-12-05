
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    
    <Navbar />
    
    <ItemListContainer producto="Buzo Luisiana con friza" descripcion="Friza interna talle unico" precio="$6500,00" />
    <ItemListContainer producto="Buzo celeste con estampa de Stich" descripcion="Friza interna talle unico" precio="$6500,00" />
    <ItemListContainer producto="Sweter manga globo tejido" descripcion="Talle único, disponible verde oliva y chicle totalmente tejido" precio="$3600,00" />
    </>
  )
}

export default App
