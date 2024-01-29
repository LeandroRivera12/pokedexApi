import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokedexPage from './pages/PokedexPage'
import PokemonPage from './pages/PokemonPage'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {
  

   
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<PokedexPage/>}/>
            <Route path='/pokedex/:id' element={<PokemonPage />}/>
          </Route>
        </Routes>
      </div>
  )

}

export default App
