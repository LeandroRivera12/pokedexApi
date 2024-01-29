import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)


    useEffect(() => {
        getTypes()
    }, [])

    
    const typeRef = useRef()

    const handleChange = () => {
       setTypeSelected(typeRef.current.value)
    }
    
  return (
    <div className='container__select'>
     <p className='select__text'>Filtro Por tipo:</p>
    
        <select className='select__typePoke' ref={typeRef} onChange={handleChange}> 
            <option value='allPokemons'>All pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    
    </div>
  )
}

export default SelectType