
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
  
    <Navbar />

    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/productos/:categorias" element={<ItemListContainer/>} />
      <Route path="*" element={ <h2>Not found</h2> } />
    </Routes>
    

    </BrowserRouter>
  )
}

export default App
