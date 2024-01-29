import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import Pokecard from '../components/PokedexPage/Pokecard'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/PokedexPage.css'
import GeneralHeader from '../components/HomePage/GeneralHeader'
import './styles/ColorPalette.css'
import Pagination from '@mui/material/Pagination';


const PokedexPage = () => {
  
  const [ inputValue, setInputValue ] = useState('')
  const [ typeSelected, setTypeSelected ] = useState('allPokemons')
  const [ currentPage, setCurrentPage] = useState(1)


  const trainerName = useSelector(states => states.trainer)


  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20000&offset=0'
  const [ pokemon, getPokemon, getTypePokemon ] = useFetch(url)


 useEffect(() => {
  if (typeSelected === 'allPokemons') {
    getPokemon()
  } else{
    getTypePokemon(typeSelected)
  }
 }, [typeSelected])


 const inputName = useRef()

 const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase()) 
 }

 const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)

 let pokeResults = pokemon?.results
 let starIndex = (currentPage - 1) * 8
 let endIndex = starIndex + 8
 pokeResults = pokemon?.results.filter(cbFilter).slice(starIndex, endIndex)
 let totalPoke = pokemon?.results.length
 
 console.log(pokeResults)

 const handleChange = (event, value) => {
  event.preventDefault()
  setCurrentPage(value);
};

  return (
    <div className='container__pokedex'>
      <GeneralHeader/>
      <h2 className='trainer__name'>Welcome <span>{trainerName}</span> here you can find your favorite pokemon</h2>
      <div className='content__bar'>
      <form className='form__search' onSubmit={handleSearch}>
        <input className='input__name' ref={inputName} type="text" />
        <button className='btn__search'>Search</button>
      </form>
      <SelectType 
        setTypeSelected={setTypeSelected}
      />

      </div>
      <div className='pokecard__container'>
      {
        pokeResults?.filter(cbFilter).map(pokeInfo => (
          <Pokecard 
          key={pokeInfo.url}
          url={pokeInfo.url}
          />
        ))
      }
      </div>
      <Pagination count={Math.ceil(totalPoke / 8)} page={currentPage} onChange={handleChange}/>
      
    </div>
  )
}

export default PokedexPage